import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    name: 'DButton',
    props: {
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
        }
    }
})
export default class DButton extends Vue {
    size!: string;
    type!: string;

    get computedSize() {
        return 'd-button--' + this.size;
    }

    get computedType() {
        return 'd-button--' + this.type;
    }
}