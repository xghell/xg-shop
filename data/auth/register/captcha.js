import {generateList,sleep} from '@/common/helper.js'

class Data {
	async verifyCaptcha(captcha) {
		return true;
	}
};

export default new Data();