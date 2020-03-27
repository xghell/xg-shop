import style from '@/common/style.js';

const commentList = {
	data() {
		return {
			noCommentIcon: '/static/comment/no-comment.png',
			rateConfig: {
				starSize: `${style.UNI_FONT_SIZE_HG}`,
				starActivecolor: `${style.UNI_TEXT_COLOR_RED}`,
			},
		}
	},
}

export default commentList;