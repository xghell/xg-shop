import style from '@/common/style.js';
import {toPx} from '@/common/helper.js';

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
					],
					closeVideoBtn: {//uni-icon
						type: 'closeempty',
						size: `${toPx(style.UNI_ICON_SIZE_MD)}`,
						color: `${style.UNI_TEXT_COLOR_WHITE}`,
					}
				},
				title: {
					
					list: [
						'商品',
						'评价',
						'详情',
						'推荐'
					]
				},
				right: {
					fontFamily: 'xg-iconfont',
					iconList: [
						// #ifndef MP
						{
							id: 'share',
							text: '\ue614',
						},
						// #endif
					],
				}
					
			},
			
			rateConfig: {
				starSize: `${style.UNI_FONT_SIZE_SM}`,
				starActivecolor: `${style.UNI_TEXT_COLOR_RED}`,
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
			
			//产品介绍视频及图片区域
			productMediaConfig: {
				height: '750rpx',
				videoFloat: {
					width: '220rpx',
					height: '220rpx',
				}
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
			},
			
			productIntroIconConfig: {
				fontFamily: 'xg-iconfont',
				text: '\ue6a2',
			},
			productSpecificationIconConfig: {
				fontFamily: 'xg-iconfont',
				text: '\ue60f',
			},
			
			//为你推荐
			recommendedProductListTitleConfig: {
				recommendIcon: {
					fontFamily: 'xg-iconfont',
					thumb: '/static/cart/tuijian.png',
					title: '为你推荐',
					iconStyle: `
								margin-left: ${style.UNI_SPACING_COL_LG};
								margin-right: ${style.UNI_SPACING_COL_LG};
								`,
					titleStyle: `,
								font-size: ${style.UNI_FONT_SIZE_BASE};
								font-weight: bold;
								margin-left: ${style.UNI_SPACING_COL_SM};
								`,
				},
				lineIcon: {
					fontFamily: 'xg-iconfont',
					text: '\ue63d',
					textStyle: `
								font-size: ${style.UNI_ICON_SIZE_SM};
								font-weight: light;
								color: ${style.UNI_TEXT_COLOR_GREY};
								`,
				}
			},
			recommendedProductListConfig: {
				columnCount: 2,
				rowGap: `${style.UNI_SPACING_ROW_SM}`,
				columnGap: `${style.UNI_SPACING_COL_SM}`,
				leftGap: `${style.UNI_SPACING_COL_BASE}`,
				rightGap: `${style.UNI_SPACING_COL_BASE}`,
			},
		
		
			// 加入购物车、购买、客服等导航 
			goodNavConfig: {
				fontFamily: 'xg-iconfont',
				textStyle: `margin-bottom: ${style.UNI_SPACING_ROW_SM}`,
				iconList: [
					{
						url: '',
						text: '\ue636',
						subtitle: '联系客服',
					},
					{
						url: '',
						text: '\ue767',
						subtitle: '店铺',
					},
					{
						url: `/pages/home-tab-bar/home-tab-bar?page=cart`,
						text: '\ue69a',
						subtitle: '购物车',
					}
				],
				btnList: [
					{
						id: 'addCart',
						text: '加入购物车',
						color: `${style.UNI_BG_COLOR_RED}`,
					},
					{
						id: 'buy',
						text: '立即购买',
						color: `${style.UNI_BG_COLOR_ORANGE}`,
					}
				],
			}
		}
	},
}

export default productDetail;