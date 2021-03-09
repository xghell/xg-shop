<template>
	<view class="thumb-up" @tap="onThumbUpTap">
		<text :style="{color: selected ? selectedColor : color}" class="count">{{countInner}}</text>
		<uni-icons :color="selected ? selectedColor : color" :type="filled ? 'hand-thumbsup-filled' : 'hand-thumbsup'"></uni-icons>
	</view>
</template>

<script>
	export default {
		props: {
			filled: {
				type: Boolean,
				default: false
			},
			count: {
				type: Number|String,
				default: 0
			},
			color: {
				type: String,
				default: '#333'
			},
			selectedColor: {
				type: String,
				default: 'red'
			}
		},
		data() {
			return {
				selected: false,
				countInner: 0,
			}
		},
		created() {
			this.countInner = this.count;
		},
		methods: {
			onThumbUpTap() {
				this.countInner = this.selected ? --this.countInner : ++this.countInner;
				this.selected = !this.selected;
			}
		},
	}
</script>

<style lang="scss" scoped>
	.thumb-up {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.count {
		font-size: $uni-font-size-base;
		
		margin-right: $uni-spacing-col-sm;
	}
</style>