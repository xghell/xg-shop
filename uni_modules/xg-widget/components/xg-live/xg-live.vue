<template>
	<view class="pillar-list" :style="{height: pillarMaxHeight}">
		<view class="pillar" :style="{'transition-duration': interval + 'ms', height: pillarHeightList[index] + 'px', width: pillarWidth, 'background-color': pillarColor, 'margin-left': index === 0 || pillarGap}" v-for="(item, index) of pillarCount" :key="index" ></view>
	</view>
</template>

<script>
	let intervalId = 0;
	
	/**
	 * start() //开始动画，需要通过this.$refs引用
	 * stop() //停止动画，需要通过this.$refs引用
	 */
	export default {
		props: {
			animation: {
				type: Boolean,
				default: false,
			},
			pillarCount: {
				type: Number,
				default: 3
			},
			pillarWidth: {
				type: String,
				default: '2px'
			},
			pillarMixHeight: {
				type: String,
				default: '1px'
			},
			pillarMaxHeight: {
				type: String,
				default: '12px'
			},
			pillarColor: {
				type: String,
				default: 'blue'
			},
			pillarGap: {
				type: String,
				default: '6rpx',
			},
			//柱型变化时间周期
			interval: {
				type: Number,
				default: 250
			}
		},
		data() {
			return {
				pillarHeightList: [],
			}
		},
		computed: {
			pillarMixHeightNumber() {
				return this.toPx(this.pillarMixHeight);
			},
			pillarMaxHeightNumber() {
				return this.toPx(this.pillarMaxHeight);
			}
		},
		created() {
			this.pillarHeightList = new Array(this.pillarCount).fill(this.pillarMixHeightNumber);
			this.generatePillar();
			
			this.$watch('animation', (newValue, oldValue) => {
				if (newValue) {
					this.start();
				} else {
					this.stop();
				}
			}, {immediate: true})
		},
		destroyed() {
			this.stop();
		},
		methods: {
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
			start() {
				intervalId = setInterval(() => {
					this.generatePillar();
				}, this.interval);
			},
			stop() {
				clearInterval(intervalId);
			},
			generatePillar() {
				this.pillarHeightList = this.pillarHeightList.map((item, index) => {
					return Math.random()*(this.pillarMaxHeightNumber - this.pillarMixHeightNumber) + this.pillarMixHeightNumber;
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.pillar-list {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: flex-end;
	}
	
	.pillar {
		transition-property: height;
		// transition-duration: 0.3s;
		transition-delay: 0s;
		transition-timing-function: ease-in-out;
	}
	
</style>