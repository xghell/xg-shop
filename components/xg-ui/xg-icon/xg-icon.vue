<template>
	<view class="icon" :style="(selected ? selectedIconStyle||iconStyle : iconStyle) + ';flex-direction: '+ (vertical ? 'column' : 'row')" @tap="iconTap">
		<text v-if="text||selectedText" class="text iconfont " :style="'font-family:' + (selected ? selectedFontFamily||fontFamily : fontFamily) + ';' + (selected ? selectedTextStyle||textStyle : textStyle)">{{selected ? selectedText||text : text}}</text>
		<image v-if="thumb||selectedThumb" class="thumb" :style="selected? selectedThumbStyle||thumbStyle : thumbStyle" :src="selected? selectedThumb||thumb : thumb"></image>
		<text v-if="title||selectedTitle" class="text title " :style="'font-family: ' + (selected ? selectedFontFamily||fontFamily : fontFamily) + ';' + (selected ? selectedTitleStyle||titleStyle : titleStyle)">{{selected ? selectedTitle||title : title}}</text>
		<text v-if="subtitle||selectedSubtitle" class="text subtitle " :style="'font-family: ' + (selected ? selectedFontFamily||fontFamily : fontFamily) + ';' + (selected ? selectedSubtitleStyle||subtitleStyle : subtitleStyle)">{{selected ? selectedSubtitle||subtitle : subtitle}}</text>
	</view>
</template>

<script>
	/**
	 * @iconTap
	 */
	export default {
		name: 'XgIcon',
		props: {
			vertical: {
				type: Boolean,
				default: true
			},
			selected: {
				type: Boolean,
				default: false
			},
			//唯一标识符
			index: {
				type: String,
			},
			iconStyle: {
				type: String,
			},
			selectedIconStyle: {
				type: String,
			},
			fontFamily: {
				type: String,
			},
			selectedFontFamily: {
				type: String,
			},
			// 如果是字体图标，则text以\ue开头形如\ue651
			text: {
				type: String,
			},
			selectedText: {
				type: String,
			},
			textStyle: {
				type: String,
			},
			selectedTextStyle: {
				type: String,
			},
			thumb: {
				type: String
			},
			selectedThumb: {
				type: String
			},
			thumbStyle: {
				type: String
			},
			selectedThumbStyle: {
				type: String
			},
			title: {
				type: String,
			},
			selectedTitle: {
				type: String,
			},
			titleStyle: {
				type: String
			},
			selectedTitleStyle: {
				type: String
			},
			subtitle: {
				type: String,
			},
			selectedSubtitle: {
				type: String,
			},
			subtitleStyle: {
				type: String
			},
			selectedSubtitleStyle: {
				type: String
			}
		},
		methods: {
			iconTap() {
				this.$emit('iconTap', this.index);
				// console.log('font-family: ' + (this.selected ? this.selectedFontFamily||this.fontFamily : this.fontFamily) + ';' + (this.selected ? this.selectedSubtitleStyle||this.subtitleStyle : this.subtitleStyle));
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
	
	.text {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* #ifndef APP-PLUS-NVUE */
		white-space: nowrap;
		/* #endif */
		font-size: $uni-font-size-base;
	}
	.icon {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.iconfont {
		font-size: $uni-icon-size-sm;
	}
	.thumb {
		width: $uni-icon-size-sm;
		height: $uni-icon-size-sm;
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