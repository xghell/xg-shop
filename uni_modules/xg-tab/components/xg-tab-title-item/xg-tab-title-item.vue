<template>
	<view class="xg-tab-title-item" id="xg-tab-title-item" @tap="titleItemTap">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		inject: ['$tabTitle'],
		data() {
			return {
				
			}
		},
		created() {
			this.index = this.$tabTitle.itemIndex++;
			this.size = {};
			
			this.$tabTitle.itemSizes.push(this.size);
			
		},
		mounted() {
			this.$nextTick(() =>{
				setTimeout(() => {
					uni.createSelectorQuery().in(this).select('#xg-tab-title-item') .fields({size: true}).exec(data => {
						this.size.width = data[0].width;
						this.size.height = data[0].height;
					})
				}, 300);
			})
		},
		methods: {
			titleItemTap() {
				if (this.$tabTitle.vertical) {
					this.scrollToVerticalCenter();
				} else {
					this.scrollToHorizonCenter();
				}
			},
			scrollToHorizonCenter() {
				const left = this.getLeft();
				const tabTitleWidth = this.$tabTitle.width;
				const titleWidth = this.size.width;
				
				// #ifdef MP-WEIXIN
				const itemTotalWidth = this.$tabTitle.itemTotalWidth();
				// #endif
				
				// #ifndef MP-WEIXIN
				const itemTotalWidth = this.$tabTitle.itemTotalWidth;
				// #endif
				
				const scrollLeftMax = Math.max(itemTotalWidth - this.$tabTitle.width, 0);
				
				const scrollLeft = Math.max(Math.min(left - tabTitleWidth/2 + titleWidth/2, scrollLeftMax), 0);
				
				this.$tabTitle.scrollToScrollLeft(scrollLeft);
			},
			getLeft() {
				let sum = 0;
				this.$tabTitle.itemSizes.slice(0, this.index).forEach(item => {
					sum += item.width;
				})
				
				return sum;
			},
			
			scrollToVerticalCenter() {
				const top = this.getTop();
				const tabTitleHeight = this.$tabTitle.height;
				const titleHeight = this.size.height;
				
				// #ifdef MP-WEIXIN
				const itemTotalHeight = this.$tabTitle.itemTotalHeight();
				// #endif
				
				// #ifndef MP-WEIXIN
				const itemTotalHeight = this.$tabTitle.itemTotalHeight;
				// #endif
				
				const scrollTopMax = Math.max(itemTotalHeight - this.$tabTitle.height, 0);
				
				const scrollTop = Math.max(Math.min(top - tabTitleHeight/2 + titleHeight/2, scrollTopMax), 0);
				
				this.$tabTitle.scrollToScrollTop(scrollTop);
			},
			getTop() {
				let sum = 0;
				this.$tabTitle.itemSizes.slice(0, this.index).forEach(item => {
					sum += item.height;
				})
				
				return sum;
			},
		},
	}
</script>

<style lang="scss" scoped>
	.xg-tab-title-item {
		position: relative;
	}
</style>