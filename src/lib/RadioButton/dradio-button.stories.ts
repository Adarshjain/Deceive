import {storiesOf} from "@storybook/vue";
import {boolean, select, text} from "@storybook/addon-knobs";

storiesOf('Radio Button', module)
    .add('Default', () => ({
        template: `
            <div class="p-2">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                <DRadioButton
                        v-for="val of vals"
                        :key="val"
                        :disabled="disabled"
                        :label="val"
                        :name="name"
                        :size="size"
                        :fullWidth="fullWidth"
                        v-model="selected"
                        :value="val"
                />
            </div>`,
        props: {
            label: {
                type: String,
                default: text('Label', 'Radio button')
            },
            name: {
                type: String,
                default: text('Name', 'radio')
            },
            size: {
                type: String,
                default: select('Size', ['normal', 'large'], 'normal')
            },
            error: {
                type: String,
                default: text('Error', "")
            },
            disabled: {
                type: Boolean,
                default: boolean('Disabled', false)
            },
            fullWidth: {
                type: Boolean,
                default: boolean('Full width', false)
            },
            checked: {
                type: Boolean,
                default: boolean('checked', false)
            },
        },
        data() {
            return {
                vals: ['a', 'b', 'c', 'd'],
                selected: 'b'
            }
        }
    }));