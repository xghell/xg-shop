<template>
	<view class="page">
		<view class="column-center-center margin-top-lg">
			<image class="logo" src="/static/auth/cattle.png" mode="aspectFit"></image>
			<text class="font-size-base text-color-greyblack">正品低价有保障，好物好货好服务</text>
		</view>
		
		<template v-if="isSmsLogin">
			<view class="border-bottom-solid-1 margin-side-xl margin-bottom-lg">
				<uni-forms ref="form" :border="true">
					<uni-forms-item  name="">
						<view class="flex-1  row-between-center country">
							<text class="country-text">国家/地区</text>
							<navigator class="row-center-center" hover-class="none" open-type="navigate" url="/pages/address/country-choice?from=/pages/auth/login/login">
								<text class="country-text">{{countryAndCode}}</text>
								<uni-icons type="arrowright"></uni-icons>
							</navigator>
						</view>
					</uni-forms-item>
					<uni-forms-item  name="phone">
						<view class="row-center-center">
							<uni-easyinput class="flex-1" type="number" :inputBorder="false" placeholder="请输入手机号" v-model="phone" />
							<navigator hover-class="none" url="/pages/auth/forget-password/account">
								<text class="font-size-base border-left-solid-1 padding-side-base margin-left-base">忘记密码</text>
							</navigator>
						</view>
					</uni-forms-item>
				</uni-forms>
			</view>
			<view>
				<button class="border-radius-rect-circle  margin-side-xl" type="warn" :disabled="isGetCaptchaBtnDisabled" :loading="isLoading" @tap="onGetCaptchaBtnTap">
					<text class="font-size-lg">获取验证码</text>
				</button>
			</view>
		</template>
		<template v-else>
			<view class="border-bottom-solid-1 margin-side-xl margin-bottom-lg">
				<uni-forms ref="form" :border="true">
					<uni-forms-item  name="account">
						<uni-easyinput :inputBorder="false" placeholder="用户名/邮箱/手机号" v-model="account" />
					</uni-forms-item>
					<uni-forms-item  name="password">
						<uni-easyinput type="password" :inputBorder="false" placeholder="请输入密码" v-model="password" />
					</uni-forms-item>
				</uni-forms>
			</view>
			<view>
				<button class="border-radius-rect-circle  margin-side-xl" type="warn" :disabled="isLoginBtnDisabled" :loading="isLoading" @tap="onLoginBtnTap">
					<text class="font-size-lg">登录</text>
				</button>
			</view>
		</template>
		
		<view class="row-between-center margin-side-xl margin-v-side-lg">
			<text v-if="isSmsLogin" class="font-size-lg text-color-greyblack" @tap="setIsSmsLogin(false)">账号密码登录</text>
			<text v-else class="font-size-lg text-color-greyblack" @tap="setIsSmsLogin(true)">短信验证码登录</text>
			<text class="font-size-lg text-color-greyblack" @tap="toRegister">新用户注册</text>
		</view>
		
		<view class="footer">
			<view class="row-center-center margin-bottom-lg">
				<view class="line"></view>
				<text class="text-color-greyblack font-size-base margin-side-lg">其他登陆方式</text>
				<view class="line"></view>
			</view>
			<view class="row-around-center">
				<view v-for="(loginMethod, loginMethodIndex) of loginMethods" :key="loginMethodIndex" @tap="tologin(loginMethod.provider)">
					<image class="img-size-lg" :src="loginMethod.image" mode="aspectFit"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import config from './config';
	import adminConfig from '@/admin.config'
	
	import data from '@/data/auth/login/login';
	
	export default {
		mixins: [config],
		data() {
			return {
				countryAndCode: '',
				to: '', //登录成功后跳转到的页面
				phone: '',
				account: '',
				password: '',
			};
		},
		computed: {
			isGetCaptchaBtnDisabled() {
				return this.phone.length === 0;
			},
			isLoginBtnDisabled() {
				return this.account.length === 0 || this.password.length === 0;
			}
		},
		onLoad(options) {
			this.to = options.to || adminConfig.index.url;
			
			const country = (options.country && JSON.parse(decodeURIComponent(options.country))) || {"area": "中国","area_code": "+86", pinyin: 'Z'};
			this.countryAndCode =  country.area + '(' + country.area_code + ')';
			
			console.log(this.to);
		},
		// #ifndef MP-WEIXIN
		onNavigationBarButtonTap(e) {
			const index = e.index;
			
			// console.log(index);
			if (0 === index) {
				uni.navigateTo({
					url: '/pages/auth/login/helper',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
				return ;
			}
		},
		// #endif
		
		methods: {
			onGetCaptchaBtnTap() {
				uni.navigateTo({
					url: '/pages/auth/login/captcha?to=' + this.to,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			async onLoginBtnTap() {
				if (await data.login()) {
					uni.reLaunch({
						url: this.to,
						success: res => {},
						fail: () => {
							uni.switchTab({
								url: this.to,
								fail: (res) => {
									// console.log(res);
								}
							})
						},
						complete: () => {}
					});
				}
			},
			
			toRegister() {
				uni.navigateTo({
					url: '/pages/auth/register/register',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			tologin(provider) {
				// 一键登录已在APP onLaunch的时候进行了预登陆，可以显著提高登录速度。登录成功后，预登陆状态会重置
				uni.login({
					provider: provider,
					success: async (res) => {
						console.log('login success:', res);
						uni.showToast({
							title: '登录成功'
						});
					},
					fail: (err) => {
						console.log('login fail:', err);
			
						// 一键登录点击其他登录方式
						if (err.code == '30002') {
							uni.closeAuthView();
							uni.showToast({
								title: '其他登录方式'
							})
							return;
						}
			
						// 未开通
						if (err.code == 1000) {
							uni.showModal({
								title: '登录失败',
								content: `${err.errMsg}\n，错误码：${err.code}`,
								confirmText: '开通指南',
								cancelText: '确定',
								success: (res) => {
									if (res.confirm) {
										setTimeout(() => {
											plus.runtime.openWeb('https://ask.dcloud.net.cn/article/37965')
										}, 500)
									}
								}
							});
							return;
						}
			
						// 一键登录预登陆失败
						if (err.code == '30005') {
							uni.showModal({
								showCancel: false,
								title: '预登录失败',
								content: this.univerifyErrorMsg || err.errMsg
							});
							return;
						}
			
						// 一键登录用户关闭验证界面
						if (err.code != '30003') {
							uni.showModal({
								showCancel: false,
								title: '登录失败',
								content: JSON.stringify(err)
							});
						}
					}
				});
			},
		},
	}
</script>

<style lang="scss" scoped>
	.page {
		/* #ifndef H5 */
		@include position(fixed, 0 0 0 0);
		/* #endif */
		/* #ifdef H5 */
		@include position(fixed, var(--window-top) 0 0 0);
		/* #endif */
	}
	
	.logo {
		width: 200rpx;
		height: 200rpx;
	}
	
	.country {
		padding: 0 10px;
	}
	.country-text {
		line-height: 2;
		font-size: 14px;
	}
	
	.line {
		flex: 1;
		width: 20rpx;
		height: 1px;
		background-color: $uni-color-greyblack;
	}
	
	.footer {
		@include position(absolute, none 0 $uni-spacing-row-xl*1.5 0);
	}
</style>
