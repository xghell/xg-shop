<template>
	<view :class="waterfall ? 'product-waterfall': 'product-list'">
		<navigator hover-class="none" :class="waterfall ? 'product-waterfall-item': 'product-list-item'" class="bg-color-white" v-for="(product, productIndex) of products" :key="productIndex" url="/pages/product/detail">
			<image :class="waterfall ? 'product-waterfall-image' : 'product-image'" :src="product.image" mode=""></image>
			<view class="flex-1 " :class="waterfall ? 'product-waterfall-info': 'product-info'">
				<text class="lines-2 font-size-base margin-bottom-lg">{{product.title}}</text>
				<xg-money camel :color="UNI_COLOR_RED" :size="UNI_FONT_SIZE_LG" :money="product.price"></xg-money>
				<text class="font-size-sm text-color-greyblack">{{parseInt(product.comment_count)/10000 >= 1 ? parseInt(product.comment_count)/10000 + '万+' : (parseInt(product.comment_count)/10000).toFixed(2) * 10000 + '+' }}条评价</text>
			</view>
		</navigator>
		
	</view>
</template>

<script>
	import mixin from '@/common/mixin';
	
	export default {
		mixins: [mixin],
		props: {
			waterfall: {
				type: Boolean,
				default: true,
			},
			products: {
				type: Array,
			},
		},
	}
</script>

<style lang="scss" scoped>
	$column-count: 2;
	$column-gap: $uni-spacing-col-base;
	$side-gap: $uni-spacing-col-lg; 
	$product-waterfall-item-width: (750rpx - $side-gap*2 - $column-gap * ($column-count - 1)) / $column-count;
	
	.product-waterfall {
		@include flex-layout(row, space-between);
		
		padding: 0 $side-gap;
		
		flex-wrap: wrap;
	}
	.product-waterfall-item {
		width: $product-waterfall-item-width;
		height: $product-waterfall-item-width * 1.8;
		
		margin-top: $uni-spacing-row-base;
		
		border-radius: $uni-border-radius-lg;
	}
	.product-waterfall-image {
		width: $product-waterfall-item-width;
		height: $product-waterfall-item-width;
		
		@include border-radius($uni-border-radius-lg $uni-border-radius-lg 0 0);
	}
	.product-waterfall-info {
		margin: $uni-spacing-row-base $uni-spacing-col-base;
	}
	
	
	$product-list-item-height: 250rpx;
	.product-list {
	}
	.product-list-item {
		@include flex-layout(row);
		padding: $uni-spacing-row-base $side-gap 0;
	}
	.product-image {
		width: $product-list-item-height;
		height: $product-list-item-height;
		
		@include border-radius($uni-border-radius-lg);
	}
	.product-info {
		margin-left: $uni-spacing-col-base;
	}
</style>