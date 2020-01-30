import Component, {mixins} from 'vue-class-component';
import DHelpers from "../../lib/common/helpers/helper";
import {Watch} from "vue-property-decorator";
import DIcon from "../../lib/Icon/DIcon.vue";

@Component({
    name: 'd-input',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'text'
        },
        size: {
            type: String,
            default: 'regular'
        },
        maxLength: {
            type: Number
        },
        autofocus: {
            type: Boolean,
            default: false
        },
        autocomplete: {
            type: Boolean,
            default: false
        },
        name: {
            type: String
        },
        value: {
            type: [String, Number]
        },
        placeholder: {
            type: [String, Number]
        },
        description: {
            type: String
        },
        label: {
            type: String
        },
        invalidMessage: {
            type: String
        },
        icon: {
            type: String
        },
        iconClass: {
            type: String
        },
        iconPosition: {
            type: String,
            default: 'left'
        }
    },
    components: {DIcon},
    model: {
        prop: 'value',
        event: 'update'
    }
})
export default class DInput extends mixins(DHelpers) {
    label!: string;
    type!: string;
    internalValue!: number | string | undefined;
    value!: number | string | undefined;
    size!: string;
    disabled!: boolean;

    created() {
        this.internalValue = this.value;
    }

    @Watch('value')
    watchValue(newVal) {
        this.internalValue = newVal;
    }

    getComputedClass() {
        return [
            'd-input',
            'd-input--' + this.size,
            {
                'd-input--disabled' : this.disabled
            }
        ]
    }

    updateValue(value: string) {
        let tempVal: string | number | undefined = value.trim();
        if (this.type === 'number') {
            tempVal = parseFloat(value);
            tempVal = isNaN(tempVal) ? undefined : tempVal;
        }
        if (tempVal === this.internalValue) {
            return;
        }
        this.internalValue = tempVal;
        this.$emit('update', this.internalValue);
    }

    onInput(event: MouseEvent) {
        this.updateValue((event.target as HTMLInputElement).value);
    }

}