import {generateList,sleep} from '@/common/helper.js'

class Data {
	async newProducts() {
		await sleep(300);
		
		const list = generateList(2, () => {
			return {
				date: '11月24日',
				products: generateList(4, () => {
					return [
						{
							_id: '',
							image: '/static/mock/product/1.jpg',
							title: '【换修无忧年付版】Apple iPhone 12(A2404)64GB 白色 支持移动联通电信5G双卡双待手机',
							price: '199',
						},
					]
				})
			}
		})
		
		
		
		return list;
	}
};

export default new Data();