import {storiesOf} from "@storybook/vue";
import {radios} from "@storybook/addon-knobs";

storiesOf('Popup', module)
    .add('Default', () => ({
            template: `
                <div class="p-2 relative" style="width: 700px; margin-top: 300px;">
                    <d-button label="Simple button" type="primary" @click="boom"/>
                    <transition name="popup-in">
                        <d-popup :pos="pos" v-if="isVisible" :anchor="anchor">
                            <div class="shadow rounded-6 p-2">
                                <d-list
                                        v-for="opt in options"
                                        :key="opt"
                                        :label="opt"
                                />
                            </div>
                        </d-popup>
                    </transition>
                    <d-button label="Simple button" type="primary" @click="boom"/>
                </div>`,
            props: {
                anchor: {
                    type: String,
                    default: radios('anchor', {
                        "top": "top",
                        "top_right": "top_right",
                        "right": "right",
                        "bottom_right": "bottom_right",
                        "bottom": "bottom",
                        "bottom_left": "bottom_left",
                        "left": "left",
                        "top_left": "top_left"
                    }, 'bottom_left')
                }
            },
            data() {
                return {
                    isVisible: true
                }
            },
            methods: {
                boom() {
                    this.isVisible = !this.isVisible;
                }
            },
            computed: {
                options() {
                    return ["Vilgax", "Four Arms", "Brainstorm", "Grey Matter", "Dragizazor X 10"]
                },
                pos() {
                    return {top: -230}
                }
            }
        })
    );
