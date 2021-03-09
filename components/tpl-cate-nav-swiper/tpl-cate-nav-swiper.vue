<template>
	<swiper class="cate-nav-swiper" :indicator-dots="true" :duration="300">
		<swiper-item v-for="(page_data, page_data_index) of pageDataList" :key="page_data_index">
			<uni-grid :column="columnCount" :highlight="false" :square="square" :showBorder="false">
				<uni-grid-item v-for="(cate_nav, cate_nav_index) of page_data" :key="cate_nav_index">
					<navigator class="cate-nav" hover-class="none" url="">
						<image class="cate-nav-image" :src="cate_nav.image" mode="aspectFit"></image>
						<text class="cate-nav-title">{{cate_nav.title}}</text>
					</navigator>
				</uni-grid-item>
			</uni-grid>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		props: {
			square: {
				type: Boolean,
				default: true,
			},
			rowCount: {
				type: Number,
				default: 2,
			},
			columnCount: {
				type: Number,
				default: 5,
			},
			list: {
				type: Array,
				required: true,
				default: function() {
					return [
						// image: '',
						// title: ''
					]
				}
			},
		},
		computed: {
			pageDataList() {
				const cate_count_per_page = this.rowCount * this.columnCount;
				const page_count = this.list.length / cate_count_per_page;
				const page_data_list = [];
				
				for (let i = 0; i < page_count; ++i) {
					page_data_list[i] = this.list.slice(i * cate_count_per_page, (i + 1) * cate_count_per_page);
				}
				
				return page_data_list;
			}
		},
	}
</script>

<style lang="scss" scoped>
	$cate-image-size: $uni-img-size-lg;
	
	.cate-nav-swiper {
		height: $cate-image-size * 4.2;
	}
	.cate-nav {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
	}
	.cate-nav-image {
		width: $cate-image-size;
		height: $cate-image-size;
	}
	.cate-nav-title {
		font-size: $uni-font-size-base;
		color: $uni-text-color-grey;
		
		margin-top: $uni-spacing-row-base;
	}
</style>