<template>
	<view class="order">
		<view class="order-label">
			<view class="shop">
				<image class="shop-logo" :src="shop.logo" mode=""></image>
				<view class="shop-name">
					<text class="shop-name-text">{{shop.name}}</text>
				</view>
				<view class="go-btn">
					<uni-icons type="arrowright" :size="arrowrightAndTrashIconSize"></uni-icons>
				</view>
			</view>
			<view class="delete-btn">
				<uni-icons type="trash" :size="arrowrightAndTrashIconSize"></uni-icons>
			</view>
		</view>
		<view class="order-content">
			<view v-if="productCount < 2" class="product" v-for="(product, productIndex) of productList" :key="productIndex">
				<image class="product-image" :src="product.image" mode=""></image>
				<view class="product-title">
					<text class="product-title-text">{{product.title}}</text>
				</view>
				
				<tpl-price :price="product.price"></tpl-price>
			</view>
			<scroll-view v-if="productCount >= 2" class="order-content-inner" :scroll-x="true">
				<view class="product-list">
					<view class="product" v-for="(product, productIndex) of productList" :key="productIndex">
						<image class="product-image" :src="product.image" mode=""></image>
					</view>
				</view>
			</scroll-view>
			<view v-if="productCount >= 2" class="price-wrap">
				<tpl-price :price="price"></tpl-price>
			</view>
		</view>
		<view class="service-btn-list">
			<navigator class="service-btn" url="/pages/comment/comment-addition">
				<text class="service-btn-text">评价晒单</text>
			</navigator>
			<navigator class="service-btn buy-again-btn" open-type="reLaunch" url="/pages/home-tab-bar/home-tab-bar?page=cart">
				<text class="service-btn-text buy-again-btn-text">再次购买</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	import config from './tpl-order.js';
	
	export default {
		name: 'TplOrder',
		mixins: [config],
		props: {
			// {
			// 	logo: 'http://img5.imgtn.bdimg.com/it/u=2598541182,3731211981&fm=26&gp=0.jpg',
			// 	name: '三只松鼠旗舰店'
			// }
			shop: {
				type: Object,
			},
			// [
			// 	{
			// 		image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2910427549,3230519692&fm=26&gp=0.jpg',
			// 		title: '三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠三只松鼠',
			// 		price: '15.36'
			// 	},
			// ]
			productList: {
				type: Array
			}
		},
		computed: {
			productCount() {
				return this.productList.length; 
			},
			price() {
				let price = 0;
				
				this.productList.forEach(item => {
					price += Number(item.price);
				})
				
				return price;
			}
		},
	}
</script>

<style lang="scss" scoped>
	.order {
		padding: $uni-spacing-row-base $uni-spacing-col-lg;
		background-color: $uni-bg-color;
	}
	.order-label {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
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
		width: $uni-icon-size-md;
		height: $uni-icon-size-md;
	}
	.shop-name {
		margin-left: $uni-spacing-col-base;
	}
	.shop-name-text {
		font-size: $uni-font-size-base;
	}
	.go-btn {
		margin-left: $uni-spacing-col-sm;
	}
	.delete-btn {
		background-color: $uni-bg-color-grey;
		width: $uni-icon-size-md;
		height: $uni-icon-size-md;
		border-radius: $uni-border-radius-circle;
		
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	
	
	.order-content {
		margin: $uni-spacing-row-lg 0;
	}
	.order-content-inner {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}
	.product-list {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}
	.product {
		margin-left: $uni-spacing-col-sm;
		
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
	}
	.product-image {
		width: 180rpx;
		height: 180rpx;
	}
	.product-title {
		flex: 1;
		margin: 0 $uni-spacing-col-base;
	}
	.product-title-text {
		font-size: $uni-font-size-base;
		
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
	.price-wrap {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: rgba(255, 255, 255, 0.9);
		
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		
		box-shadow: -2px 0px 5px 0px $uni-bg-color-grey;
	}
	
	.service-btn-list {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
	}
	.service-btn {
		margin-left: $uni-spacing-col-base;
		
		border-width: 0.5px;
		border-style: solid;
		border-color: $uni-border-color;
		border-radius: 10000px;
		
		padding: $uni-spacing-row-sm $uni-spacing-col-base;
		
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.service-btn-text {
		font-size: $uni-font-size-sm;
	}
	.buy-again-btn {
		border-color: $uni-border-color-red;
	}
	.buy-again-btn-text {
		color: $uni-text-color-red;
	}
</style>