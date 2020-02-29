<template>
	<view class="tab-bar">
		<block v-for="(icon, index) of iconList" :key="index">
			<xg-icon :selected="currentIndex === index" :fontFamily="icon.fontFamily||fontFamily" :iconStyle="iconStyle + ';' + icon.iconStyle" :selectedIconStyle="selectedIconStyle + ';' + icon.selectedIconStyle" :textStyle="textStyle + ';' + icon.textStyle" :selectedTextStyle="selectedTextStyle + ';' + icon.selectedTextStyle" :titleStyle="titleStyle + ';' + icon.titleStyle" :selectedTitleStyle="selectedTitleStyle + ';' + icon.selectedTitleStyle" :text="icon.text" :selectedText="icon.selectedText" :title="icon.title" :selectedTitle="icon.selectedTitle" @iconTap="iconTap(index, icon.url)"></xg-icon>
		</block>
	</view>
</template>

<script>
	/**
	 * @itemTap(index)
	 */
	export default {
		props: {
			currentIndex: {
				type: Number
			},
			fontFamily: {
				type: String
			},
			iconStyle: {
				type: String,
			},
			selectedIconStyle: {
				type: String,
			},
			textStyle: {
				type: String,
			},
			selectedTextStyle: {
				type: String,
			},
			titleStyle: {
				type: String
			},
			selectedTitleStyle: {
				type: String
			},
			iconList: {
				type: Array,
				default: function () {
					return [
						{
							iconStyle: '',
							selectedIconStyle: '',
							textStyle: '',
							selectedTextStyle: '',
							titleStyle: '',
							selectedTitleStyle: '',
							fontFamily: '',
							text: '',
							selectedText: '',
							title: '',
							selectedTitle: '',
						}
					]
				}
			}
		},
		methods: {
			iconTap(index, url) {
				this.$emit('itemTap', index);
				
				uni.navigateTo({
					url: url,
					animationType: 'none',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style lang="scss">
	.tab-bar {
		width: 750rpx;
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: space-around;
	}
</style>