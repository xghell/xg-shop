<template>
	<view class="tpl-product-one">
		<image class="image" :src="image" mode=""></image>
		<view class="detail">
			<view class="title">
				<text class="title-text">{{title}}</text>
			</view>
			<view class="price-section">
				<view class="price-wrap">
					<tpl-price :price="price" :integerStyle="priceConfig.integerStyle"></tpl-price>
					<view class="price-label" v-if="priceLabel">
						<text class="price-label-text">{{priceLabel}}</text>
					</view>
				</view>
				<view class="cart-icon-wrap">
					<xg-icon :fontFamily="cartIconConfig.fontFamily" :title="cartIconConfig.title"></xg-icon>
				</view>
			</view>
			<view class="product-label-list">
				<view class="product-label" v-for="(label, labelIndex) of productLabelList" :key="labelIndex">
					<text class="product-label-text">{{label}}</text>
				</view>
			</view>
			<view class="comment-count">
				<text class="comment-count-text">{{commentCountInner}}条评价</text>
			</view>
		</view>
	</view>
</template>

<script>
	import config from './tpl-product-one.js';
	
	export default {
		name: 'TplPruductOne',
		mixins: [config],
		props: {
			url: {
				type: String,
				default: ''
			},
			
			image: {
				type: String,
				required: true
			},
			title: {
				type: String,
			},
			price: {
				type: [Number, String],
				required: true,
			},
			priceLabel: {
				type: String
			},
			productLabelList: {
				type: Array,
				// default: function () {
				// 	return ['自营', '超市'];
				// }
			},
			commentCount: {
				type: [String, Number],
				required: true,
			}
		},
		computed: {
			commentCountInner() {
				const commentCount = Number(this.commentCount);
				if (commentCount < 10000) {
					return commentCount.toFixed(0);
				} else if (commentCount > 10000 && commentCount < 100000) {
					return (commentCount / 10000).toFixed(1) + '万+';
				} else if (commentCount > 100000) {
					return (commentCount / 10000).toFixed(0) + '万+';
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
	.tpl-product-one {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		// align-items: center;
	}
	.image {
		width: 240rpx;
		height: 240rpx;
		
		border-radius: $uni-border-radius-base;
	}
	.detail {
		flex: 1;
		margin-left: $uni-spacing-col-base;
		
		border-bottom-width: 0.5px;
		border-color: $uni-border-color;
	}
	.title {
		
	}
	.title-text {
		font-size: $uni-font-size-base;
		line-height: 1.5*$uni-font-size-base;
		
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
	.price-section {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		
		margin-top: $uni-spacing-row-sm;
	}
	.price-wrap {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
	}
	.price-label {
		margin-left: $uni-spacing-col-sm;
		
		// background-image: linear-gradient(to right, $uni-bg-color-red, $uni-bg-color-pink);
		background-color: $uni-bg-color-red;
		border-radius: $uni-border-radius-sm;
		
		padding: 4rpx 6rpx;
	}
	.cart-icon-wrap {
		background-color: $uni-bg-color-grey;
		padding: 14rpx;
		border-radius: $uni-border-radius-circle;
	}
	.price-label-text {
		font-size: $uni-font-size-maro;
		color: $uni-text-color-white;
	}
	.product-label-list {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		
		margin-top: $uni-spacing-row-mi;
	}
	.product-label {
		margin-right: $uni-spacing-col-sm;
		
		border-width: 1px;
		border-style: solid;
		border-color: $uni-border-color-red;
		border-radius: $uni-border-radius-sm;
		
		padding: 4rpx 6rpx;
	}
	.product-label-text {
		font-size: $uni-font-size-mi;
		color: $uni-text-color-red;
	}
	.comment-count {
		margin-top: $uni-spacing-row-mi;
	}
	.comment-count-text {
		font-size: $uni-font-size-mi;
		color: $uni-text-color-grey;
	}
</style>