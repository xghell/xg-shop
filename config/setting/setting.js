import style from '@/common/style.js';

const setting = {
	data() {
		return {
			// navBarConfig: {
			// 	fixedHeight: '100rpx',
			// 	title: {
			// 		fontFamily: 'xg-iconfont',
			// 		textStyle: `
			// 					font-size: ${style.UNI_ICON_SIZE_MI};
			// 					`,
			// 		iconList: [
			// 			{
			// 				id: '',
			// 				text: '购物车',
			// 			}
			// 		],
			// 	},
			// 	right: {
			// 		fontFamily: 'xg-iconfont',
			// 		textStyle: `margin-right: ${style.UNI_SPACING_COL_BASE};
			// 					font-size: ${style.UNI_ICON_SIZE_MI};
			// 					`,
			// 		iconList: [
			// 			{
			// 				id: 'message',
			// 				text: '\ue624',
			// 			}
			// 		],
			// 	}
					
			// },
			
			userSectionConfig: [
				{
					url: '/pages/address/address',
					leftTitle: '地址管理',
					rightTitle: ''
				},
			],
			
			accountSectionConfig: [
				{
					url: '',
					leftTitle: '账户与安全',
					rightTitle: '密码/支付等管理'
				},
				{
					url: '',
					leftTitle: '设置字体大小',
					rightTitle: ''
				},
				{
					url: '',
					leftTitle: '支付设置',
					rightTitle: ''
				},
				{
					url: '',
					leftTitle: '增票资质',
					rightTitle: '添加增票资质'
				},
				{
					url: '',
					leftTitle: '我的档案',
					rightTitle: '添加汽车/宝宝等档案'
				},
				{
					url: '',
					leftTitle: '通用',
					rightTitle: '清楚本地缓存等'
				},
			],
			
			functionalSectionConfig: [
				{
					url: '',
					leftTitle: '会员',
					rightTitle: '免费试用'
				},
				{
					url: '',
					leftTitle: '家庭号设置',
					rightTitle: '帮我付/亲密卡等'
				},
				{
					url: '',
					leftTitle: '功能实验室',
					rightTitle: '提前体验新功能'
				},
				{
					url: '',
					leftTitle: '功能反馈',
					rightTitle: ''
				},
				{
					url: '',
					leftTitle: '关于',
					rightTitle: ''
				},
			]
			
			
		}	
	},
}

export default setting;