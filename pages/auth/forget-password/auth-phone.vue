<template>
	<view>
		<view class="column-center-center">
			<image class="logo" src="/static/auth/cattle.png" mode="aspectFit"></image>
			
			<xg-privacy :info="account"></xg-privacy>
			
			<text class="font-size-lg margin-top-xl">验证码将发送到绑定的手机号</text>
			<xg-privacy :info="phone"></xg-privacy>
		</view>
		
		<uni-forms ref="form">
			<uni-forms-item  name="captcha">
				<view class="row-between-center border-bottom-solid-1 margin-side-xl padding-v-side-base">
					<uni-easyinput class="row-center-center" type="number" :inputBorder="false" v-model="captcha" placeholder="请输入验证码" />
					<view class="row-center-center padding-side-xl padding-v-side-sm  border-radius-rect-circle" :class="!isCaptchaDisabled ? 'bg-color-pink' : 'bg-color-grey'">
						<xg-captcha-get :timeout="120" :color="UNI_COLOR_RED" :disabledColor="UNI_COLOR_GREYBLACK" @change="onCaptchaChange"></xg-captcha-get>
					</view>
				</view>
			</uni-forms-item>
		</uni-forms>
		
		<button class="border-radius-rect-circle margin-side-xl" type="warn" :disabled="isNextBtnDisabled" @tap="onNextBtnTap">
			<text class="text-color-white padding-v-side-base">下一步</text>
		</button>
	</view>
</template>

<script>
	import mixin from '@/common/mixin';
	
	export default {
		mixins: [mixin],
		data() {
			return {
				type: '',//验证类型，决定下步跳转界面，可取值identity,consignee
				
				account: 'jk_473683uxj',
				phone: '15247895623',
				captcha: '',
				isCaptchaDisabled: false,
			}
		},
		computed: {
			isNextBtnDisabled() {
				return this.captcha.length === 0; 
			}
		},
		onLoad(options) {
			this.type = options.type || 'identity';
		},
		methods: {
			onCaptchaChange(e) {
				this.isCaptchaDisabled = e.detail.disabled;
			},
			
			onNextBtnTap() {
				const url_options = {
					identity: '/pages/auth/forget-password/auth-identity',
					consignee: '/pages/auth/forget-password/auth-consignee'
				}
				
				uni.redirectTo({
					url: url_options[this.type],
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		},
	}
</script>

<style lang="scss" scoped>
	.logo {
		width: 200rpx;
		height: 200rpx;
	}
</style>