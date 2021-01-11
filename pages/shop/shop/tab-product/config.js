export default {
	data() {
		return {
			waterfall: false,
			
			currentTitleIndex: 0,
			titles: [
				{
					title: '推荐'
				},
				{
					title: '销量'
				},
				{
					title: '价格'
				},
				{
					title: '仅看有货'
				}
			],
			
			
			currentSortOptionIndex: 0,
			sortOptions: [
				{
					title: '推荐',
					desc: '推荐排序'
				},
				{
					title: '新品',
					desc: '新品优先'
				}
			],
			
			showSortOptionsPopup: false,
			
			priceIconStatus: 'all'
		}
	},
	methods: {
		toggleWaterfall() {
			this.waterfall = !this.waterfall;
		},
		
		setCurrentTitleIndex(index) {
			this.currentTitleIndex = index;
		},
		
		setCurrentSortOptionIndex(index) {
			this.currentSortOptionIndex = index;
		},
		
		toggleSortOptionsPopup() {
			if (this.currentTitleIndex === 0) {
				this.showSortOptionsPopup = !this.showSortOptionsPopup;
			}
		},
		hiddenSortOptionsPopup() {
			this.showSortOptionsPopup = false;
		},
		
		setPriceIconStatus(status) {
			//status为down,up,all
			this.priceIconStatus = status;
		},
		togglePriceIconStatus() {
			this.priceIconStatus = this.priceIconStatus === 'up' ? 'down' : 'up';
		}
	}
}