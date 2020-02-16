const order = {
	orderList() {
		let order = {
			shop: {
				logo: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=424292379,1527521836&fm=26&gp=0.jpg',
				name: '三只松鼠旗舰店',
			},
			orderStatus: '等待收货',
			logistics: {
				info: '您的订单正在配送中（快递员：同路，电话：888888），请您耐心等候',
				infoStyle: 'line-height: 2;',
				time: '2019-1-1 19:10:20',
				timeStyle: 'color: grey'
			},
			productList: []
		};
		
		let product = {
			image: 'http://img0.imgtn.bdimg.com/it/u=365760486,2013986862&fm=26&gp=0.jpg海飞丝爷爷爸爸儿子三件套组合，去屑柔顺保湿功能齐全，海飞丝爷爷爸爸儿子三件套组合，去屑柔顺保湿功能齐全',
			title: '海飞丝爷爷爸爸儿子三件套组合，去屑柔顺保湿功能齐全，海飞丝爷爷爸爸儿子三件套组合，去屑柔顺保湿功能齐全',
			price: '51.1'
		}
		
		let orderList = [];
		let productList = [];
		
		for (let i = 0; i< 5; ++i) {
			for (let j = 0; j < Math.floor(Math.random()*7 + 1); ++j) {
				productList.push(product);
			}
			order.productList = productList.map((item)=>{return item});
			productList = [];
			
			orderList.push(Object.assign({}, order));
		}
		
		return orderList;
	}
}


export default order