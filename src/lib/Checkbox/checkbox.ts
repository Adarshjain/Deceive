import Vue from 'vue';
import Component from 'vue-class-component';
import DIcon from "../Icon/DIcon.vue";
import {Watch} from "vue-property-decorator";

type inputValue = String | Boolean | Number | any[] | Object;
type inputValues = inputValue[]

@Component({
    name: 'DCheckbox',
    props: {
        label: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        checked: {
            type: [Boolean, Number, String, Array, Object],
            default: false
        },
        value: {
            type: [Boolean, Number, String, Array, Object],
            default: false
        },
        name: {
            type: String
        },
        intermediate: {
            type: Boolean,
            default: false
        },
        size: {
            type: String
        },
        error: {
            type: String
        },
        fullWidth: {
            type: Boolean,
            default: false
        },
    },
    components: {DIcon},
    model: {
        prop: 'checked',
        event: 'update'
    }
})
export default class DCheckbox extends Vue {
    checked!: inputValue | inputValues;
    value!: inputValue;
    internalChecked!: inputValue | inputValues;
    intermediate!: boolean;
    size!: string;
    disabled!: boolean;

    created() {
        this.internalChecked = this.checked;
    }

    @Watch('value')
    watchValue(newVal) {
        this.internalChecked = newVal;
    }

    onChange({target: {checked}}) {
        if (this.disabled) {
            return;
        }
        if (Array.isArray(this.checked)) {
            let index = this.checked.findIndex(c => c === this.value);
            if (checked && index < 0) {
                (this.internalChecked as inputValues).push(this.value);
            } else if (!checked && index > -1) {
                (this.internalChecked as inputValues).splice(index, 1);
            }
            this.$emit('update', this.internalChecked);
        } else {
            this.$emit('update', checked);
        }
    }

    get sizeClass() {
        return "d-checkbox--" + this.size;
    }

    get isChecked() {
        return Array.isArray(this.checked) ? this.checked.includes(this.value) : this.checked === this.value;
    }

    get checkboxIcon() {
        if (this.intermediate) {
            return "indeterminate_check_box";
        } else if (this.isChecked) {
            return "check_box";

        } else {
            return "check_box_outline_blank";
        }
    }
}