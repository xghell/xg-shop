<template>
	<view class="xg-price-component">
		<text class="price-icon" :style="currencySymbolStyle">{{currencySymbol}}</text>
		<text class="price-integer" :style="integerStyle">{{priceArray[0]}}</text>
		<text class="price-dot" v-if="precision">.</text>
		<text class="price-decimal" :style="decimalStyle">{{priceArray[1]}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			price: {
				type: [Number, String],
				default: '0.00'
			},
			precision: {
				type: Number,
				default: 2
			},
			currencySymbol: {
				type: String,
				default: '￥'
			},
			currencySymbolStyle: {
				type: String,
			},
			decimalStyle: {
				type: String
			},
			integerStyle: {
				type: String
			}
		},
		computed: {
			priceArray() {
				return String(Number(this.price).toFixed(this.precision)).split('.');
			}
		},
	}
</script>

<style lang="scss" scoped>
	$uni-font-size-sm:12px !default;
	$uni-font-size-base:14px !default;
	$uni-text-color-red: #ed1c24 !default;
	
	.xg-price-component {
		position: relative;
		font-size: $uni-font-size-sm;
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: flex-end;
		
	}
	
	.price-icon {
		font-size: $uni-font-size-sm;
		color: $uni-text-color-red;
	}
	
	.price-integer {
		font-size: $uni-font-size-lg;
		color: $uni-text-color-red;
		transform: translateY(0.5px);
	}
	.price-dot {
		color: $uni-text-color-red;
		font-size: $uni-font-size-sm;
	}
	.price-decimal {
		font-size: $uni-font-size-sm;
		color: $uni-text-color-red;
	}
</style>