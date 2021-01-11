<template>
	<tpl-product-waterfall>
		<view class="">
			<navigator hover-class="none" url="/pages/product/list">
				<view class="row-between-center bg-color-white border-radius-lg padding-v-side-base padding-side-lg margin-side-lg margin-top-base" v-for="(cate, cateIndex) of cates" :key="cateIndex">
					<view class="row-center-center">
						<view class="title-line"></view>
						<text class="font-size-lg font-weight-bold margin-left-base">{{cate.title}}</text>
					</view>
					<uni-icons :size="12" type="arrowright"></uni-icons>
				</view>
			</navigator>
		</view>
	</tpl-product-waterfall>
</template>

<script>
	import data from '@/data/shop/shop/tab-cate';
	
	export default {
		data() {
			return {
				cates: []
			}
		},
		async created() {
			const catesPromise = data.cates();
			
			this.cates = await catesPromise;
		}
	}
</script>

<style lang="scss" scoped>
	.title-line {
		width: 8rpx;
		height: 40rpx;
		
		background-color: $uni-color-red;
	}
</style>