<template>
	<view :style="{ height: statusBarHeight }" class="xg-status-bar">
		<slot />
	</view>
</template>

<script>
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
	export default {
		name: 'UniStatusBar',
		data() {
			return {
				statusBarHeight: statusBarHeight
			}
		}
	}
</script>

<style lang="scss" scoped>
	.xg-status-bar {
		width: 750rpx;
		// height: var(--status-bar-height);
	}
</style>
