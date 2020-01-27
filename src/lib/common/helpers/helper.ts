import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    name: 'd-helpers'
})
export default class DHelpers extends Vue {
    $present(variable): boolean {
        return variable !== undefined && variable !== '';
    }
}