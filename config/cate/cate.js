import style from '@/common/style.js';

const cate = {
	data() {
		return {
			navBar: {
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
					textStyle: `font-size:${style.UNI_ICON_SIZE_MI};`,
					iconList: [
						{
							id: 'scan',
							text: '\ue60c',
						},
					]
				},
				right: {
					fontFamily: 'xg-iconfont',
					textStyle: `margin-right: ${style.UNI_SPACING_COL_BASE};
								font-size: ${style.UNI_ICON_SIZE_MI};
								`,
					iconList: [
						{
							id: 'message',
							text: '\ue624',
						}
					],
				}
					
			},
		}	
	},
}

export default cate;