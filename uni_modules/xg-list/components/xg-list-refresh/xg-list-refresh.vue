<template>
	<!-- #ifdef APP-NVUE -->
	<refresh :display="display" @refresh="refresh" @pullingdown="pullingdown">
		<slot></slot>
	</refresh>
	<!-- #endif -->
	
	<!-- #ifndef APP-NVUE -->
	<view>
		<slot></slot>
	</view>
	<!-- #endif -->
</template>

<script>
	export default {
		props: {
			display: {
				type: String,
				default: 'show' //show|hidden
			},
		},
		methods: {
			refresh(e) {
				this.$emit('refresh', e);
			},
			pullingdown(e) {
				this.$emit('pullingdown', e);
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>