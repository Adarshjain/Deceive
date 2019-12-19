import Vue from 'vue';

function loadComponents() {
    const req = require.context('../../src/lib/', true, /\.(vue)$/i);
    req.keys().map(key => {
        const name = key
            .split('/')
            .pop()
            .replace(/\.\w+$/, '');
        const component = req(key).default;
        if (!component) {
            return;
        }

        return Vue.component(name, component);
    });
}

(function init() {
    loadComponents();
})();