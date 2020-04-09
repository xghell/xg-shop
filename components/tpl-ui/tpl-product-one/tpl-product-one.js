import style from '@/common/style.js';

const product = {
	data() {
		return {
			priceConfig: {
				integerStyle: `font-size: ${style.UNI_FONT_SIZE_HG};transform:translateY(5rpx);`,
			},
			cartIconConfig: {
				fontFamily: 'xg-iconfont',
				title: '\ue609',
			}
		}	
	},
}

export default product;