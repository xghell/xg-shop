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
// console.log(menuButtonInfo,statusBarHeight, systemInfo);
// #endif

const cate = {
	data() {
		return {
			navBar: {
				// #ifndef MP
				fixedHeight: `100rpx`,
				// #endif
				// #ifdef MP
				fixedHeight: `${navBarHeight}px`,
				// #endif
				searchInput: {
					// #ifndef MP
					placeholder: '请输入要搜索的商品',
					// #endif
					// #ifdef MP
					placeholder: '搜索商品',
					// #endif
					
					searchInputStyle:  `height: 60rpx;
										background-color: ${style.UNI_BG_COLOR_GREY};
										border-radius: 1000px;
										margin-top: ${style.UNI_SPACING_ROW_SM};
										margin-bottom: ${style.UNI_SPACING_ROW_SM};
										margin-left: ${style.UNI_SPACING_COL_BASE};
										margin-right: ${style.UNI_SPACING_COL_BASE};
										`,
					inputStyle: `font-size: ${style.UNI_FONT_SIZE_BASE};`,
					leftIcon: {
						fontFamily: 'xg-iconfont',
						text: '\ue651',
						iconColor: `${style.UNI_TEXT_COLOR_GREY}`,
					},
					rightIcon: {
						fontFamily: 'xg-iconfont',
						text: '\ue623',
						iconColor: `${style.UNI_TEXT_COLOR_GREY}`,
					}
				},
				left: {
					fontFamily: 'xg-iconfont',
					iconStyle: `margin-left: ${style.UNI_SPACING_COL_BASE};`,
					textStyle: `font-size:${style.UNI_ICON_SIZE_SM};`,
					iconList: [
						{
							id: 'scan',
							text: '\ue60c',
						},
					]
				},
				right: {
					fontFamily: 'xg-iconfont',
					textStyle: `
								font-size: ${style.UNI_ICON_SIZE_SM};
								`,
					iconList: [
						{
							id: 'message',
							// #ifndef MP
							iconStyle: `margin-right: ${style.UNI_SPACING_COL_BASE};`,
							// #endif
							// #ifdef MP
							iconStyle: `margin-right: ${navBarRightOffset + toPx(style.UNI_SPACING_COL_BASE)}px;`,
							// #endif
							text: '\ue624',
						}
					],
				}
					
			},
		}	
	},
}

export default cate;