<template>
	<view class="tpl-cart-order">
		<view class="label">
			<view class="shop">
				<image class="shop-logo" :src="shop.logo" mode=""></image>
				<view class="shop-name">
					<text class="shop-name-text">{{shop.name}}</text>
				</view>
				<view class="go-btn">
					<uni-icons type="arrowright" :size="arrowrightIconSize"></uni-icons>
				</view>
			</view>
		</view>
		<view class="product-list">
			<view class="product" v-for="(product, productIndex) of productList" :key="productIndex">
				<image class="product-image" :src="product.image" mode=""></image>
				<view class="product-info">
					<view class="product-title">
						<text class="product-title-text">{{product.title}}</text>
					</view>
					<view class="product-detail">
						<text class="product-detail-text">{{product.detail}}</text>
						<xg-icon></xg-icon>
					</view>
					<view class="price-and-count">
						<view class="product-price">
							<tpl-price :price="product.price"></tpl-price>
						</view>
						<view class="product-count">
							<text class="product-count-text">X {{product.count}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import config from './tpl-order-add.js';
	
	export default {
		name: 'TplOrderAdd',
		mixins: [config],
		props: {
			shop: {
				type: Object,
			},
			productList: {
				type: Array,
			}
		},
	}
</script>

<style lang="scss" scoped>
	.tpl-cart-order {
		background-color: $uni-bg-color;
		border-radius: $uni-border-radius-base;
		
		padding: $uni-spacing-row-lg $uni-spacing-col-lg;
	}
	.label {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
	}
	.shop {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
	}
	.shop-logo {
		width: $uni-icon-size-sm;
		height: $uni-icon-size-sm;
	}
	.shop-name {
		margin-left: $uni-spacing-col-base;
	}
	.shop-name-text {
		font-size: $uni-font-size-sm;
	}
	.go-btn {
		margin-left: $uni-spacing-col-sm;
	}
	
	.product-list {
		
	}
	.product {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		
		margin-top: $uni-spacing-row-base;
	}
	.product-image {
		width: 180rpx;
		height: 180rpx;
	}
	.product-info {
		flex: 1;
		
		margin-left: $uni-spacing-col-base;
	}
	.product-title {
		
	}
	.product-title-text {
		font-size: $uni-font-size-sm;
		line-height: $uni-font-size-sm*1.5;
		
		/* #ifndef APP-PLUS-NVUE */
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		/* #endif */
				
		/* #ifdef APP-PLUS-NVUE */
		text-overflow: ellipsis;
		lines: 2;
		/* #endif */
	}
	.product-detail {
		margin-top: $uni-spacing-row-base;
	}
	.product-detail-text {
		font-size: $uni-font-size-mi;
		
		/* #ifndef APP-PLUS-NVUE */
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		/* #endif */
				
		/* #ifdef APP-PLUS-NVUE */
		text-overflow: ellipsis;
		lines: 1;
		/* #endif */
	}
	.price-and-count {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		
		margin-top: $uni-spacing-row-sm;
	}
	.product-price {
		
	}
	.product-count {
		
	}
	.product-count-text {
		font-size: $uni-font-size-mi;
	}
</style>