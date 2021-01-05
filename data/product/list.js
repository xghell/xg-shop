import {generateList,sleep} from '@/common/helper.js'

class Data {
	async products(page) {
		await sleep(1000);
		
		const products = generateList(5, (index) => {
			return [
				{
					_id: '',
					image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1296142825,126703938&fm=26&gp=0.jpg',
					title: '桃子 新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子',
					price: '20.9',
					comment_count: '300000',
				},
				{
					_id: '',
					image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=260493562,617646781&fm=26&gp=0.jpg',
					title: '台灯',
					price: '36.4',
					comment_count: '3200',
				},
				{
					_id: '',
					image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=118130856,2519923284&fm=26&gp=0.jpg',
					title: '油炸丸子',
					price: '11.3',
					comment_count: '6532',
				}
			]
		})
		
		return products;
	}
	
	
	async serviceOptions() {
		await sleep(1000);
		
		const list = [
			{
				'title': '包邮'
			},
			{
				'title': '限时送达'
			},
			{
				'title': '货到付款'
			},
			{
				'title': '仅看有货'
			},
			{
				'title': '国际'
			},
			{
				'title': '促销'
			},
			{
				'title': '全球配送'
			},
			{
				'title': '会员专享'
			}
		];
		
		return list;
	}

	async brandOptions() {
		await sleep(1000);
		
		const list = [
			{
				'title': '米家'
			},
			{
				'title': '雷士'
			},
			{
				'title': '大头人'
			},
			{
				'title': '阳致'
			},
			{
				'title': '几光'
			},
			{
				'title': '飞利浦'
			},
			{
				'title': '万卉'
			},
			{
				'title': '海尔'
			},
			{
				'title': '智五'
			},
			{
				'title': '如初'
			}
		];
		
		return list;
	}

	async specificationOptions() {
		await sleep(1000);
		
		const specificationOptions = [
			{
				group: '类别',
				params: [
					{
						title: '舞台灯'
					},
					{
						title: '小夜灯'
					},
					{
						title: '其他'
					}
				]
			},
			{
				group: '控制方式',
				params: [
					{
						title: '智能控制'
					},
					{
						title: '遥控控制'
					},
					{
						title: '感应控制'
					},
					{
						title: '脚踏控制'
					},
					{
						title: '声音控制'
					},
					{
						title: '触摸控制'
					},
					{
						title: '按键控制'
					},
					{
						title: '其他'
					}
				]
			},
			{
				group: '适用场景',
				params: [
					{
						title: '舞池'
					},
					{
						title: '客厅'
					},
					{
						title: '卧室'
					},
					{
						title: '儿童房'
					},
					{
						title: '走廊'
					},
					{
						title: '衣柜'
					},
					{
						title: '卫生间'
					},
					{
						title: '宿舍'
					},
					{
						title: '酒店'
					},
					{
						title: '其他'
					}
				]
			},
			{
				group: '电压',
				params: [
					{
						title: '≤36V'
					},
					{
						title: '36V-100V'
					},
					{
						title: '100V-240V'
					},
					{
						title: '≥240V'
					},
					{
						title: '110V'
					},
					{
						title: '220V'
					},
				]
			},
			{
				group: '功率',
				params: [
					{
						title: '0-20W'
					},
					{
						title: '20-30W'
					},
					{
						title: '30-40W'
					},
					{
						title: '40-50W'
					},
					{
						title: '50-100W'
					},
					{
						title: '100W以上'
					},
				]
			},
			{
				group: '照射面积',
				params: [
					{
						title: '0-3㎡'
					},
					{
						title: '3-6㎡'
					},
					{
						title: '6-10㎡'
					},
					{
						title: '10-15㎡'
					},
					{
						title: '15-30㎡'
					},
					{
						title: '30-50㎡'
					},
					{
						title: '50㎡以上'
					},
				]
			}
		];
		
		return specificationOptions;
	}
};

export default new Data();