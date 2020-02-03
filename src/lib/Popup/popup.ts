import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    name: 'd-popup',
    props: {
        pos: {
            type: Object,
            default: {left: 0, top: 0}
        },
        anchor: {
            type: String,
            default: "bottom_left"
        },
    },
    components: {}
})
export default class DPopup extends Vue {
    pos!: { left?: number, right?: number, top?: number, bottom?: number };
    anchor!: string;
    anchors = {
        top: "top",
        top_right: "top_right",
        right: "right",
        bottom_right: "bottom_right",
        bottom: "bottom",
        bottom_left: "bottom_left",
        left: "left",
        top_left: "top_left"
    };

    compute() {
        let popup = this.$refs.popup as HTMLElement;
        let popupContainer = this.$refs.popupContainer as HTMLElement;
        if (!popup || !popupContainer) {
            return;
        }
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        if (this.pos.left == undefined && this.pos.right == undefined) {
            this.pos.left = 0;
        }
        if (this.pos.top == undefined && this.pos.bottom == undefined) {
            this.pos.top = 0;
        }
        console.log(JSON.parse(JSON.stringify(this.pos)));
        if (this.pos.left !== undefined) {
            popup.style.left = this.pos.left + 'px';
            let popupBounds = popup.getBoundingClientRect();
            if (popupBounds.left + popupContainer.clientWidth > windowWidth) {
                popup.style.left = windowWidth - popupContainer.clientWidth + 'px';
            }
        }
        if (this.pos.top !== undefined) {
            popup.style.top = this.pos.top + 'px';
            let popupBounds = popup.getBoundingClientRect();
        console.log(JSON.parse(JSON.stringify(popupBounds)));
            if (popupBounds.top + popupContainer.clientHeight > windowHeight) {
                popup.style.top = windowHeight - popupContainer.clientHeight + 'px';
            }
        }
        if (this.pos.right !== undefined) {
            popup.style.right = this.pos.right + 'px';
            let popupBounds = popup.getBoundingClientRect();
            if (popupBounds.left < 0) {
                popup.style.left = 0 + 'px';
                popup.style.right = 'unset';
            }
        }
        if (this.pos.bottom !== undefined) {
            popup.style.bottom = this.pos.bottom + 'px';
            let popupBounds = popup.getBoundingClientRect();
            if (popupBounds.top < 0) {
                popup.style.top = 0 + 'px';
                popup.style.bottom = 'unset';
            }
        }
    }

    get anchorClass() {
        let transitionPrefix = "transform-";
        console.log(this.anchor);
        switch (this.anchor) {
            case this.anchors.top:
                return transitionPrefix + "b";
            case this.anchors.top_left:
                return transitionPrefix + "bl";
            case this.anchors.top_right:
                return transitionPrefix + "br";
            case this.anchors.bottom_left:
                return transitionPrefix + "tl";
            case this.anchors.bottom:
                return transitionPrefix + "t";
            case this.anchors.left:
                return transitionPrefix + "l";
            case this.anchors.right:
                return transitionPrefix + "r";
            default:
            case this.anchors.bottom_right:
                return transitionPrefix + "tr";
        }
    }


    created() {
        Vue.nextTick(this.compute);
    }
}