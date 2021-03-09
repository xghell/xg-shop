<template>
	<!-- #ifdef APP-NVUE -->
	<list :id="id" :show-scrollbar="showScrollbar" :scroll-top="scrollTop" :scroll-into-view="scrollIntoView" @scroll="onScroll">
		<slot></slot>
	</list>
	<!-- #endif -->
	
	<!-- #ifndef APP-NVUE -->
	<scroll-view :id="id" class="list" :show-scrollbar="showScrollbar"  :scroll-into-view="scrollIntoView" scroll-y="true" :scroll-top="scrollTop" @scroll="onScroll">
		<view>
			<slot></slot>
		</view>
	</scroll-view>
	<!-- #endif -->
</template>

<script>
	/**
	 * @event {Function()} scroll 
	 */
	export default {
		props: {
			id: {
				type: String,
			},
			showScrollbar: {
				type: Boolean,
				default: true
			},
			scrollTop: {
				type: Number,
				default: 0,
			},
			scrollIntoView: {
				type: String,
			}
		},
		methods: {
			onScroll(e) {
				// #ifndef APP-NVUE
				const payload = {
					detail: {
						scrollWidth: e.detail.scrollWidth,
						scrollHeight: e.detail.scrollHeight,
						scrollLeft: e.detail.scrollLeft,
						scrollTop: e.detail.scrollTop
					}
				}
				// #endif
				// #ifdef APP-NVUE
				const payload = {
					detail: {
						scrollWidth: e.contentSize.width,
						scrollHeight: e.contentSize.height,
						scrollLeft: -e.contentOffset.x,
						scrollTop: -e.contentOffset.y,
					}
				}
				// #endif
				
				this.$emit('scroll', payload);
			}
		},
	}
</script>

<style lang="scss" scoped>
	.list {
		/* #ifdef MP */
		height: 100%;
		/* #endif */
	}
</style>