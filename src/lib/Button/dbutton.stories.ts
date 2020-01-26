import {storiesOf} from "@storybook/vue";
import {boolean, text, select, radios} from "@storybook/addon-knobs";

storiesOf('Button', module)
    .add('Default', () => ({
            template: `
                <div class="p-2">
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                    <d-button :disabled="disabled"
                              :type="type"
                              :size="size"
                              :fullWidth="fullWidth"
                              :loading="loading"
                              :icon="icon"
                              :iconPosition="iconPosition"
                              :iconClass="iconClass"
                              :label="label"
                              :iconOnly="iconOnly"
                    />
                </div>`,
            props: {
                disabled: {
                    type: Boolean,
                    default: boolean('disabled', false)
                },
                label: {
                    type: String,
                    default: text('label', 'Secondary Button')
                },
                size: {
                    type: String,
                    default: radios('size', {
                        'small': 'small',
                        'normal': 'normal',
                        'large': 'large'
                    }, 'normal')
                },
                type: {
                    type: String,
                    default: radios('type', {
                        'primary': 'primary',
                        'secondary': 'secondary',
                        'milk': 'milk',
                        'error': 'error',
                        'ghost': 'ghost'
                    }, 'secondary')
                },
                fullWidth: {
                    type: Boolean,
                    default: boolean('fullWidth', false)
                },
                loading: {
                    type: Boolean,
                    default: boolean('loading', false)
                },
                icon: {
                    type: String,
                    default: text('icon', 'arrow_drop_down')
                },
                iconClass: {
                    type: String,
                    default: text('iconClass', '')
                },
                iconOnly: {
                    type: Boolean,
                    default: boolean('iconOnly', false)
                },
                iconPosition: {
                    type: String,
                    default: radios('iconPosition', {
                        left: "left",
                        right: "right"
                    }, 'left')
                }
            }
        })
    );