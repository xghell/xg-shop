import style from '@/common/style.js';

const cate = {
	data() {
		return {
			searchInput: {
				// #ifndef MP
				placeholder: '请输入要搜索的商品',
				// #endif
				// #ifdef MP
				placeholder: '搜索商品',
				// #endif
				placeholderStyle: `font-size: ${style.UNI_FONT_SIZE_BASE};`,
				
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
		}	
	},
}

export default cate;