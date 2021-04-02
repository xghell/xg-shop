export default {
	data() {
		return {
			isSmsLogin: true, //是否为手机验证码登录
			isLoading: false, //是否正在获取验证码或者是否正在登录
			
			loginMethods: [
				{
					provider: 'weixin',
					image: '/static/auth/weixin.png'
				},
				{
					provider: 'qq',
					image: '/static/auth/qq.png'
				},
				{
					provider: 'univerify',
					image: '/static/auth/benji.png'
				},
				{
					provider: 'sinaweibo',
					image: '/static/auth/weibo.png'
				}
			]
		}
	},
	
	
	
	methods: {
		setIsSmsLogin(isSmsLogin) {
			this.isSmsLogin = isSmsLogin;
		}
	}
}