<template>
	<xg-waterfall :show-scrollbar="false" class="tab-activity" :column-count="2" :leftGap="toPx(UNI_SPACING_COL_LG)" :rightGap="toPx(UNI_SPACING_COL_LG)" columnGap="1rpx">
		<xg-waterfall-header>
			<!-- 秒杀 -->
			<view class="bg-color-red border-radius-xl margin-side-lg">
				<text class="font-size-xl text-color-white margin-left-lg padding-v-side-base">秒杀</text>
				<view class="bg-color-white border-radius-xl">
					<view :class="{'border-top-solid-1': productIndex !== 0}" class="row-center-stretch  padding-lg " v-for="(product, productIndex) of seckillProducts" :key="productIndex">
						<image class="miaosha-product-image" :src="product.image" mode="aspectFit"></image>
						<view class="flex-1 column-between-stretch margin-left-base">
							<text class="lines-1 font-size-lg">{{product.title}}</text>
							
							<view class="row-between-center">
								<view class="row-center-center">
									<xg-money :size="UNI_FONT_SIZE_XL" :color="UNI_COLOR_RED" weight="bold" :money="product.promotion_price"></xg-money>
									<view class="margin-left-base">
										<xg-money :size="UNI_FONT_SIZE_BASE"  :color="UNI_COLOR_GREY" :line-through="true" :money="product.price"></xg-money>
									</view>
								</view>
								<view>
									<view class="row-center-center border-radius-lg bg-color-red padding-v-side-sm">
										<text class="font-size-lg text-color-white">去抢购</text>
									</view>
									<tpl-countdown :color="UNI_COLOR_GREYBLACK" :showDay="false" :hour="parseInt(product.countdown.hour)" :minute="parseInt(product.countdown.minute)" :second="parseInt(product.countdown.second)"></tpl-countdown>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		
			<!-- 30天内最低价 -->
			<view class="bg-color-red border-radius-xl margin-side-lg margin-top-base">
				<text class="font-size-xl text-color-white padding-v-side-base margin-left-lg">30天内最低价</text>
				<view class="bg-color-white padding-v-side-lg border-radius-xl">
					<scroll-view scroll-x="true" :show-scrollbar="false">
						<view class="row-start-stretch">
							<view class="column-start-stretch margin-v-side-base lowest-price-product" v-for="(product, productIndex) of lowestPriceProducts" :key="productIndex">
								<image class="lowest-price-product-image" :src="product.image" mode=""></image>
								<view class="margin-side-base margin-top-base">
									<text class="lines-2 font-size-lg margin-bottom-lg">{{product.title}}</text>
									<xg-money weight="bold" :size="UNI_FONT_SIZE_LG" :money="product.price"></xg-money>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
			
			<view class="column-center-center border-top-left-radius-xl border-top-right-radius-xl bg-color-white border-bottom-solid-1 margin-side-lg margin-top-base padding-v-side-base">
				<text class="font-size-xl">逛促销</text>
				<text class="font-size-base text-color-greyblack">以下商品参与促销</text>
			</view>
		</xg-waterfall-header>
	
		<xg-waterfall-item class="bg-color-grey" v-for="(product, productIndex) of promotionProducts" :key="productIndex">
			<view class="bg-color-white promotion-product">
				<image class="promotion-product-image" :src="product.image" mode="aspectFit"></image>
				<view class="padding-lg">
					<text class="lines-2 font-size-lg margin-bottom-lg">{{product.title}}</text>
					<xg-money weight="bold" :color="UNI_COLOR_RED" :size="UNI_FONT_SIZE_LG" :money="product.price"></xg-money>
				</view>
			</view>
		</xg-waterfall-item>
	</xg-waterfall>
</template>

<script>
	import data from '@/data/shop/shop/tab-index/tab-activity';
	
	import mixin from '@/common/mixin';
	
	export default {
		mixins: [mixin],
		data() {
			return {
				seckillProducts: [],
				
				lowestPriceProducts: [],
				
				promotionProducts: [],
			}
		},
		async created() {
			const seckillProductsPromise = data.seckillProducts();
			const lowestPriceProductsPromise = data.lowestPriceProducts();
			const promotionProductsPromise = data.promotionProducts();
			
			this.seckillProducts = await seckillProductsPromise;
			this.lowestPriceProducts = await lowestPriceProductsPromise;
			this.promotionProducts = await promotionProductsPromise;
		}
	}
</script>

<style lang="scss" scoped>
	.tab-activity {
		/* #ifdef MP-WEIXIN */
		height: 100%;
		/* #endif */
	}
	
	.miaosha-product-image {
		width: 210rpx;
		height: 210rpx;
	}
	$lowest-price-product-width: 180rpx;
	.lowest-price-product {
		width: $lowest-price-product-width;
	}
	.lowest-price-product-image {
		width: $lowest-price-product-width;
		height: $lowest-price-product-width;
	}
	
	$column-count: 2;
	$column-gap: 1rpx;
	$left-gap: $uni-spacing-col-lg;
	$right-gap: $left-gap;
	$promotion-product-width: (750rpx - ($left-gap + $right-gap) - ($column-count - 1) * $column-gap)/2;
	.promotion-product {
		width: $promotion-product-width;
		
		margin-bottom: 1px;
	}
	.promotion-product-image {
		width: $promotion-product-width;
		height: $promotion-product-width;
	}
</style>