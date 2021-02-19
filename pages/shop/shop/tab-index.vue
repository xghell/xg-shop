<template>
	<view class="tab-index">
		<view class="row-between-stretch padding-v-side-base">
			<view class="column-start-center flex-1" v-for="(tabTitle, tabTitleIndex) of tabTitles" :key="tabTitleIndex" @tap="onTabTitleTap(tabTitleIndex)">
				<text class="font-size-xl text-color-white">{{tabTitle.title}}</text>
				<view v-if="currentTabIndex === tabTitleIndex" class="title-line margin-top-sm"></view>
			</view>
		</view>
		<swiper class="swiper" :indicator-dots="false" :autoplay="false" :duration="300" :current="currentTabIndex" @change="onSwiperChange">
			<swiper-item>
				<view class="swiper-item">
					<tab-choiceness class="swiper-item-tab"></tab-choiceness>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<tab-activity v-if="hasTabIndexSetItem(1)" class="swiper-item-tab"></tab-activity>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<tab-new v-if="hasTabIndexSetItem(2)" class="swiper-item-tab"></tab-new>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<tab-buyer-show v-if="hasTabIndexSetItem(3)" class="swiper-item-tab"></tab-buyer-show>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import tabChoiceness from './tab-index/tab-choiceness';
	import tabActivity from './tab-index/tab-activity';
	import tabNew from './tab-index/tab-new';
	import tabBuyerShow from './tab-index/tab-buyer-show';
	
	import config from './tab-index/config';
	
	export default {
		mixins: [config],
		components: {
			tabChoiceness,
			tabActivity,
			tabNew,
			tabBuyerShow
		},
		methods: {
			onTabTitleTap(index) {
				this.setCurrentTabIndex(index);
				this.addTabIndexSetItem(index);
			},
			
			onSwiperChange(e) {
				const index = e.detail.current;
				this.setCurrentTabIndex(index);
				this.addTabIndexSetItem(index);
			}
		},
	}
</script>

<style lang="scss" scoped>
	.title-line {
		width: 80rpx;
		height: 8rpx;
		background-color: $uni-color-white;
	}
	
	.tab-index {
		/* #ifdef MP-WEIXIN */
		height: 100%;
		/* #endif */
		
		@include flex-layout(column);
		
	}
	.swiper {
		flex: 1;
		position: relative;
	}
	.swiper-item {
		@include position(absolute, 0 0 0 0);
	}
	.swiper-item-tab {
		flex: 1;
		
		/* #ifdef MP-WEIXIN */
		height: 100%;
		/* #endif */
	}
</style>