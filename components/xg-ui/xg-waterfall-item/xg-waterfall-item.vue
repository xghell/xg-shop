<template>
	<view ref="waterfall-item" class="waterfall-item" :style="{width: waterfall.realColumnWidth + 'px', left: left + 'px', top: top + 'px'}">
		<slot></slot>
	</view>
</template>

<script>
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
			this.$nextTick(function () {
				setTimeout(async () => {
					
					// #ifdef APP-PLUS-NVUE
					const data = await this.getComponentRect(this.$refs['waterfall-item']);
					const waterfallItemHeight = data.size.height;
					
					const minColumnHeight = Math.min(...this.waterfall.columnsHeight);
					const minColumnIndex = this.waterfall.columnsHeight.indexOf(minColumnHeight);
					
					this.top = minColumnHeight;
					this.waterfall.columnsHeight[minColumnIndex] += waterfallItemHeight;
					this.left = this.waterfall.columnsLeft[minColumnIndex];
					// console.log(this.waterfall.columnsHeight);
					// #endif
					
					// #ifndef APP-PLUS-NVUE
					const selector = uni.createSelectorQuery().in(this);
					selector.select('.waterfall-item').fields({size: true});
					selector.exec(data => {
						const waterfallItemHeight = data[0].height;
						
						const minColumnHeight = Math.min(...this.waterfall.columnsHeight);
						
						const minColumnIndex = this.waterfall.columnsHeight.indexOf(minColumnHeight);
						
						this.top = minColumnHeight;
						this.waterfall.columnsHeight[minColumnIndex] += waterfallItemHeight;
						this.left = this.waterfall.columnsLeft[minColumnIndex];
					})
					// #endif
					
				}, 300);
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
			}
			// #endif
		},
	}
</script>

<style scoped>
	.waterfall-item {
		position: absolute;
	}
</style>