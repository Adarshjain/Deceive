import {storiesOf} from "@storybook/vue";
import {} from "@storybook/addon-knobs";
import DDropdown from "../Dropdown/DDropdown.vue";

storiesOf('Dropdown', module)
    .add('Default', () => ({
            template: `
                <div class="p-2">
                    <d-dropdown />
                    <d-dropdown />
                </div>`,
            props: {}
        })
    );
