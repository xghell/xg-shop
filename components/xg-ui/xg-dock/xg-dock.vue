<template>
	<view :style="{height: contentHeight + 'px'}">
		<view ref="content" class="dock-content" :style="{position: fixed ? 'fixed' : 'relative',top: initTopInner + 'px', transform: `translateY(${-translateY}px)`}">
			<view class="status-bar" v-if="statusBar" :style="{height: statusBarHeight + 'px'}"></view>
			<slot></slot>
		</view>
	</view>
</template>

<script>
	/**
	 * scrollDeltaTo(deltaY) 控制dock运动，使用this.$refs引用
	 */
	export default {
		name: 'XgDock',
		props: {
			fixed: {
				type: Boolean,
				default: false,
			},
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
			},
			threshold: {
				type: String,
				default: '0px'
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
				this.translateY = Math.min(this.toPx(this.threshold)||this.contentHeight, Math.max(0, this.translateY + (newTop - oldTop)));
				this.$emit('dockScroll', this.translateY);
				// console.log(this.threshold);
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
				const result = /(\d+\.?\d*)(\w+)/.exec(value);
				
				if ('rpx' === result[2].trim()) {
					return uni.getSystemInfoSync().screenWidth * Number(result[1]) / 750;
				} else if('px' === result[2].trim()) {
					return Number(result[1]);
				} else {
					throw new TypeError(`${value}单位格式不正确`);
				}
				
			},
			scrollDeltaTo(deltaY) {
				this.translateY = Math.min(this.toPx(this.threshold)||this.contentHeight, Math.max(0, this.translateY - (deltaY||0)));
				// console.log(this.translateY, (deltaY||0));
				this.$emit('dockScroll', this.translateY);
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
				this.$emit('getDockHeight', this.contentHeight);
				// #endif
				
				// #ifndef APP-PLUS-NVUE
				uni.createSelectorQuery().in(this).select('.dock-content').fields({size: true}).exec(data=>{
					this.contentHeight = data[0].height;
					// console.log(this.contentHeight);
					this.$emit('getDockHeight', this.contentHeight);
				})
				// #endif
			})
		}
		
	}
</script>

<style lang="scss" scoped>
	.dock-content {
		position: relative;
		
		overflow: hidden;
		width: 750rpx;
	}
</style>