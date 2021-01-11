export default {
	data() {
		return {
			tabIndexSet: new Set(),
			
			currentTabIndex: 0,
			tabTitles: [
				{
					title: '精选'
				},
				{
					title: '活动'
				},
				{
					title: '上新'
				},
				{
					title: '买家秀'
				}
			]
		}
	},
	methods: {
		setCurrentTabIndex(index) {
			this.currentTabIndex = index;
		},
		
		addTabIndexSetItem(index) {
			this.tabIndexSet.add(index);
		},
		hasTabIndexSetItem(index) {
			return this.tabIndexSet.has(index);
		}
	}
}