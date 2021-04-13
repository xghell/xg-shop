<template>
	<view>
		<uni-forms ref="form">
			<uni-forms-item name="account">
				<view class="row-center-center border-bottom-solid-1 margin-side-xl margin-top-lg">
					<text class="font-size-lg margin-right-base">账号</text>
					<uni-easyinput class="flex-1 row-center-center input " :inputBorder="false" type="text" v-model="account" placeholder="用户名/邮箱/手机号" />
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
				uni.navigateTo({
					url: '/pages/auth/forget-password/auth-list?account=' + this.account,
					success: res => {},
					fail: () => {},
					complete: () => {}
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