<template>
	<scroll-view ref="tab-bar" class="tab-bar" :show-scrollbar="false" :scroll-x="true" :scroll-left="scrollLeft">
		<!-- #ifndef APP-PLUS-NVUE -->
		<view class="tab-bar">
		<!-- #endif -->
			<slot></slot>
		<!-- #ifndef APP-PLUS-NVUE -->
		</view>
		<!-- #endif -->
	</scroll-view>
</template>

<script>
	export default {
		name: 'XgTabBar',
		provide() {
			return {
				tabBar: this
			}
		},
		data() {
			return {
				scrollLeft: 0,
				tabBarWidth: undefined,
				itemIndex: 0,  //子组件索引，将在子组件中引用
				tabBarItemWidthSum: 0,
			}
		},
		mounted() {
			this.$nextTick(async function () {
				// #ifndef APP-PLUS-NVUE
				const selector = uni.createSelectorQuery().in(this);
				selector.select('.tab-bar').fields({size: true});
				selector.exec(data => {
					this.tabBarWidth = data[0].width;
				})
				// #endif
				
				
				// #ifdef APP-PLUS-NVUE
				const tabBarData = await this.getComponentRect(this.$refs['tab-bar']);
				this.tabBarWidth = tabBarData.size.width;
				// #endif
			})
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
		},
	}
</script>

<style scoped>
	.tab-bar {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
		/* border-width: 1px; */
	}
</style>