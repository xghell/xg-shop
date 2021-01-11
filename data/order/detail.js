import {generateList,sleep} from '@/common/helper.js'

class Data {
	async bgImage() {
		return '/static/mock/order/detail/page-top-bg.png'
	}
	
	async logistics() {
		await sleep(300);
		
		const logistics = {
			signer: {
				name: '门卫'
			},
			courier: {
				name: '汪汉林',
				phone: '15642568975'
			}
		}
		
		return logistics;
	}
	
	async consignee() {
		await sleep(300);
		
		const consignee = {
			name: '王二老',
			phone: '15648792575',
			address: {
				province: '陕西省',
				town: '咸阳市',
				district: '秦都区',
				detail: '世纪大道'
			}
		}
		
		return consignee;
	}
	
	
	async shop(cate_id) {
		await sleep(300);
		const shop = {
			_id: '',
			logo: '/static/mock/shop/1/logo.jpg',
			name: '好机汇二手商品旗舰店1',
			products: [//此产品为所有活动产品（即打折产品）
				{
					_id: '',
					title: '【二手95新】苹果XR手机Apple iPhone X xr国行全网通 二手手机 双卡双待 黑色64G 全网通',
					image: '/static/mock/shop/1/1.jpg',
					price: '3099',
					count: 2,
				},
				{
					_id: '',
					title: '【二手95新】苹果XS Max Apple iPhone xs max国行全网通 二手手机 双卡双待 深空灰64G 全网通',
					image: '/static/mock/shop/1/2.jpg',
					price: '4899',
					count: 1,
				},
				{
					_id: '',
					title: '【二手9新】苹果8Plus手机Apple iPhone 8Plus 苹果8P 二手手机 深空灰 265G 全网通',
					image: '/static/mock/shop/1/3.jpg',
					price: '2788',
					count: 3,
				},
				{
					_id: '',
					title: '【二手9新】苹果XS Max Apple iPhone xs max 国行MAX 二手手机 双卡双待 金色 265G 全网通',
					image: '/static/mock/shop/1/4.jpg',
					price: '4488',
					count: 1,
				}
			]
		}
		
		
		return shop;
	}
	
	async orderInfo() {
		const info = {
			number: '1325684253',
			order_time: '2020-09-28 22:51:11',
			payment_method: '微信支付',
			payment_time: '2020-09-28 22:55:54',
			delivery_method: '顺丰快递',
			expected_delivery_time: '2020-09-29, 09:00-15:00',
			
			transportation_expense: '0',
			promotion_amount: '60.50'
		}
		
		return info;
	}
};

export default new Data();