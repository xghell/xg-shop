import {generateList, sleep} from '@/common/helper.js';

class Data {
	async userInfo() {
		const userInfo = {
			avatar: '',
			name: 'xghell',
		};
		return userInfo;
	}
	
	async productSku(product_id) {
		return '双卡双待，黑色，64G';
	}
};

export default new Data();