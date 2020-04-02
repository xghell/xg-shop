<template>
	<view>
		<xg-waterfall :columnCount="columnCount" :columnGap="columnGap" :leftGap="leftGap" :rightGap="rightGap" @getWaterfallItemWidth="getWaterFallItemWidth">
			<xg-waterfall-item :ref="'waterfall-item-' + index" v-for="(product, index) of productList" :key="index">
				<tpl-product :style="{'margin-bottom': rowGap}" :size="waterFallItemWidth + 'px'" :url="product.url" :image="product.image" :title="product.title" :price="product.price" :priceLabel="product.priceLabel" :discount="product.discount" @imageLoad="recommendedProductListImageLoad(index)"></tpl-product>
			</xg-waterfall-item>
		</xg-waterfall>
	</view>
</template>

<script>
	export default {
		props: {
			columnCount: {
				type: Number,
				default: 2
			},
			columnGap: {
				type: String
			},
			rowGap: {
				type: String
			},
			leftGap: {
				type: String
			},
			rightGap: {
				type: String
			},
			productList: {
				type: Array,
				default: function () {
					return [
						// {
						// 	image: '',
						// 	title: '',
						// 	price: '',
						// 	priceLabel: '',
						// 	discount: '',
						// }
					]
				}
			}
		},
		data() {
			return {
				waterFallItemWidth: 0,
				imageListLoaded: [],
			}
		},
		methods: {
			getWaterFallItemWidth(e) {
				this.waterFallItemWidth = e;
			},
			recommendedProductListImageLoad(index) {
				if (!this.imageListLoaded[index]) {
					this.imageListLoaded[index] = true;
					
					setTimeout(() => {
						this.$refs['waterfall-item-' + index][0].calculateLayout();
					}, 100);
				}
			}
		},
	}
</script>

<style scoped>

</style>