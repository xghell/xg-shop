import data from '@/data/index/index';

const systemInfo = uni.getSystemInfoSync()
const screen_height = systemInfo.screenHeight;
const status_bar_height = systemInfo.statusBarHeight;
const tabbar_height = 50;
const nav_bar_height = 44;

export default {
	data() {
		return {
		}
	},
	onLoad() {
		// #ifndef MP
		this.productTabHeight = screen_height - nav_bar_height - tabbar_height;
		// #endif
		
		// #ifdef MP
		this.productTabHeight = screen_height - nav_bar_height - status_bar_height - this.nativeNavBarHeight - tabbar_height;
		// #endif
	},
	methods: {
		setPageHeaderHeight() {
			const query = uni.createSelectorQuery().in(this);
			query.select('#page-header').fields({size: true});
			query.select('#nav-bar').fields({size: true});
			
			
			query.exec(data => {
				this.pageHeaderHeight = data[0].height - data[1].height;
				
				setTimeout(async () => {
					this.setTabScrollRef(0);
				}, 100);
			})
		}
	}
}