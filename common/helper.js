function config(filename, module) {
	const {default: data} = require(`@/data/${filename}.js`);
	return data[module]();
}

async function getData(filename, module) {
	try{
		const {default: data} = await import(`@/data/${filename}.js`);
		return data[module]();
	}catch(e){
		throw new Error(`文件${filename}中的${module}数据块加载失败`);
	}
}

function msg(title, duration=1500, mask=false, icon='none') {
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}

function between(value, min, max) {
	return Math.max(Math.min(value, max), min);
}

// #ifdef APP-NVUE
function getComponentRect(ref) {
	
	const dom = uni.requireNativePlugin('dom');
	
	return new Promise(function (resolve, reject) {
		dom.getComponentRect(ref, data => {
			resolve(data);
		})
	})
}
// #endif


/**
 * 将rpx或px转换为px单位
 * @param {String} vaule
 */
function toPx(value) {
	const result = /(\d+)(\w+)/.exec(value);
	if ('rpx' === result[2].trim()) {
		return uni.getSystemInfoSync().screenWidth * Number(result[1]) / 750;
	} else if('px' === result[2].trim()) {
		return Number(result[1]);
	} else {
		throw new TypeError(`${value}单位格式不正确`);
	}
	
}

export {
	config,
	getData,
	msg,
	between,
	// #ifdef APP-NVUE
	getComponentRect,
	// #endif
	toPx,
}