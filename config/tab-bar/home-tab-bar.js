import style from '@/common/style.js';

const homeTabBar = {
	data() {
		return {
			fontFamily: 'xg-iconfont',
			titleStyle: `font-size: ${style.UNI_FONT_SIZE_SM};`,
			selectedTitleStyle: `font-size: ${style.UNI_FONT_SIZE_SM};
								color: ${style.UNI_TEXT_COLOR_RED};`,
			textStyle: `font-size: ${style.UNI_ICON_SIZE_MI};`,
			selectedTextStyle: `font-size: ${style.UNI_ICON_SIZE_MI};
								color: ${style.UNI_TEXT_COLOR_RED};`,
			iconList: [
				{
					url: '',
					text: '\ue62e',
					title: '首页',
				},
				{
					url: '',
					text: '\ue72c',
					title: '分类',
				},
				{
					url: '',
					text: '\ue63e',
					selectedText: '\ue746',
					title: '发现',
				},
				{
					url: '',
					text: '\ue600',
					title: '购物车',
				},
				{
					url: '',
					text: '\ue631',
					title: '我的',
				}
			]
		}
	},
}

export default homeTabBar;