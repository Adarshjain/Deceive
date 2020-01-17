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
    intermediate!: boolean;
    size!: string;

    get sizeClass() {
        return "d-checkbox--" + this.size;
    }

    // get errorClass() {
    //     return "";
    // }

    get checkboxIcon() {
        if(this.intermediate){
            return "indeterminate_check_box";
        } else if (this.checked){
            return "check_box";

        }else{
            return "check_box_outline_blank";
        }
    }
}