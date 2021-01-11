import {generateList,sleep} from '@/common/helper.js'

class Data {
	async products(page) {
		await sleep(300);
		
		const products = generateList(5, (index) => {
			return [
				{
					_id: '',
					image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1296142825,126703938&fm=26&gp=0.jpg',
					title: '桃子 新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子新鲜美味的大桃子',
					price: '20.9',
					comment_count: '300000',
				},
				{
					_id: '',
					image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=260493562,617646781&fm=26&gp=0.jpg',
					title: '台灯',
					price: '36.4',
					comment_count: '3200',
				},
				{
					_id: '',
					image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=118130856,2519923284&fm=26&gp=0.jpg',
					title: '油炸丸子',
					price: '11.3',
					comment_count: '6532',
				}
			]
		})
		
		return products;
	}
};

export default new Data();