import style from '@/common/style.js';

const homeTabBar = {
	data() {
		return {
			fontFamily: 'xg-iconfont',
			titleStyle: `font-size: ${style.UNI_FONT_SIZE_SM};`,
			selectedTitleStyle: `font-size: ${style.UNI_FONT_SIZE_SM};
								color: ${style.UNI_TEXT_COLOR_RED};`,
			textStyle: `font-size: ${style.UNI_ICON_SIZE_SM};`,
			selectedTextStyle: `font-size: ${style.UNI_ICON_SIZE_SM};
								color: ${style.UNI_TEXT_COLOR_RED};`,
			iconList: [
				{
					url: '/pages/index/index',
					text: '\ue62e',
					title: '首页',
				},
				{
					url: '/pages/cate/cate',
					text: '\ue72c',
					title: '分类',
				},
				{
					url: '/pages/find/find',
					text: '\ue63e',
					selectedText: '\ue746',
					title: '发现',
				},
				{
					url: '/pages/cart/cart',
					text: '\ue600',
					title: '购物车',
				},
				{
					url: '/pages/user/user',
					text: '\ue631',
					title: '我的',
				}
			]
		}
	},
}

export default homeTabBar;