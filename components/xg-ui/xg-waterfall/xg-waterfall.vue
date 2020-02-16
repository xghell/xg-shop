<template>
	<view ref="waterfall" class="waterfall">
		<slot></slot>
	</view>
</template>

<script>
	/**
	 * column-count: [可选]描述瀑布流的列数
	 *   auto: 意味着列数是被其他属性所决定的(比如 column-width)
	 *   <integer>: 最佳列数，column-width 和 column-count 都指定非0值， 则 column-count 代表最大列数。
	 * column-width : [可选]描述瀑布流每一列的列宽。 
	 *   auto: 意味着列宽是被其他属性所决定的(比如 column-count)
	 *   <length>: 最佳列宽，实际的列宽可能会更宽(需要填充剩余的空间)， 或者更窄(如果剩余空间比列宽还要小)。 该值必须大于0,如果与column-count同时指定则column-width优先
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
			columnCount: {
				type: Number,
				default: 4
			},
			columnWidth: {
				type: String,
				default: ''
			},
			columnGap: {
				type: String,
				default: '20rpx'
			},
			leftGap: {
				type: String,
				default: '0px'
			},
			rightGap: {
				type: String,
				default: '0rpx'
			}
		},
		data() {
			return {
				waterfallWidth: 0,
				columnsHeight: [],
				columnsLeft: [],
			}
		},
		computed: {
			realColumnCount() {
				if (Object.is(this.columnWidth, '')) {
					return this.columnCount;
				} else {
					return Math.round(this.waterfallWidth / this.toPx(this.columnWidth));
				}
			},
			realColumnWidth() {
				return (this.waterfallWidth - this.realLeftGap - this.realRightGap - this.realColumnGap * (this.realColumnCount - 1)) / this.realColumnCount;
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
		mounted() {
			this.$nextTick(async function () {
				// #ifdef APP-PLUS-NVUE
				const data = await this.getComponentRect(this.$refs['waterfall']);
				this.waterfallWidth = data.size.width;
				
				// #endif
				
				// #ifndef APP-PLUS-NVUE
				const selector = uni.createSelectorQuery().in(this);
				selector.select('.waterfall').fields({size: true});
				selector.exec(data => {
					this.waterfallWidth = data[0].width;
				})
				// #endif
				console.log(this.waterfallWidth, 'adfaefaerf');
				
				
				this.columnsHeight = (new Array(this.realColumnCount)).fill(0);
				
				this.columnsHeight.forEach((item, index) => {
					this.columnsLeft[index] = (this.realColumnWidth + this.realColumnGap) * index + this.realLeftGap;
				})
			})
		},
		methods: {
			toPx(value) {
				const result = /(\d+)(\w+)/.exec(value);
				if ('rpx' === result[2].trim()) {
					return uni.getSystemInfoSync().screenWidth * Number(result[1]) / 750;
				} else if('px' === result[2].trim()) {
					return Number(result[1]);
				} else {
					throw new TypeError(`${value}单位格式不正确`);
				}
			},
			// #ifdef APP-NVUE
			getComponentRect(ref) {
				
				const dom = uni.requireNativePlugin('dom');
				
				return new Promise(function (resolve, reject) {
					dom.getComponentRect(ref, data => {
						resolve(data);
					})
				})
			}
			// #endif
		},
	}
</script>

<style scoped>
	.waterfall {
		position: relative;
		width: 750rpx;
	}
</style>