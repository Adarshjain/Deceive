import Vue from 'vue';
import Component from 'vue-class-component';
import DCheckbox from "../Checkbox/DCheckbox.vue";
import DIcon from "../Icon/DIcon.vue";

interface checkboxOptions {
    value: string,
    name: string
};

@Component({
    name: 'DList',
    props: {
        label: {
            type: String
        },
        desc: {
            type: String
        },
        icon: {
            type: String
        },
        iconColor: {
            type: String,
            default: 'default'
        },
        state: {
            type: String,
            default: 'none'
        }
    },
    components: {
        DIcon,
        DCheckbox
    }
})
export default class DList extends Vue {
    iconColor!: string;
    state!: string;

    get iconColorClass() {
        switch (this.iconColor) {
            case 'success':
                return 'text-green-400';
            case 'error':
                return 'text-red-400';
            case 'info':
                return 'text-blue-400';
            case 'warning':
                return 'text-orange-400';
            default:
                return 'text-gray-800';
        }
    }

    get listStateClass() {
        console.log(this.state);
        switch (this.state) {
            case 'active':
                return 'd-list--active';
            case 'disabled':
                return 'd-list--disabled';
            default:
                return '';
        }
    }

}