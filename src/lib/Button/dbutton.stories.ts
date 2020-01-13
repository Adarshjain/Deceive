import {storiesOf} from "@storybook/vue";
import {boolean, withKnobs, text, select} from "@storybook/addon-knobs";

storiesOf('Button', module)
    .add('Default', () => ({
        template: `<div class="p-2"><d-button 
                        class=""
                        :disabled="disabled"
                        :type="type"
                        :size="size"
                        :fullWidth="fullWidth"
                        :loading="loading"
                    >{{text}}</d-button></div>`,
        props: {
            disabled: {
                type: Boolean,
                default: boolean('Disabled', false)
            },
            text: {
                type: String,
                default: text('Text', 'Secondary Button')
            },
            size: {
                type: String,
                default: select('Size', ['small', 'normal', 'large'], 'normal')
            },
            type: {
                type: String,
                default: select('Type', ['primary', 'secondary', 'ghost'], 'secondary')
            },
            fullWidth: {
                type: Boolean,
                default: boolean('Full width', false)
            },
            loading: {
                type: Boolean,
                default: boolean('Loading', false)
            }
        }
    }))
;