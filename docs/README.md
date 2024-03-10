# 快速开始

#### 安装组件库
```bash
npm i hhuangcanmin-ui
```

#### 引用组件库
> 在 main.js 中引用组件库
```javascript
// 全部引入
import 'hhuangcanmin-ui/dist/css/index.css';
import HhcmUI from 'hhuangcanmin-ui';
Vue.use(HhcmUI);

// 按需引入
import 'hhuangcanmin-ui/dist/css/demo.css';
import { Demo } from 'hhuangcanmin-ui';
Vue.use(Demo);
```