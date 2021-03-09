<template>
	<view class="media-list">
		<view v-if="mediaCount === 0" class="add-media-label" @tap="onAddMediaTap">
			<uni-icons :size="40" type="camera"></uni-icons>
			<text class="add-media-label-text">添加图片/视频</text>
		</view>
		
		<uni-grid :column="3" :highlight="false" :square="true" :show-border="false">
			<uni-grid-item v-if="video">
				<view class="gird-item">
					<video id="video" class="media-item" :show-loading="false" :muted="true" :autoplay="true" :show-center-play-btn="false" :show-play-btn="false" :controls="false" :src="video" @play="videoTimeUpdate">
						<view class="play-btn-wrap" @tap="onMediaTap">
							<image class="play-btn" src="/static/common/play.png" mode="widthFix"></image>
						</view>
					</video>
					
				</view>
			</uni-grid-item>
			<uni-grid-item v-for="(image, imageIndex) of imageList" :key="imageIndex">
				<view class="gird-item" @tap="onMediaTap">
					<image class="media-item" :src="image" mode="aspectFit"></image>
				</view>
			</uni-grid-item>
			<uni-grid-item v-if="mediaCount > 0">
				<view class="gird-item">
					<view class="add-media media-item" @tap="onAddMediaTap">
						<uni-icons :size="40" type="camera"></uni-icons>
						<text class="add-media-label-text">添加图片/视频</text>
					</view>
				</view>
			</uni-grid-item>
		</uni-grid>
		
		
		<xg-media-preview title="已选择" ref="media-preview"></xg-media-preview>
	</view>
</template>

<script>
	export default {
		props: {
			imageCount: {
				type: Number,
				default: 6
			},
		},
		data() {
			return {
				imageList: [],
				video: ''
			}
		},
		computed: {
			mediaCount() {
				return this.mediaList.length; 
			},
			mediaList() {
				const list = this.imageList.map(item => {
					return {
						type: 'image',
						src: item
					}
				})
				
				if (this.video !== '') {
					list.unshift({
						type: 'video',
						src: this.video
					})
				}
				
				return list;
			}
		},
		created() {
			this.$watch('mediaList', () => {
				this.$emit('confirm', {
					detail: {
						medias: this.mediaList
					}
				})
			})
		},
		methods: {
			videoTimeUpdate(e) {
				const VideoContext = uni.createVideoContext('video', this);
				
				setTimeout(() => {
					VideoContext.pause();
				}, 100);
			},
			
			onMediaTap () {
				this.$refs['media-preview'].preview(this.mediaList, 0);
			},
			
			onAddMediaTap() {
				const that = this;
				
				uni.showActionSheet({
					itemList: ['图片', '视频'],
					success(res) {
						const index = res.tapIndex;
						
						if (0 === index) {
							uni.chooseImage({
								count: that.imageCount,
								success(res) {
									// console.log(res.tempFilePaths);
									that.imageList.push(...res.tempFilePaths);
								}
							});
							return ;
						}
						
						if (1 === index) {
							uni.chooseVideo({
								success(res) {
									// console.log(res);
									that.video = res.tempFilePath;
								}
							})
							return ;
						}
					}
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	$media-width: 220rpx;
	$media-height: 220rpx;
	
	
	
	.media-list {
		background-color: $uni-bg-color;
	}
	.gird-item {
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.play-btn-wrap {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.play-btn {
		width: 60rpx;
		opacity: 0.8;
	}
	.media-item {
		width: $media-width;
		height: $media-height;
		
		border-radius: $uni-border-radius-lg;
	}
	
	.add-media {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
		background-color: $uni-bg-color-grey;
	}
	.add-media-label {
		height: $media-height;
		
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
		background-color: $uni-bg-color-grey;
		border-radius: $uni-border-radius-lg;
	}
	.add-media-label-text {
		font-size: $uni-font-size-base;
	}
	
	
	
</style>