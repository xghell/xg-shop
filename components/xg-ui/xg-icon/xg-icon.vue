<template>
	<view class="icon" :style="`${iconStyle};flex-direction: ${vertical ? 'column' : 'row'};`" @tap="iconTap(id)">
		<text v-if="text" class="iconfont" :style="`font-family: ${fontFamily};` + textStyle">{{text}}</text>
		<image v-if="thumb" class="thumb" :style="thumbStyle" :src="thumb"></image>
		<text v-if="title" class="title" :style="`font-family: ${fontFamily};` + titleStyle">{{title}}</text>
		<text v-if="subtitle" class="subtitle" :style="`font-family: ${fontFamily};` + subtitleStyle">{{subtitle}}</text>
	</view>
</template>

<script>
	/**
	 * @tap
	 */
	export default {
		name: 'XgIcon',
		props: {
			vertical: {
				type: Boolean,
				default: true
			},
			//唯一标识符
			id: {
				type: String,
				required: true
			},
			iconStyle: {
				type: String,
			},
			fontFamily: {
				type: String,
			},
			// 如果是字体图标，则text以\ue开头形如\ue651
			text: {
				type: String,
			},
			textStyle: {
				type: String,
			},
			thumb: {
				type: String
			},
			thumbStyle: {
				type: String
			},
			title: {
				type: String,
			},
			titleStyle: {
				type: String
			},
			subtitle: {
				type: String,
			},
			subtitleStyle: {
				type: String
			}
		},
		methods: {
			iconTap(id) {
				// console.log('xg-icon', id);
				this.$emit('iconTap', id);
			}
		},
	}
</script>

<style lang="scss" scoped>
	$uni-font-size-mi:8px !default;
	$uni-font-size-base:14px !default;
	$uni-icon-color-title: #333 !default;
	$uni-icon-color-subtitle: #999 !default;
	$uni-icon-size-mi: 20px !default;
	$uni-icon-size-sm: 30px !default;
	
	.icon {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.iconfont {
		font-size: $uni-icon-size-mi;
	}
	.thumb {
		width: $uni-icon-size-mi;
		height: $uni-icon-size-mi;
	}
	.title {
		font-size: $uni-font-size-base;
		color: $uni-icon-color-title;
	}
	.subtitle {
		font-size: $uni-font-size-mi;
		color: $uni-icon-color-subtitle;
	}
</style>