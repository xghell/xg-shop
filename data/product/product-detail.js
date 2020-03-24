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
		
	}
}

export default productDetail;