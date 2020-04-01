import style from '@/common/style.js';
// #ifdef MP
function toPx(value) {
	const result = /(\d+\.?\d*)(\w+)/.exec(value);
	if ('rpx' === result[2].trim()) {
		return uni.getSystemInfoSync().screenWidth * Number(result[1]) / 750;
	} else if('px' === result[2].trim()) {
		return Number(result[1]);
	} else {
		throw new TypeError(`${value}单位格式不正确`);
	}
	
}


const systemInfo = uni.getSystemInfoSync();
const statusBarHeight = systemInfo.statusBarHeight;
const windowWidth = systemInfo.windowWidth;
const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
let navBarHeight = menuButtonInfo.height + 2*(menuButtonInfo.top - statusBarHeight);
let navBarRightOffset = windowWidth - menuButtonInfo.left;
// #endif

const find = {
	data() {
		return {
			topBgImage: 'http://img0.imgtn.bdimg.com/it/u=2949264323,306926875&fm=26&gp=0.jpg',
			navBar: {
				// #ifndef MP
				fixedHeight: '100rpx',
				// #endif
				// #ifdef MP
				fixedHeight: `${navBarHeight}px`,
				// #endif
				left: {
					fontFamily: 'xg-iconfont',
					iconStyle: `margin-left: ${style.UNI_SPACING_COL_BASE};`,
					textStyle: `color: ${style.UNI_TEXT_COLOR_WHITE};`,
					iconList: [
						{
							text: '\ue603',
						}
					]
				},
				right: {
					fontFamily: 'xg-iconfont',
					iconStyle: `margin-right: ${style.UNI_SPACING_COL_BASE};`,
					textStyle: `color: ${style.UNI_TEXT_COLOR_WHITE};`,
					iconList: [
						// #ifndef MP
						{
							text: '\ue651',
						},
						{
							text: '\ue624',
						},
						// #endif
					]
				},
				title: {
					iconList: [
						{
							fontFamily: '',
							text: '发现',
							textStyle: `font-size: ${style.UNI_ICON_SIZE_SM};color: ${style.UNI_TEXT_COLOR_WHITE};`
						}
					]
				},
			},
			
			tabBar: {
				fontFamily: 'xg-iconfont',
				selectedSubtitle: '\ue602',
				iconStyle: 'min-height: 40px;',
				titleStyle: `color: ${style.UNI_TEXT_COLOR_WHITE};`,
				subtitleStyle: `height: 15px;`,
				selectedSubtitleStyle: `height: 15px;font-size: ${style.UNI_ICON_SIZE_SM};color: ${style.UNI_TEXT_COLOR_WHITE};`,
				iconList: [
				
					{
						id: '',
						title: '关注',
					},
					{
						id: '',
						title: '晒一晒',
					},
					{
						id: '',
						title: '直播',
					},
					{
						id: '',
						title: '视频',
					},
				
				]
			
			},
			
		};
	}
}

export default find;