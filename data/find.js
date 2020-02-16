const find = {
	shopList() {
		const productList = [
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
		
		const shopList = [];
		
		for (let i=0; i < 10; ++i) {
			shopList[i] = {
				productList: productList,
				name: '戴尔官方旗舰店',
				logo: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2769078294,3862415927&fm=26&gp=0.jpg'
			}
		}
		
		return shopList;
	}
}

export default find;