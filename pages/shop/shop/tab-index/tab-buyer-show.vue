<template>
	<xg-waterfall :show-scrollbar="false" :columnCount="2" :columnGap="UNI_SPACING_COL_BASE" :leftGap="UNI_SPACING_COL_LG" :rightGap="UNI_SPACING_COL_LG">
		<xg-waterfall-item v-for="(buyerShow, buyerShowIndex) of buyerShows" :key="buyerShowIndex">
			<view class="bg-color-white border-radius-lg margin-bottom-base">
				<view>
					<view v-if="buyerShow.mediaList[0].type === 'video'" class="">
						<image class="media" :src="buyerShow.mediaList[0].poster" mode=""></image>
					</view>
					<view v-else class="">
						<image class="media" :src="buyerShow.mediaList[0].src" mode=""></image>
					</view>
				</view>
				
				<view class="padding-lg margin-top-base">
					<view class="row-start-center">
						<image class="img-size-lg border-radius-circle" :src="buyerShow.user.avatar" mode="aspectFit"></image>
						<view class="flex-1 margin-left-base">
							<text class="font-size-base lines-1">{{buyerShow.user.username}}</text>
							<text class="font-size-base lines-1">{{buyerShow.date}}</text>
						</view>
						<view class="">
							<xg-thumb-up :count="buyerShow.thumbUpCount"></xg-thumb-up>
						</view>
					</view>
					
					<view class="margin-top-base">
						<text class="font-size-base lines-2">{{buyerShow.title}}</text>
					</view>
				</view>
			</view>
		</xg-waterfall-item>
	</xg-waterfall>
</template>

<script>
	import data from '@/data/shop/shop/tab-index/tab-buyer-show';
	
	import mixin from '@/common/mixin';
	
	export default {
		mixins: [mixin],
		data() {
			return {
				buyerShows: []
			}
		},
		async created() {
			const buyerShowsPromise = data.buyerShows();
			
			this.buyerShows = await buyerShowsPromise;
		}
	}
</script>

<style lang="scss" scoped>
	$column-count: 2;
	$side-gap: $uni-spacing-col-lg;
	$column-gap: $uni-spacing-col-base;
	
	$item-width: (750rpx - $side-gap*2 - $column-gap*($column-count - 1))/$column-count;
	
	$media-width: $item-width;
	.media {
		width: $media-width;
		height: $media-width * 1;
		
		@include border-radius($uni-border-radius-lg $uni-border-radius-lg 0 0);
	}
</style>