import {storiesOf} from "@storybook/vue";
import {boolean, text, select} from "@storybook/addon-knobs";

storiesOf('Checkbox', module)
    .add('Default', () => ({
            template: `
                <div class="p-2">
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                    <d-checkbox
                            v-for="val of vals"
                            :key="val"
                            :disabled="disabled"
                            :label="val"
                            :value="val"
                            :name="name"
                            :size="size"
                            :error="error"
                            :fullWidth="fullWidth"
                            v-model="selected"
                            :intermediate="intermediate"
                    />
                </div>`,
            props: {
                label: {
                    type: String,
                    default: text('Label', 'Checkbox')
                },
                name: {
                    type: String,
                    default: text('Name', 'checkbox')
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
                intermediate: {
                    type: Boolean,
                    default: boolean('intermediate', false)
                }
            },
            data() {
                return {
                    vals: ['Goku', 'Vegeta', 'Kakarot', 'Frieza'],
                    selected: []
                }
            }
        })
    );