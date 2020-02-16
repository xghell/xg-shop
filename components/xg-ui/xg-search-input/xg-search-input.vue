<template>
	<view>
		<view class="search-input-component">
			<view class="left  side" :style="{left: iconPosition}" @tap="leftTap">
				<slot name="left">
					<text :style="{'font-size': iconSize, 'font-family': leftIcon.fontFamily}">{{leftIcon.unicode}}</text>
				</slot>
			</view>
			<input class="center" type="text" placeholder-class="placeholder"
				:style="inputStyle"
				:value="value"
				:placeholder="placeholder"
				:placeholder-style="placeholderStyle"
				:disabled="disabled"
				:maxlength="maxlength"
				:focus="focus"
				:confirm-type="confirmType"
				:confirm-hold="confirmHold"
				:cursor="cursor"
				:selection-start="selectionStart"
				:selection-end="selectionEnd"
				:adjust-position="adjustPosition"
				@input="input"
				@focus="getFocus"
				@blur="blur"
				@confirm="confirm"
			/>
			<view class="right side" :style="{right: iconPosition}" @tap="rightTap">
				<slot name="right">
					<text :style="{'font-size': iconSize,  'font-family': rightIcon.fontFamily}">{{rightIcon.unicode}}</text>
				</slot>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * @input
	 * @focus
	 * @blur
	 * @confirm
	 * @leftTap
	 * @rightTap
	 */
	export default {
		name: 'XgSearchInput',
		props: {
			//只支持字体图标,且必须使用Unicode方式使用
			leftIcon: {
				type: Object,
				default: function () {
					return {
						fontFamily: 'xg-iconfont',
						unicode: ''
					}
				}
			},
			rightIcon: {
				type: Object,
				default: function () {
					return {
						fontFamily: 'xg-iconfont',
						unicode: ''
					}
				}
			},
			//只支持字体图标,且必须使用Unicode方式使用
			iconSize: {
				type: String,
				default: '40rpx'
			},
			//图标距离两侧边的距离
			iconPosition: {
				type: String,
				default:'30rpx'
			},
			value: {
				type: String,
				defalut: ''
			},
			placeholder: {
				type: String,
				default: '请输入要搜索的内容'
			},
			placeholderStyle: {
				type: String,
			},
			disabled: {
				type: Boolean,
				default: false
			},
			maxlength: {
				type: Number,
				default: 140
			},
			focus: {
				type: Boolean,
				default: false
			},
			confirmType: {
				type: String,
				default: 'done'
			},
			confirmHold: {
				type: Boolean,
				default: false
			},
			cursor: {
				type: Number,
			},
			selectionStart: {
				type: Number,
				defalut: -1
			},
			selectionEnd: {
				type: Number,
				defalut: -1
			},
			adjustPosition: {
				type: Boolean,
				default: true
			}
		},
		methods: {
			input(e) {
				this.$emit('input', e);
			},
			getFocus(e) {
				this.$emit('focus', e);
			},
			blur(e) {
				this.$emit('blur', e);
			},
			confirm(e) {
				this.$emit('confirm', e);
			},
			leftTap(e) {
				this.$emit('leftTap', e);
			},
			rightTap(e) {
				this.$emit('rightTap', e);
			},
			toPx(value) {
				const result = /(\d+)(\w+)/.exec(value);
				if ('rpx' === result[2].trim()) {
					return uni.getSystemInfoSync().screenWidth * Number(result[1]) / 750;
				} else if('px' === result[2].trim()) {
					return Number(result[1]);
				} else {
					throw new TypeError(`${value}单位格式不正确`);
				}
				
			}
		},
		computed: {
			inputStyle() {
				return `
					padding-left: ${this.toPx(this.iconSize) + this.toPx(this.iconPosition) + 8}px;
					padding-right: ${this.toPx(this.iconSize) + this.toPx(this.iconPosition) + 8}px;
				`;
			}
		},
	}
</script>

<style lang="scss" scoped>
	$font-size-base: $uni-font-size-base;
	
.search-input-component {
	position: relative;
	/* #ifndef APP-PLUS-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	align-items: center;
	// background-color: red;
	height: 80rpx;
	// border-radius: 1000px;
	// border-width: 1px;
	
	
}

.side {
	// border-width: 1px;
	position: absolute;
}

.left {
	left: 0;
}
.center {
	flex: 1;
	// border-width: 1px;
	// padding-left: 30px;
	height: 100%;
}
.placeholder {
	font-size: $font-size-base;
}
.right {
	right: 0;
}
</style>