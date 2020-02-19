<script>
	export default {
		globalData: {  
			currentLang: 'zh_CN',
			lang : {
				lang(property) {
					if (!property) {
						// throw new ReferenceError(`lang函数参数传入了未定义在变量`)
						return '';
					}
					return property[getApp().globalData.currentLang] || property['zh_CN'] || property;
				}
			}
		},
		onLaunch: function() {
			// console.log('App Launch')
			
			// #ifdef APP-PLUS-NVUE
			const domModule = uni.requireNativePlugin('dom');
			domModule.addRule('fontFace', {
			    'fontFamily': "xg-iconfont",
			    'src': "url('https://at.alicdn.com/t/font_1639251_96zansl20b6.ttf')"
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
	  src: url('//at.alicdn.com/t/font_1639251_96zansl20b6.eot');
	  src: url('//at.alicdn.com/t/font_1639251_96zansl20b6.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1639251_96zansl20b6.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1639251_96zansl20b6.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1639251_96zansl20b6.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1639251_96zansl20b6.svg#xg-iconfont') format('svg');
	}
	/* #endif */
	
	
	
	//每个页面公共css 
</style>
