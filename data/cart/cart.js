import {generateList,sleep} from '@/common/helper.js'

class Data {
	async products(page) {
		await sleep(300);
		
		const products = generateList(5, (index) => {
			return [
				{
					_id: '',
					image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1296142825,126703938&fm=26&gp=0.jpg',
					title: '桃子 新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子',
				},
				{
					_id: '',
					image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=260493562,617646781&fm=26&gp=0.jpg',
					title: '台灯'
				},
				{
					_id: '',
					image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=118130856,2519923284&fm=26&gp=0.jpg',
					title: '油炸丸子'
				}
			]
		})
		
		return products;
	}
	
	async shops() {
		await sleep(300);
		const list = [
			{
				_id: '',
				logo: '/static/mock/shop/1/logo.jpg',
				name: '好机汇二手商品旗舰店1',
				products: [//此产品为所有活动产品（即打折产品）
					{
						_id: '',
						checked: true,
						title: '【二手95新】苹果XR手机Apple iPhone X xr国行全网通 二手手机 双卡双待 黑色64G 全网通',
						image: '/static/mock/shop/1/1.jpg',
						sku: ['耀夜黑','4GB+64GB','官方标配'],
						price: '3099',
						count: 2,
					},
					{
						_id: '',
						checked: true,
						title: '【二手95新】苹果XS Max Apple iPhone xs max国行全网通 二手手机 双卡双待 深空灰64G 全网通',
						image: '/static/mock/shop/1/2.jpg',
						sku: ['耀夜黑','4GB+64GB','官方标配'],
						price: '4899',
						count: 1,
					},
					{
						_id: '',
						checked: true,
						title: '【二手9新】苹果8Plus手机Apple iPhone 8Plus 苹果8P 二手手机 深空灰 265G 全网通',
						image: '/static/mock/shop/1/3.jpg',
						sku: ['耀夜黑','4GB+64GB','官方标配'],
						price: '2788',
						count: 3,
					},
					{
						_id: '',
						checked: true,
						title: '【二手9新】苹果XS Max Apple iPhone xs max 国行MAX 二手手机 双卡双待 金色 265G 全网通',
						image: '/static/mock/shop/1/4.jpg',
						sku: ['耀夜黑','4GB+64GB','官方标配'],
						price: '4488',
						count: 1,
					}
				]
			},
			{
				_id: '',
				logo: '/static/mock/shop/2/logo.jpg',
				name: '赣春旗舰店1',
				products: [//此产品为所有活动产品（即打折产品）
					{
						_id: '',
						checked: false,
						title: '赣春手电钻充电电动螺丝刀多功能电钻套装工具箱家用手电钻锂电钻手钻电起子五金工具套装电木工车载维修组套（亏本促销）12V双速锂电钻王牌套装',
						image: '/static/mock/shop/2/1.jpg',
						sku: ['耀夜黑','4GB+64GB','官方标配'],
						price: '228',
						count: 4,
					},
					{
						_id: '',
						checked: false,
						title: '赣春 无线电动桶装水抽水器饮水机小型压水器泵家用一键自动吸水器充电式出水器矿泉水水桶纯净水大桶水 白色 一键出水款',
						image: '/static/mock/shop/2/2.jpg',
						sku: ['耀夜黑','4GB+64GB','官方标配'],
						price: '69',
						count: 1,
					},
					{
						_id: '',
						checked: false,
						title: '赣春 家用冲击钻头冲击电钻手电钻钻头电钻套装手电钻',
						image: '/static/mock/shop/2/3.jpg',
						sku: ['耀夜黑','4GB+64GB','官方标配'],
						price: '2788',
						count: 1,
					},
				]
			},
			{
				_id: '',
				logo: '/static/mock/shop/3/logo.jpg',
				name: '蓝月亮旗舰店1',
				products: [//此产品为所有活动产品（即打折产品）
					{
						_id: '',
						checked: false,
						title: '蓝月亮 婴儿洗衣液套装 宝宝儿童衣物清洁 植物成分 手洗机洗双用 百合清香 1kg瓶+1kg袋*2补充装袋装',
						image: '/static/mock/shop/3/1.jpg',
						sku: ['耀夜黑','4GB+64GB','官方标配'],
						price: '69',
						count: 3,
					},
				]
			}
		];
	
		return list;
	}
};

export default new Data();