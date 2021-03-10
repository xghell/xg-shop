import {generateList,sleep} from '@/common/helper.js'

class Data {
	async linkSettinges() {
		const list = [
			{
				name: '消息接收管理'
			},
		];
		
		return list;
	}
	
	async booleanSettinges() {
		const list = [
			{
				name: '声音提醒',
				value: true
			},
			{
				name: '震动提醒',
				value: true
			}
		];
		
		return list;
	}
};

export default new Data();