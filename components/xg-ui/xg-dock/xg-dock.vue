<template>
	<view :style="{height: contentHeight + 'px'}">
		<view ref="content" class="content" :style="{top: initTopInner + 'px', transform: `translateY(${-translateY}px)`}">
			<view class="status-bar" v-if="statusBar" :style="{height: statusBarHeight + 'px'}"></view>
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'XgDock',
		props: {
			statusBar: {
				type: Boolean,
				default: false
			},
			float: {
				type: Boolean,
				default: false
			},
			// 此变量需绑定所处滚动区域的ScrollTop变量
			scrollTop: {
				type: Number,
			},
			//初始位置
			initTop: {
				type: String,
				default: '0rpx'
			}
		},
		data() {
			return {
				translateY: 0,
				contentHeight: undefined,
				statusBarHeight: 0,
			}
		},
		computed: {
			initTopInner() {
				return this.toPx(this.initTop);
			}
		},
		watch: {
			scrollTop(newTop, oldTop) {
				this.translateY = Math.min(this.contentHeight, Math.max(0, this.translateY + (newTop - oldTop)));
			}
		},
		methods: {
			// #ifdef APP-PLUS-NVUE
			//封装系统函数
			getComponentRect(ref) {
				
				const dom = uni.requireNativePlugin('dom');
				
				return new Promise(function (resolve, reject) {
					dom.getComponentRect(ref, data => {
						resolve(data);
					})
				})
			},
			// #endif
			toPx(value) {
				const result = /(\d+)(\w+)/.exec(value);
				if ('rpx' === result[2].trim()) {
					return uni.getSystemInfoSync().screenWidth * Number(result[1]) / 750;
				} else if('px' === result[2].trim()) {
					return Number(result[1]);
				} else {
					throw new TypeError(`${value}单位格式不正确`);
				}
				
			}
		},
		created() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
		},
		mounted() {
			this.$nextTick(async function () {
				// #ifdef APP-PLUS-NVUE
				const data = await this.getComponentRect(this.$refs.content)
				this.contentHeight = data.size.height;
				// console.log(this.contentHeight);
				// #endif
				
				// #ifndef APP-PLUS-NVUE
				uni.createSelectorQuery().in(this).select('.content').fields({size: true}).exec(data=>{
					this.contentHeight = data[0].height;
					// console.log(this.contentHeight);
				})
				// #endif
			})
		}
		
	}
</script>

<style lang="scss" scoped>
	.content {
		// border-width: 1px;
		position: fixed;
		
		width: 750rpx;
	}
</style>