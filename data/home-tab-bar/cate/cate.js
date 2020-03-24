const cate = {
	tabBarList() {
		const tabBarList = [
			'推荐分类',
			'国际名牌',
			'奢侈品',
			'男装',
			'女装',
			'男鞋',
			'女鞋',
			'内衣配饰',
			'箱包手袋',
			'美妆护肤',
			'个护清洁',
			'钟表珠宝',
			'手机数码',
			'家用电器',
			'电脑办公',
			'图书文娱',
			'特色馆',
			'生活旅行',
			'宠物生活',
		];
		
		return tabBarList;
	},
	cateList(index) {
		const catePageData = [
			{
				name: '常用分类',
				children: [
					{
						url: '',
						name: '仪器仪表',
						image: 'http://img1.imgtn.bdimg.com/it/u=2665651064,85922585&fm=15&gp=0.jpg'
					},
					{
						url: '',
						name: '口红',
						image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2784213932,4049253348&fm=26&gp=0.jpg'
					},
					{
						url: '',
						name: '园艺工具',
						image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1841950407,1313467382&fm=26&gp=0.jpg'
					},
					{
						url: '',
						name: '洗发水',
						image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1839153255,899369297&fm=26&gp=0.jpg'
					}
				]
			},
			{
				name: '常用分类',
				children: [
					{
						url: '',
						name: '仪器仪表',
						image: 'http://img1.imgtn.bdimg.com/it/u=2665651064,85922585&fm=15&gp=0.jpg'
					},
					{
						url: '',
						name: '口红',
						image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2784213932,4049253348&fm=26&gp=0.jpg'
					},
					{
						url: '',
						name: '园艺工具',
						image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1841950407,1313467382&fm=26&gp=0.jpg'
					},
					{
						url: '',
						name: '洗发水',
						image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1839153255,899369297&fm=26&gp=0.jpg'
					}
				]
			},
			{
				name: '常用分类',
				children: [
					{
						url: '',
						name: '仪器仪表',
						image: 'http://img1.imgtn.bdimg.com/it/u=2665651064,85922585&fm=15&gp=0.jpg'
					},
					{
						url: '',
						name: '口红',
						image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2784213932,4049253348&fm=26&gp=0.jpg'
					},
					{
						url: '',
						name: '园艺工具',
						image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1841950407,1313467382&fm=26&gp=0.jpg'
					},
					{
						url: '',
						name: '洗发水',
						image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1839153255,899369297&fm=26&gp=0.jpg'
					}
				]
			},
			{
				name: '常用分类',
				children: [
					{
						url: '',
						name: '仪器仪表',
						image: 'http://img1.imgtn.bdimg.com/it/u=2665651064,85922585&fm=15&gp=0.jpg'
					},
					{
						url: '',
						name: '口红',
						image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2784213932,4049253348&fm=26&gp=0.jpg'
					},
					{
						url: '',
						name: '园艺工具',
						image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1841950407,1313467382&fm=26&gp=0.jpg'
					},
					{
						url: '',
						name: '洗发水',
						image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1839153255,899369297&fm=26&gp=0.jpg'
					}
				]
			},
			{
				name: '常用分类',
				children: [
					{
						url: '',
						name: '仪器仪表',
						image: 'http://img1.imgtn.bdimg.com/it/u=2665651064,85922585&fm=15&gp=0.jpg'
					},
					{
						url: '',
						name: '口红',
						image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2784213932,4049253348&fm=26&gp=0.jpg'
					},
					{
						url: '',
						name: '园艺工具',
						image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1841950407,1313467382&fm=26&gp=0.jpg'
					},
					{
						url: '',
						name: '洗发水',
						image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1839153255,899369297&fm=26&gp=0.jpg'
					}
				]
			},
		]
		
		
		const cateList = (new Array(10)).fill([...catePageData]);
		
		return cateList[index];
	}
}

export default cate;