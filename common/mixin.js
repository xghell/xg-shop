import style from './style.js';
import {toPx} from './helper.js';

const mixin = {
	data() {
		return {
			...style,
		}
	},
	methods: {
		toPx,
	}
};

export default mixin;