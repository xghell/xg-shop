<template>
	<view class="padding-xl">
		<view class="margin-bottom-base">
			<text class="font-size-xl">请设置新的登录密码</text>
		</view>
		<uni-forms ref="form">
			<uni-forms-item name="password">
				<view class="border-bottom-solid-1">
					<uni-easyinput type="password" :inputBorder="false" v-model="password" placeholder="8-20位,不能和旧密码相同" @input="onInput" />
				</view>
				<view class="margin-top-base">
					<text class="font-size-lg text-color-greyblack">备注：请将密码设置为8-20位，并且由字母，数字和符号两种以上组合，不能与旧密码相同</text>
				</view>
			</uni-forms-item>
		</uni-forms>
		
		<view class="margin-top-xl">
			<button class="border-radius-rect-circle margin-xl" type="warn" :disabled="isNextBtnDisabled" @tap="onNextBtnTap">
				<text class="text-color-white padding-v-side-base">下一步</text>
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isNextBtnDisabled: true,
				
				password: ''
			}
		},
		methods: {
			onNextBtnTap() {
				uni.reLaunch({
					url: '/pages/auth/login/login',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			
			onInput(e) {
				this.password = e;
				
				this.$nextTick(function(){
					this.$refs['form'].submit().then(res => {
						this.isNextBtnDisabled = false;
					});
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
//
</style>