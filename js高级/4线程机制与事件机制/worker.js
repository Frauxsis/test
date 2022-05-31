function fibonacci(n) {
	return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2); //递归函数调用
}

console.log(this);

var onmessage = function (event) {
	var number = event.data;
	console.log("分线程接收到主线程发送的数据" + number);

	// 计算
	var result = fibonacci(number);
	postMessage(result);
	console.log("分线程向主线程返回数据" + result);

	// alert(result)  会报错 alert是window的方法，在分线程中不能调用
	// console是浏览器调用的
	// 分线程中的全局对象不再是window，所以分线程中不可能更新界面
};
