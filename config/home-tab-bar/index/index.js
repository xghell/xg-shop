import style from '@/common/style.js';

const index = {
	data() {
		return {
			goTopButton: {
				image: '/static/index/go-top.png',
				size: `${style.UNI_ICON_SIZE_BASE}`,
				right: `${style.UNI_SPACING_COL_LG}`,
				bottom: `${style.UNI_SPACING_COL_HG}`,
			},
			xgNavBar: {
				backgroundImage: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2346819948,4073569407&fm=26&gp=0.jpg',
				searchInput: {
				
					searchInputStyle: `height: 60rpx;
										background-color: ${style.UNI_BG_COLOR};
										border-radius: 1000px;
										margin-top: ${style.UNI_SPACING_ROW_SM};
										margin-bottom: ${style.UNI_SPACING_ROW_SM};
										margin-left: ${style.UNI_SPACING_COL_BASE};
										margin-right: ${style.UNI_SPACING_COL_BASE};`,
					inputStyle: `font-size: ${style.UNI_FONT_SIZE_BASE};`,
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
					iconStyle: `margin-left: ${style.UNI_SPACING_COL_BASE};`,
					textStyle: `color: ${style.UNI_TEXT_COLOR_WHITE}`,
					iconList: [
						{
							id: 'run',
							text: '\ue76f',
							textStyle: `font-size: ${style.UNI_ICON_SIZE_SM};`,
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
					iconStyle: `margin-right: ${style.UNI_SPACING_COL_BASE};`,
					textStyle: `margin-bottom: ${style.UNI_SPACING_ROW_SM};
								margin-top: ${style.UNI_SPACING_ROW_SM};
								font-size: ${style.UNI_ICON_SIZE_SM};
								color: ${style.UNI_TEXT_COLOR_WHITE}`,
					subtitleStyle: `margin-bottom: ${style.UNI_SPACING_ROW_SM};
									color: ${style.UNI_TEXT_COLOR_WHITE}`,
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
				cateList: [
				
				
					{
						url: '',
						id: '1',
						thumb: '/static/index/cate-nav/baifuyun_shangquan-shumadianqi.png',
						subtitle: '电器',
					},
					{
						url: '',
						id: '2',
						thumb: '/static/index/cate-nav/chaoshi.png',
						subtitle: '医药',
					},
					{
						url: '',
						id: '3',
						thumb: '/static/index/cate-nav/chongzhijiaofei.png',
						subtitle: '充值',
					},
					{
						url: '',
						id: '4',
						thumb: '/static/index/cate-nav/fenxiangzhuanqian-.png',
						subtitle: '赚钱',
					},
					{
						url: '',
						id: '5',
						thumb: '/static/index/cate-nav/fushixiangbao.png',
						subtitle: '服饰',
					},
					{
						url: '',
						id: '6',
						thumb: '/static/index/cate-nav/huiyuan.png',
						subtitle: '会员',
					},
					{
						url: '',
						id: '7',
						thumb: '/static/index/cate-nav/icon-.png',
						subtitle: '超市',
					},
					{
						url: '',
						id: '8',
						thumb: '/static/index/cate-nav/jinkoubaoguan.png',
						subtitle: '进口',
					},
					{
						url: '',
						id: '9',
						thumb: '/static/index/cate-nav/lingquanzhongxin.png',
						subtitle: '领券',
					},
					{
						url: '',
						id: '10',
						thumb: '/static/index/cate-nav/shuiguo.png',
						subtitle: '水果',
					},
					{
						url: '',
						id: '11',
						thumb: '/static/index/cate-nav/shuiguoshengxian.png',
						subtitle: '生鲜',
					},
				
				
				]
			},
			
			productListTabBar: {
				titleStyle: `font-size: ${style.UNI_FONT_SIZE_BASE};height: ${style.UNI_FONT_SIZE_LG};margin-bottom: ${style.UNI_SPACING_ROW_BASE};`,
				selectedTitleStyle: `font-size: ${style.UNI_FONT_SIZE_LG};height: ${style.UNI_FONT_SIZE_LG};color: ${style.UNI_TEXT_COLOR_RED};margin-bottom: ${style.UNI_SPACING_ROW_BASE};`,
				selectedSubtitleStyle: `color: ${style.UNI_TEXT_COLOR_RED};`,
				iconList: [
				
					{
						id: '',
						url: '',
						title: '精选',
						subtitle: '为你推荐',
					},
					{
						id: '',
						url: '',
						title: '实惠',
						subtitle: '超值好货',
					},
					{
						id: '',
						url: '',
						title: '进口',
						subtitle: '质量一流',
					},
					{
						id: '',
						url: '',
						title: '直播',
						subtitle: '主播力荐',
					}
				
				]
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
}

export default index;