<template>
	<!-- #ifdef APP-NVUE -->
	<waterfall class="waterfall" ref="waterfall" :style="{width: waterfallWidth + 'px'}" :show-scrollbar="showScrollbar" :column-count="realColumnCount" :column-width="realColumnWidth" :column-gap="realColumnGap" :left-gap="realLeftGap" :right-gap="realRightGap" @loadmore="onLoadmore">
		<slot></slot>
	</waterfall>
	<!-- #endif -->
	
	<!-- #ifndef APP-NVUE -->
	<scroll-view class="waterfall" id="waterfall" :show-scrollbar="showScrollbar" :scroll-y="scrollY" :scroll-top="scrollTop" @scroll="onScroll" @scrolltolower="onScrolltolower">
		<view :style="{width: waterfallWidth + 'px', height: waterfallHeightReal + 'px'}">
			<slot></slot>
		</view>
	</scroll-view>
	<!-- #endif -->
</template>

<script>
	/**
	 * column-count: [可选]描述瀑布流的列数
	 *   <integer>: 最佳列数，column-width 和 column-count 都指定非0值， 则 column-count 代表最大列数。
	 * column-width : [可选]描述瀑布流每一列的列宽。 
	 *   不填意味着列宽是被其他属性所决定的(比如 column-count)
	 *   <length>: 最佳列宽，实际的列宽可能会更宽(需要填充剩余的空间)， 或者更窄(如果剩余空间比列宽还要小)。 该值必须大于0
	 * column-gap: [可选]列与列的间隙. 如果指定了 normal ，则对应 32.
	 * left-gap: [可选]左边cell和列表的间隙. 如果未指定 ，则对应 0
	 * right-gap: [可选]右边cell和列表的间隙. 如果未指定，则对应 0
	 */
	export default {
		name: 'XgWaterfall',
		provide() {
			return {
				waterfall: this,
			};
		},
		props: {
			width: {
				type: Number|String,
				default: '750rpx'
			},
			showScrollbar: {
				type: false,
				default: true
			},
			columnCount: {
				type: Number,
				default: 0
			},
			columnWidth: {
				type: String|Number,
				default: ''
			},
			columnGap: {
				type: String|Number,
				default: '0rpx'
			},
			leftGap: {
				type: String|Number,
				default: '0px'
			},
			rightGap: {
				type: String|Number,
				default: '0rpx'
			}
		},
		data() {
			return {
				// #ifndef APP-NVUE
				scrollY: true,
				scrollTop: 0,
				old: {
					scrollTop: 0,
				},
				headerHeight: 0,
				footerHeight: 0,
				// #endif
				
				waterfallHeight: 0,
				columnsHeight: [],
				columnsLeft: [],
			}
		},
		computed: {
			waterfallHeightReal() {
				return this.waterfallHeight + this.headerHeight + this.footerHeight;
			},
			waterfallWidth() {
				return this.toPx(this.width);
			},
			realColumnCount() {
				// #ifdef APP-NVUE
				return this.columnCount;
				// #endif
				
				// #ifndef APP-NVUE
				if (Object.is(this.columnWidth, '')) {
					return Math.max(1, this.columnCount);
				} else if(0 < this.columnCount) {
					return Math.max(1, Math.min(this.columnCount, Math.round(this.waterfallWidth / this.toPx(this.columnWidth))));
				} else {
					return Math.max(1, Math.round(this.waterfallWidth / this.toPx(this.columnWidth)));
				}
				// #endif
			},
			realColumnWidth() {
				// #ifdef APP-NVUE
				return this.columnWidth&&this.toPx(this.columnWidth);
				// #endif
				
				// #ifndef APP-NVUE
				return (this.waterfallWidth - this.realLeftGap - this.realRightGap - this.realColumnGap * (this.realColumnCount - 1)) / this.realColumnCount;
				// #endif
			},
			realColumnGap() {
				return this.toPx(this.columnGap);
			},
			realLeftGap() {
				return this.toPx(this.leftGap);
			},
			realRightGap() {
				return this.toPx(this.rightGap);
			}
			
		},
		created() {
			this.columnsHeight = (new Array(this.realColumnCount)).fill(0);
			
			this.columnsHeight.forEach((item, index) => {
				this.columnsLeft[index] = (this.realColumnWidth + this.realColumnGap) * index + this.realLeftGap;
			})
		},
		// #ifndef APP-NVUE
		mounted() {
			this.query = uni.createSelectorQuery().in(this.$root);
		},
		destroyed() {
			this.query = null;
		},
		// #endif
		
		methods: {
			toPx(value) {
				const windowWidth = uni.getSystemInfoSync().windowWidth;
				const result = /(-?\d+\.?\d*)(\w*)/.exec(value);
				if (result&&result[1]) {
					if (result[2]) {
						if ('rpx' === result[2].trim()) {
							return windowWidth * Number(result[1]) / 750;
						} else {
							return Number(result[1]);
						}
					} else {
						return Number(result[1]);
					}
				}
				
				throw new TypeError(`${value}单位格式不正确`);
			},
			
			// #ifndef APP-NVUE
			onScroll(e) {
				this.old.scrollTop = e.detail.scrollTop;
				this.$emit('scroll', e);
			},
			onScrolltolower(e) {
				this.$emit('scrolltolower', e);
			},
			// #endif
			
			
			// #ifdef APP-NVUE
			onLoadmore(e) {
				this.$emit('loadmore', e);
			},
			// #endif
			
			
			
			//args {id, headerHeight}
			setSpecialEffects(args) {
				// #ifdef APP-NVUE
				this.$refs['waterfall'].setSpecialEffects(args);
				// #endif
				
				// #ifndef APP-NVUE
				const {id, headerHeight} = args;
				
				
				if (id === '_root') {
					this.query.selectViewport().fields({scrollOffset: true});
				} else {
					this.query.select('#' + id).fields({scrollOffset: true});
				}
				
				this.query.exec(data => {
					const scrollTop = data[0].scrollTop;
					// console.log(headerHeight - scrollTop );
					if (headerHeight - scrollTop < 5) {
						this.scrollY = true;
					} else {
						this.scrollTop = this.old.scrollTop;
						
						this.$nextTick(function(){
							this.scrollTop = 0;
							
							this.$nextTick(function(){
								this.scrollY = false;
							})
						})
					}
				})
				// #endif
			}
		},
	}
</script>

<style lang="scss" scoped>
	.waterfall {
		// flex: 1;
		/* #ifdef MP */
		height: 100%;
		/* #endif */
		// height: 300px;
		// border-width: 2px;
		position: relative;
		/* width: 750rpx; */
	}
</style>