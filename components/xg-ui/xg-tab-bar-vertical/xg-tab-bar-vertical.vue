<template>
	<scroll-view :show-scrollbar="false" :scroll-y="true" :scroll-top="scrollTop">
		<view ref="tab-bar" class="tab-bar">
			<slot></slot>
		</view>
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
		props: {
			vertical: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
				scrollTop: 0,
				tabBarHeight: undefined,
				itemIndex: 0,  //子组件索引，将在子组件中引用
				tabBarItemHeightSum: 0,
			}
		},
		mounted() {
			this.$nextTick(async function () {
				// #ifndef APP-PLUS-NVUE
				const selector = uni.createSelectorQuery().in(this);
				selector.select('.tab-bar').fields({size: true});
				selector.exec(data => {
					this.tabBarHeight = data[0].height;
				})
				// #endif
				
				
				// #ifdef APP-PLUS-NVUE
				const tabBarData = await this.getComponentRect(this.$refs['tab-bar']);
				this.tabBarHeight = tabBarData.size.height;
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
		flex-direction: column;
		/* border-width: 1px; */
	}
</style>