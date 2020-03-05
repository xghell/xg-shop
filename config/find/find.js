import style from '@/common/style.js';

const find = {
	data() {
		return {
			topBgImage: 'http://img0.imgtn.bdimg.com/it/u=2949264323,306926875&fm=26&gp=0.jpg',
			navBar: {
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
					iconStyle: `margin-right: ${style.UNI_SPACING_COL_BASE};height: 100rpx;`,
					textStyle: `color: ${style.UNI_TEXT_COLOR_WHITE};`,
					iconList: [
						{
							text: '\ue651',
						},
						{
							text: '\ue624',
						}
					]
				},
				title: {
					iconList: [
						{
							fontFamily: '',
							text: '发现',
							textStyle: `font-size: ${style.UNI_ICON_SIZE_MI};color: ${style.UNI_TEXT_COLOR_WHITE};`
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
				selectedSubtitleStyle: `height: 15px;font-size: ${style.UNI_ICON_SIZE_MI};color: ${style.UNI_TEXT_COLOR_WHITE};`,
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