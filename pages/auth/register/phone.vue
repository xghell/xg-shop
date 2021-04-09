<template>
	<view>
		<uni-forms ref="form">
			<uni-forms-item  name="">
				<view class="row-center-center border-bottom-solid-1 margin-side-xl margin-top-lg">
					<navigator hover-class="none" url="/pages/address/country-choice?from=/pages/auth/register/phone">
						<text class="margin-right-sm">{{countryCode}}</text>
						<uni-icons type="arrowdown"></uni-icons>
					</navigator>
					<uni-easyinput class="row-center-center phone-input " :inputBorder="false" type="number" v-model="phone" placeholder="请输入手机号" />
				</view>
			</uni-forms-item>
		</uni-forms>
		<button class="border-radius-rect-circle margin-side-xl" type="warn" :disabled="isNextBtnDisabled" @tap="onNexBtnTap">
			<text class="text-color-white padding-v-side-base">下一步</text>
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				countryCode: '',
				
				phone: ''
			}
		},
		computed: {
			isNextBtnDisabled() {
				return this.phone.length === 0;
			}
		},
		onLoad(options) {
			const country = options.country && JSON.parse(decodeURIComponent(options.country)) || {area_code: '+86'};
			this.countryCode = country.area_code;
			
		},
		
		methods: {
			onNexBtnTap() {
				uni.navigateTo({
					url: '/pages/auth/register/captcha',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		},
	}
</script>

<style lang="scss" scoped>
//
	.phone-input {
		flex: 1;
		height: 100rpx;
	}
</style>
