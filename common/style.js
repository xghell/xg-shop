import uni from '@/uni.scss';
import xg from '@/common/xg.scss';

const styleData = {
	...uni,
	...xg
}

function style(key) {
	return /^%\?(\d+)\?%$/.exec(styleData[key])[1] + 'rpx';
}

export default style;