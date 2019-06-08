import React from 'react'; //从已经安装好的react 引入react
import ReactDOM from 'react-dom';
import './index.css';//同一目录下 引入
import App from './App'; //从App  是自定义的标签 不是 默认的
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//id 叫root 渲染替换成 app 是大写 App 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
