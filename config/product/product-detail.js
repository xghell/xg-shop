import style from '@/common/style.js';

const productDetail = {
	data() {
		return {
			navBarConfig: {
				fixedHeight: '100rpx',
				left: {
					fontFamily: 'xg-iconfont',
					iconList: [
						{
							id: 'back',
							text: '\ue638',
						},
					]
				},
				title: {
					fontFamily: 'xg-iconfont',
					textStyle: `font-size: ${style.UNI_FONT_SIZE_BASE};`,
					selectedTitleStyle: `color: ${style.UNI_TEXT_COLOR_RED};font-size: ${style.UNI_ICON_SIZE_MD};height: 40rpx;`,
					iconList: [
						{
							id: 'product',
							text: '商品',
							selectedTitle: '\ue608',
						},
						{
							id: 'comment',
							text: '评价',
							selectedTitle: '\ue608',
						},
						{
							id: 'detail',
							text: '详情',
							selectedTitle: '\ue608',
						},
						{
							id: 'recommend',
							text: '推荐',
							selectedTitle: '\ue608',
						},
					]
				},
				right: {
					fontFamily: 'xg-iconfont',
					iconList: [
						{
							id: 'share',
							text: '\ue614',
						},
						{
							id: 'share',
							text: '\ue614',
						}
					],
				}
					
			},
			
			moreBtnConfig: {
				fontFamily: 'xg-iconfont',
				text: '\ue639',
				textStyle: `font-size: ${style.UNI_ICON_SIZE_SM}`,
			},
			arrowRightBtnConfig: {
				fontFamily: 'xg-iconfont',
				text: '\ue601',
				textStyle: `font-size: ${style.UNI_ICON_SIZE_MI};font-weight: bold;`,
			},
			
			playVideoBtnConfig: {
				fontFamily: 'xg-iconfont',
				text: '\ue64c',
			},
			
			priceSectionConfig: {
				price: {
					currencySymbolStyle: `font-size: ${style.UNI_FONT_SIZE_BASE}`,
					decimalStyle: `font-size: ${style.UNI_FONT_SIZE_BASE}`,
					integerStyle: `font-size: ${style.UNI_FONT_SIZE_HG}`,
				},
				
				
				fontFamily: 'xg-iconfont',
				titleStyle: `margin-bottom: ${style.UNI_SPACING_ROW_SM}`,
				subtitleStyle: `font-size: ${style.UNI_FONT_SIZE_MARO}`,
				iconList: [
					{
						id: 'lowerPrice',
						title: '\ue822',
						subtitle: '降价通知',
					},
					{
						id: 'concern',
						title: '\ue674',
						subtitle: '关注',
					}
				]
			}
			
		}
	},
}

export default productDetail;