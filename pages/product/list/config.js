// #ifdef MP-WEIXIN
let menuButtonInfo = uni.getMenuButtonBoundingClientRect();

const searchBarWidth = menuButtonInfo.left - 35;
// #endif

const screen_height = uni.getSystemInfoSync().screenHeight;

const config = {
	data() {
		return {
			// #ifdef MP-WEIXIN
			searchBarWidth: searchBarWidth,
			// #endif
			
			screenHeight: screen_height,
			
			waterfall: false,
			
			showTabTitleMask: false,
			priceIconStatus: 'all',
			
			currentTabTitleIndex: 'sort',

			showSortOptions: false,
			currentSortOptionIndex: 0,
			sortOptions: [
				{
					index: 'synthesis-descending',
					title: '综合推荐',
					desc: '综合推荐',
				},
				{
					index: 'new-descending',
					title: '新品',
					desc: '新品优先',
				},
				{
					index: 'comment-descending',
					title: '评论',
					desc: '评论数从高到底',
				},
				
			]
		}
	},
	computed: {
		currentSortOptionTitle() {
			return this.sortOptions[this.currentSortOptionIndex].title;
		}
	},
	methods: {
		toggleWaterfall() {
			// #ifdef APP-PLUS
			var pages = getCurrentPages();
			var currentPage = pages[pages.length - 1];
			
			let webView = currentPage.$getAppWebview();
			if (!this.waterfall) {
				webView.setTitleNViewButtonStyle(0, {  
				    text: '\ue601',  
				});  
				
			} else {
				webView.setTitleNViewButtonStyle(0, {  
				    text: '\ue60e',  
				});  
			}
			// #endif
			// #ifdef H5
			if (!this.waterfall) {
				document.querySelector('.uni-page-head-ft .uni-page-head-btn .uni-btn-icon').innerText = '\ue601'
				
			} else {
				document.querySelector('.uni-page-head-ft .uni-page-head-btn .uni-btn-icon').innerText = '\ue60e'
			}
			// #endif
			
			this.waterfall = !this.waterfall;
		},
		
		setCurrentTabTitleIndex(index) {
			this.currentTabTitleIndex = index;
		},
		
		setCurrentSortOptionIndex(index) {
			this.currentSortOptionIndex = index;
		},
		
		togglePageMask() {
			this.showTabTitleMask = !this.showTabTitleMask;
		},
		hiddenPageMask() {
			this.showTabTitleMask = false;
		},
		
		toggleSortOptions() {
			this.showSortOptions = !this.showSortOptions;
			this.togglePageMask();
		},
		hiddenSortOptions() {
			this.showSortOptions = false;
			this.hiddenPageMask();
		},
		
		togglePriceIconStatus() {
			if (this.priceIconStatus === 'up') {
				this.priceIconStatus = 'down'
				
				return;
			}
			if (this.priceIconStatus === 'down'||this.priceIconStatus === 'all') {
				this.priceIconStatus = 'up'
				
				return;
			}
		},
		resetPriceIconStatus() {
			this.priceIconStatus = 'all'
		}
	}
}

export default config;