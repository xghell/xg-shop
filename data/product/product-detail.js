const productDetail = {
	product() {
		const product = {
			imageList: [
				'http://img4.imgtn.bdimg.com/it/u=3193396796,3242656788&fm=26&gp=0.jpg',
				'http://img5.imgtn.bdimg.com/it/u=2323663235,233170680&fm=11&gp=0.jpg',
				'http://img0.imgtn.bdimg.com/it/u=2242176250,3413308464&fm=26&gp=0.jpg'
			],
			video: {
				src: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4',
				duration: '00\'\'78',
			},
			price: '36.589',
			discountPrice: '12.65',
			title: '凉皮铺子 手工面包味道好极了 凉皮铺子 手工面包味道好极了 凉皮铺子 手工面包味道好极了'
		}
		
		return product;
	},
	
	discountList() {
		const discountList = [
			{
				title: '满减',
				desc: '满199元减120元,满299元减180元,满399元减200元',
			},
			{
				title: '换购',
				desc: '购买1件可优惠换购热销商品',
			},
			{
				title: '满额返券',
				desc: '满1元即返优惠券',
			}
		];
		
		return discountList;
	},
	
	activity() {
		
	},
	
	commentInfo() {
		const commentInfo = {
			total: '1000+',
			goodCommentPercent: '95%',
			commentList: [
				{
					userAvatar: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1049794694,894255720&fm=26&gp=0.jpg',
					userNickname: '整条街最亮的崽',
					rate: '5',
					comment: '其面包为烘烤类糕点，里面加入了小麦粉，水，砂糖，起酥油，糖浆，甚至鸡蛋等营养原料。口感清新软嫩，令人咂舌！',
					imageList: [
						'http://img3.imgtn.bdimg.com/it/u=3323676363,2038603336&fm=26&gp=0.jpg',
						'http://img2.imgtn.bdimg.com/it/u=1083609203,3386781241&fm=26&gp=0.jpg',
						'http://img0.imgtn.bdimg.com/it/u=2698209900,3946692010&fm=26&gp=0.jpg'
					],
					product: '300撕棒原味',
					thumbUpCount: '3',
					reply: '0',
				},
				{
					userAvatar: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1049794694,894255720&fm=26&gp=0.jpg',
					userNickname: '整条街最亮的崽',
					rate: '5',
					comment: '其面包为烘烤类糕点，里面加入了小麦粉，水，砂糖，起酥油，糖浆，甚至鸡蛋等营养原料。口感清新软嫩，令人咂舌！',
					imageList: [
						'http://img3.imgtn.bdimg.com/it/u=3323676363,2038603336&fm=26&gp=0.jpg',
						'http://img2.imgtn.bdimg.com/it/u=1083609203,3386781241&fm=26&gp=0.jpg',
						'http://img0.imgtn.bdimg.com/it/u=2698209900,3946692010&fm=26&gp=0.jpg'
					],
					product: '300撕棒原味',
					thumbUpCount: '3',
					reply: '0',
				}
			]
		};
		
		return commentInfo;
	},
	
	productInfoImageList() {
		//如果url不为空则跳转至url地址，为空则预览图片
		const imageList = [
			{
				url: '',
				image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=264623740,615446429&fm=26&gp=0.jpg',
			},
			{
				url: '',
				image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2615754415,243915044&fm=26&gp=0.jpg',
			},
			{
				url: '',
				image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4020227528,4057190481&fm=11&gp=0.jpg',
			},
			{
				url: '',
				image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3901291895,3363534903&fm=11&gp=0.jpg',
			},
			{
				url: '',
				image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1200218109,2593439325&fm=26&gp=0.jpg',
			}
		];
		
		return imageList;
	},
	
	recommendedProductList() {
		const productList = [
		
			{
				url: '',
				image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=356766908,2358686555&fm=26&gp=0.jpg',
				title: '酸甜可口青梅若干，不甜也不退',
				price: '2.99',
				priceLabel: '',
				discount: ''
			},
			{
				url: '',
				image: 'http://img0.imgtn.bdimg.com/it/u=1060001434,1090671200&fm=26&gp=0.jpg',
				title: '萌萌哒牙缸一套',
				price: '28.99',
				priceLabel: '',
				discount: ''
			},
			{
				url: '',
				image: 'http://img5.imgtn.bdimg.com/it/u=4174541613,3863194746&fm=26&gp=0.jpg',
				title: '垃圾食品一箩筐，于身体健康无益，不建议购买',
				price: '2.99',
				priceLabel: '',
				discount: ''
			},
			{
				url: '',
				image: 'http://img0.imgtn.bdimg.com/it/u=2248367395,3311930811&fm=26&gp=0.jpg',
				title: '漂亮的狗狗一只，对狗狗没有什么研究，品种不知',
				price: '3999.99',
				priceLabel: '促',
				discount: '99.99'
			},
			{
				url: '',
				image: 'http://img4.imgtn.bdimg.com/it/u=1042180233,2455102147&fm=26&gp=0.jpg',
				title: '不知道叫什么的电子原件一个',
				price: '999.11',
				priceLabel: '',
				discount: ''
			},
			{
				url: '',
				image: 'http://img1.imgtn.bdimg.com/it/u=2234798220,1671592153&fm=26&gp=0.jpg',
				title: '不能吃的串串一个',
				price: '99',
				priceLabel: '促',
				discount: '9.9'
			},
			{
				url: '',
				image: 'http://img3.imgtn.bdimg.com/it/u=3435274493,3959634302&fm=26&gp=0.jpg',
				title: '白衬衫一件',
				price: '265.98',
				priceLabel: '满减',
				discount: ''
			},
			{
				url: '',
				image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3587087173,3820998893&fm=26&gp=0.jpg',
				title: '乐高积木',
				price: '9.9',
				priceLabel: '',
				discount: ''
			},
			{
				url: '',
				image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2467720071,1163482536&fm=26&gp=0.jpg',
				title: '女士西装',
				price: '399.99',
				priceLabel: '促',
				discount: '199'
			},
			{
				url: '',
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

export default productDetail;