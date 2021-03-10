import {generateList,sleep} from '@/common/helper.js'

class Data {
	async settinges() {
		const list = [
			{
				thumb: '/static/mock/message/reception-management/jiaoyiwuliu.png',
				title: '交易物流',
				note: '物流节点不错过，订单到哪都知道',
				value: true
			},
			{
				thumb: '/static/mock/message/reception-management/kefuzhushou.png',
				title: '客服助手',
				note: '赔付消息、申诉、仲裁结果通知',
				value: true
			},
			{
				thumb: '/static/mock/message/reception-management/zhanghutongzhi.png',
				title: '账户通知',
				note: '优惠券、小金库等账户信息变动提醒',
				value: true
			},
			{
				thumb: '/static/mock/message/reception-management/fuwutongzhi.png',
				title: '服务通知',
				note: '预约抢购、降价通知、到货通知等服务提醒',
				value: true
			},
			{
				thumb: '/static/mock/message/reception-management/hudongxiaoxi.png',
				title: '互动消息',
				note: '问答、评价、评论、点赞、回复提醒',
				value: true
			},
			{
				thumb: '/static/mock/message/reception-management/youhuicuxiao.png',
				title: '优惠促销',
				note: '促销福利，最新活动不错过',
				value: true
			}
		];
		
		return list;
	}
};

export default new Data();