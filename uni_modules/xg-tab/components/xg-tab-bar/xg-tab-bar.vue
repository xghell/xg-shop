<template>
	<view class="tab-bar" :style="{height: height, backgroundColor: backgroundColor}">
		<view class="tab-bar-item" v-for="(item, itemIndex) of list" :key="itemIndex" @tap="itemTap(itemIndex)">
			<image :style="{width: iconWidth}" :src="currentIndex === itemIndex ? item.selectedIconPath : item.iconPath" mode="widthFix"></image>
			<text :style="{fontSize: fontSize, marginTop: spacing, color: currentIndex === itemIndex ? selectedColor : color}">{{item.text}}</text>
		</view>
	</view>
</template>

<script>
	/**
	 * @event {Function()} change 
	 */
	export default {
		props: {
			current: {
				type: Number,
				default: 0,
			},
			color: {
				type: String,
			},
			selectedColor: {
				type: String,
			},
			backgroundColor: {
				type: String,
			},
			/**
			 * @example [
				 {
					 iconPath: ''
					 selectedIconPath: ''
					 text: ''
				 }
			 ]
			 */
			list: {
				type: Array
			},
			fontSize: {
				type: String,
				default: '10px'
			},
			iconWidth: {
				type: String,
				default: '24px'
			},
			spacing: {
				type: String,
				default: '3px'
			},
			height: {
				type: String,
				default: '50px'
			}
		},
		data() {
			return {
				currentIndex: 0
			}
		},
		created() {
			this.$watch('current', () => {
				this.currentIndex = this.current;
			}, {immediate: true});
			
			this.$watch('currentIndex', () => {
				this.$emit('change', {
					detail: {
						current: this.currentIndex
					}
				})
			})
		},
		methods: {
			itemTap(index) {
				this.currentIndex = index;
			}
		},
	}
</script>

<style lang="scss" scoped>
	.tab-bar {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: space-around;
		align-items: stretch;
	}
	.tab-bar-item {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>