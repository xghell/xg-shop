<template>
	<view class="tab-product">
		<view class="row-center-stretch margin-top-base margin-bottom-base padding-side-lg">
			<view class="flex-1 row-between-center">
				<view :class="{'tab-title-selected': currentTitleIndex === 0}" class="tab-title" @tap="onTitleTap(0)">
					<text :class="{'tab-title-text-selected': currentTitleIndex === 0}" class="tab-title-text">{{sortOptions[currentSortOptionIndex].title}}</text>
					<uni-icons :color="currentTitleIndex === 0 ? UNI_COLOR_RED : UNI_COLOR_WHITE" :size="10" :type="showSortOptionsPopup ? 'arrowup' : 'arrowdown'"></uni-icons>
				</view>
				<view :class="{'tab-title-selected': currentTitleIndex === 1}" class="tab-title" @tap="onTitleTap(1)">
					<text :class="{'tab-title-text-selected': currentTitleIndex === 1}" class="tab-title-text">销量</text>
				</view>
				<view :class="{'tab-title-selected': currentTitleIndex === 2}" class="tab-title" @tap="onTitleTap(2)">
					<text :class="{'tab-title-text-selected': currentTitleIndex === 2}" class="tab-title-text">价格</text>
					
					<view class="column-center-center">
						<uni-icons v-if="priceIconStatus === 'all' || priceIconStatus === 'up'" :size="10" :color="currentTitleIndex === 2 ? UNI_COLOR_RED : UNI_COLOR_WHITE" type="arrowup"></uni-icons>
						<uni-icons v-if="priceIconStatus === 'all' || priceIconStatus === 'down'" :size="10" :color="currentTitleIndex === 2 ? UNI_COLOR_RED : UNI_COLOR_WHITE" type="arrowdown"></uni-icons>
					</view>
				</view>
				<view :class="{'tab-title-selected': currentTitleIndex === 3}" class="tab-title" @tap="onTitleTap(3)">
					<text :class="{'tab-title-text-selected': currentTitleIndex === 3}" class="tab-title-text">仅看有货</text>
				</view>
			</view>
			
			<view class="margin-left-base" @tap="onToggleWaterfallTap">
				<image class="img-size-base" :src="waterfall ? '/static/shop/list.png' : '/static/shop/waterfall.png'" mode=""></image>
			</view>
		</view>
		<view class="column-center-stretch list-wrap">
			<xg-list class="list">
				<xg-list-item>
					<com-product-list :waterfall="waterfall" :products="products"></com-product-list>
				</xg-list-item>
			</xg-list>
			
			<view v-if="showSortOptionsPopup" class="sort-option-popup" @tap="onSortOptionsPopupTap">
				<view class="bg-color-white">
					<view :class="{'border-top-solid-1': optionIndex !== 0}" class="row-between-center padding-v-side-base padding-side-lg" v-for="(option, optionIndex) of sortOptions" :key="optionIndex" @tap="onSortOptionTap(optionIndex)">
						<text :class="{'text-color-red': optionIndex === currentSortOptionIndex}" class="font-size-lg">{{option.desc}}</text>
						<uni-icons v-if="optionIndex === currentSortOptionIndex" :color="UNI_COLOR_RED" type="checkmarkempty"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import data from '@/data/shop/shop/tab-product';
	
	import config from './tab-product/config';
	import mixin from '@/common/mixin';
	
	import comProductList from './tab-product/com-product-list';
	
	export default {
		mixins: [config, mixin],
		components: {
			comProductList
		},
		data() {
			return {
				products: []
			}
		},
		async created() {
			const productsPromise = data.products();
			
			this.products = await productsPromise;
		},
		methods: {
			onTitleTap(index) {
				
				if (2 === index) {
					this.togglePriceIconStatus();
				} else {
					this.setPriceIconStatus('all');
				}
				
				if (0 === index) {
					this.toggleSortOptionsPopup();
				} else {
					this.hiddenSortOptionsPopup();
				}
				
				this.setCurrentTitleIndex(index);
			},
			onSortOptionTap(index) {
				this.setCurrentSortOptionIndex(index);
			},
			onSortOptionsPopupTap() {
				this.hiddenSortOptionsPopup();
			},
			
			onToggleWaterfallTap() {
				this.toggleWaterfall();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tab-product {
		/* #ifdef MP-WEIXIN */
		height: 100%;
		/* #endif */
		
		@include flex-layout(column);
	}
	
	.tab-title {
		@include flex-layout(row, center, center);
		
		height: 60rpx;
		padding: 0 $uni-spacing-col-lg;
	}
	.tab-title-selected {
		background-color: $uni-color-white;
		border-radius: $uni-border-radius-rect-circle;
	}
	.tab-title-text {
		font-size: $uni-font-size-lg;
		color: $uni-color-white;
	}
	.tab-title-text-selected {
		color: $uni-color-red;
	}
	
	.list-wrap {
		height: 0;
		flex: 1;
	}
	.list {
		flex: 1;
		/* #ifdef MP-WEIXIN */
		height: 100%;
		/* #endif */
	}
	
	.tab-product-list {
		/* #ifdef MP-WEIXIN */
		height: 100%;
		/* #endif */
		
		flex: 1;
	}
	
	.product-image {
		width: 220rpx;
		height: 220rpx;
	}
	
	.sort-option-popup {
		@include position(absolute, 0 0 0 0);
		
		background-color: $uni-bg-color-mask;
	}
</style>