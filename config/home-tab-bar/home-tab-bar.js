import style from '@/common/style.js';

const homeTabBar = {
	data() {
		return {
			fontFamily: 'xg-iconfont',
			titleStyle: `
						font-size: ${style.UNI_FONT_SIZE_MI};
						margin-top: ${style.UNI_SPACING_ROW_SM};
						`,
			selectedTitleStyle: `font-size: ${style.UNI_FONT_SIZE_MI};
								margin-top: ${style.UNI_SPACING_ROW_SM};
								color: ${style.UNI_TEXT_COLOR_RED};`,
			textStyle: `font-size: 55rpx;`,
			selectedTextStyle: `font-size: 55rpx;
								color: ${style.UNI_TEXT_COLOR_RED};`,
			iconList: [
				{
					url: '',
					text: '\ue633',
					title: '首页',
				},
				{
					url: '',
					text: '\ue7f9',
					title: '分类',
				},
				{
					url: '',
					text: '\ue669',
					selectedText: '\ue746',
					title: '发现',
				},
				{
					url: '',
					text: '\ue609',
					title: '购物车',
				},
				{
					url: '',
					text: '\ue6b1',
					title: '我的',
				}
			]
		}
	},
}

export default homeTabBar;