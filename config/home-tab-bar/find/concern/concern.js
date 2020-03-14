import style from '@/common/style.js';

const concern = {
	data() {
		return {
			shopConfig: {
				product: {
					size: '200rpx',
					precision: 0,
					priceIntegerStyle: `font-size: ${style.UNI_FONT_SIZE_SM};
										font-weight: bold;`,
					discountStyle: `font-size: ${style.UNI_FONT_SIZE_MI};`,
					titleStyle: `font-size: ${style.UNI_FONT_SIZE_SM};`,
				},
				seeMore: {
					iconStyle: `background-color: ${style.UNI_BG_COLOR_PINK};
								width: 200rpx;
								height: 200rpx;
								margin-left: ${style.UNI_SPACING_COL_BASE};
								margin-right: ${style.UNI_SPACING_COL_BASE};
								border-radius: ${style.UNI_BORDER_RADIUS_BASE};`,
					fontFamily: 'xg-iconfont',
					text: '查看更多',
					textStyle: `font-size: ${style.UNI_FONT_SIZE_SM};
								color: ${style.UNI_TEXT_COLOR_RED};`,
					title: '历史最低价',
					titleStyle: `font-size: ${style.UNI_FONT_SIZE_SM};
								color: ${style.UNI_TEXT_COLOR_RED};`,
					subtitle: '\ue640',
					subtitleStyle: `font-size: ${style.UNI_FONT_SIZE_SM};
									color: ${style.UNI_TEXT_COLOR_RED};`,
				}
			}
		}
	}
};

export default concern;