import style from '@/common/style.js';

const show = {
	data() {
		return {
			waterfallConfig: {
				columnCount: 2,
				columnGap: `${style.UNI_SPACING_COL_BASE}`,
				leftGap: `${style.UNI_SPACING_COL_BASE}`,
				rightGap: `${style.UNI_SPACING_COL_BASE}`,
			},
			thumbUpIconConfig: {
				fontFamily: 'xg-iconfont',
				text: '\ue9cb',
			}
		}
	}
};

export default show;