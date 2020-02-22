<template>
	<swiper class="product-list-tab-card" @change="productListTabChange">
		<swiper-item v-for="(productListTabCard, index) of productListTabData" :key="index">
			<scroll-view class="product-list-tab-card-scroll" upper-threshold="3" :scroll-y="scrollable" :show-scrollbar="false" :scroll-top="scrollTop[index]" @scrolltoupper="scrolltoupper" @scrolltolower="scrolltolower" @scroll="scroll(index, $event)">
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
	 * goTop方法 所有tab返回顶部，在组件外部使用ref调用，形如this.$refs[组件的ref属性值].goTop()
	 * 
	 * @change
	 * @scrolltoupper
	 * @scrolltolower
	 */
	export default {
		props: {
			scrollable: {
				type: Boolean,
				default: false
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
				
				scrollTop: [],
				old:{
					scrollTop: []
				},
			}
		},
		methods: {
			scrolltoupper(e) {
				this.$emit('scrolltoupper', e);
			},
			scrolltolower(e) {
				this.$emit('scrolltolower', e);
			},
			scroll(index, event) {
				this.old.scrollTop[index] = event.detail.scrollTop;
			},
						
			productListTabChange(e) {
				this.$emit('change', e.detail.current)
			},
			
			getproductListTabCardItemWidth(e) {
				this.productListTabCardItemWidth = e;
			},
			
			goTop() {
				this.scrollTop = [...this.old.scrollTop];
				
				this.$nextTick(function () {
					this.scrollTop = [...this.old.scrollTop.fill(0)];
				})
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
	}
</style>