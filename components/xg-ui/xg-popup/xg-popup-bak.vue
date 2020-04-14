<template>
	<view v-if="showPopup" class="uni-popup" @touchmove.stop.prevent="clear">
		<uni-transition :mode-class="['fade']" :styles="maskClass" :duration="duration" :show="showTrans" @click="onTap" />
		<uni-transition :mode-class="ani" :styles="transClassInner" :duration="duration" :show="showTrans">
				<slot />
		</uni-transition>
	</view>
</template>

<script>
	/**
	 * PopUp 弹出层
	 * @description 弹出层组件，为了解决遮罩弹层的问题
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=329
	 * @property {String} type = [top|center|bottom] 弹出方式
	 * 	@value top 顶部弹出
	 * 	@value center 中间弹出
	 * 	@value bottom 底部弹出
	 * @property {Boolean} animation = [ture|false] 是否开启动画
	 * @property {Boolean} maskClick = [ture|false] 蒙版点击是否关闭弹窗
	 * @event {Function} change 打开关闭弹窗触发，e={show: false}
	 */
	export default {
		name: 'XgPopup',
		props: {
			// 开启动画
			animation: {
				type: Boolean,
				default: true
			},
			// 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层；
			//right: 右侧弹出；left: 左侧弹出；
			type: {
				type: String,
				default: 'center'
			},
			// maskClick
			maskClick: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				duration: undefined,
				ani: [],
				showPopup: false,
				showTrans: false,
				maskClass: {
					'position': 'absolute',
					'bottom': 0,
					'top': 0,
					'left': 0,
					'right': 0,
					'backgroundColor': 'rgba(0, 0, 0, 0.4)'
				},
				transClass: {},
			}
		},
		computed: {
			transClassInner() {
				return {
					display: 'flex',
					flexDirection: 'row',
					...this.transClass,
				}
			}
		},
		created() {
			if (this.animation) {
				this.duration = 300
			} else {
				this.duration = 0
			}
			
			switch (this.type) {
				case 'top':
					this.ani = ['slide-top']
					this.transClass = {
						'position': 'absolute',
						'top': 0,
						'left': 0,
						'right': 0,
					}
					break
				case 'bottom':
					this.ani = ['slide-bottom']
					this.transClass = {
						'position': 'absolute',
						'left': 0,
						'right': 0,
						'bottom': 0
					}
					break
				case 'left':
					this.ani = ['slide-left']
					this.transClass = {
						'position': 'absolute',
						'left': 0,
						'top': 0,
						'bottom': 0,
					}
					break;
				case 'right':
					this.ani = ['slide-right']
					this.transClass = {
						'position': 'absolute',
						'top': 0,
						'right': 0,
						'bottom': 0
					}
					break;
				case 'center':
					this.ani = ['zoom-out', 'fade']
					this.transClass = {
						'position': 'absolute',
					}
			
					break
			}
		},
		methods: {
			clear(e) {
				e.stopPropagation();
			},
			open() {
				this.showPopup = true
				this.$nextTick(() => {
					clearTimeout(this.timer)
					this.timer = setTimeout(() => {
						this.showTrans = true
					}, 50);
				})
				this.$emit('change', {
					show: true
				})
			},
			close(type) {
				this.showTrans = false
				this.$nextTick(() => {
					clearTimeout(this.timer)
					this.timer = setTimeout(() => {
						this.$emit('change', {
							show: false
						})
						this.showPopup = false
					}, 400)
				})
			},
			onTap() {
				if (!this.maskClick) return
				this.close()
			}
		}
	}
</script>
<style lang="scss" scoped>
	.uni-popup {
		position: fixed;
		/* #ifdef H5 */
		top: var(--window-top);
		/* #endif */
		/* #ifndef H5 */
		top: 0;
		/* #endif */
		bottom: 0;
		left: 0;
		right: 0;
		/* #ifndef APP-NVUE */
		z-index: 99;
		/* #endif */
		
		border-width: 2rpx;
		border-color: red;
		
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

</style>
