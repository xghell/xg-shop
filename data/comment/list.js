import {generateList, sleep} from '@/common/helper.js';

class Data {
	async commentedList() {
		await sleep(1000);
		
		const list = generateList(2, () => {
			return [
				{
					_id: '',
					title: '【二手95新】苹果XR手机Apple iPhone X xr国行全网通 二手手机 双卡双待 黑色64G 全网通',
					image: '/static/mock/shop/1/1.jpg',
					
					has_comment: true,
					comment: {
						rate: 5,
						content: '质量不错',
						medias: [
							{
								type: 'image',
								src: '/static/mock/product/1.jpg',
							},
							{
								type: 'image',
								src: '/static/mock/product/1.jpg',
							},
						]
					},
					
					has_additional_comment: true,
					additional_comment: {
						content: '用了一段时间感觉还行',
						days: '35',
						medias: [
							{
								type: 'image',
								src: '/static/mock/product/1.jpg',
							},
							{
								type: 'image',
								src: '/static/mock/product/1.jpg',
							},
						]
					},
					
					has_logistics_comment: false,
					
					shop: {
						_id: '',
						logo: '/static/mock/shop/1/logo.jpg',
						name: '好机汇二手商品旗舰店1',
					},
				},
				{
					_id: '',
					title: '【二手95新】苹果XS Max Apple iPhone xs max国行全网通 二手手机 双卡双待 深空灰64G 全网通',
					image: '/static/mock/shop/1/2.jpg',
					
					has_comment: true,
					comment: {
						_id: '',
						rate: 3,
						content: '用起来还行用起来还行用起来还行用起来还行用起来还行用起来还行用起来还行用起来还行用起来还行用起来还行用起来还行用起来还行',
					},
					
					has_additional_comment: false,
					
					has_logistics_comment: true,
					logistics_comment: {
						conformityOfGoodsRate: 3,
						shopOwnerServiceAttitudeRate: 3,
						expressDeliverySpeedRate: 3,
						courierServiceRate: 3,
						expressPackageRate: 3,
					},
					
					shop: {
						_id: '',
						logo: '/static/mock/shop/1/logo.jpg',
						name: '好机汇二手商品旗舰店1',
					},
				},
				{
					_id: '',
					title: '【二手9新】苹果8Plus手机Apple iPhone 8Plus 苹果8P 二手手机 深空灰 265G 全网通',
					image: '/static/mock/shop/1/3.jpg',
					
					has_comment: true,
					comment: {
						_id: '',
						rate: 5,
						content: '',
						medias: [
							{
								type: 'image',
								src: '/static/mock/product/1.jpg',
							},
							{
								type: 'image',
								src: '/static/mock/product/1.jpg',
							},
						]
					},
					
					has_additional_comment: false,
					
					shop: {
						_id: '',
						logo: '/static/mock/shop/1/logo.jpg',
						name: '好机汇二手商品旗舰店1',
					},
				},
				{
					_id: '',
					title: '【二手9新】苹果XS Max Apple iPhone xs max 国行MAX 二手手机 双卡双待 金色 265G 全网通',
					image: '/static/mock/shop/1/4.jpg',
					
					has_comment: false,
					comment: {
						
						rate: 5,
						content: '',
					},
					
					has_additional_comment: false,
					
					shop: {
						_id: '',
						logo: '/static/mock/shop/1/logo.jpg',
						name: '好机汇二手商品旗舰店1',
					},
				}
				
			]
		});
		
		return list;
	}
	
	async commentingList() {
		await sleep(1000);
		
		const list = generateList(2, () => {
			return [
				{
					_id: '',
					title: '【二手95新】苹果XR手机Apple iPhone X xr国行全网通 二手手机 双卡双待 黑色64G 全网通',
					image: '/static/mock/shop/1/1.jpg',
					
					
					shop: {
						_id: '',
						logo: '/static/mock/shop/1/logo.jpg',
						name: '好机汇二手商品旗舰店1',
					},
				},
				{
					_id: '',
					title: '【二手95新】苹果XS Max Apple iPhone xs max国行全网通 二手手机 双卡双待 深空灰64G 全网通',
					image: '/static/mock/shop/1/2.jpg',
					
					
					
					shop: {
						_id: '',
						logo: '/static/mock/shop/1/logo.jpg',
						name: '好机汇二手商品旗舰店1',
					},
				},
				{
					_id: '',
					title: '【二手9新】苹果8Plus手机Apple iPhone 8Plus 苹果8P 二手手机 深空灰 265G 全网通',
					image: '/static/mock/shop/1/3.jpg',
					
					
					shop: {
						_id: '',
						logo: '/static/mock/shop/1/logo.jpg',
						name: '好机汇二手商品旗舰店1',
					},
				},
				{
					_id: '',
					title: '【二手9新】苹果XS Max Apple iPhone xs max 国行MAX 二手手机 双卡双待 金色 265G 全网通',
					image: '/static/mock/shop/1/4.jpg',
					
					
					shop: {
						_id: '',
						logo: '/static/mock/shop/1/logo.jpg',
						name: '好机汇二手商品旗舰店1',
					},
				}
				
			]
		});
		
		return list;
	}
};

export default new Data();