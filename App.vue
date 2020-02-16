<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
			
			// #ifdef APP-PLUS-NVUE
			const domModule = uni.requireNativePlugin('dom');
			domModule.addRule('fontFace', {
			    'fontFamily': "xg-iconfont",
			    'src': "url('https://at.alicdn.com/t/font_1639251_41ela3ch47p.ttf')"
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
	  src: url('//at.alicdn.com/t/font_1639251_41ela3ch47p.eot');
	  src: url('//at.alicdn.com/t/font_1639251_41ela3ch47p.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1639251_41ela3ch47p.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1639251_41ela3ch47p.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1639251_41ela3ch47p.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1639251_41ela3ch47p.svg#xg-iconfont') format('svg');
	}
	/* #endif */
	
	
	
	//每个页面公共css 
</style>
