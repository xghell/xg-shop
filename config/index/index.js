const index = {
	data() {
		return {
			xgNavBar: {
				backgroundImage: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2346819948,4073569407&fm=26&gp=0.jpg',
				searchInput: {
					searchInputStyle: 'height: 60rpx;background-color: #FFF;border-radius: 1000px;margin-bottom: 10rpx;margin-left: 16rpx;margin-right: 16rpx;',
					inputStyle: 'font-size: 14px;',
					leftIcon: {
						fontFamily: 'xg-iconfont',
						text: '\ue651'
					},
					rightIcon: {
						fontFamily: 'xg-iconfont',
						text: '\ue623'
					}
				},
				left: {
					fontFamily: 'xg-iconfont',
					iconStyle: 'margin-left: 16rpx;',
					textStyle: 'color:#FFF;',
					iconList: [
						{
							id: 'run',
							text: '\ue76f',
							textStyle: 'font-size: 26px;',
						},
						{
							id: 'rise',
							fontFamily: '黑体',
							text: '中国加油！武汉加油！',
							textStyle: 'font-size: 16px;',
						}
					]
				},
				right: {
					fontFamily: 'xg-iconfont',
					iconStyle: 'margin-right: 16rpx;',
					textStyle: 'margin-bottom: 10rpx; margin-top: 10rpx; color:#FFF',
					subtitleStyle: 'margin-bottom: 10rpx;color:#FFF;',
					iconList: [
						{
							id: 'scan',
							text: '\ue60c',
							subtitle: '扫啊扫'
						},
						{
							id: 'message',
							text: '\ue624',
							subtitle: '消息'
						}
					]
				}
			},
			
			
			test: {
				'zh_CN': '你好',
				'en_US': 'hello'
			}
		}
	},
	methods: {
		...getApp().globalData.lang
	}
}

export default index;