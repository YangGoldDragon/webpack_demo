//引入图片
import img from "./img.jpg"
//引入样式
// import "./main.scss"
const image = new Image();
image.classList.add("img");
document.body.appendChild(image);
// 通过 CommonJS 规范导入 show 函数
const show = require('./show.js');
// 执行 show 函数
show('Webpack');
