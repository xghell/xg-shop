<template>
	<!-- #ifdef APP-NVUE -->
	<cell>
		<slot></slot>
	</cell>
	<!-- #endif -->
	
	<!-- #ifndef APP-NVUE -->
	<view id="waterfall-item" class="waterfall-item" :style="{left: left + 'px', top: topReal + 'px', width: width + 'px'}">
		<slot></slot>
	</view>
	<!-- #endif -->
</template>

<script>
	/**
	 * 如果xg-waterfall组件属性autoLayout为假，则必须手动调用 calculateLayout() 方法进行瀑布流，在image组件中建议在load事件触发后调用
	 */
	// #ifndef APP-NVUE
	export default {
		name: 'XgWaterfallItem',
		inject: ['waterfall'],
		data() {
			return {
				top: 0,
				left: 0,
			}
		},
		mounted() {
			this.$nextTick(function(){
				this.calculateLayout();
			})
		},
		computed: {
			topReal() {
				return this.top + this.waterfall.headerHeight;
			},
			width() {
				return this.waterfall.realColumnWidth;
			}
		},
		methods: {
			calculateLayout() {
				if (!this._hasLayouted) {
					this._hasLayouted = true;
					
					this.reCalculateLayout();
				}
			},
			reCalculateLayout() {
				const selector = uni.createSelectorQuery().in(this);
				selector.select('#waterfall-item').fields({size: true});
				selector.exec(data => {
					const waterfallItemHeight = data[0].height;
					
					const minColumnHeight = Math.min(...this.waterfall.columnsHeight);
					// console.log(minColumnHeight);
					const minColumnIndex = this.waterfall.columnsHeight.indexOf(minColumnHeight);
					
					this.top = minColumnHeight;
					this.waterfall.columnsHeight[minColumnIndex] += waterfallItemHeight;
					this.left = this.waterfall.columnsLeft[minColumnIndex];
					
					this.waterfall.waterfallHeight = Math.max(...this.waterfall.columnsHeight);
				})
			}
		},
	}
	// #endif
</script>

<style lang="scss" scoped>
	/* #ifndef APP-NVUE */
	.waterfall-item {
		position: absolute;
		/* border-width: 6px;
		border-color: red; */
	}
	/* #endif */
	
</style>