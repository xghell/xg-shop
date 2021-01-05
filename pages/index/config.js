// #ifdef MP
let menuButtonInfo = uni.getMenuButtonBoundingClientRect();
const statusBarHeight = uni.getSystemInfoSync().statusBarHeight;

const nativeNavBarHeight = (menuButtonInfo.top - statusBarHeight) * 2 + menuButtonInfo.height;
// #endif


const config = {
	data() {
		return {
			// #ifdef MP
			nativeNavBarHeight: nativeNavBarHeight,
			// #endif
			navBarConfig: {
				// #ifdef APP-NVUE
				leftImage: '/static/mock/index/nav-bar/left-icon.png',
				rightImage: '/static/mock/index/nav-bar/calendar.png',
				// #endif
				
				
				rightIconList: [
					{
						type: 'scan',
						title: '扫啊扫',
						color: '#FFF',
						size: 22
					},
					{
						type: 'chat',
						title: '消息',
						color: '#FFF',
						size: 22
					}
				]
			}
		}
	}
}

export default config;