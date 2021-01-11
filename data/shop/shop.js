import {generateList,sleep} from '@/common/helper.js'

class Data {
	async topBgImage() {
		return '/static/mock/shop/shop/1.png';
	}
	
	async shopInfo() {
		await sleep(300);
		
		return {
			logo: '/static/mock/shop/1/logo.jpg',
			name: '好机汇手机旗舰店',
			rate: '4',
			concernedCount: '118000',
			isConcerned: true,
		}
	}
};

export default new Data();