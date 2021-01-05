export default {
	data() {
		return {
			currentTabTitleIndex: 0,
			tabTitles: [
				{
					title: '全部'
				},
				{
					title: '待付款'
				},
				{
					title: '待收货'
				},
				{
					title: '已完成'
				},
				{
					title: '已取消'
				}
			]
		}
	},
	
	methods: {
		setCurrentTabTitleIndex(index) {
			this.currentTabTitleIndex = index;
		}
	}
}