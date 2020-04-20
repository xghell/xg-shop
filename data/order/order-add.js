const data = {
	address() {
		const address = {
			is_default: true,
			name: '韩铁蛋蛋',
			phone: '15644446478',
			district: '山西省大同市XX区XX街道',
			detail_address: 'XX小区',
			tag: '公司',
		};
		
		return address;
	},
	orderList() {
		const orderList = [
			{
				shop: {
					logo: 'http://img5.imgtn.bdimg.com/it/u=2598541182,3731211981&fm=26&gp=0.jpg',
					name: '三只松鼠旗舰店'
				},
				productList: [
					{
						image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2910427549,3230519692&fm=26&gp=0.jpg',
						title: '三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠',
						detail: '2斤送同款（发4斤装）2斤送同款（发4斤装）2斤送同款（发4斤装）',
						price: '15.36',
						count: '3',
					},
					{
						image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2910427549,3230519692&fm=26&gp=0.jpg',
						title: '三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠',
						price: '15.36',
						count: '7',
					},
				]
			},
			{
				shop: {
					logo: 'http://img5.imgtn.bdimg.com/it/u=2598541182,3731211981&fm=26&gp=0.jpg',
					name: '三只松鼠旗舰店'
				},
				productList: [
					{
						image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2910427549,3230519692&fm=26&gp=0.jpg',
						title: '三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠',
						price: '15.36'
					},
				]
			},
			{
				shop: {
					logo: 'http://img5.imgtn.bdimg.com/it/u=2598541182,3731211981&fm=26&gp=0.jpg',
					name: '三只松鼠旗舰店'
				},
				productList: [
					{
						image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2910427549,3230519692&fm=26&gp=0.jpg',
						title: '三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠',
						price: '15.36'
					},
					{
						image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2910427549,3230519692&fm=26&gp=0.jpg',
						title: '三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠',
						price: '15.36'
					},
				]
			},
			{
				shop: {
					logo: 'http://img5.imgtn.bdimg.com/it/u=2598541182,3731211981&fm=26&gp=0.jpg',
					name: '三只松鼠旗舰店'
				},
				productList: [
					{
						image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2910427549,3230519692&fm=26&gp=0.jpg',
						title: '三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠',
						price: '15.36'
					},
					{
						image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2910427549,3230519692&fm=26&gp=0.jpg',
						title: '三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠',
						price: '15.36'
					},
					{
						image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2910427549,3230519692&fm=26&gp=0.jpg',
						title: '三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠',
						price: '15.36'
					},
				]
			}
		];
		
		return orderList;
	},
};

export default data;