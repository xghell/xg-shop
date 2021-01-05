import {generateList} from '@/common/helper.js'

class Data{
	async slideshows() {
		const slideshows = [
			{
				url: '',
				image: '/static/mock/index/slideshow/1.png',
			},
			{
				url: '',
				image: '/static/mock/index/slideshow/2.png',
			},
			{
				url: '',
				image: '/static/mock/index/slideshow/3.png',
			},
			{
				url: '',
				image: '/static/mock/index/slideshow/4.png',
			}
		];
		
		return slideshows;
	}
	
	async videos() {
		const list = generateList(10, () => {
			return [
			{
				_id: '',
				video: '/static/mock/find/lookup/content/1.mp4',
				poster: '/static/mock/find/lookup/content/1.jpg',
				title: ' 添可(TINECO)无线洗地机IFLOOR Plus家用吸尘器拖地一体机清洗电动拖把【科沃斯集团出品】 ',
				user: {
					avatar: '/static/mock/avatars/1.jpg',
					name: '关注小姐姐关注小姐姐',
					fans_count: ''
				}
			},
			{
				_id: '',
				video: '/static/mock/find/lookup/content/2.mp4',
				poster: '/static/mock/find/lookup/content/2.jpg',
				title: ' 无线洗地机',
				user: {
					avatar: '/static/mock/avatars/2.jpg',
					name: '带你买',
					fans_count: '44444'
				}
			},
			{
				_id: '',
				video: '/static/mock/find/lookup/content/3.mp4',
				poster: '/static/mock/find/lookup/content/3.jpg',
				title: '四件套纯棉家纺 床上用品床单枕套双人全棉斜纹套件1.5/1.8米床被套200*230 爱巢',
				user: {
					avatar: '/static/mock/avatars/3.jpg',
					name: '百福高',
					fans_count: '14500'
				}
			}
		];
		})
		
		
		
		return list;
	}
}

export default new Data();