import {storiesOf} from "@storybook/vue";
import {radios, text} from "@storybook/addon-knobs";

storiesOf('List', module)
    .add('Default', () => ({
            template: `
                <div class="">
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                    <d-list v-for="val in vals"
                            :key="val.label"
                            :label="val.label"
                            :desc="desc !== '' ? val.desc : ''"
                            :icon="icon"
                            :iconColor="iconColor"
                            :state="state !== 'none' ? val.state : state"
                    />
                </div>`,
            props: {
                label: {
                    type: String,
                    default: text('label', 'Sample Text')
                },
                desc: {
                    type: String,
                    default: text('desc', 'Sample Text')
                },
                icon: {
                    type: String,
                    default: text('icon', 'devices')
                },
                iconColor: {
                    type: String,
                    default: radios('iconColor', {
                        'default': 'default',
                        'error': 'error',
                        'success': 'success',
                        'warning': 'warning',
                        'info': 'info',
                    }, 'default')
                },
                state: {
                    type: String,
                    default: radios('state', {
                        'none': 'none',
                        'active': 'active',
                        'disabled': 'disabled',
                    }, 'none')
                }
            },
            data() {
                return {
                    vals: [
                        {label: 'Jake', desc: 'Jacob Sherlock Peralta'},
                        {label: 'Amy', desc: 'Amy dance pants', state: 'disabled'},
                        {label: 'Holt', desc: 'Thee Raymond Captain Holt'},
                        {label: 'Charles', desc: 'Fan Girl 💖', state: 'active'},
                    ]
                }
            }
        })
    );
