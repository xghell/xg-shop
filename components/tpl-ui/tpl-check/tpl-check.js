import style from '@/common/style.js';

const config = {
	data() {
		return {
			checkedIconConfig: {
				fontFamily: 'xg-iconfont',
				text: '\ue678',
				textStyle: `
							color: ${style.UNI_TEXT_COLOR_RED};
							`,
			},
			uncheckedIconConfig: {
				fontFamily: 'xg-iconfont',
				text: '\ue933',
				textStyle: `
							color: ${style.UNI_TEXT_COLOR_GREY};
							font-weight: 1000;
							`,
			}
		};
	}
};

export default config;