import {generateList,sleep} from '@/common/helper.js'

class Data {
	async count() {
		await sleep(300);
		
		return '2';
	}
	
	async skuOptions() {
		await sleep(300);
		
		const list = [
			{
				currentIndex: 0,
				name: '外观',
				value: [
					{
						type: 'image',
						name: '黑色',
						value: '/static/mock/product/detail/color/black.jpg'
					},
					{
						type: 'image',
						name: '白色',
						value: '/static/mock/product/detail/color/white.jpg'
					},
					{
						type: 'image',
						name: '蓝色',
						value: '/static/mock/product/detail/color/blue.jpg'
					},
					{
						type: 'image',
						name: '绿色',
						value: '/static/mock/product/detail/color/green.jpg'
					},
					{
						type: 'image',
						name: '红色',
						value: '/static/mock/product/detail/color/red.jpg'
					}
				]
			},
			{
				currentIndex: 0,
				name: '版本',
				value: [
					{
						type: 'text',
						value: '64GB'
					},
					{
						type: 'text',
						value: '128GB'
					},
					{
						type: 'text',
						value: '256GB'
					},
				]
			},
			{
				currentIndex: 0,
				name: '购买方式',
				value: [
					{
						type: 'text',
						value: '公开版'
					},
					{
						type: 'text',
						value: '值享焕新版'
					},
					{
						type: 'text',
						value: '换修无忧年付版'
					}
				]
			},
		];
		
		return list;
	}
	
	async info(skuOptions) {
		await sleep(300);
		
		return {
			title: '【换修无忧年付版】Apple iPhone 12(A2404)64GB 白色 支持移动联通电信5G双卡双待手机',
			price: 5000*Math.random() + 5000,
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
	}
	
	async promotionList(skuOptions) {
		const list = [
			{
				name: '多买多优惠',
				content: '满1件，总价打9.5折；满2件，总价打9折；满3件，总价打8折'
			},
			{
				name: '满额返券',
				content: '购母婴、生鲜、酒水、家装建材、宠物、清洁、个护、食品、玩具、家电、电脑数码部分自营商品满1元返券包'
			},
			{
				name: '跨品类满折',
				content: '购满2类，总价打9.7折；购满3类，总价打9.5折；购满4类，总价打9折；每类限购10件'
			}
		];
		
		return list;
	}
	
	async addressOption() {
		await sleep(300);
		
		const list = generateList(10, () => {
			return [
				{
					province: '湖南省',
					town: '长沙市',
					district: '开福区',
					detail: '福元路111号',
				},
				{
					province: '陕西省',
					town: '西安市',
					district: '高陵区',
					detail: '高山路111号',
				},
				{
					province: '山西省',
					town: '太原市',
					district: 'XX区',
					detail: 'XX路111号',
				},
			];
		});
		
		return {
			currentIndex: 0,
			list,
		};
	}

	async commentInfo() {
		const info = {
			labels: ['反应超快', '漂亮大方', '手感一流', '清晰度高'],
			list: generateList(2, () => {
				return [
					{
						username: 'jd_1209875hkj',
						avatar: '/static/mock/avatars/1.jpg',
						comment: '手机确实很棒，外形看起来舒服，5G手机出来直接换的，直接换了12手感很好，颜色很喜欢，大小合适，特别好看，屏幕音效也特别好，特别特别喜欢；拍照效果也特别好，很清楚，运行速度那就更没得说，特别快。',
						star: '5',
						mediaList: [
							{
								type: 'video',
								poster: '/static/mock/product/detail/5.jpg',
								duration: '10',
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
						]
					}
				]
			})
		};
		
		return info;
	}
	
	
	async introduction() {
		const list = [
			{
				image: '/static/mock/product/detail/1.jpg'
			},
			{
				image: '/static/mock/product/detail/2.jpg'
			},
			{
				image: '/static/mock/product/detail/3.jpg'
			},
			{
				image: '/static/mock/product/detail/4.jpg'
			},
			{
				image: '/static/mock/product/detail/5.jpg'
			},
			{
				image: '/static/mock/product/detail/6.jpg'
			}
		];
		
		return list;
	}
};

export default new Data();