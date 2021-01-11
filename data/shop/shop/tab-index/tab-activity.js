import {generateList,sleep} from '@/common/helper.js'

class Data {
	async seckillProducts() {
		const list = [
			{
				_id: '',
				image: '/static/mock/product/1.jpg',
				title: '【换修无忧年付版】Apple iPhone 12(A2404)64GB 白色 支持移动联通电信5G双卡双待手机',
				price: '199',
				promotion_price: '99',
				
				countdown: {
					hour: '23',
					minute: '34',
					second: '45'
				}
			},
			{
				_id: '',
				image: '/static/mock/product/1.jpg',
				title: 'Apple iPhone 12(A2404)64GB 白色 支持移动联通电信5G双卡双待手机',
				price: '99',
				promotion_price: '1',
				
				countdown: {
					hour: '3',
					minute: '57',
					second: '15'
				}
			},
		];
		
		return list;
	}
	
	async lowestPriceProducts() {
		const list = generateList(10, () => {
			return [
				{
					_id: '',
					image: '/static/mock/product/1.jpg',
					title: '【换修无忧年付版】Apple iPhone 12(A2404)64GB 白色 支持移动联通电信5G双卡双待手机',
					price: '199',
				},
			]
		});
		
		return list;
	}
	
	async promotionProducts() {
		const list = generateList(20, () => {
			return [
				{
					_id: '',
					image: '/static/mock/product/1.jpg',
					title: '【换修无忧年付版】Apple iPhone 12(A2404)64GB 白色 支持移动联通电信5G双卡双待手机',
					price: '199',
				},
			]
		});
		
		return list;
	}
};

export default new Data();