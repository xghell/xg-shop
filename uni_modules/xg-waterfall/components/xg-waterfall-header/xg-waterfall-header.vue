<template>
	<!-- #ifdef APP-NVUE -->
	<header>
		<slot></slot>
	</header>
	<!-- #endif -->
	
	<!-- #ifndef APP-NVUE -->
	<view id="header" class="header" :style="{width: width + 'px'}">
		<slot></slot>
	</view>
	<!-- #endif -->
</template>

<script>
	// #ifndef APP-NVUE
	export default {
		name: 'XgWaterfallHeader',
		inject: ['waterfall'],
		computed: {
			width() {
				return this.waterfall.waterfallWidth;
			}
		},
		updated() {
			this.update();
		},
		methods: {
			update() {
				const query = uni.createSelectorQuery().in(this);
				query.select('#header').fields({size: true});
				
				query.exec(data => {
					this.waterfall.headerHeight = data[0].height;
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