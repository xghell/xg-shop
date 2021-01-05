export default {
	data() {
		return {
			tabTitles: [
				{
					title: '待评价'
				},
				{
					title: '已评价/追评'
				}
			],
			currentTabIndex: 0,
		}
	},
	
	methods: {
		setCurrentTab(index) {
			this.currentTabIndex = index;
		}
	}
}