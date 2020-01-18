import Vue from 'vue';
import Component from 'vue-class-component';
import DIcon from "../Icon/DIcon.vue";

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
    },
    components: {DIcon}
})
export default class DCheckbox extends Vue {
    checked!: boolean;
    internalChecked: boolean = false;
    intermediate!: boolean;
    size!: string;

    onChange(event){
        this.internalChecked = event.target.checked || this.checked;
    }

    get sizeClass() {
        return "d-checkbox--" + this.size;
    }

    get checkboxIcon() {
        if(this.intermediate){
            return "indeterminate_check_box";
        } else if (this.internalChecked){
            return "check_box";

        }else{
            return "check_box_outline_blank";
        }
    }
}