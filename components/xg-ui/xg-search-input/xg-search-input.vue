<template>
	<view :style="searchInputStyle">
		<input class="center" type="text" placeholder-class="placeholder"
			:style="inputStyle + ';' + inputStyleInner"
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
		<view class="left  side" :style="{left: iconPosition}" @tap="leftTap">
			<slot name="left">
				<text :style="{'font-size': leftIcon.iconSize||iconSize, color: leftIcon.iconColor||iconColor,'font-family': leftIcon.fontFamily}">{{leftIcon.text}}</text>
			</slot>
		</view>
		<view class="right side" :style="{right: iconPosition}" @tap="rightTap">
			<slot name="right">
				<text :style="{'font-size': rightIcon.iconSize||iconSize, color: rightIcon.iconColor||iconColor, 'font-family': rightIcon.fontFamily}">{{rightIcon.text}}</text>
			</slot>
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
			searchInputStyle: {
				type: String
			},
			inputStyle: {
				type: String
			},
			//只支持字体图标,且必须使用Unicode方式使用
			leftIcon: {
				type: Object,
				default: function () {
					return {
						fontFamily: '',
						text: '',
						iconSize: '',
						iconColor: ''
					}
				}
			},
			rightIcon: {
				type: Object,
				default: function () {
					return {
						fontFamily: '',
						text: '',
						iconSize: '',
						iconColor: ''
					}
				}
			},
			//只支持字体图标,且必须使用Unicode方式使用
			iconSize: {
				type: String,
				default: '40rpx'
			},
			iconColor: {
				type: String
			},
			//图标距离两侧边的距离
			iconPosition: {
				type: String,
				default:'20rpx'
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
				// console.log('rightTap', e);
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
			inputStyleInner() {
				return `
					padding-left: ${this.toPx(this.iconSize) + this.toPx(this.iconPosition) + 8}px;
					padding-right: ${this.toPx(this.iconSize) + this.toPx(this.iconPosition) + 8}px;
				`;
			}
		},
	}
</script>

<style lang="scss" scoped>
	$uni-font-size-base: 14px !default;
	
	.side {
		// border-width: 1px;
		position: absolute;
		top: 0;
		bottom: 0;
		
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
	}

	.left {
		left: 0;
	}
	.center {
		position: relative;
		flex: 1;
	}
	.placeholder {
		font-size: $uni-font-size-base;
	}
	.right {
		right: 0;
	}
</style>