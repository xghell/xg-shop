<template>
	<xg-waterfall :column-count="columnCount" :column-gap="columnGap" :left-gap="leftGap" :right-gap="rightGap">
		<xg-waterfall-header ref="waterfall-header">
			<slot></slot>
		</xg-waterfall-header>
		<xg-waterfall-item v-for="(video, videoIndex) of videos" :key="videoIndex">
			<view class="bg-color-white border-radius-lg padding-bottom-base margin-bottom-base">
				<view class="position-relative">
					<video v-if="video.showVideo" class="border-radius-lg" :style="{width: videoWidth + 'px', height: videoHeight + 'px'}" controls muted :src="video.video" :poster="video.poster"></video>
					<image v-else class="border-top-left-radius-lg border-top-right-radius-lg" :style="{width: videoWidth + 'px', height: videoHeight + 'px'}" :src="video.poster" mode=""></image>
					
					<view class="row-center-center bg-color-mask img-size-base border-radius-circle video-play-btn">
						<image class="img-size-xs" src="/static/common/play.png" mode="aspectFit"></image>
					</view>
				</view>
				
				<view class="margin-side-base">
					<text class="lines-2 font-size-lg margin-v-side-sm">{{video.title}}</text>
					<view class="row-between-center">
						<view class="row-between-center flex-1">
							<image class="img-size-base border-radius-circle" :src="video.user.avatar" mode="aspectFit"></image>
							<text class="flex-1 lines-1 font-size-base text-color-greyblack margin-left-base">{{video.user.name}}</text>
						</view>
						<view class="row-between-center margin-left-base">
							<uni-icons type="eye" :size="toPx(UNI_FONT_SIZE_LG)" :color="UNI_COLOR_GREYBLACK"></uni-icons>
							<text class="font-size-base text-color-greyblack margin-left-base">{{parseInt(video.user.fans_count) > 10000 ? ((parseInt(video.user.fans_count)/10000).toFixed(1) + ' 涓') : parseInt(video.user.fans_count)||0}}</text>
						</view>
					</view>
				</view>
			</view>
		</xg-waterfall-item>
	</xg-waterfall>
</template>

<script>
	import mixin from '@/common/mixin';
	export default {
		mixins: [mixin],
		props: {
			columnCount: {
				type: Number,
				default: 2
			},
			videoRatio: {
				type: Number|String,
				default: '1'
			},
			
			videos: {
				type: Array,
			},
		},
		computed: {
			columnGap() {
				return this.toPx(this.UNI_SPACING_COL_LG);
			},
			leftGap() {
				return this.toPx(this.UNI_SPACING_COL_LG);
			},
			rightGap() {
				return this.toPx(this.UNI_SPACING_COL_LG);
			},
			videoWidth() {
				return (this.toPx('750rpx') - this.toPx(this.leftGap) - this.toPx(this.rightGap) - this.toPx(this.columnGap) * (this.columnCount - 1)) / this.columnCount;
			},
			videoHeight() {
				return parseFloat(this.videoRatio) * this.videoWidth;
			},
		},
		methods: {
			// #ifdef MP
			//兼容微信小程序这个坑货(微信小程序组件插槽内容变化不触发组件updated事件)
			updateWaterfallHeader() {
				this.$refs['waterfall-header'].update();
			},
			// #endif
		},
	}
</script>

<style lang="scss" scoped>
	.video-play-btn {
		@include position(absolute, $uni-spacing-row-lg none none $uni-spacing-row-lg);
	}
</style>