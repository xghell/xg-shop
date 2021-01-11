<template>
	<view class="bg-color-grey tab-new">
		<xg-list class="tab-new-list"  :show-scrollbar="false">
			<xg-list-item v-for="(group, index) of newProducts" :key="index">
				<view class="">
					<view class="row-center-center padding-v-side-lg">
						<text class="font-size-base text-color-greyblack">{{group.date}}本店上新</text>
					</view>
					<view class="product-list">
						<uni-grid :column="2" :square="false" :showBorder="false">
							<uni-grid-item v-for="(product, productIndex) of group.products" :key="productIndex">
								<view class="column-center-center margin-bottom-base">
									<view class="bg-color-white border-radius-lg product">
										<image class="border-top-left-radius-lg border-top-right-radius-lg product-image" :src="product.image" mode="aspectFit"></image>
										<view class="padding-lg">
											<text class="lines-2 font-size-lg margin-bottom-lg">{{product.title}}</text>
											<xg-money weight="bold" :camel="true" :size="UNI_FONT_SIZE_XL" :color="UNI_COLOR_RED" :money="product.price"></xg-money>
										</view>
									</view>
								</view>
							</uni-grid-item>
						</uni-grid>
					</view>
				</view>
			</xg-list-item>
		</xg-list>
	</view>
</template>

<script>
	import data from '@/data/shop/shop/tab-index/tab-new';
	
	import mixin from '@/common/mixin';
	
	export default {
		mixins: [mixin],
		data() {
			return {
				newProducts: []
			}
		},
		async created() {
			const newProductsPromise = data.newProducts();
			
			this.newProducts = await newProductsPromise;
		}
	}
</script>

<style lang="scss" scoped>
	.tab-new {
		/* #ifdef MP-WEIXIN */
		height: 100%;
		/* #endif */
		
		@include flex-layout(column);
	}
	.tab-new-list {
		/* #ifdef MP-WEIXIN */
		height: 100%;
		/* #endif */
		
		flex: 1;
	}
	
	
	$product-width: (750rpx - $uni-spacing-col-lg*3) / 2;
	.product-list {
		padding: 0 $uni-spacing-col-lg/2;
	}
	.product {
		width: $product-width;
	}
	.product-image {
		width: $product-width;
		height: $product-width;
	}
</style>