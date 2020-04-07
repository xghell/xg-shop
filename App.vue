<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
			
			// #ifdef APP-PLUS-NVUE
			const domModule = uni.requireNativePlugin('dom');
			domModule.addRule('fontFace', {
			    'fontFamily': "xg-iconfont",
			    'src': "url('https://at.alicdn.com/t/font_1639251_p8cxxu67yl.ttf')"
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
	  src: url('//at.alicdn.com/t/font_1639251_p8cxxu67yl.eot');
	  src: url('//at.alicdn.com/t/font_1639251_p8cxxu67yl.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1639251_p8cxxu67yl.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1639251_p8cxxu67yl.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1639251_p8cxxu67yl.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1639251_p8cxxu67yl.svg#xg-iconfont') format('svg');
	}
	/* #endif */
	
	
	
	//每个页面公共css 
	.page {
		background-color: $uni-bg-color-grey;
	}
	
	.bottom-border {
		border-bottom-width: 0.5px;
		border-color: #EEEEEE;
	}
</style>
