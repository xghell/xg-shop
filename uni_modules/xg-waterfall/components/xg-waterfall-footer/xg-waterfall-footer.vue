<template>
	<!-- #ifdef APP-NVUE -->
	<header>
		<slot></slot>
	</header>
	<!-- #endif -->
	
	<!-- #ifndef APP-NVUE -->
	<view id="footer" :style="{top: topReal + 'px', width: width + 'px'}">
		<slot></slot>
	</view>
	<!-- #endif -->
</template>

<script>
	// #ifndef APP-NVUE
	export default {
		name: 'XgWaterfallFooter',
		inject: ['waterfall'],
		computed: {
			width() {
				return this.waterfall.waterfallWidth;
			},
			topReal() {
				return this.waterfall.waterfallHeightReal - this.waterfall.footerHeight;
			}
		},
		updated() {
			this.update();
		},
		methods: {
			update() {
				const query = uni.createSelectorQuery().in(this);
				
				query.select('#footer').fields({size: true});
				
				query.exec(data => {
					this.waterfall.footerHeight = data[0].height;
				})
			}
		},
	}
	// #endif
</script>

<style lang="scss" scoped>
	/* #ifndef APP-NVUE */
	.header {
		position: absolute;
		z-index: 100;
	}
	/* #endif */
</style>