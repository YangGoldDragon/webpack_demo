// 操作 DOM 元素，把 content 显示到网页上
function show(content) {
    console.log("1111111111")
    window.document.getElementById('app').innerText = 'sdfdsf,' + content;
}

// 通过 CommonJS 规范导出 show 函数
module.exports = show;