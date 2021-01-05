import {generateList} from '@/common/helper.js'

class Data {
	async cateLives() {
		const list = generateList(5, () => {
			return [
			{
				cate: '居家生活',
				desc: '百款好物 半价嗨购',
				products: [
					{
						live: '/static/mock/find/lookup/content/1.mp4',
						poster: '/static/mock/find/lookup/content/1.jpg',
						title: '吸水拖把 吸拖洗一体 干湿都能吸 24期免息 日供约3.4元吸水拖把 吸拖洗一体 干湿都能吸 24期免息 日供约3.4元',
						price: '89.66',
						promotion_price: '24.3'
					},
					{
						live: '/static/mock/find/lookup/content/1.mp4',
						poster: '/static/mock/find/lookup/content/1.jpg',
						title: '吸水拖把 吸拖洗一体 干湿都能吸 24期免息 日供约3.4元吸水拖把 吸拖洗一体 干湿都能吸 24期免息 日供约3.4元',
						price: '89.66',
						promotion_price: '24.3'
					},
					{
						live: '/static/mock/find/lookup/content/1.mp4',
						poster: '/static/mock/find/lookup/content/1.jpg',
						title: '吸水拖把 吸拖洗一体 干湿都能吸 24期免息 日供约3.4元吸水拖把 吸拖洗一体 干湿都能吸 24期免息 日供约3.4元',
						price: '89.66',
						promotion_price: '24.3'
					},
					{
						live: '/static/mock/find/lookup/content/1.mp4',
						poster: '/static/mock/find/lookup/content/1.jpg',
						title: '吸水拖把 吸拖洗一体 干湿都能吸 24期免息 日供约3.4元吸水拖把 吸拖洗一体 干湿都能吸 24期免息 日供约3.4元',
						price: '89.66',
						promotion_price: '24.3'
					},
					{
						live: '/static/mock/find/lookup/content/1.mp4',
						poster: '/static/mock/find/lookup/content/1.jpg',
						title: '吸水拖把 吸拖洗一体 干湿都能吸 24期免息 日供约3.4元吸水拖把 吸拖洗一体 干湿都能吸 24期免息 日供约3.4元',
						price: '89.66',
						promotion_price: '24.3'
					},
					{
						live: '/static/mock/find/lookup/content/1.mp4',
						poster: '/static/mock/find/lookup/content/1.jpg',
						title: '吸水拖把 吸拖洗一体 干湿都能吸 24期免息 日供约3.4元吸水拖把 吸拖洗一体 干湿都能吸 24期免息 日供约3.4元',
						price: '89.66',
						promotion_price: '24.3'
					}
				]
			}
		];
		})
		
		
		return list;
	}
};

export default new Data();