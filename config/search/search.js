import style from '@/common/style.js';

const search = {
	data() {
		return {
			xgNavBar: {
				searchInput: {
					placeholder: '请输入要搜索的商品',
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
						text: '\ue651'
					},
					rightIcon: {
						fontFamily: 'xg-iconfont',
						text: '\ue623'
					}
				},
				left: {
					fontFamily: 'xg-iconfont',
					iconStyle: `margin-left: ${style.UNI_SPACING_COL_BASE};`,
					textStyle: `color:${style.UNI_TEXT_COLOR_GREY}`,
					iconList: [
						{
							id: 'back',
							text: '\ue638',
						},
					]
				},
				right: {
					fontFamily: 'xg-iconfont',
					textStyle: `margin-bottom: ${style.UNI_SPACING_ROW_SM}; 
								margin-top: ${style.UNI_SPACING_ROW_SM}; 
								margin-right: ${style.UNI_SPACING_COL_BASE};
								font-size: ${style.UNI_FONT_SIZE_BASE};
								color:${style.UNI_TEXT_COLOR_GREY};`,
					iconList: [
						{
							id: 'search',
							text: '搜索',
						}
					],
				}
					
			},
			
			historySection: {
				title: '搜索历史',
				icon: {
					//垃圾桶图标
					fontFamily: 'xg-iconfont',
					text: '\ue6a0'
				}
			},
			findSection: {
				icon: {
					//眼睛
					fontFamily: 'xg-iconfont',
					text: '\ue61a'
				}
			}
		}
	},
}

export default search;