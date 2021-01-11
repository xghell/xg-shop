<template>
	<xg-list class="list" :show-scrollbar="false">
		<xg-list-item>
			<navigator class="row-center-center" hover-class="none" v-for="(banner, bannerIndex) of banners" :key="bannerIndex" :url="banner.url">
				<image class="banner" :src="banner.image" mode="widthFix"></image>
			</navigator>
		</xg-list-item>
	</xg-list>
</template>

<script>
	import data from '@/data/shop/shop/tab-index/tab-choiceness';
	
	export default {
		data() {
			return {
				banners: []
			}
		},
		async created() {
			const bannersPromise = data.banners();
			
			this.banners = await bannersPromise;
		}
	}
</script>

<style lang="scss" scoped>
	.list {
		/* #ifdef MP-WEIXIN */
		height: 100%;
		/* #endif */
	}
	.banner {
		width: 700rpx;
	}
</style>