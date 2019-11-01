import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import App from './demo/less/index'
// import App from './demo/antd';
import App from './router'
// import 'antd/dist/antd.css' //全局引入antd所有的样式
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 