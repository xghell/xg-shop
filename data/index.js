const index = {
	/**
	 * tab中index组件页面数据
	 */
	productList() {
		
		let products = [
			{
				'url': '/pages/product/detail?product_id=0',
				'title': '1【华为荣耀8】 高端大气上档次 【华为荣耀8】 高端大气上档次',
				'price': 3400.44,
				'discount_price': 2888.89,
				'image': 'http://img3.imgtn.bdimg.com/it/u=309842420,1506146809&fm=26&gp=0.jpg',
				'thumbnail': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=505803601,4040619218&fm=26&gp=0.jpg',
				'label': '秒杀',
				'similarity': '看相似',
				'track': '你浏览过该商品',
				'similarityUrl': '',
				'trackUrl': ''
			},
			{
				'url': '/pages/product/detail?product_id=1',
				'title': '2【华为荣耀8】 高端大气上档次 【华为荣耀8】 高端大气上档次 顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶',
				'desc': 'dddddddddddddddddddddddddddd',
				'price': 3400,
				'image': 'http://img3.imgtn.bdimg.com/it/u=309842420,1506146809&fm=26&gp=0.jpg',
				'thumbnail': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=505803601,4040619218&fm=26&gp=0.jpg',
				'label': '券',
				'similarity': '看相似'
			},
			{
				'url': '/pages/product/detail?product_id=2',
				'title': '3【华为荣耀8】 高端大气上档次 【华为荣耀8】 高端大气上档次',
				'price': 3400,
				'discount_price': 2888,
				'image': 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1428320179,2045624701&fm=26&gp=0.jpg',
				'thumbnail': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=505803601,4040619218&fm=26&gp=0.jpg',
				'track': '你浏览过该商品',
			},
			{
				'url': '/pages/product/detail?product_id=3',
				'title': '4【华为荣耀8】 高端大气上档次 【华为荣耀8】 高端大气上档次 反反复复烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦',
				'price': 3400,
				'discount_price': 2888,
				'image': 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1428320179,2045624701&fm=26&gp=0.jpg',
				'thumbnail': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=505803601,4040619218&fm=26&gp=0.jpg',
			},
			{
				'url': '/pages/product/detail?product_id=4',
				'title': '5【华为荣耀8】 高端大气上档次 【华为荣耀8】 高端大气上档次',
				'price': 3400,
				'discount_price': 2888,
				'image': 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1428320179,2045624701&fm=26&gp=0.jpg',
				'thumbnail': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=505803601,4040619218&fm=26&gp=0.jpg',
				'track': '你浏览过该商品',
			},
			
			{
				'url': '/pages/product/detail?product_id=5',
				'title': '6【华为荣耀8】 高端大气上档次 【华为荣耀8】 高端大气上档次',
				'price': 3400,
				'discount_price': 2888,
				'image': 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1428320179,2045624701&fm=26&gp=0.jpg',
				'thumbnail': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=505803601,4040619218&fm=26&gp=0.jpg',
				'track': '你浏览过该商品',
			},
			{
				'url': '/pages/product/detail?product_id=6',
				'title': '7【华为荣耀8】 高端大气上档次 【华为荣耀8】 高端大气上档次',
				'price': 3400,
				'discount_price': 2888,
				'image': 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1428320179,2045624701&fm=26&gp=0.jpg',
				'thumbnail': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=505803601,4040619218&fm=26&gp=0.jpg',
				'track': '你浏览过该商品',
			},
			{
				'url': '/pages/product/detail?product_id=7',
				'title': '8【华为荣耀8】 高端大气上档次 【华为荣耀8】 高端大气上档次',
				'price': 3400,
				'discount_price': 2888,
				'image': 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1428320179,2045624701&fm=26&gp=0.jpg',
				'thumbnail': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=505803601,4040619218&fm=26&gp=0.jpg',
				'track': '你浏览过该商品',
			}
		]
		
		
		return products;
	},
	
	navBgImg() {
		return 'https://tse4-mm.cn.bing.net/th?id=OIP.FCL3a8OvD5uoLfkE6V3fVAHaE8&w=300&h=200&c=7&o=5&dpr=1.25&pid=1.7';
	},
	
	carouselList() {
		return [
			{
				src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3204276197,3407567408&fm=26&gp=0.jpg'
			},
			{
				src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2923863218,4047770453&fm=26&gp=0.jpg'
			},
			{
				src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2865471605,302341129&fm=26&gp=0.jpg'
			}
		];
	},
	
	banner() {
		return 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4258590289,1917835464&fm=26&gp=0.jpg';
	},
	
	cateList() {
		return [
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-chaoshi',
				title: '京东超市',
				color: 'red'
			},
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-baifuyun_shangquan-shumadianqi',
				title: '数码电器',
				color: 'purple'
			},
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-fushi',
				title: '服饰美妆',
				color: 'pink'
			},
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-xian',
				title: '京东生鲜',
				color: 'green'
			},
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-xian',
				title: '京东生鲜'
			},
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-xian',
				title: '京东生鲜'
			},
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-xian',
				title: '京东生鲜'
			},
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-xian',
				title: '京东生鲜'
			},
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-xian',
				title: '京东生鲜'
			},
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-xian',
				title: '京东生鲜'
			},
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-xian',
				title: '京东生鲜'
			},
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-xian',
				title: '京东生鲜'
			},
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-xian',
				title: '京东生鲜'
			},
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-xian',
				title: '京东生鲜'
			},
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-xian',
				title: '京东生鲜'
			},
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-xian',
				title: '京东生鲜'
			},
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-xian',
				title: '京东生鲜'
			},
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-xian',
				title: '京东生鲜'
			},
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-xian',
				title: '京东生鲜'
			},
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-xian',
				title: '京东生鲜'
			},
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-xian',
				title: '京东生鲜'
			},
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-xian',
				title: '京东生鲜'
			},
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-xian',
				title: '京东生鲜'
			},
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-xian',
				title: '京东生鲜'
			},
			{
				type: 1, //1为字体图标，0为图像
				icon: 'xg-iconfont xg-icon-xian',
				title: '京东生鲜'
			}
		];
	},
	
	tabProductList() {
		
		let tabProductList = [];
		const data = this.productList();
		//底部产品列表数据
		for (let i = 0; i < 5; ++i) {
			tabProductList.push(data);
		}
		
		return tabProductList;
	}
	
}

export default index;