<template>
	<view ref="tab-bar-item" class="tab-bar-item" :style="{height: height}" @tap="itemTap">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		inject: ['tabBar'],
		props: {
			//唯一标识
			// id: {
			// 	type: String|Number,
			// 	required: true
			// },
			height: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				index: 0,
			}
		},
		computed: {
			itemHeight() {
				return this.toPx(this.height);
			}
		},
		methods: {
			toPx(value) {
				const result = /(\d+\.?\d+)(\w+)/.exec(value);
				if ('rpx' === result[2].trim()) {
					return uni.getSystemInfoSync().screenWidth * Number(result[1]) / 750;
				} else if('px' === result[2].trim()) {
					return Number(result[1]);
				} else {
					throw new TypeError(`${value}单位格式不正确`);
				}
				
			},
			itemTap() {
				this.tabBar.scrollTop = this.itemHeight * this.index - this.toPx(this.tabBar.height)/2 + this.itemHeight/2;
			}
		},
		created() {
			this.index = this.tabBar.itemIndex++;
		},
	}
</script>

<style scoped>
	.tab-bar-item {
		position: relative;
		/* height: 100rpx; */
		/* border-width: 1px; */
	}
</style>