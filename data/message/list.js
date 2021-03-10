import {generateList,sleep} from '@/common/helper.js'

class Data {
	async messages() {
		await sleep(300);
		const list =generateList(2, () => {
			return [
				{
					_id: '',
					avatar: '/static/mock/avatars/1.jpg',
					name: '大盈科技数码店',
					date: '2021/01/02',
					content: '你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好',
					count: '14' //消息数量
				},
				{
					_id: '',
					avatar: '/static/mock/avatars/2.jpg',
					name: '星历家纺',
					date: '2021/03/02',
					content: '[图片]',
					count: '1' //消息数量
				}
			];
		})
		
		
		return list;
	}
};

export default new Data();