<template>
	<view class="nav-bar-wrap" :style="{height: navBarWrapHeight + 'px'}">
		<view class="nav-bar" :style="{position: fixed ? 'fixed' : 'relative'}">
			<!-- 默认插槽，可作为背景使用 -->
			<slot></slot>
			
			<view class="status-bar" v-if="statusBar" :style="{height: statusBarHeight + 'px'}"></view>
			
			<view class="nav-bar-inner" :style="{height: navBarInnerHeight + 'px'}">
				<view  ref="fixed-section" class="fixed-section" :style="{height: fixedHeight}">
					<view v-if="hasTitle" class="title-section">
						<slot name="title">
							<!-- <text>标题区域</text> -->
							<xg-icon v-for="(icon, index) of title.iconList" :key="index" @iconTap="iconTap" :vertical="icon.vertical" :index="icon.id" :iconStyle="title.iconStyle + ';' + icon.iconStyle" :fontFamily="icon.fontFamily||title.fontFamily" :text="icon.text" :textStyle="title.textStyle + ';' + icon.textStyle" :thumb="icon.thumb" :thumbStyle="title.thumbStyle + ';' +icon.thumbStyle" :title="icon.title" :titleStyle="title.titleStyle + ';' +icon.titleStyle" :subtitle="icon.subtitle" :subtitleStyle="title.subtitleStyle + ';' + icon.subtitleStyle"></xg-icon>
						</slot>
					</view>
					
					<view class="left-section" :style="{opacity: opacity}">
						<slot name="left">
							<!-- <text>左侧区域</text> -->
							<xg-icon v-for="(icon, index) of left.iconList" :key="index" @iconTap="iconTap" :vertical="icon.vertical" :index="icon.id" :iconStyle="left.iconStyle + ';' + icon.iconStyle" :fontFamily="icon.fontFamily||left.fontFamily" :text="icon.text" :textStyle="left.textStyle + ';' + icon.textStyle" :thumb="icon.thumb" :thumbStyle="left.thumbStyle + ';' +icon.thumbStyle" :title="icon.title" :titleStyle="left.titleStyle + ';' +icon.titleStyle" :subtitle="icon.subtitle" :subtitleStyle="left.subtitleStyle + ';' + icon.subtitleStyle"></xg-icon>
						</slot>
					</view>
					<view v-if="hasCenter" class="center-section" :style="{opacity: opacity}">
						<slot name="center">
							<!-- <text>中间区域</text> -->
							<xg-icon v-for="(icon, index) of center.iconList" :key="index" @iconTap="iconTap" :vertical="icon.vertical" :index="icon.id" :iconStyle="center.iconStyle + ';' + icon.iconStyle" :fontFamily="icon.fontFamily||center.fontFamily" :text="icon.text" :textStyle="center.textStyle + ';' + icon.textStyle" :thumb="icon.thumb" :thumbStyle="center.thumbStyle + ';' +icon.thumbStyle" :title="icon.title" :titleStyle="center.titleStyle + ';' +icon.titleStyle" :subtitle="icon.subtitle" :subtitleStyle="center.subtitleStyle + ';' + icon.subtitleStyle"></xg-icon>
						</slot>
					</view>
					<view ref="right-section" class="right-section">
						<slot name="right">
							<!-- <text>右侧区域</text> -->
							<xg-icon v-for="(icon, index) of right.iconList" :key="index" @iconTap="iconTap" :vertical="icon.vertical" :index="icon.id" :iconStyle="right.iconStyle + ';' + icon.iconStyle" :fontFamily="icon.fontFamily||right.fontFamily" :text="icon.text" :textStyle="right.textStyle + ';' + icon.textStyle" :thumb="icon.thumb" :thumbStyle="right.thumbStyle + ';' +icon.thumbStyle" :title="icon.title" :titleStyle="right.titleStyle + ';' +icon.titleStyle" :subtitle="icon.subtitle" :subtitleStyle="right.subtitleStyle + ';' + icon.subtitleStyle"></xg-icon>
						</slot>
					</view>
					
				</view>
				
				<view v-if="hasChangeable" ref="changeable-section" class="changeable-section" :style="{top: changeableTopOffset + 'px', width: changeableWidth + 'px'}">
					<slot name="changeable">
						<!-- <text>可变区域</text> -->
						<xg-search-input :leftIcon="searchInput.leftIcon" :rightIcon="searchInput.rightIcon"
						:searchInputStyle="searchInput.searchInputStyle"
						:inputStyle="searchInput.inputStyle"
						:value="searchInput.value"
						:placeholder="searchInput.placeholder"
						:placeholder-style="searchInput.placeholderStyle"
						:disabled="searchInput.disabled"
						:maxlength="searchInput.maxlength"
						:focus="searchInput.focus"
						:confirm-type="searchInput.confirmType"
						:confirm-hold="searchInput.confirmHold"
						:cursor="searchInput.cursor"
						:selection-start="searchInput.selectionStart"
						:selection-end="searchInput.selectionEnd"
						:adjust-position="searchInput.adjustPosition"
						@input="input"
						@focus="getFocus"
						@blur="blur"
						@confirm="confirm"
						@leftTap="leftTap"
						@rightTap="rightTap"></xg-search-input>
					</slot>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	/**
	 * 
	 * 插槽default,left,right,center(如果hasChangeable为false则没有此属性),title(如果hasChangeable为false则没有此属性),changeable(如果hasChangeable为false则没有此属性)
	 * 
	 * @iconTap
	 * @input
	 * @focus
	 * @blur
	 * @confirm
	 * @searchInputleftIconTap
	 * @searchInputrightIconTap
	 * @getNavBarMinHeight 当hasChangeable为false，导航栏高度需用@getNavBarMaxHeight
	 * @getNavBarMaxHeight 当hasChangeable为false，导航栏高度需用@getNavBarMaxHeight
	 */
	export default {
		name: 'XgNavBar',
		props: {
			fixedHeight: {
				type: String
			},
			hasCenter: {
				type: Boolean
			},
			hasTitle: {
				type: Boolean
			},
			hasChangeable: {
				type: Boolean,
				default: false
			},
			fixed: {
				type: Boolean,
				default: false
			},
			statusBar: {
				type: Boolean,
				default: false
			},
			float: {
				type: Boolean,
				default: false
			},
			progress: {
				type: Number,
				default: 0,
				validator(value) {
					if (value > 1 || value < 0) {
						throw new RangeError(progress的值必须在0到1之间);
					}
					return true;
				}
			},
			left: {
				type: Object,
				default: function () {
					return {
						iconStyle: '',
						fontFamily: '',
						textStyle: '',
						thumbStyle: '',
						titleStyle: '',
						subtitleStyle: '',
						iconList: [
							{
								vertical: true,
								id: '',
								iconStyle: '',
								fontFamily: '',
								text: '',
								textStyle: '',
								thumb: '',
								thumbStyle: '',
								title: '',
								titleStyle: '',
								subtitle: '',
								subtitleStyle: ''
							},
						]
					}
				}
			},
			center: {
				type: Object,
				default: function () {
					return {
						//同left
					}
				}
			},
			right: {
				type: Object,
				default: function () {
					return {
						//同left
					}
				}
			},
			title: {
				type: Object,
				default: function () {
					return {
						//同left
					}
				}
			},
			searchInput: {
				type: Object,
				default: function () {
					return {
						searchInputStyle: '',
						inputStyle: '',
						//只支持字体图标,且必须使用Unicode方式使用
						leftIcon: {
							fontFamily: '',
							text: '',
							iconSize: '',
							iconColor: ''
						},
						rightIcon: {
							//同leftIcon
						},
						//只支持字体图标,且必须使用Unicode方式使用
						iconSize:'40rpx',
						//图标距离两侧边的距离
						iconPosition: '30rpx',
						value: '',
						placeholder: '请输入要搜索的内容',
						placeholderStyle: '',
						disabled: false,
						maxlength: 140,
						focus: false,
						confirmType: 'done',
						confirmHold: false,
						selectionStart: -1,
						selectionEnd: -1,
						adjustPosition: true
					}
				}
			},
		},
		data() {
			return {
				statusBarHeight: 0,
				changeableInitWidth: undefined,
				changeableTop: undefined,
				changeableRight: undefined,
				navBarWrapHeight: undefined,
				navBarInnerHeight: undefined,
				fixedInitHeight: undefined,
				opacity: 1
			}
		},
		created() {
			this.statusBarHeight = this.statusBar ? uni.getSystemInfoSync().statusBarHeight : 0;
		},
		computed: {
			changeableWidth() {
				// console.log(this.changeableInitWidth,this.changeableRight);
				return this.changeableInitWidth - this.changeableRight;
			},
			changeableTopOffset() {
				return this.changeableTop - this.fixedInitHeight;
			}
		},
		methods: {
			// #ifdef APP-PLUS-NVUE
			//封装系统函数
			getComponentRect(ref) {
				
				const dom = uni.requireNativePlugin('dom');
				
				return new Promise(function (resolve, reject) {
					dom.getComponentRect(ref, data => {
						resolve(data);
					})
				})
			},
			// #endif
			iconTap(e) {
				this.$emit('iconTap', e);
			},
			input(e) {
				this.$emit('input', e);
			},
			getFocus(e) {
				this.$emit('focus', e);
			},
			blur(e) {
				this.$emit('blur', e);
			},
			confirm(e) {
				this.$emit('confirm', e);
			},
			leftTap(e) {
				this.$emit('searchInputleftIconTap', e);
			},
			rightTap(e) {
				this.$emit('searchInputRightIconTap', e);
			}
		},
		mounted() {
			let minChangeableTop = 0;
			let maxChangeableTop = 0;
			let minChangeableRight = 0;
			let maxChangeableRight = 0;
			
			this.$nextTick(async ()=>{
				// #ifdef APP-PLUS-NVUE
				
				const rightResult = this.getComponentRect(this.$refs['right-section']);
				const fixedResult = this.getComponentRect(this.$refs['fixed-section']);
				
				let changeableResult = 0;
				let changeableHeight = 0;
				
				if (this.hasChangeable) {
					changeableResult = this.getComponentRect(this.$refs['changeable-section']);
					const changeableData = await changeableResult;
					changeableHeight = changeableData.size.height;
					
					this.changeableInitWidth = changeableData.size.width;
				}
				
				const rightData = await rightResult;
				const fixedRData = await fixedResult;
				
				const fixedHeight = fixedRData.size.height;
				const rightHeight = rightData.size.height;
				
				maxChangeableRight = rightData.size.width;
				maxChangeableTop = fixedHeight;
				
				minChangeableTop = rightHeight/2 - changeableHeight/2;
				
				this.fixedInitHeight = fixedHeight;
				
				if (this.hasChangeable) {
					this.$watch('progress', ()=>{
						this.changeableTop = minChangeableTop + (maxChangeableTop - minChangeableTop) * (this.progress < 0.5 ? 0.5 : (1 - this.progress)) * 2;
						this.changeableRight = minChangeableRight + (maxChangeableRight - minChangeableRight) * (this.progress < 0.5 ? this.progress : 0.5) * 2;
						this.navBarInnerHeight = Math.max(changeableHeight + this.changeableTop, rightHeight);
						this.opacity = 1 - this.progress;
						
					},{immediate: true});
				}
				
				if (this.fixed && !this.float) {
					this.navBarWrapHeight = maxChangeableTop + changeableHeight + this.statusBarHeight;
				}
				
				this.$emit('getNavBarMinHeight', Math.max(changeableHeight + minChangeableTop, rightHeight) + this.statusBarHeight);
				this.$emit('getNavBarMaxHeight', maxChangeableTop + changeableHeight + this.statusBarHeight);
				
				// #endif
				
				// #ifndef APP-PLUS-NVUE
				const selector = uni.createSelectorQuery().in(this);
				
				selector.select('.fixed-section').fields({size: true});
				selector.select('.right-section').fields({size: true});
				selector.select('.changeable-section').fields({size: true});
				
				selector.exec(data => {
					const rightHeight = data[1].height;
					const fixedHeight = data[0].height;
					
					let changeableHeight = 0;
					
					if (this.hasChangeable) {
						changeableHeight = data[2].height;
						
						this.changeableInitWidth = data[2].width;
					}
					
					minChangeableTop = rightHeight/2 - changeableHeight/2;
					maxChangeableTop = fixedHeight;
					maxChangeableRight = data[1].width;
					
					this.fixedInitHeight = fixedHeight;
					
					if (this.hasChangeable) {
						this.$watch('progress', ()=>{
							this.changeableTop = minChangeableTop + (maxChangeableTop - minChangeableTop) * (this.progress < 0.5 ? 0.5 : (1 - this.progress)) * 2;
							this.changeableRight = minChangeableRight + (maxChangeableRight - minChangeableRight) * (this.progress < 0.5 ? this.progress : 0.5) * 2;
							this.navBarInnerHeight = Math.max(changeableHeight + this.changeableTop, rightHeight);
							this.opacity = 1 - this.progress;
							
						},{immediate: true});
					}
					
					if (this.fixed && !this.float) {
						this.navBarWrapHeight = maxChangeableTop + changeableHeight + this.statusBarHeight;
					}
					
					this.$emit('getNavBarMinHeight', Math.max(changeableHeight + minChangeableTop, rightHeight) + this.statusBarHeight);
					this.$emit('getNavBarMaxHeight', maxChangeableTop + changeableHeight + this.statusBarHeight);
				})
				// #endif
			})
		}
	}
</script>

<style lang="scss" scoped>
	.nav-bar-wrap {
		position: relative;
		overflow: hidden;
	}
	.nav-bar {
		// position: relative;
		// border-style: solid;border-width: 1px;
		z-index: 100000;
		overflow: hidden;
	}
	.nav-bar-inner {
		width: 750rpx;
		position: relative;
		overflow: hidden;
	}
	.fixed-section {
		position: relative;
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	
	.title-section {
		// background-color: blue;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	
	.left-section {
		position: relative;
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	.center-section {
		// border-width: 1px;
		position: relative;
		flex: 1;
	}
	
	.right-section {
		position: relative;
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	.changeable-section {
		// background-color: red;
		position: relative;
		left: 0;
	}

</style>