<template>
	<view>
		<uni-grid :showBorder="false" :highlight="false" :column="columnCount">
			<uni-grid-item v-for="(image, imageIndex) of imageList" :key="imageIndex">
				<image class="grid-item preview-image" :src="image" mode="aspectFill" @tap="previewImageTap(imageIndex)"></image>
				<uni-icons class="close-icon" type="clear" @click="closeIconClick(imageIndex)"></uni-icons>
			</uni-grid-item>
			
			<uni-grid-item v-if="showAddMedia">
				<view class="box-shadow add-media" @tap="addMediaTap">
					<xg-icon :fontFamily="addMediaIconConfig.fontFamily" :text="addMediaIconConfig.text" :textStyle="addMediaIconConfig.textStyle" :subtitle="addMediaIconConfig.subtitle"></xg-icon>
				</view>
			</uni-grid-item>
		</uni-grid>
		
		
		<view class="box-shadow add-media-one" v-if="showAddMediaOne" @tap="addMediaTap">
			<xg-icon :fontFamily="addMediaIconConfig.fontFamily" :text="addMediaIconConfig.text" :textStyle="addMediaIconConfig.textStyle" :subtitle="addMediaIconConfig.subtitle"></xg-icon>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			columnCount: {
				type: Number,
				default: 3
			},
			maxImageCount: {
				type: Number,
				default: 6
			}
		},
		data() {
			return {
				// showAddMedia: true,
				
				addMediaIconConfig: {
					fontFamily: 'xg-iconfont',
					text: '\ue60e',
					textStyle: `font-size: 30px`,
					subtitle: '添加图片/视频'
				},
				
				imageList: [
					'http://img4.imgtn.bdimg.com/it/u=1294777008,606946384&fm=26&gp=0.jpg',
					'http://img4.imgtn.bdimg.com/it/u=271815213,1458391213&fm=26&gp=0.jpg',
					'http://img4.imgtn.bdimg.com/it/u=1294777008,606946384&fm=26&gp=0.jpg',
					'http://img4.imgtn.bdimg.com/it/u=271815213,1458391213&fm=26&gp=0.jpg',
				]
			}
		},
		computed: {
			choosableImageCount() {
				return this.maxImageCount - this.imageList.length;
			},
			showAddMedia() {
				return (this.choosableImageCount <= 0 || this.choosableImageCount >= this.maxImageCount) ? false : true;
			},
			showAddMediaOne() {
				return this.choosableImageCount >= this.maxImageCount ? true : false;
			}
		},
		methods: {
			previewImageTap(index) {
				 uni.previewImage({
					 current: index,
					 urls: this.imageList,
				});
			},
			addMediaTap() {
				uni.chooseImage({
					count: this.choosableImageCount,
					sizeType: ['original'],
					success: (res) => {
						this.imageList.push(...res.tempFilePaths);
					}
				});
			},
			closeIconClick(index) {
				this.imageList.splice(index, 1);
			}
		},
	}
</script>

<style lang="scss" scoped>
	$uni-font-size-mx: 44rpx !default;
	
	.box-shadow {
		box-shadow: 0px 0px 5px 1px #EEEEEE;
	}
	
	.grid-item {
		padding-left: $uni-spacing-col-base/2;
		padding-right: $uni-spacing-col-base/2;
		padding-top: $uni-spacing-row-base/2;
		padding-bottom: $uni-spacing-row-base/2;
	}
	
	.close-icon {
		position: absolute;
		top: 0;
		right: 0;
	}
	
	.preview-image {
		/* #ifdef APP-PLUS-NVUE */
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		/* #endif */
		
		/* #ifndef APP-PLUS-NVUE */
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		/* #endif */
	}
	
	.add-media {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		
		margin-left: $uni-spacing-col-base/2;
		margin-right: $uni-spacing-col-base/2;
		margin-top: $uni-spacing-row-base/2;
		margin-bottom: $uni-spacing-row-base/2;
		
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.add-media-one {
		padding-top: $uni-spacing-row-mx;
		padding-bottom: $uni-spacing-row-mx;
	}
</style>