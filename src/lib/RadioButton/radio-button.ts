import Vue from 'vue';
import Component from 'vue-class-component';
import DIcon from "../../lib/Icon/DIcon.vue";
import {Watch} from "vue-property-decorator";

@Component({
    name: 'DRadioButton',
    props: {
        label: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        checked: {
            type: [Boolean, Number, String, Object], // v-model
            default: false
        },
        value: {
            type: [Boolean, Number, String, Object],
        },
        name: {
            type: String
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
        }
    },
    components: {DIcon},
    model: {
        prop: 'checked',
        event: 'update'
    }
})
export default class DRadioButton extends Vue {
    disabled!: boolean;
    checked!: Boolean | Number | String | Object;
    value!: Boolean | Number | String | Object;
    size!: string;

    get sizeClass() {
        return "d-radio--" + this.size;
    }

    input(event) {
        if (this.disabled) {
            return;
        }
        this.$emit('update', event.target.value);
    }

    get radioIcon() {
        if (this.checked == this.value) {
            return "radio_button_checked";
        } else {
            return "radio_button_unchecked";
        }
    }
}