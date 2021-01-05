function sleep(ms){
  return new Promise((resolve)=>setTimeout(resolve,ms));
}

function between(value, min, max) {
	return Math.max(Math.min(value, max), min);
}

/**
 * 将rpx或px转换为px单位
 * @param {String} vaule
 */
function toPx(value) {
	const windowWidth = uni.getSystemInfoSync().windowWidth;
	const result = /(-?\d+\.?\d*)(\w*)/.exec(value);
	if (result&&result[1]) {
		if (result[2]) {
			if ('rpx' === result[2].trim()) {
				return windowWidth * Number(result[1]) / 750;
			} else {
				return Number(result[1]);
			}
		} else {
			return Number(result[1]);
		}
	}
	
	throw new TypeError(`${value}单位格式不正确`);
}

function deepCopy(obj) {
	var result = Array.isArray(obj) ? [] : {};
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (typeof obj[key] === 'object' && obj[key]!==null) {
				result[key] = deepCopy(obj[key]);   //递归复制
			} else {
				result[key] = obj[key];
			}
		}
	}
  return result;
}

/**
 * @param {Number} count
 * @param {Function} closure可接受两个参数，索引和上个元素值
 */
function generateList(count, closure) {
	const list = [];
	let last = {};
	let current = null;
	for (let i = 0; i < count; ++i) {
		current = closure(i, deepCopy(last));
		
		current = Array.isArray(current) ? current : [current]
		
		list.push(...(deepCopy(current)));
		last = deepCopy(current);
	}
	
	
	
	return list;
}

module.exports = {
	sleep,
	between,
	toPx,
	deepCopy,
	generateList,
}