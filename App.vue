<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
			
			// #ifdef APP-PLUS-NVUE
			const domModule = uni.requireNativePlugin('dom');
			domModule.addRule('fontFace', {
			    'fontFamily': "xg-iconfont",
			    'src': "url('https://at.alicdn.com/t/font_1639251_kcrz8u07yn.ttf')"
			});
			// #endif
			
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* #ifndef APP-PLUS-NVUE */
	// 引入字体图标
	@font-face {
	  font-family: 'xg-iconfont';  /* project id 1639251 */
	  src: url('//at.alicdn.com/t/font_1639251_kcrz8u07yn.eot');
	  src: url('//at.alicdn.com/t/font_1639251_kcrz8u07yn.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1639251_kcrz8u07yn.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1639251_kcrz8u07yn.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1639251_kcrz8u07yn.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1639251_kcrz8u07yn.svg#xg-iconfont') format('svg');
	}
	/* #endif */
	
	
	
	//每个页面公共css 
	.page {
		background-color: $uni-bg-color-grey;
	}
	
</style>
