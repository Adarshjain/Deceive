import Vue from 'vue';
import Component from 'vue-class-component';
import DIcon from '../Icon/DIcon.vue';

@Component({
    name: 'DButton',
    props: {
        label: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        text: {
            type: String
        },
        size: {
            type: String,
            default: 'normal'
        },
        type: {
            type: String,
            default: 'secondary'
        },
        fullWidth: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
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
        },
        iconOnly: {
            type: Boolean,
            default: false
        },
        error: {
            type: Boolean,
            default: false
        }
    },
    components: {DIcon}
})
export default class DButton extends Vue {
    size!: string;
    icon!: string;
    type!: string;

    get computedSize() {
        return 'd-button--' + this.size;
    }

    get computedType() {
        return 'd-button--' + this.type;
    }

    get hasIcon() {
        return this.icon !== undefined;
    }
}