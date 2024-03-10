import Button from './button';
import Demo from './demo';

const components = {
    Button,
    Demo
}

const install = function (Vue) {
  if(install.installed) return;
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });
}

const API = {
    install,
};

export default API;