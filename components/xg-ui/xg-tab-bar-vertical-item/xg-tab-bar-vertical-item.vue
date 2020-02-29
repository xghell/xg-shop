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
			// id: {
			// 	type: String|Number,
			// 	required: true
			// },
		},
		data() {
			return {
				index: 0,
				shouldScrollTop: 0,
				tabBarItemHeight: undefined,
			}
		},
		methods: {
			// #ifdef APP-NVUE
			getComponentRect(ref) {
				
				const dom = uni.requireNativePlugin('dom');
				
				return new Promise(function (resolve, reject) {
					dom.getComponentRect(ref, data => {
						resolve(data);
					})
				})
			},
			// #endif
			itemTap() {
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
						const tabBarItemHeight = data[0].height;
						
						this.tabBar.tabBarItemHeightSum += tabBarItemHeight;
						
						this.shouldScrollTop = this.tabBar.tabBarItemHeightSum - this.tabBar.tabBarHeight/2;
					})
					// #endif
					
					// #ifdef APP-PLUS-NVUE
					const tabBarItemData = await this.getComponentRect(this.$refs['tab-bar-item']);
					const tabBarItemHeight = tabBarItemData.size.height;
					
					this.tabBar.tabBarItemHeightSum += tabBarItemHeight;
					
					this.shouldScrollTop = this.tabBar.tabBarItemHeightSum - this.tabBar.tabBarHeight/2;
					// #endif
				}, 10);
			})
		}
	}
</script>

<style scoped>
	.tab-bar-item {
		/* height: 100rpx; */
		/* border-width: 1px; */
	}
</style>