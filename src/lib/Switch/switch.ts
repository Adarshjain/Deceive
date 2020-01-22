import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    name: 'DSwitch',
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
    }
})
export default class DSwitch extends Vue {
    checked!: boolean;
    internalChecked: boolean = false;
    intermediate!: boolean;
    size!: string;

    onChange(event){
        this.internalChecked = event.target.checked || this.checked;
    }

    get sizeClass() {
        return "d-switch--" + this.size;
    }
}