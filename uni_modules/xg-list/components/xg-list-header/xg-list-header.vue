<template>
	<!-- #ifdef APP-NVUE -->
	<header>
		<slot></slot>
	</header>
	<!-- #endif -->
	
	<!-- #ifndef APP-NVUE -->
	<view>
		<slot></slot>
	</view>
	<!-- #endif -->
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>

</style>