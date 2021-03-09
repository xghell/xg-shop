<template>
	<view class="tpl-attention" :style="{backgroundColor: selectedInner ? selectedBgColor : bgColor, width: toPx(width) + 'px', height: toPx(height) + 'px', borderWidth: selectedInner ? selectedBorderWidth : borderWidth, borderColor: selectedInner ? selectedBorderColor : borderColor}" @tap="attentionTap">
		<uni-icons v-if="!selectedInner" :size="toPx(iconSize)" :color="color" type="heart"></uni-icons>
		<text class="tpl-attention-text" :style="{fontSize: toPx(textSize) + 'px', color: selectedInner ? selectedColor : color}">{{selectedInner ? '已关注' : '关注'}}</text>
	</view>
</template>

<script>
	/**
	 * @event {Function()} change 
	 */
	export default {
		props: {
			selected: {//是否已关注
				type: Boolean,
				default: false,
			},
			width: {
				type: Number|String,
				default: '110rpx'
			},
			height: {
				type: Number|String,
				default: '46rpx'
			},
			borderWidth: {
				type: String,
				default: '1px'
			},
			selectedBorderWidth: {
				type: String,
				default: '1px'
			},
			borderColor: {
				type: String,
				default: 'red'
			},
			selectedBorderColor: {
				type: String,
				default: 'grey'
			},
			color: {
				type: String,
				default: 'white'
			},
			selectedColor: {
				type: String,
				default: 'grey'
			},
			bgColor: {
				type: String,
				default: 'red'
			},
			selectedBgColor: {
				type: String,
				default: ''
			},
			iconSize: {
				type: Number|String,
				default: '24rpx'
			},
			textSize: {
				type: Number|String,
				default: '22rpx'
			}
		},
		data() {
			return {
				selectedInner: false
			}
		},
		created() {
			this.$watch('selected', () => {
				this.selectedInner = this.selected;
			}, {immediate: true});
			
			this.$watch('selectedInner', () => {
				this.$emit('change', {detail: {selected: this.selectedInner}});
			}, {immediate: false});
		},
		methods: {
			toPx(value) {
				const windowWidth = uni.getSystemInfoSync().windowWidth;
				const result = /(-?\d+\.?\d*)(\w*)/.exec(value);
				if (result&&result[1]) {
					if (result[2]) {
						if ('rpx' === result[2].trim()) {
							return windowWidth * Number(result[1]) / 750;
						} else {
							return Number(result[1]);
						}
					} else {
						return Number(result[1]);
					}
				}
				
				throw new TypeError(`${value}单位格式不正确`);
			},
			
			attentionTap() {
				this.selectedInner = !this.selectedInner;
			}
		},
	}
</script>

<style lang="scss" scoped>
	.tpl-attention {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		
		flex-direction: row;
		justify-content: center;
		align-items: center;
		
		$border-radius: 10000px;
		border-top-left-radius: $border-radius;
		border-top-right-radius: $border-radius;
		border-bottom-right-radius: $border-radius;
		border-bottom-left-radius: $border-radius;
	}
	.tpl-attention-text {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		
		flex-direction: row;
		justify-content: center;
		align-items: center;
		
		margin-left: 2px;
	}
</style>