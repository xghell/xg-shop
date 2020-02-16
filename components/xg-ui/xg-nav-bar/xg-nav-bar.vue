<template>
	<view class="nav-bar-wrap" :style="{height: navBarWrapHeight + 'px'}">
		<view class="nav-bar" :style="{position: true === fixed ? 'fixed' : 'relative'}">
			
			<view class="status-bar" v-if="statusBar" :style="{height: statusBarHeight + 'px'}"></view>
			
			<view class="nav-bar-inner" :style="{height: navBarInnerHeight + 'px'}">
				<view  ref="fixed-section" class="fixed-section">
					<view class="left-section" :style="{opacity: opacity}">
						<slot name="left">
							<!-- <text>左侧区域</text> -->
						</slot>
					</view>
					<view class="center-section" :style="{opacity: opacity}">
						<slot name="center">
							<!-- <text>中间区域</text> -->
						</slot>
					</view>
					<view ref="right-section" class="right-section">
						<slot name="right">
							<!-- <text>右侧区域</text> -->
						</slot>
					</view>
					<view class="title-section">
						<slot name="title">
							<!-- <text>标题区域</text> -->
						</slot>
					</view>
				</view>
				
				<view ref="changeable-section" class="changeable-section" :style="{top: changeableTop + 'px', right: changeableRight + 'px'}">
					<slot name="changeable">
						<!-- <text>可变区域</text> -->
					</slot>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name: 'XgNavBar',
		props: {
			fixed: {
				type: Boolean,
				default: false
			},
			statusBar: {
				type: Boolean,
				default: false
			},
			float: {
				type: Boolean,
				default: false
			},
			progress: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				statusBarHeight: 0,
				changeableTop: undefined,
				changeableRight: undefined,
				navBarWrapHeight: undefined,
				navBarInnerHeight: undefined,
				opacity: 1
			}
		},
		created() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
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
			}
			// #endif
		},
		mounted() {
			let minChangeableTop = 0;
			let maxChangeableTop = 0;
			let minChangeableRight = 0;
			let maxChangeableRight = 0;
			
			this.$nextTick(async ()=>{
				// #ifdef APP-PLUS-NVUE
				
				const rightResult = this.getComponentRect(this.$refs['right-section']);
				const fixedResult = this.getComponentRect(this.$refs['fixed-section']);
				const changeableResult = this.getComponentRect(this.$refs['changeable-section']);
				const rightData = await rightResult;
				const fixedRData = await fixedResult;
				const changeableData = await changeableResult;
				
				const rightHeight = rightData.size.height;
				const changeableHeight = changeableData.size.height;
				maxChangeableRight = rightData.size.width;
				maxChangeableTop = fixedRData.size.height;
				
				minChangeableTop = rightHeight/2 - changeableHeight/2;
				
				if (true === this.float) {
					this.navBarWrapHeight = maxChangeableTop + changeableHeight + this.statusBarHeight;
				}
				
				this.$watch('progress', ()=>{
					this.changeableTop = minChangeableTop + (maxChangeableTop - minChangeableTop) * (this.progress < 0.5 ? 0.5 : (1 - this.progress)) * 2;
					this.changeableRight = minChangeableRight + (maxChangeableRight - minChangeableRight) * (this.progress < 0.5 ? this.progress : 0.5) * 2;
					this.navBarInnerHeight = Math.max(changeableHeight + this.changeableTop, rightHeight);
					this.opacity = 1 - this.progress;
					
				},{immediate: true});
				
				// #endif
				
				// #ifndef APP-PLUS-NVUE
				const selector = uni.createSelectorQuery().in(this);
				
				selector.select('.fixed-section').fields({size: true});
				selector.select('.right-section').fields({size: true});
				selector.select('.changeable-section').fields({size: true});
				
				selector.exec(data => {
					const rightHeight = data[1].height;
					const changeableHeight = data[2].height;
					
					minChangeableTop = rightHeight/2 - changeableHeight/2;
					maxChangeableTop = data[0].height;
					maxChangeableRight = data[1].width;
					
					if (true === this.float) {
						this.navBarWrapHeight = maxChangeableTop + changeableHeight + this.statusBarHeight;
					}
					
					this.$watch('progress', ()=>{
						this.changeableTop = minChangeableTop + (maxChangeableTop - minChangeableTop) * (this.progress < 0.5 ? 0.5 : (1 - this.progress)) * 2;
						this.changeableRight = minChangeableRight + (maxChangeableRight - minChangeableRight) * (this.progress < 0.5 ? this.progress : 0.5) * 2;
						this.navBarInnerHeight = Math.max(changeableHeight + this.changeableTop, rightHeight);
						this.opacity = 1 - this.progress;
					},{immediate: true});
				})
				// #endif
			})
		}
	}
</script>

<style lang="scss" scoped>
	.nav-bar-wrap {
		position: relative;
	}
	.nav-bar {
		// border-style: solid;border-width: 1px;
		z-index: 10000;
	}
	.nav-bar-inner {
		width: 750rpx;
		position: relative;
		overflow: hidden;
	}
	.fixed-section {
		position: relative;
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
	}
	
	.title-section {
		position: absolute;
		left: 0;
		right: 0;
		
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
	}
	
	.left-section {
	}
	
	.center-section {
		flex: 1;
	}
	
	.right-section {
	}
	
	.changeable-section {
		// background-color: red;
		position: absolute;
		left: 0;
	}

</style>