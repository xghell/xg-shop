import {generateList} from '@/common/helper.js'

class Data {
	constructor() {
		this.cateRaws = this.getCates();
	}
	
	async getCates() {
		const cates = generateList(20, function(index) {
			return {
				name: '推荐分类' + index,
				slideshows: [
					{
						url: '',
						image: '/static/mock/index/slideshow/1.png',
					},
					// {
					// 	url: '',
					// 	image: '/static/mock/index/slideshow/2.png',
					// },
					// {
					// 	url: '',
					// 	image: '/static/mock/index/slideshow/3.png',
					// },
				],
				children: [
					{
						name: '常用分类' + index,
						children: [
							{
								name: '智能手机',
								image: '/static/mock/product/1.jpg'
							},
							{
								name: '电动牙刷',
								image: '/static/mock/product/2.jpg'
							},
							{
								name: '吹风机',
								image: '/static/mock/product/3.jpg'
							},
							{
								name: '电动牙刷',
								image: '/static/mock/product/2.jpg'
							},
							{
								name: '吹风机',
								image: '/static/mock/product/3.jpg'
							}
						]
					},
					{
						name: '常用分类',
						children: [
							{
								name: '智能手机',
								image: '/static/mock/product/1.jpg'
							},
							{
								name: '电动牙刷',
								image: '/static/mock/product/2.jpg'
							},
							{
								name: '吹风机',
								image: '/static/mock/product/3.jpg'
							},
							{
								name: '电动牙刷',
								image: '/static/mock/product/2.jpg'
							},
							{
								name: '吹风机',
								image: '/static/mock/product/3.jpg'
							}
						]
					},
					{
						name: '常用分类',
						children: [
							{
								name: '智能手机',
								image: '/static/mock/product/1.jpg'
							},
							{
								name: '电动牙刷',
								image: '/static/mock/product/2.jpg'
							},
							{
								name: '吹风机',
								image: '/static/mock/product/3.jpg'
							},
							{
								name: '电动牙刷',
								image: '/static/mock/product/2.jpg'
							},
							{
								name: '吹风机',
								image: '/static/mock/product/3.jpg'
							}
						]
					},
					{
						name: '常用分类',
						children: [
							{
								name: '智能手机',
								image: '/static/mock/product/1.jpg'
							},
							{
								name: '电动牙刷',
								image: '/static/mock/product/2.jpg'
							},
							{
								name: '吹风机',
								image: '/static/mock/product/3.jpg'
							},
							{
								name: '电动牙刷',
								image: '/static/mock/product/2.jpg'
							},
							{
								name: '吹风机',
								image: '/static/mock/product/3.jpg'
							}
						]
					}
				]
			}
		})
		
		return cates;
	}
	
	async cates() {
		return this.cateRaws;
	}
	
	async cateTabTitles() {
		return (await this.cateRaws).map(item => item.name);
	}
};

export default new Data();