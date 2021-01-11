import {generateList, sleep} from '@/common/helper.js'

class Data{
	// 海报app端下拉刷新时展示
	// #ifdef APP-NVUE
	async poster() {
		const poster = '/static/mock/index/nav-bar/poster.png';
		
		return poster;
	}
	// #endif
	async navBarBg() {
		const image = '/static/mock/index/page-top-bg.png';
		
		return image;
	}
	
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
	
	async banner() {
		const banner = {
			url: '',
			image: '/static/mock/index/banner.png'
		};
		
		return banner;
	}
	
	async cateNavs() {
		const cateNavs = [
			{
				url: '',
				image: '/static/mock/index/cate-nav/clothes.png',
				title: '服饰',
			},
			{
				url: '',
				image: '/static/mock/index/cate-nav/coupon.png',
				title: '优惠券',
			},
			{
				url: '',
				image: '/static/mock/index/cate-nav/domestic-appliance.png',
				title: '家用电器',
			},
			{
				url: '',
				image: '/static/mock/index/cate-nav/electronics.png',
				title: '数码电器',
			},
			{
				url: '',
				image: '/static/mock/index/cate-nav/exchange.png',
				title: '以旧换新',
			},
			{
				url: '',
				image: '/static/mock/index/cate-nav/fees.png',
				title: '充值缴费',
			},
			{
				url: '',
				image: '/static/mock/index/cate-nav/fruits.png',
				title: '水果生鲜',
			},
			{
				url: '',
				image: '/static/mock/index/cate-nav/import.png',
				title: '进口国际',
			},
			{
				url: '',
				image: '/static/mock/index/cate-nav/market.png',
				title: '超市',
			},
			{
				url: '',
				image: '/static/mock/index/cate-nav/medicine.png',
				title: '医药',
			},
			{
				url: '',
				image: '/static/mock/index/cate-nav/pet.png',
				title: '萌宠',
			},
			{
				url: '',
				image: '/static/mock/index/cate-nav/travel.png',
				title: '旅行',
			},
			{
				url: '',
				image: '/static/mock/index/cate-nav/vip.png',
				title: '会员',
			},
			{
				url: '',
				image: '/static/mock/index/cate-nav/more.png',
				title: '更多',
			}
		];
		
		return cateNavs;
	}
	
	async seckillProducts() {
		const seckillProducts = [
			{
				_id: '',
				image: '/static/mock/product/1.jpg',
				price: '199',
				promotion_price: '99'
				
			},
			{
				_id: '',
				image: '/static/mock/product/2.jpg',
				price: '199',
				promotion_price: '99'
				
			},
		];
		
		return seckillProducts;
	}
	
	async liveProducts() {
		const liveProducts = [
			{
				_id: '',
				image: '/static/mock/product/1.jpg',
			},
			{
				_id: '',
				image: '/static/mock/product/2.jpg',
			},
		];
		
		return liveProducts;
	}
	
	async specialOfferProducts() {
		const specialOfferProducts = [
			{
				_id: '',
				image: '/static/mock/product/1.jpg',
			},
			{
				_id: '',
				image: '/static/mock/product/2.jpg',
			},
		];
		
		return specialOfferProducts;
	}
	
	async groupBuyProducts() {
		const groupBuyProducts = [
			{
				_id: '',
				image: '/static/mock/product/1.jpg',
			},
			{
				_id: '',
				image: '/static/mock/product/2.jpg',
			},
		];
		
		return groupBuyProducts;
	}
	
	
	async tabTitles() {
		const titles = [
			{
				cate_id: 0,
				title: '精选',
				subtitle: '为你推荐'
			},
			{
				cate_id: 1,
				title: '新品',
				subtitle: '新品速递'
			},
			{
				cate_id: 2,
				title: '直播',
				subtitle: '主播力荐'
			},
			{
				cate_id: 3,
				title: '实惠',
				subtitle: '便宜好货'
			},
			{
				cate_id: 4,
				title: '进口',
				subtitle: '京东国际'
			}
		];
		
		return titles;
	}
	
	async tabProducts(cate_id, page) {
		await sleep(300);
		const products = generateList(5, (index) => {
			return [
				{
					_id: '',
					image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1296142825,126703938&fm=26&gp=0.jpg',
					title: '桃子 新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子',
				},
				{
					_id: '',
					image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=260493562,617646781&fm=26&gp=0.jpg',
					title: '台灯'
				},
				{
					_id: '',
					image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=118130856,2519923284&fm=26&gp=0.jpg',
					title: '油炸丸子'
				}
			]
		})
		
		return products;
	}
}

export default new Data();