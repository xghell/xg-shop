// #ifdef MP-WEIXIN
let menuButtonInfo = uni.getMenuButtonBoundingClientRect();

const searchBarWidth = menuButtonInfo.left - 10;
// #endif

export default {
	data() {
		return {
			// #ifdef MP-WEIXIN
			searchBarWidth: searchBarWidth
			// #endif
		}
	}
}