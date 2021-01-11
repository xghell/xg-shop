import {generateList,sleep} from '@/common/helper.js'

class Data {
	async buyerShows() {
		await sleep(300);
		
		const list = generateList(9, () => {
			return [
				{
					date: '2021-1-1',
					thumbUpCount: '2',
					title: '买来已经用了一个多星期了，没有出现任何问题，就是电池换过，电池健康百分之90以上，挺耐用的',
					user: {
						username: 'J***d',
						avatar: '/static/mock/avatars/1.jpg'
					},
					poster: '/static/mock/product/detail/5.jpg',
					mediaList: [
						{
							type: 'video',
							poster: '/static/mock/product/detail/5.jpg',
							src: '/static/mock/product/detail/1.mp4'
						},
						{
							type: 'image',
							src: '/static/mock/product/detail/1.jpg'
						},
						{
							type: 'image',
							src: '/static/mock/product/detail/2.jpg'
						},
						{
							type: 'image',
							src: '/static/mock/product/detail/3.jpg'
						},
						{
							type: 'image',
							src: '/static/mock/product/detail/4.jpg'
						}
					],
				}
			]
		});
		
		return list;
	}
};

export default new Data();