<template>
	<view>
		<uni-forms ref="form">
			<uni-forms-item name="account">
				<view class="border-bottom-solid-1 margin-side-xl margin-top-lg">
					<text class="font-size-xl margin-right-base">请填写历史收货人姓名</text>
					<uni-easyinput class="row-center-center input " :inputBorder="false" type="text" v-model="account" placeholder="历史已完成订单中的收货人" />
				</view>
			</uni-forms-item>
		</uni-forms>
		<button class="border-radius-rect-circle margin-side-xl" type="warn" :disabled="isNextBtnDisabled" @tap="onButtonTap">
			<text class="text-color-white padding-v-side-base">下一步</text>
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				account: '',
			}
		},
		computed: {
			isNextBtnDisabled() {
				return this.account.length === 0; 
			}
		},
		methods: {
			onButtonTap() {
				uni.redirectTo({
					url: '/pages/auth/forget-password/new-password',
					success: res => {},
					fail: () => {},
					complete: (res) => {
						// console.log(res);
					}
				});
			}
		},
	}
</script>

<style lang="scss" scoped>
	.input {
		height: 100rpx;
	}
</style>