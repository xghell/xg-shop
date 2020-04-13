const productList = {
	productList() {
		const productList = [
			{
				url: '/pages/product/product-detail',
				image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=356766908,2358686555&fm=26&gp=0.jpg',
				title: '酸甜可口青梅若干，不甜也不退;酸甜可口青梅若干，不甜也不退;酸甜可口青梅若干，不甜也不退;酸甜可口青梅若干，不甜也不退;酸甜可口青梅若干，不甜也不退',
				price: '2.99',
				priceLabel: '闪购价',
				productLabelList: ['自营'],
				commentCount: '1568',
			},
			{
				url: '/pages/product/product-detail',
				image: 'http://img0.imgtn.bdimg.com/it/u=1060001434,1090671200&fm=26&gp=0.jpg',
				title: '萌萌哒牙缸一套萌萌哒牙缸一套萌萌哒牙缸一套萌萌哒牙缸一套',
				price: '28.99',
				priceLabel: '秒杀价',
				productLabelList: [],
				commentCount: '82462',
			},
			{
				url: '/pages/product/product-detail',
				image: 'http://img5.imgtn.bdimg.com/it/u=4174541613,3863194746&fm=26&gp=0.jpg',
				title: '垃圾食品一箩筐，于身体健康无益，不建议购买',
				price: '2.99',
				priceLabel: '',
				productLabelList: ['超市'],
				commentCount: '6892462',
			},
			{
				url: '/pages/product/product-detail',
				image: 'http://img0.imgtn.bdimg.com/it/u=2248367395,3311930811&fm=26&gp=0.jpg',
				title: '漂亮的狗狗一只，对狗狗没有什么研究，品种不知',
				price: '3999.99',
				priceLabel: '促',
				productLabelList: [],
				commentCount: '156892462',
			},
			{
				url: '/pages/product/product-detail',
				image: 'http://img1.imgtn.bdimg.com/it/u=2234798220,1671592153&fm=26&gp=0.jpg',
				title: '不能吃的串串一个,不能吃的串串一个,不能吃的串串一个,不能吃的串串一个,不能吃的串串一个',
				price: '99',
				priceLabel: '促',
				discount: '9.9',
				commentCount: '156892462',
			},
			{
				url: '/pages/product/product-detail',
				image: 'http://img3.imgtn.bdimg.com/it/u=3435274493,3959634302&fm=26&gp=0.jpg',
				title: '白衬衫一件,白衬衫一件,白衬衫一件,白衬衫一件',
				price: '265.98',
				priceLabel: '满减',
				productLabelList: [],
				commentCount: '156892462',
			},
			{
				url: '/pages/product/product-detail',
				image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3587087173,3820998893&fm=26&gp=0.jpg',
				title: '女士西装,女士西装,女士西装女士西装女士西装女士西装女士西装',
				price: '9.9',
				priceLabel: '',
				productLabelList: [],
				commentCount: '156892462',
			},
		];
		
		return productList;
	},
	
	serviceOrDiscountList() {
		const serviceOrDiscountList = [
			'京东物流', '货到付款', '仅看有货', '新品', '促销', '全球配送'
		];
		
		return serviceOrDiscountList;
	},
	
	brandList() {
		const brandList = [
			'三只松鼠', '良品铺子', '舌里', '港荣', '江中食疗', '奥利奥', '百草味',
			'达利园', '徐福记', '冠生园', '嘉友', '太平', '皇冠',
		];
		
		return brandList;
	},
	
	specificationCateList() {
		const specificationCateList = [
			 {
				 name: '是否加糖',
				 value: ['添加糖', '未添加糖']
			 },
			 {
				 name: '类别',
				 value: ['马卡龙', '蛋糕', '华夫饼', '瑞士卷', '铜锣烧', '绿豆糕', 
					'蛋黄派', '酥饼', '芝麻糕', '麻花', '发糕', '小面包', '夹心面包'
				 ]
			 },
			 {
				 name: '规格',
				 value: ['200g以下', '201-300g', '301-500g', '501g-1kg', '1kg以上']
			 },
			 {
				 name: '包装',
				 value: ['组合装', '整箱装', '礼盒装', '盒装', '罐装', '袋装']
			 }
		];
		
		return specificationCateList;
	},
	
};

export default productList;