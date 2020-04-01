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

const cart = {
	data() {
		return {
			navBarConfig: {
				// #ifndef MP
				fixedHeight: `100rpx`,
				// #endif
				// #ifdef MP
				fixedHeight: `${navBarHeight}px`,
				// #endif
				title: {
					fontFamily: 'xg-iconfont',
					textStyle: `
								font-size: ${style.UNI_ICON_SIZE_SM};
								`,
					iconList: [
						{
							id: '',
							text: '购物车',
						}
					],
				},
				right: {
					fontFamily: 'xg-iconfont',
					textStyle: `margin-right: ${style.UNI_SPACING_COL_BASE};
								font-size: ${style.UNI_ICON_SIZE_SM};
								`,
					iconList: [
						{
							id: 'message',
							text: '\ue624',
						}
					],
				}
					
			},
			
			emptyCartConfig: {
				icon: '/static/cart/gouwuche.png',
				text: '购物车是空的',
				navBtnList: [
					{
						url: '',
						text: '逛逛秒杀',
					},
					{
						url: '',
						text: '看看关注',
					}
				]
			},
			
			recommendedProductListTitleConfig: {
				recommendIcon: {
					fontFamily: 'xg-iconfont',
					thumb: '/static/cart/tuijian.png',
					title: '为你推荐',
					iconStyle: `
								margin-left: ${style.UNI_SPACING_COL_LG};
								margin-right: ${style.UNI_SPACING_COL_LG};
								`,
					titleStyle: `,
								font-size: ${style.UNI_FONT_SIZE_BASE};
								font-weight: bold;
								margin-left: ${style.UNI_SPACING_COL_SM};
								`,
				},
				lineIcon: {
					fontFamily: 'xg-iconfont',
					text: '\ue63d',
					textStyle: `
								font-size: ${style.UNI_ICON_SIZE_SM};
								font-weight: light;
								color: ${style.UNI_TEXT_COLOR_GREY};
								`,
				}
			},
			recommendedProductListConfig: {
				columnCount: 2,
				rowGap: `${style.UNI_SPACING_ROW_SM}`,
				columnGap: `${style.UNI_SPACING_COL_SM}`,
				leftGap: `${style.UNI_SPACING_COL_BASE}`,
				rightGap: `${style.UNI_SPACING_COL_BASE}`,
			}
		}	
	},
}

export default cart;