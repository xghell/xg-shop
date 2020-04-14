<template>
	<view v-if="showPopup" class="popup">
		<view class="mask" :class="maskAnimationClass" @tap="maskTap"></view>
		<view :class="[contentAnimation, contentAnimationCommonClass, contentAnimationClass]">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'XgPopup',
		props: {
			// 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层；
			//right: 右侧弹出；left: 左侧弹出；
			type: {
				type: String,
				default: 'center'
			},
		},
		data() {
			return {
				showPopup: false,
				maskAnimationClass: '',
				contentAnimation: '',
				contentAnimationCommonClass: '',
				contentAnimationClass: '',
			}
		},
		created() {
			this.maskAnimationClass = 'mask';
			this.contentAnimationCommonClass = this.type;
		},
		methods: {
			open() {
				this.showPopup = true;
				
				this.$nextTick(function () {
					this.contentAnimationClass = this.type + '-init';
					
					setTimeout(() => {
						this.contentAnimation = 'content';
						this.maskAnimationClass = 'mask-in';
						this.contentAnimationClass = this.type + '-in';
					}, 100);
				})
			},
			close() {
				this.maskAnimationClass = 'mask-out';
				this.contentAnimationClass = this.type + '-out';
				
				this.$nextTick(function () {
					setTimeout(() => {
						this.showPopup = false;
					}, 300);
				})
			},
			
			maskTap() {
				this.close();
			}
		},
	}
</script>

<style lang="scss" scoped>
	.popup {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		z-index: 100000;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	.mask {
		transition-property: transform, opacity;
		transition-duration: 0.3s;
		transition-delay: 0s;
		transition-timing-function: ease;
		
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		opacity: 0;
		background-color: #000000;
	}
	.mask-in {
		opacity: 0.3;
	}
	.mask-out {
		opacity: 0;
	}
	
	.content {
		transition-property: transform, opacity;
		transition-duration: 0.3s;
		transition-delay: 0s;
		transition-timing-function: ease;
	}
	.center {
		opacity: 0;
	}
	.center-init {
		transform: scale(1.2);
		opacity: 1;
	}
	.center-in {
		transform: scale(1);
		opacity: 1;
	}
	.center-out {
		transform: scale(0.8);
		opacity: 1;
	}
	.left {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: stretch;
		
		opacity: 0;
	}
	.left-init {
		transform: translateX(-100%);
		opacity: 1;
	}
	.left-in {
		transform: translateX(0);
		opacity: 1;
	}
	.left-out {
		transform: translateX(-100%);
		opacity: 1;
	}
	.right {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: stretch;
		
		opacity: 0;
	}
	.right-init {
		transform: translateX(100%);
		opacity: 1;
	}
	.right-in {
		transform: translateX(0);
		opacity: 1;
	}
	.right-out {
		transform: translateX(100%);
		opacity: 1;
	}
	.top {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		opacity: 0;
	}
	.top-init {
		transform: translateY(-100%);
		opacity: 1;
	}
	.top-in {
		transform: translateY(0);
		opacity: 1;
	}
	.top-out {
		transform: translateY(-100%);
		opacity: 1;
	}
	.bottom {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		opacity: 0;
	}
	.bottom-init {
		transform: translateY(100%);
		opacity: 1;
	}
	.bottom-in {
		transform: translateY(0);
		opacity: 1;
	}
	.bottom-out {
		transform: translateY(100%);
		opacity: 1;
	}
</style>