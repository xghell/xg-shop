import style from '@/common/style.js';
import {toPx} from '@/common/helper.js';

const order = {
	data() {
		return {
			navBar: {
				fixedHeight: '100rpx',
				left: {
					fontFamily: 'xg-iconfont',
					iconStyle: `margin-left: ${style.UNI_SPACING_COL_BASE};`,
					textStyle: `color:${style.UNI_TEXT_COLOR_GREY}`,
					iconList: [
						{
							id: 'back',
							text: '\ue638',
						},
					]
				},
				title: {
					fontFamily: 'xg-iconfont',
					iconList: [
						{
							id: 'back',
							text: '我的订单',
						},
					]
				},
				right: {
					fontFamily: 'xg-iconfont',
					iconStyle: `margin-right: ${style.UNI_SPACING_COL_BASE};`,
					textStyle: `color:${style.UNI_TEXT_COLOR_GREY};`,
					iconList: [
						{
							id: 'search',
							text: '\ue651',
						},
						{
							id: 'message',
							text: '\ue624',
						}
					],
				}
					
			},
			titleTabConfig: {
				list: [
					'全部',
					'待付款',
					'待收货',
					'已完成',
					'已取消'
				]
			}
		}
	},
}

export default order;