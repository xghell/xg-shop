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
				shouldScrollLeft: 0,
				tabBarItemWidth: undefined,
				lastTabBarItemWidthSum: 0,
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
				this.tabBar.scrollLeft = this.lastTabBarItemWidthSum - this.tabBar.tabBarWidth/2 + this.tabBarItemWidth/2;
			}
		},
		created() {
			this.index = this.tabBar.itemIndex++;
		},
		mounted() {
			this.$nextTick(function () {
				setTimeout(async () => {
					// #ifndef APP-PLUS-NVUE
					this.lastTabBarItemWidthSum = this.tabBar.tabBarItemWidthSum;
					
					const selector = uni.createSelectorQuery().in(this);
					selector.select('.tab-bar-item').fields({size: true});
					selector.exec(data => {
						this.tabBarItemWidth = data[0].width;
						
						
						this.tabBar.tabBarItemWidthSum += this.tabBarItemWidth;
						
					})
					// #endif
					
					// #ifdef APP-PLUS-NVUE
					this.lastTabBarItemWidthSum = this.tabBar.tabBarItemWidthSum;
					
					const tabBarItemData = await this.getComponentRect(this.$refs['tab-bar-item']);
					this.tabBarItemWidth = tabBarItemData.size.width;
					
					
					this.tabBar.tabBarItemWidthSum += this.tabBarItemWidth;
					
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