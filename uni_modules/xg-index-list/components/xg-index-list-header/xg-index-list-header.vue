<template>
	<view ref="index-list-header" id="index-list-header">
		<slot></slot>
	</view>
</template>

<script>
	// #ifdef APP-NVUE
	const dom = uni.requireNativePlugin('dom');
	// #endif
	
	export default {
		inject: ['_indexList'],
		mounted() {
			this.$nextTick(function(){
				setTimeout(() => {
					this.layout();
				}, 500);
			})
		},
		destroyed() {
			this._indexList.headerHeight = 0;
		},
		methods: {
			layout() {
				// #ifdef APP-NVUE
				dom.getComponentRect(this.$refs['index-list-header'], data => {
					const height = data.size.height;
					this._indexList.headerHeight = height;
				})
				// #endif
				
				// #ifndef APP-NVUE
				const query = uni.createSelectorQuery().in(this);
				
				query.select('#index-list-header').fields({size: true});
				query.exec(data => {
					const height = data[0].height;
					this._indexList.headerHeight = height;
				})
				// #endif
			}
		},
	}
</script>

<style lang="scss">

</style>