import {generateList,sleep} from '@/common/helper.js'

class Data {
	async navBarBg() {
		const image = '/static/mock/index/page-top-bg1.png';
		
		return image;
	}
	
	async userInfo() {
		await sleep(1000);
		
		const userInfo = {
			username: 'jd182984375349',
			nickname: 'xghell',
			avatar: '/static/mock/avatars/1.jpg',
		};
		
		return userInfo;
	}
	
	
	async trackInfoList() {
		await sleep(1000);
		
		const trackList = [
			{
				url: '',
				name: '商品收藏',
				value: 0,
			},
			{
				url: '',
				name: '店铺关注',
				value: 9
			},
			{
				url: '',
				name: '喜欢的内容',
				value: 1,
			},
			{
				url: '',
				name: '浏览记录',
				value: 100
			}
		];
		
		return trackList;
	}
	
	
	async orderInfoList() {
		await sleep(1000);
		
		const list = [
			{
				url: '/pages/order/list',
				title: '待付款',
				subtitle: '',
				image: '/static/user/order-info/daifukuan.png'
			},
			{
				url: '/pages/order/list',
				title: '待收货',
				subtitle: '',
				image: '/static/user/order-info/daishouhuo.png'
			},
			{
				url: '/pages/comment/list',
				title: '待评价',
				subtitle: '',
				image: '/static/user/order-info/daipingjia.png'
			},
			{
				url: '',
				title: '退换/售后',
				subtitle: '',
				image: '/static/user/order-info/tuihuanshouhou.png'
			},
			{
				url: '/pages/order/list',
				title: '我的订单',
				subtitle: '查看电子发票',
				image: '/static/user/order-info/dingdan.png'
			}
		];
		
		return list;
	}
	
	async accountInfoList() {
		await sleep(1000);
		
		const accountInfoList = [
			{
				url: '',
				image: '',
				title: '金豆',
				subtitle: '签到领金豆',
				value: 972,
			},
			{
				url: '',
				image: '',
				title: '优惠券',
				subtitle: '',
				value: 2,
			},
			{
				url: '',
				image: '',
				title: '白条',
				subtitle: '想省钱点这里',
				value: 0,
			},
			{
				url: '',
				image: '',
				title: '小金库',
				subtitle: '新人有礼',
				value: 0,
			},
			{
				url: '',
				image: '/static/user/account-info/wodeqianbao.png',
				title: '我的钱包',
				subtitle: '',
				value: '',
			},
		];
		
		return accountInfoList;
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
			},
			{
				cate_id: 5,
				title: '优品',
				subtitle: '优质资源'
			}
		];
		
		return titles;
	}
	async products(cate_id, page) {
		await sleep(1000);
		
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
};

export default new Data();