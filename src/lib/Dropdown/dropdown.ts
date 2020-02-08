import Vue from 'vue';
import Component from 'vue-class-component';
import DPopup from "../Popup/DPopup.vue";
import DButton from "../Button/DButton.vue";

@Component({
    name: 'd-dropdown',
    props: {},
    components: {
        'd-popup': DPopup,
        'd-button': DButton
    }
})
export default class DDropdown extends Vue {

    isVisible = false;

}