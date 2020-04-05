const user = {
	userInfo() {
		const userInfo = {
			avatar: 'http://img0.imgtn.bdimg.com/it/u=1861865199,884114685&fm=11&gp=0.jpg',
			nickname: 'xghell',
			concerned_product_count: 0,
			concerned_shop_count: 3,
			like_count: 3,
			history_count: 96,
		}
		
		return userInfo;
	},
	
	//为你推荐
	recommendedProductList() {
		const productList = [
		
			{
				url: '/pages/product/product-detail',
				image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=356766908,2358686555&fm=26&gp=0.jpg',
				title: '酸甜可口青梅若干，不甜也不退',
				price: '2.99',
				priceLabel: '',
				discount: ''
			},
			{
				url: '/pages/product/product-detail',
				image: 'http://img0.imgtn.bdimg.com/it/u=1060001434,1090671200&fm=26&gp=0.jpg',
				title: '萌萌哒牙缸一套',
				price: '28.99',
				priceLabel: '',
				discount: ''
			},
			{
				url: '/pages/product/product-detail',
				image: 'http://img5.imgtn.bdimg.com/it/u=4174541613,3863194746&fm=26&gp=0.jpg',
				title: '垃圾食品一箩筐，于身体健康无益，不建议购买',
				price: '2.99',
				priceLabel: '',
				discount: ''
			},
			{
				url: '/pages/product/product-detail',
				image: 'http://img0.imgtn.bdimg.com/it/u=2248367395,3311930811&fm=26&gp=0.jpg',
				title: '漂亮的狗狗一只，对狗狗没有什么研究，品种不知',
				price: '3999.99',
				priceLabel: '促',
				discount: '99.99'
			},
			{
				url: '/pages/product/product-detail',
				image: 'http://img4.imgtn.bdimg.com/it/u=1042180233,2455102147&fm=26&gp=0.jpg',
				title: '不知道叫什么的电子原件一个',
				price: '999.11',
				priceLabel: '',
				discount: ''
			},
			{
				url: '/pages/product/product-detail',
				image: 'http://img1.imgtn.bdimg.com/it/u=2234798220,1671592153&fm=26&gp=0.jpg',
				title: '不能吃的串串一个',
				price: '99',
				priceLabel: '促',
				discount: '9.9'
			},
			{
				url: '/pages/product/product-detail',
				image: 'http://img3.imgtn.bdimg.com/it/u=3435274493,3959634302&fm=26&gp=0.jpg',
				title: '白衬衫一件',
				price: '265.98',
				priceLabel: '满减',
				discount: ''
			},
			{
				url: '/pages/product/product-detail',
				image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3587087173,3820998893&fm=26&gp=0.jpg',
				title: '乐高积木',
				price: '9.9',
				priceLabel: '',
				discount: ''
			},
			{
				url: '/pages/product/product-detail',
				image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2467720071,1163482536&fm=26&gp=0.jpg',
				title: '女士西装',
				price: '399.99',
				priceLabel: '促',
				discount: '199'
			},
			{
				url: '/pages/product/product-detail',
				image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3499904839,3433733478&fm=26&gp=0.jpg',
				title: '',
				price: '9.8',
				priceLabel: '',
				discount: ''
			}
		
		]
		
		return productList;
	}
}

export default user;