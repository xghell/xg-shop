<template>
	<view class="xg-money-component">
		<text class="xg-money-item" :class="{'line-through': lineThrough}" :style="{color: color, fontSize: camelFontSize + 'px',lineHeight: camelFontSize + 'px', fontWeight: weight, transform: 'translateY(' + camelTranslateY + 'px)'}">{{currencySymbol}}</text>
		<text class="xg-money-item" :class="{'line-through': lineThrough}" :style="{color: color, fontSize: fontSize + 'px', fontWeight: weight, lineHeight: fontSize + 'px'}">{{moneyArray[0]}}</text>
		<text class="xg-money-item" :class="{'line-through': lineThrough}" v-if="precision" :style="{color: color, fontSize: camelFontSize + 'px', fontWeight: weight,lineHeight: camelFontSize + 'px', transform: 'translateY(' + camelTranslateY + 'px)'}">.</text>
		<text class="xg-money-item" :class="{'line-through': lineThrough}" :style="{color: color, fontSize: camelFontSize + 'px', fontWeight: weight,lineHeight: camelFontSize + 'px', transform: 'translateY(' + camelTranslateY + 'px)'}">{{moneyArray[1]}}</text>
	</view>
</template>

<script>
	export default {
		name: 'XgMoney',
		props: {
			//整体字体颜色
			color: {
				type: String,
				// default: 'red'
			},
			//字体粗细
			weight: {
				type: String,
			},
			//字体大小，驼峰形式为则为峰顶
			size: {
				type: String|Number,
				default: '32rpx',
			},
			//驼峰形式，两侧字体相对中间驼峰缩放比例
			scale: {
				type: Number|String,
				default: '0.7',
			},
			//是否为驼峰形式
			camel: {
				type: Boolean,
				default: false
			},
			lineThrough: {
				type: Boolean,
				default: false
			},
			money: {
				type: [Number, String],
				default: '0.00'
			},
			//精度，小数点位数
			precision: {
				type: Number,
				default: 2
			},
			currencySymbol: {
				type: String,
				default: '￥'
			},
		},
		computed: {
			moneyArray() {
				return String(Number(this.money).toFixed(this.precision)).split('.');
			},
			fontSize() {
				return this.toPx(this.size);
			},
			camelFontSize() {
				if (this.camel) {
					return this.fontSize * this.scale;
				}
				 return this.fontSize;
			},
			camelTranslateY() {
				if (this.camel) {
					return -(1 - this.scale) * (this.fontSize*0.2);
				}
				
				return 0;
			}
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
			}
		},
	}
</script>

<style lang="scss" scoped>
	.xg-money-component {
		position: relative;
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: flex-end;
		
	}
	.xg-money-item {
		// border-width: 1px;
		// @include flex-layout(row, center, center);
	}
	.line-through {
		text-decoration: line-through;
	}
</style>