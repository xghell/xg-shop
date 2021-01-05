<template>
	<xg-waterfall class="product-list" ref="product-waterfall" :width="width" :show-scrollbar="false" :column-count="columnCount" :column-gap="columnGapPx" :left-gap="leftGapPx" :right-gap="rightGapPx" @scrolltolower="onScrolltolower" @loadmore="onLoadmore">
		<xg-waterfall-header ref="waterfall-header" v-if="$slots.default">
			<slot></slot>
		</xg-waterfall-header>
		<xg-waterfall-item v-for="(product, productIndex) of products" :key="productIndex">
			
			<navigator class="product" hover-class="none" url="/pages/product/detail">
				<image class="border-radius-lg" :style="{width: cellWidth + 'px', height: cellWidth*ratio + 'px'}" :src="product.image" mode=""></image>
				<text class="lines-2 font-size-base">{{product.title}}</text>
			</navigator>
		
		</xg-waterfall-item>
		<xg-waterfall-footer>
			<uni-load-more :status="loadMoreStatus"></uni-load-more>
		</xg-waterfall-footer>
	</xg-waterfall>
</template>

<script>
    export default {
        props: {
			products: {
				type: Array,
			},
			
			loadMoreStatus: {
				type: String,
				default: 'more',  //more|loading|nomore
			},
			
			//瀑布流配置参数
			ratio: {//产品图片高度/宽度
				type: Number,
				default: 1
			},
			width: {
				type: String|Number,
				default: '750rpx'
			},
			columnCount: {
				type: Number,
				default: 2,
			},
			columnGap: {
				type: String|Number,
				default: '16rpx'
			},
			leftGap: {
				type: String|Number,
				default: '16rpx'
			},
			rightGap: {
				type: String|Number,
				default: '16rpx'
			}
        },
		computed: {
			widthPx() {
				return this.toPx(this.width);
			},
			columnGapPx() {
				return this.toPx(this.columnGap);
			},
			leftGapPx() {
				return this.toPx(this.leftGap);
			},
			rightGapPx() {
				return this.toPx(this.rightGap);
			},
			cellWidth() {
				return (this.widthPx - this.columnGapPx * this.columnCount - this.leftGapPx - this.rightGapPx) / this.columnCount;
			}
		},
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
			
			// #ifdef MP
			//兼容微信小程序这个坑货(微信小程序组件插槽内容变化不触发组件updated事件)
			updateWaterfallHeader() {
				this.$refs['waterfall-header'].update();
			},
			// #endif
			
			setScrollRef(args) {
				this.$refs['product-waterfall'].setSpecialEffects(args);
				
			},
			
			// #ifdef APP-NVUE
			onLoadmore(e) {
				this.$emit('loadmore', e);
			},
			// #endif
			
			// #ifndef APP-NVUE
			onScrolltolower(e) {
				this.$emit('scrolltolower', e);
			},
			// #endif
        }
    }
</script>

<style lang="scss" scoped>
	.product-list {
		// @include border(2px solid red)
	}
	.product {
		@include flex-layout(column, center, center);
	}
</style>
