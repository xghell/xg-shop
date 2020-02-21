<template>
	<view ref="tab-bar-item" class="tab-bar-item" @tap="itemTap">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		inject: ['tabBar'],
		props: {
			//唯一标识
			id: {
				type: String|Number,
				required: true
			},
		},
		data() {
			return {
				index: 0,
				shouldScrollLeft: 0,
				shouldScrollTop: 0,
				tabBarItemWidth: undefined,
				tabBarItemHeight: undefined,
			}
		},
		methods: {
			itemTap() {
				this.tabBar.scrollLeft = this.shouldScrollLeft;
				this.tabBar.scrollTop = this.shouldScrollTop;
			}
		},
		created() {
			this.index = this.tabBar.itemIndex++;
		},
		mounted() {
			this.$nextTick(function () {
				setTimeout(async () => {
					// #ifndef APP-PLUS-NVUE
					const selector = uni.createSelectorQuery().in(this);
					selector.select('.tab-bar-item').fields({size: true});
					selector.exec(data => {
						const tabBarItemWidth = data[0].width;
						const tabBarItemHeight = data[0].height;
						
						this.shouldScrollLeft = this.tabBar.tabBarItemWidthSum - this.tabBar.tabBarWidth/2 + tabBarItemWidth/2;
						this.shouldScrollTop = this.tabBar.tabBarItemHeightSum - this.tabBar.tabBarHeight/2 + tabBarItemHeight/2;
						
						this.tabBar.tabBarItemWidthSum += tabBarItemWidth;
						this.tabBar.tabBarItemHeightSum += tabBarItemHeight;
					})
					// #endif
					
					// #ifdef APP-PLUS-NVUE
					const tabBarItemData = await this.getComponentRect(this.$refs['tab-bar-item']);
					const tabBarItemWidth = tabBarItemData.size.width;
					const tabBarItemHeight = tabBarItemData.size.height;
					
					this.shouldScrollLeft = this.tabBar.tabBarItemWidthSum - this.tabBar.tabBarWidth/2 + tabBarItemWidth/2;
					this.shouldScrollTop = this.tabBar.tabBarItemHeightSum - this.tabBar.tabBarHeight/2 + tabBarItemHeight/2;
					
					this.tabBar.tabBarItemWidthSum += tabBarItemWidth;
					this.tabBar.tabBarItemHeightSum += tabBarItemHeight;
					// #endif
				}, 10);
			})
		}
	}
</script>

<style scoped>
	.tab-bar-item {
		height: 100rpx;
		border-width: 1px;
	}
</style>