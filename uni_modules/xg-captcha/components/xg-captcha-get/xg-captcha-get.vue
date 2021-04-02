<template>
	<view>
		<text v-if="!isLoading" class="text" :style="{fontSize: fontSize, color: color}" @tap="onGetCaptchaTap">获取验证码</text>
		<text v-else class="text" :style="{fontSize: fontSize, color: disabledColor}">重新发送({{countdown}}s)</text>
	</view>
</template>

<script>
	export default {
		props: {
			timeout: {
				type: Number,
				default: 10
			},
			fontSize: {
				type: String,
			},
			color: {
				type: String,
				default: 'red'
			},
			disabledColor: {
				type: String,
				default: '#777777'
			}
		},
		data() {
			return {
				isLoading: false, //是否正在等待获取验证码
				countdown: 120
			}
		},
		
		created() {
			this.countdown = this.timeout;
		},
		
		watch: {
			isLoading(newValue, oldValue) {
				this.$emit('change', {
					detail: {
						disabled: newValue
					}
				});
			}
		},
		
		methods: {
			onGetCaptchaTap() {
				this.isLoading = true;
				
				const interval_id = setInterval(() => {
					if (this.countdown <= 1) {
						this.isLoading = false;
						
						clearInterval(interval_id);
						this.countdown = this.timeout;
					} else {
						--this.countdown;
					}
				}, 1000);
			}
		},
	}
</script>

<style lang="scss" scoped>
	.text {
		white-space: nowrap;
		font-size: $uni-font-size-base;
	}
</style>