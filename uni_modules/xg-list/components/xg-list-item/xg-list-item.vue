<template>
	<!-- #ifdef APP-NVUE -->
	<cell :recycle="recycle" @appear="onAppear">
		<slot></slot>
	</cell>
	<!-- #endif -->
	
	<!-- #ifndef APP-NVUE -->
	<view :id="id">
		<slot></slot>
	</view>
	<!-- #endif -->
</template>

<script>
	export default {
		props: {
			id: {
				type: String
			},
			recycle: {
				type: Boolean,
				default: true
			},
		},
		methods: {
			onAppear(e) {
				this.$emit('appear', e);
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>