// #ifdef MP-WEIXIN
let menuButtonInfo = uni.getMenuButtonBoundingClientRect();

const searchBarWidth = menuButtonInfo.left - 40;
// #endif

export default {
	data() {
		return {
			// #ifdef MP-WEIXIN
			searchBarWidth: searchBarWidth,
			// #endif
			
			tabIndexSet: new Set(),
			
			currentTabIndex: 0,
			tabbar: {
				backgroundColor: '#FFFFFF',
				color: '#707070',
				selectedColor: '#d81e06',
				list: [
					{
						iconPath: '/static/shop/tabbar/shop.png',
						selectedIconPath: '/static/shop/tabbar/shop-selected.png',
						text: '首页'
					},
					{
						iconPath: '/static/shop/tabbar/product.png',
						selectedIconPath: '/static/shop/tabbar/product-selected.png',
						text: '商品'
					},
					{
						iconPath: '/static/shop/tabbar/cate.png',
						selectedIconPath: '/static/shop/tabbar/cate-selected.png',
						text: '分类'
					},
					{
						iconPath: '/static/shop/tabbar/service.png',
						selectedIconPath: '/static/shop/tabbar/service-selected.png',
						text: '客服'
					}
				]
			}
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