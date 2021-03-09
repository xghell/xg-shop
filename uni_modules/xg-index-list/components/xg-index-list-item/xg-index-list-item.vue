<template>
	<view ref="index-list-item" id="index-list-item">
		<slot></slot>
	</view>
</template>

<script>
	// #ifdef APP-NVUE
	const dom = uni.requireNativePlugin('dom');
	// #endif
	
	export default {
		name: 'IndexListItem',
		inject: ['_indexList'],
		methods: {
			layout() {
				// #ifdef APP-NVUE
				dom.getComponentRect(this.$refs['index-list-item'], data => {
					const top = data.size.top;
					this._indexList.itemTopList.push(top);
				})
				// #endif
				
				// #ifndef APP-NVUE
				const query = uni.createSelectorQuery().in(this);
				
				query.select('#index-list-item').fields({rect: true});
				query.exec(data => {
					const top = data[0].top;
					this._indexList.itemTopList.push(top);
				})
				// #endif
			},
		},
	}
</script>

<style lang="scss" scoped>

</style>