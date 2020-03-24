import style from '@/common/style.js';

const productDetail = {
	data() {
		return {
			
			rateConfig: {
				starSize: `${style.UNI_FONT_SIZE_LG}`,
				starActivecolor: `${style.UNI_TEXT_COLOR_RED}`,
			},
			
			textareaConfig: {
				placeholderSize: `${style.UNI_FONT_SIZE_BASE}`,
			},
			logisticsIconConfig: {
				fontFamily: 'xg-iconfont',
				text: '\ue685',
			},
		}
	},
}

export default productDetail;