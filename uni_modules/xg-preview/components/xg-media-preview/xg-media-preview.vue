<template>
	<view class="media-preview" v-if="show"  @tap="mediaTap">
		<swiper class="media-preview-swiper" :current="current" @change="onSwiperChange">
			<swiper-item v-for="(media, mediaIndex) of urls" :key="mediaIndex">
				<view class="media-preview-swiper-item" >
					<video v-if="media.type === 'video'" class="media" :poster="media.poster" :src="media.src"  object-fit="contain" :enable-progress-gesture="false" :show-fullscreen-btn="false" :show-mute-btn="true" :enable-play-gesture="true" @play="onVideoPlay">
					</video>
					<image class="media" v-if="media.type === 'image'" :src="media.src" mode="aspectFit" @pause="onVideoPause"></image>
				</view>
			</swiper-item>
		</swiper>
		
		<view class="media-title">
			<uni-icons type="closeempty" :size="20" color="#FFFFFF" @click="onCloseTap"></uni-icons>
			<view class="media-title-center">
				<text class="media-title-text">{{current + 1}}/</text>
				<text class="media-title-text">{{mediaCount}}</text>
			</view>
			
			<text class="media-title-text">{{title}}</text>
		</view>
	</view>
</template>

<script>
	/**
	 * @property {Function} preview 
	 */
	export default {
		props: {
			title: {
				type: String,
				default: '标题'
			}
		},
		
		data() {
			return {
				show: false,
				videoPlaying: false,
				
				urls: [],
				current: '',
			}
		},
		computed: {
			mediaCount() {
				return this.urls.length;
			}
		},
		mounted() {
			// #ifdef APP-PLUS
			plus.navigator.setFullscreen(true);
			// #endif
		},
		destroyed() {
			// #ifdef APP-PLUS
			plus.navigator.setFullscreen(false);
			// #endif
		},
		methods: {
			/**
			 * @param {Object} urls
			 * @param {Object} current
			 * @example preview([{type: 'image', src: ''}, {type: 'video', scr: ''}], 0);
			 */
			preview(urls, current) {
				this.show = true;
				this.urls = urls;
				this.current = current;
			},
			onSwiperChange(e) {
				const current = e.detail.current;
				
				this.current = current;
			},
			
			onCloseTap() {
				this.show = false;
			},
			mediaTap(e) {
				this.$emit('click', e);
			},
			onVideoPlay() {
				this.videoPlaying = true;
			},
			onVideoPause() {
				this.videoPlaying = false;
			}
		}
		
		
		
	}
</script>

<style lang="scss" scoped>
	.media-preview{
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		
		background-color: #000000;
		
		/* #ifndef APP-NVUE */
		z-index: 10000;
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
	}
	.media-preview-swiper {
		flex: 1;
	}
	.media-preview-swiper-item {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.media {
		flex: 1;
		width: 750rpx;
	}
	.media-title {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
		
		padding: $uni-spacing-row-lg $uni-spacing-col-lg;
	}
	.media-title-center {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}
	.media-title-text {
		color: #FFFFFF;
		
		font-size: 16px;
	}
</style>