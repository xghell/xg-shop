<template>
	<view class="border-top-left-radius-xl border-bottom-left-radius-xl com-filter">
		<view class="flex-1">
			<xg-list class="flex-1 border-top-left-radius-xl filter-list" :show-scrollbar="false">
				<xg-list-item class="border-top-left-radius-xl filter-list-item">
					<tpl-collapse class="border-top-left-radius-xl border-bottom-left-radius-xl border-bottom-right-radius-xl collapse-section">
						<tpl-collapse-item class="collapse-section-item" :show-arrow="false" :open="true" :disabled="true" title="服务/折扣">
							<view class="collapse-content">
								<view class="collapse-content-title" :class="{'collapse-content-title-selected': services.has(serviceOptionIndex)}" v-for="(serviceOption, serviceOptionIndex) of serviceOptions" :key="serviceOptionIndex" @tap="onOptionTap(services, serviceOptionIndex)">
									<text :class="{'collapse-content-title-text-selected': services.has(serviceOptionIndex)}" class="font-size-base collapse-content-title-text">{{serviceOption.title}}</text>
								</view>
							</view>
						</tpl-collapse-item>
						
						<tpl-collapse-item class="collapse-section-item" :show-arrow="false" :open="true" :disabled="true" title="价格区间">
							<view class="collapse-content">
								<input class="collapse-content-title collapse-content-title-text" type="text" placeholder="最低价" value="" @blur="onMinPriceBlur"/>
								<view class="margin-top-base margin-left-lg">
									<text>-</text>
								</view>
								<input class="collapse-content-title collapse-content-title-text" type="text" placeholder="最高价" value=""  @blur="onMaxPriceBlur"/>
							</view>
						</tpl-collapse-item>
					</tpl-collapse>
				</xg-list-item>
				
				<xg-list-item class="filter-list-item">
					<tpl-collapse class="margin-top-base border-radius-xl collapse-section">
						<tpl-collapse-item class="collapse-section-item" title="品牌">
							<view slot="header"  class="collapse-content">
								<view :class="{'collapse-content-title-selected': brands.has(brandOptionIndex)}" class="collapse-content-title" v-for="(brandOption, brandOptionIndex) of brandOptions.slice(0, 6)" :key="brandOptionIndex" @tap="onOptionTap(brands, brandOptionIndex)">
									<text :class="{'collapse-content-title-text-selected': brands.has(brandOptionIndex)}" class="font-size-base collapse-content-title-text">{{brandOption.title}}</text>
								</view>
							</view>
							<view class="collapse-content">
								<view :class="{'collapse-content-title-selected': brands.has(initShowBrandCount + brandOptionIndex)}" class="collapse-content-title" v-for="(brandOption, brandOptionIndex) of brandOptions.slice(initShowBrandCount)" :key="brandOptionIndex" @tap="onOptionTap(brands, initShowBrandCount + brandOptionIndex)">
									<text :class="{'collapse-content-title-text-selected': brands.has(initShowBrandCount + brandOptionIndex)}" class="font-size-base collapse-content-title-text">{{brandOption.title}}</text>
								</view>
							</view>
						</tpl-collapse-item>
					</tpl-collapse>
				</xg-list-item>
				
				<xg-list-item class="filter-list-item">
					<tpl-collapse class="margin-top-base border-top-left-radius-xl border-top-right-radius-xl collapse-section">
						<tpl-collapse-item class="collapse-section-item" v-for="(specificationOption, specificationOptionIndex) of specificationOptions" :key="specificationOptionIndex" :title="specificationOption.group">
							<view class="collapse-content">
								<view :class="{'collapse-content-title-selected': specifications.has(specificationOptionIndex+'-'+paramIndex)}" class="collapse-content-title" v-for="(param, paramIndex) of specificationOption.params" :key="paramIndex" @tap="onOptionTap(specifications, specificationOptionIndex+'-'+paramIndex)">
									<text :class="{'collapse-content-title-text-selected': specifications.has(specificationOptionIndex+'-'+paramIndex)}" class="font-size-base collapse-content-title-text">{{param.title}}</text>
								</view>
							</view>
						</tpl-collapse-item>
					</tpl-collapse>
				</xg-list-item>
			</xg-list>
		</view>
		
		
		<view class="row-between-center bg-color-white border-top-solid-1">
			<view class="row-center-center flex-1 filter-btn" @tap="onResetTap">
				<text class="font-size-base">重置</text>
			</view>
			<view class="row-center-center bg-color-red flex-1 filter-btn" @tap="onConfirmTap">
				<text class="font-size-base text-color-white">确定（10万+件商品）</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			serviceOptions: {
				type: Array,
			},
			brandOptions: {
				type: Array
			},
			specificationOptions: {
				type: Array
			}
		},
		data() {
			return {
				initShowBrandCount: 6,
				
				minPrice: '',
				maxPrice: '',
				services: new Set(),
				brands: new Set(),
				specifications: new Set(),
			}
		},
		methods: {
			onOptionTap(context, index) {
				if (context.has(index)) {
					context.delete(index);
				} else {
					context.add(index);
				}
				
				this.$forceUpdate();
			},
			
			onMinPriceBlur(e) {
				this.minPrice = e.detail.value;
			},
			onMaxPriceBlur(e) {
				this.maxPrice = e.detail.value;
			},
			
			onResetTap() {
				this.services.clear();
				this.brands.clear();
				this.specifications.clear();
				
				this.$forceUpdate();
			},
			onConfirmTap() {
				const data = {
					minPrice: this.minPrice,
					maxPrice: this.maxPrice,
					services: [...this.services],
					brands: [...this.brands],
					specifications: [...this.specifications]
				}
				
				this.$emit('confirm', {detail: {value: data}});
			}
		},
	}
</script>

<style lang="scss" scoped>
	$filter-width: 600rpx;
	
	.com-filter {
		/* #ifdef MP */
		height: 100%;
		/* #endif */
		// @include border(2px solid red);
		
		width: $filter-width;
		
		background-color: $uni-color-white;
	}
	
	.filter-list {
		/* #ifdef MP */
		height: 100%;
		/* #endif */
	}
	.filter-list-item {
		background-color: $uni-color-grey;
	}
	
	.collapse-section {
		background-color: $uni-color-white;
		// border-radius: $uni-border-radius-xl;
		
		padding-bottom: $uni-spacing-row-lg;
		
		padding-left: $uni-spacing-col-base;
		// padding-right: $uni-spacing-col-base;
	}
	.collapse-section-item {
		margin-top: $uni-spacing-row-lg;
	}
	.collapse-content {
		@include flex-layout(row, flex-start, center);
		flex-wrap: wrap;
	}
	.collapse-content-title {
		@include flex-layout(row, center, center);
		
		width: 160rpx;
		height: 64rpx;
		
		background-color: $uni-color-grey;
		border-radius: $uni-border-radius-rect-circle;
		
		margin-top: $uni-spacing-row-lg;
		margin-left: $uni-spacing-col-lg;
		
	}
	.collapse-content-title-selected {
		background-color: $uni-color-pink;
		@include border(1px solid red);
	}
	.collapse-content-title-text {
		@include flex-layout(row, center, center);
		font-size: $uni-font-size-base;
		
		text-align: center;
		@include lines(1);
	}
	
	.collapse-content-title-text-selected {
		color: $uni-color-red;
		font-weight: bold;
	}
	
	
	.filter-btn {
		height: 90rpx;
	}
</style>