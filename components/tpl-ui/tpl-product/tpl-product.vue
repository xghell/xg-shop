<template>
	<view class="product" :style="{width: size}" @tap="productTap">
		<image class="product-image" :style="'width:' + size + ';height:' + size + ';' + imageStyle" :src="image"></image>
		<text v-if="title" class="product-title" :style="'lines:' + titleLines + ';-webkit-line-clamp:' + titleLines + ';' + titleStyle">{{title}}</text>
		<view class="price-line">
			<tpl-price :price="price" :integerStyle="priceIntegerStyle" :decimalStyle="priceDecimalStyle" :currencySymbol="currencySymbol" :currencySymbolStyle="priceCurrencySymbolStyle" :precision="precision"></tpl-price>
			<text v-if="priceLabel" class="price-label" :style="priceLabelStyle">{{priceLabel}}</text>
		</view>
		<text v-if="discount" class="discount" :style="discountStyle">{{currencySymbol}}{{Number(discount).toFixed(precision)}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			url: {
				type: String,
				default: ''
			},
			size: {
				type: String,
				required: true
			},
			precision: {
				type: Number,
				default: 2
			},
			
			image: {
				type: String,
				required: true
			},
			imageStyle: {
				type: String,
			},
			title: {
				type: String,
			},
			titleStyle: {
				type: String,
			},
			titleLines: {
				type: Number,
				default: 2,
			},
			price: {
				type: [Number, String],
				required: true,
				default: '0'
			},
			priceIntegerStyle: {
				type: String,
			},
			priceDecimalStyle: {
				type: String,
			},
			priceCurrencySymbolStyle: {
				type: String,
			},
			priceLabel: {
				type: String,
			},
			priceLabelStyle: {
				type: String
			},
			discount: {
				type: String|Number,
			},
			discountStyle: {
				type: String,
			},
			
			currencySymbol: {
				type: String,
				default: '￥'
			},
		},
		methods: {
			productTap() {
				uni.navigateTo({url: this.url});
			}
		},
	}
</script>

<style lang="scss" scoped>
	$uni-bg-color:#ffffff !default;
	$uni-font-size-sm:12px !default;
	$uni-font-size-base:14px !default;
	$uni-spacing-col-base: 20rpx !default;
	$uni-border-radius-sm: 6rpx !default;
	$uni-border-radius-lg: 24rpx !default;
	$uni-text-color-red: #ed1c24 !default;
	$uni-text-color-disable:#c0c0c0 !default;
	
	.product {
		// border-width: 1px;
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		background-color: $uni-bg-color;
		border-radius: $uni-border-radius-base;
	}
	
	.product-image {
		border-top-left-radius: $uni-border-radius-base;
		border-top-right-radius: $uni-border-radius-base;
	}
	
	.product-title {
		font-size: $uni-font-size-base;
		text-overflow: ellipsis;
		/* #ifdef APP-PLUS-NVUE */
		lines: 2;
		/* #endif */
		
		/* #ifndef APP-PLUS-NVUE */
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		/* #endif */
	}
	
	.price-line {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
	}
	.price-label {
		font-size: $uni-font-size-mi;
		margin-left: $uni-spacing-col-base;
		padding: 4rpx;
		border-width: 0.5px;
		border-style: solid;
		border-radius: $uni-border-radius-sm;
		border-color: $uni-text-color-red;
		color: $uni-text-color-red;
	}
	
	.discount {
		font-size: $uni-font-size-sm;
		text-decoration: line-through;
		color: $uni-text-color-disable;
	}
</style>