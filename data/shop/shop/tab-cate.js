import {generateList,sleep} from '@/common/helper.js'

class Data {
	async cates() {
		const list = generateList(5, () => {
			return  [
				{
					_id: '',
					title: 'apple专区'
				},
				{
					_id: '',
					title: '华为专区'
				},
				{
					_id: '',
					title: '荣耀专区'
				},
				{
					_id: '',
					title: 'OPPO专区'
				},
				{
					_id: '',
					title: 'VIVO专区'
				}
			];
		});
		
		return list;
	}
};

export default new Data();