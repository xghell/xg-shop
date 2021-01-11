import {generateList,sleep} from '@/common/helper.js'

class Data {
	async banners() {
		const banners = [
			{
				image: '/static/mock/shop/shop/2.png',
				url: '/pages/product/detail'
			},
			{
				image: '/static/mock/shop/shop/3.png',
				url: '/pages/product/detail'
			},
			{
				image: '/static/mock/shop/shop/4.jpg',
				url: '/pages/product/detail'
			},
			{
				image: '/static/mock/shop/shop/5.jpg',
				url: '/pages/product/detail'
			},
			{
				image: '/static/mock/shop/shop/6.jpg',
				url: '/pages/product/detail'
			},
			{
				image: '/static/mock/shop/shop/7.jpg',
				url: '/pages/product/detail'
			}
		];
		
		return banners;
	}
};

export default new Data();