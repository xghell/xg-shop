<template>
	<view ref="waterfall-item" class="waterfall-item" :style="{left: left + 'px', top: top + 'px', width: width + 'px'}">
		<slot></slot>
	</view>
</template>

<script>
	/**
	 * 必须手动调用 calculateLayout() 方法进行瀑布流，在image组件中建议在load事件触发后调用
	 */
	export default {
		name: 'XgWaterfallItem',
		inject: ['waterfall'],
		data() {
			return {
				top: 0,
				left: 0,
				hasLayouted: false
			}
		},
		// mounted() {
		// 	this.$nextTick(function () {
		// 		// this.calculateLayout();
		// 	})
		// },
		computed: {
			width() {
				return this.waterfall.realColumnWidth;
			}
		},
		methods: {
			calculateLayoutOnce() {
				if (!this.hasLayouted) {
					this.hasLayouted = true;
					
					this.calculateLayout();
				}
			},
			calculateLayout() {
				// console.log('ww');
				// #ifdef APP-PLUS-NVUE
				const dom = uni.requireNativePlugin('dom');
				dom.getComponentRect(this.$refs['waterfall-item'], data => {
					const waterfallItemHeight = data.size.height;
					// console.log(waterfallItemHeight);
					
					const minColumnHeight = Math.min(...this.waterfall.columnsHeight);
					const minColumnIndex = this.waterfall.columnsHeight.indexOf(minColumnHeight);
					
					this.top = minColumnHeight;
					this.waterfall.columnsHeight[minColumnIndex] += waterfallItemHeight;
					this.left = this.waterfall.columnsLeft[minColumnIndex];
					
					this.waterfall.waterfallHeight = Math.max(...this.waterfall.columnsHeight);
					
					// console.log(waterfallItemHeight);
				})
				// #endif
				
				// #ifndef APP-PLUS-NVUE
				const selector = uni.createSelectorQuery().in(this);
				selector.select('.waterfall-item').fields({size: true});
				selector.exec(data => {
					const waterfallItemHeight = data[0].height;
					// console.log(this.waterfall.columnsHeight, waterfallItemHeight);
					
					const minColumnHeight = Math.min(...this.waterfall.columnsHeight);
					
					const minColumnIndex = this.waterfall.columnsHeight.indexOf(minColumnHeight);
					
					this.top = minColumnHeight;
					this.waterfall.columnsHeight[minColumnIndex] += waterfallItemHeight;
					this.left = this.waterfall.columnsLeft[minColumnIndex];
					
					this.waterfall.waterfallHeight = Math.max(...this.waterfall.columnsHeight);
					// console.log(waterfallItemHeight);
				})
				// #endif
			}
		},
	}
</script>

<style scoped>
	.waterfall-item {
		position: absolute;
		/* border-width: 6px;
		border-color: red; */
	}
</style>