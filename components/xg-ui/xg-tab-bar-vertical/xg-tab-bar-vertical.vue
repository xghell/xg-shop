<template>
	<scroll-view ref="scroll-view" class="scroll-view" :show-scrollbar="false" :scroll-y="true" :scroll-top="scrollTop" :style="{height: height}">
		<slot></slot>
	</scroll-view>
</template>

<script>
	export default {
		name: 'XgTabBar',
		provide() {
			return {
				tabBar: this
			}
		},
		props: {
			//微信小程序在组件外设高度不生效，必须使用height传参
			height: {
				type: String,
				required: true,
			},
		},
		data() {
			return {
				scrollTop: 0,
				itemIndex: 0,  //子组件索引，将在子组件中引用
			}
		},
	}
</script>

<style scoped>
	.scroll-view {
		/* border-width: 1px;border-style: solid; */
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
	}
</style>