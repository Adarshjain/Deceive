import {storiesOf} from "@storybook/vue";
import {boolean, number, radios, text} from "@storybook/addon-knobs";

storiesOf('Input', module)
    .add('Default', () => ({
            template: `
                <div class="p-2">
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                    <d-input :disabled="disabled"
                             :type="type"
                             :size="size"
                             :maxLength="maxLength"
                             :autofocus="autofocus"
                             :autocomplete="autocomplete"
                             :name="name"
                             :value="value"
                             :placeholder="placeholder"
                             :description="description"
                             :label="label"
                             :invalidMessage="invalidMessage"
                             :icon="icon"
                             :iconClass="iconClass"
                             :iconPosition="iconPosition"
                    />
                </div>`,
            props: {
                disabled: {
                    type: Boolean,
                    default: boolean('disabled', false)
                },
                type: {
                    type: String,
                    default: radios('type', {
                        'text': 'text',
                        'number': 'number',
                        'email': 'email',
                        'password': 'password'
                    }, 'text')
                },
                size: {
                    type: String,
                    default: radios('size', {
                        'small': 'small',
                        'regular': 'regular',
                        'large': 'large',
                    }, 'regular')
                },
                maxLength: {
                    type: Number,
                    default: number('maxLength', -1)
                },
                autofocus: {
                    type: Boolean,
                    default: boolean('autofocus', false)
                },
                autocomplete: {
                    type: Boolean,
                    default: boolean('autocomplete', false)
                },
                name: {
                    type: String,
                    default: text('name', '')
                },
                value: {
                    type: [String, Number],
                    default: text('value', '')
                },
                placeholder: {
                    type: [String, Number],
                    default: text('placeholder', 'Enter secrets')
                },
                description: {
                    type: String,
                    default: text('description', 'Caring for you, Always!')
                },
                label: {
                    type: String,
                    default: text('label', 'Input field')
                },
                // formatter:{
                //     type:,
                //     default:
                //         },
                invalidMessage: {
                    type: String,
                    default: text('invalidMessage', 'Cool cool cool cool cool cool')
                },
                icon: {
                    type: String,
                    default: text('icon', 'done')
                },
                iconClass: {
                    type: String,
                    default: text('iconClass', 'text-green-400')
                },
                iconPosition: {
                    type: String,
                    default: radios('iconPosition', {
                        left: "left",
                        right: "right"
                    }, 'right')
                }
            }
        })
    );
