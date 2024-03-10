import DemoHcm from './src/main.vue'

DemoHcm.install = function(Vue) {
    Vue.component(DemoHcm.name, DemoHcm);
}

export default DemoHcm