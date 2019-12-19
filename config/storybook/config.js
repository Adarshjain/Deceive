import {configure, addParameters, addDecorator} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import './register-component';


addParameters({
    options: {
        isFullscreen: false,
        showNav: true,
        showPanel: true,
        panelPosition: 'bottom'
    }
});

addDecorator(withKnobs);

configure(require.context('../../src', true, /\.stories\.(js|ts)$/), module);