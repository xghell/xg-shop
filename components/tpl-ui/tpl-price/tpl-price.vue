<template>
	<view class="xg-price-component">
		<text class="price-icon">{{currencySymbol}}</text>
		<text>{{priceArray[0]}}</text>
		<text>.</text>
		<text class="price-decimal">{{priceArray[1]}}</text>
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
.xg-price-component {
	flex-shrink: 0;
}
.price-icon {
	font-size: $uni-font-size-sm;
}

.price-decimal {
	font-size: $uni-font-size-sm;
}
</style>