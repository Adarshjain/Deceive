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
            type: Boolean,
            default: false
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
    components: {DIcon}
})
export default class DRadioButton extends Vue {
    checked!: boolean;
    disabled!: boolean;
    internalChecked: boolean = false;
    size!: string;

    @Watch('checked')
    watchChecked(newVal) {
        this.internalChecked = newVal;
    }

    get sizeClass() {
        return "d-radio--" + this.size;
    }

    onChange(event) {
        if(this.disabled){
            return;
        }
        this.internalChecked = event.target.checked || this.checked;
    }

    get radioIcon() {
        if (this.internalChecked) {
            return "radio_button_checked";
        } else {
            return "radio_button_unchecked";
        }
    }
}