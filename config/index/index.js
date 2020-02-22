import style from '@/common/style.js';

const index = {
	data() {
		return {
			goTopButton: {
				image: '/static/index/go-top.png',
				size: '80rpx',
				right: '30rpx',
				bottom: '80rpx',
			},
			xgNavBar: {
				backgroundImage: {
					'zh_CN': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2346819948,4073569407&fm=26&gp=0.jpg'
				},
				searchInput: {
					'zh_CN': {
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
					}
				},
				left: {
					'zh_CN': {
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
					}
				},
				right: {
					'zh_CN': {
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
				}
			},
			
			cateNav: {
				column: 5,
				row: 2,
				iconStyle: `margin-bottom: ${style.UNI_SPACING_ROW_BASE};`,
				thumbStyle: `
								width: ${style.UNI_ICON_SIZE_BASE};
								height: ${style.UNI_ICON_SIZE_BASE};
								margin-bottom: ${style.UNI_SPACING_ROW_SM};
							`,
				titleStyle: '',
				cateList: {
					'zh_CN': [
					
						{
							url: '',
							id: '',
							thumb: '/static/index/cate-nav/baifuyun_shangquan-shumadianqi.png',
							subtitle: '电器',
						},
						{
							url: '',
							id: '',
							thumb: '/static/index/cate-nav/chaoshi.png',
							subtitle: '医药',
						},
						{
							url: '',
							id: '',
							thumb: '/static/index/cate-nav/chongzhijiaofei.png',
							subtitle: '充值',
						},
						{
							url: '',
							id: '',
							thumb: '/static/index/cate-nav/fenxiangzhuanqian-.png',
							subtitle: '赚钱',
						},
						{
							url: '',
							id: '',
							thumb: '/static/index/cate-nav/fushixiangbao.png',
							subtitle: '服饰',
						},
						{
							url: '',
							id: '',
							thumb: '/static/index/cate-nav/huiyuan.png',
							subtitle: '会员',
						},
						{
							url: '',
							id: '',
							thumb: '/static/index/cate-nav/icon-.png',
							subtitle: '超市',
						},
						{
							url: '',
							id: '',
							thumb: '/static/index/cate-nav/jinkoubaoguan.png',
							subtitle: '进口',
						},
						{
							url: '',
							id: '',
							thumb: '/static/index/cate-nav/lingquanzhongxin.png',
							subtitle: '领券',
						},
						{
							url: '',
							id: '',
							thumb: '/static/index/cate-nav/shuiguo.png',
							subtitle: '水果',
						},
						{
							url: '',
							id: '',
							thumb: '/static/index/cate-nav/shuiguoshengxian.png',
							subtitle: '生鲜',
						},
					
					]
				}
			},
			
			productListTab: {
				columnCount: 2,
				rowGap: `${style.UNI_SPACING_ROW_SM}`,
				columnGap: `${style.UNI_SPACING_COL_SM}`,
				leftGap: `${style.UNI_SPACING_COL_BASE}`,
				rightGap: `${style.UNI_SPACING_COL_BASE}`,
			}
		}
	},
	methods: {
		...getApp({allowDefault: true}).globalData.lang
	},
}

export default index;