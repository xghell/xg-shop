const address = {
	addressList() {
		const addressList = [
			{
				is_default: false,
				name: '张翠',
				phone: '15678956478',
				district: '山西省大同市XX区XX街道',
				detail_address: 'XX小区',
			},
			{
				is_default: false,
				name: '李二狗',
				phone: '15678956567',
				district: '山西省大同市XX区XX街道',
				detail_address: 'XX小区',
			},
			{
				is_default: true,
				name: '韩铁蛋蛋',
				phone: '15644446478',
				district: '山西省大同市XX区XX街道',
				detail_address: 'XX小区',
				tag: '公司',
			}
		];
		
		return addressList;
	}
};

export default address;