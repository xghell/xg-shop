<template>
	<swiper class="product-list-tab-card" :style="{height: height}" @change="productListTabChange">
		<swiper-item v-for="(productListTabCard, index) of productListTabData" :key="index">
			<scroll-view class="product-list-tab-card-scroll" scroll-y="true">
				<xg-waterfall :columnCount="columnCount" :columnGap="columnGap" :leftGap="leftGap" :rightGap="rightGap" @getWaterfallItemWidth="getproductListTabCardItemWidth">
					<xg-waterfall-item v-for="(product, index) of productListTabCard" :key="index">
						<tpl-product :style="{'margin-bottom': rowGap}" :size="productListTabCardItemWidth + 'px'" :image="product.image" :title="product.title" :price="product.price" :priceLabel="product.priceLabel" :discount="product.discount"></tpl-product>
					</xg-waterfall-item>
				</xg-waterfall>
			</scroll-view>
		</swiper-item>
	</swiper>
</template>

<script>
	/**
	 * @change
	 */
	export default {
		props: {
			height: {
				type: String,
				required: true
			},
			//productListData赋值时尽可能使用vm.$set
			productListTabData: {
				type: Array,
				default: function () {
					return [
						[
							// {
							// 	url: '',
							// 	image: '',
							// 	title: '',
							// 	price: '',
							// 	priceLabel: '',
							// 	discount: ''
							// }
						]
					]
				}
			},
			columnCount: {
				type: Number
			},
			rowGap: {
				type: String
			},
			columnGap: {
				type: String
			},
			leftGap: {
				type: String
			},
			rightGap: {
				type: String
			}
			
		},
		data() {
			return {
				productListTabCardItemWidth: undefined,
			}
		},
		methods: {
			getproductListTabCardItemWidth(e) {
				this.productListTabCardItemWidth = e;
			},
			productListTabChange(e) {
				this.$emit('change', e.detail.current)
			}
		},
	}
</script>

<style lang="scss" scoped>
	.product-list-tab-card {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
	}
	.product-list-tab-card-scroll {
		flex: 1;
		// height: 800rpx;
		border-width: 5px;
		border-color: red;
	}
</style>