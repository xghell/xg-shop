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
				left: {
					fontFamily: 'xg-iconfont',
					iconStyle: `margin-left: ${style.UNI_SPACING_COL_BASE};`,
					textStyle: `font-size:${style.UNI_ICON_SIZE_SM};`,
					iconList: [
						{
							id: 'back',
							text: '\ue638',
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
							id: 'layout',
							// #ifndef MP
							iconStyle: `margin-right: ${style.UNI_SPACING_COL_BASE};`,
							// #endif
							// #ifdef MP
							iconStyle: `margin-right: ${navBarRightOffset + toPx(style.UNI_SPACING_COL_BASE)}px;`,
							// #endif
							text: '\ue7f9',
						}
					],
				}
					
			},
			
			// 向上箭头
			upIconConfig: {
				fontFamily: 'xg-iconfont',
				subtitle: '\ue786',
			},
			downIconConfig: {
				fontFamily: 'xg-iconfont',
				subtitle: '\ue910',
			},
			upAndDownIconConfig: {
				fontFamily: 'xg-iconfont',
				subtitle: '\ue7b1',
			},
			
			titleTabBarConfig: {
				fontFamily: 'xg-iconfont',
				list: [
					{
						id: 'recommend', //唯一标识，必填
						text: '综合推荐',
						icon: {   //未选中时
							subtitle: '\ue910',
						},
						selectedIcon: {//选中时
							subtitle: '\ue910',
						},
						tapOnceIcon: {//选中后第一次点击
							subtitle: '\ue786',
						},
						tapTwiceIcon: {//选中后第二次点击
							subtitle: '\ue910',
						},
					},
					{
						id: 'sales', //唯一标识，必填
						text: '销量',
					},
					{
						id: 'price', //唯一标识，必填
						text: '价格',
						icon: {   //未选中时
							subtitle: '\ue7b1',
						},
						selectedIcon: {//选中时
							subtitle: '\ue786',
						},
						tapOnceIcon: {//选中后第一次点击
							subtitle: '\ue910',
						},
						tapTwiceIcon: {//选中后第二次点击
							subtitle: '\ue786',
						},
					},
					{
						id: 'filter', //唯一标识，必填
						text: '筛选',
						icon: {   //未选中时
							subtitle: '\ue612',
						},
						selectedIcon: {//选中时
							subtitle: '\ue612',
						},
						tapOnceIcon: {//选中后第一次点击
							subtitle: '\ue612',
						},
						tapTwiceIcon: {//选中后第二次点击
							subtitle: '\ue612',
						},
					}
				]
			}
			
			
		};
	},
}

export default cate;