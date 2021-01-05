import {generateList,sleep} from '@/common/helper.js'

class Data {
	async addresses() {
		await sleep(1000);
		
		const list = generateList(1, () => {
			return [
				{
					is_default: false,
					tag: '家',
					consignee_name: '王何来',
					consignee_phone: '15232564889',
					province: '湖南省',
					town: '长沙市',
					district: '开福区',
					detail: '福元路295号'
				},
				{
					is_default: false,
					tag: '公司',
					consignee_name: '王何来',
					consignee_phone: '15232564889',
					province: '湖南省',
					town: '长沙市',
					district: '开福区',
					detail: '福元路295号'
				},
				{
					is_default: false,
					tag: '自定义标签',
					consignee_name: '王何来',
					consignee_phone: '15232564889',
					province: '湖南省',
					town: '长沙市',
					district: '开福区',
					detail: '福元路295号'
				}
			]
		});
		
		list.unshift({
			is_default: true,
			tag: '公司',
			consignee_name: '王何来',
			consignee_phone: '15232564889',
			province: '湖南省',
			town: '长沙市',
			district: '开福区',
			detail: '福元路295号'
		})
		
		return list;
	}
};

export default new Data();