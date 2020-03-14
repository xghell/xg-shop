import style from '@/common/style.js';

const user = {
	data() {
		return {
			navBgImageConfig: 'http://img0.imgtn.bdimg.com/it/u=3297191922,2404858156&fm=26&gp=0.jpg',
			navBarConfig: {
				left: {
					iconStyle: `margin-left: ${style.UNI_SPACING_COL_BASE};
								margin-top: ${style.UNI_SPACING_ROW_SM};
								margin-bottom: ${style.UNI_SPACING_ROW_SM};
								`,
					iconList: [
						{
							id: 'avatar',
							thumb: '',
							thumbStyle: `
										border-radius: ${style.UNI_BORDER_RADIUS_CIRCLE};
										width: ${style.UNI_ICON_SIZE_SM};
										height: ${style.UNI_ICON_SIZE_SM};
										`,
						},
					]
				},
				right: {
					fontFamily: 'xg-iconfont',
					iconStyle: `margin-right: ${style.UNI_SPACING_COL_BASE};`,
					textStyle: `margin-bottom: ${style.UNI_SPACING_ROW_SM}; 
								margin-top: ${style.UNI_SPACING_ROW_SM}; 
								font-size: ${style.UNI_ICON_SIZE_SM};
								color:${style.UNI_TEXT_COLOR_WHITE};`,
					titleStyle: `color:${style.UNI_TEXT_COLOR_WHITE};`,
					iconList: [
						{
							id: 'setting',
							url: '',
							title: '设置',
						},
						{
							id: 'message',
							text: '\ue624',
						}
					],
				},
				title: {
					textStyle: `color:${style.UNI_TEXT_COLOR_WHITE};`,
					iconList: [
						{
							id: 'user',
							text: '',
						}
					],
				}
					
			},
			
			orderSectionConfig: {
				fontFamily: 'xg-iconfont',
				textStyle: `font-size: ${style.UNI_ICON_SIZE_MD}`,
				titleStyle: `font-size: ${style.UNI_FONT_SIZE_SM}`,
				subtitleStyle: `font-size: ${style.UNI_FONT_SIZE_MI}`,
				iconList: [
					{
						text: '\ue607',
						title: '待付款',
						subtitle: '',
					},
					{
						text: '\ue604',
						title: '待收货',
						subtitle: '',
					},
					{
						text: '\ue66e',
						title: '待评价',
						subtitle: '送积分',
					},
					{
						text: '\ue60d',
						title: '退换/售后',
						subtitle: '',
					},
					{
						text: '\ue627',
						title: '我的订单',
						subtitle: '全部订单',
						textStyle: `color: ${style.UNI_TEXT_COLOR_RED};`
					},
				]
			},
			
			serviceListConfig: {
				fontFamily: 'xg-iconfont',
				thumbStyle: `width: ${style.UNI_ICON_SIZE_BASE};
							height: ${style.UNI_ICON_SIZE_BASE};`,
				titleStyle: `font-size: ${style.UNI_FONT_SIZE_SM}`,
				subtitleStyle: `font-size: ${style.UNI_FONT_SIZE_MI}`,
				iconList: [
					{
						thumb: '/static/user/kehufuwu.png',
						title: '客户服务',
						subtitle: '',
					},
					{
						thumb: '/static/user/jijian.png',
						title: '寄件服务',
						subtitle: '快递/收纳存储',
					},
					{
						thumb: '/static/user/huanfu.png',
						title: '主题换肤',
						subtitle: '春天来了',
					},
					{
						thumb: '/static/user/guanjiaxuanzhong.png',
						title: '闲置管家',
						subtitle: '',
					},
					{
						thumb: '/static/user/wenyisheng.png',
						title: '问医生',
						subtitle: '',
					},
					{
						thumb: '/static/user/wodepintuan.png',
						title: '我的拼团',
						subtitle: '',
					},
					{
						thumb: '/static/user/huochepiao.png',
						title: '火车票',
						subtitle: '',
					},
					{
						thumb: '/static/user/huiyuan.png',
						title: '会员',
						subtitle: '',
					},
				]
			}
			
			
		}	
			
	},
}

export default user;