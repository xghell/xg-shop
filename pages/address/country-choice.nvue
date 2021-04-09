<template>
	<view class="column-center-stretch page">
		<uni-search-bar cancel-button="none"  @input="onSearchBarInput" />
		<view class="row-center-stretch page-content">
			<xg-index-list class="flex-1" :current="currentContentIndex" @change="onIndexChange">
				<xg-index-list-item v-for="(countryGroup, countryGroupIndex) of countryGroups" :key="countryGroupIndex">
					<view class="padding-side-xl">
						<text class="font-size-xl padding-v-side-base">{{countryGroupIndex}}</text>
						<view class="row-between-center padding-v-side-base" v-for="(country, countryIndex) of countryGroup" :key="countryIndex" @tap="onCountryTap(country)">
							<text class="font-size-lg">{{country.area}}</text>
							
							<text class="font-size-lg">{{country.area_code}}</text>
						</view>
					</view>
				</xg-index-list-item>
			</xg-index-list>
			
			<view class="column-around-center padding-lg index-title-list">
				<view v-for="(countryIndex, countryIndexIndex) of countryIndexes" :key="countryIndexIndex" @tap="onIndexTitleTap(countryIndexIndex)">
					<text class="font-size-base" :class="currentIndexIndex === countryIndexIndex ? 'text-color-red': 'text-color-blue'">{{countryIndex}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import countrys from './country-choice/country';
	
	export default {
		data() {
			return {
				from: '',
				currentContentIndex: 0,
				currentIndexIndex: 0,
				
				countrysAll: [],
				countrysInner: [],
			}
		},
		computed: {
			countryGroups() {
				const groups = {};
				
				this.countrysInner.forEach(country => {
					if (!groups[country.pinyin]) {
						groups[country.pinyin] = [];
					}
					groups[country.pinyin].push(country);
				});
				
				return groups;
			},
			countryIndexes() {
				return Object.keys(this.countryGroups);
			}
		},
		onLoad(options) {
			this.from = options.from;
			
			this.countrysAll = countrys;
			this.countrysInner = this.countrysAll;
		},
		methods: {
			onIndexChange(e) {
				const current = e.detail.current;
				// console.log(e.detail.current);
				this.currentIndexIndex = current;
			},
			onIndexTitleTap(index) {
				this.currentContentIndex = -1;
				
				this.$nextTick(function(){
					this.currentContentIndex = index;
				})
			},
			
			onSearchBarInput(e) {
				const content = e;
				
				this.countrysInner = this.countrysAll.filter(country => {
					return country.area.includes(e);
				})
			},
			
			onCountryTap(country) {
				
				uni.redirectTo({
					url: `${this.from}?country=${encodeURIComponent(JSON.stringify(country))}`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		},
	}
</script>

<style lang="scss" scoped>
	.page {
		/* #ifdef H5 */
		@include position(fixed, var(--window-top) 0 0 0);
		/* #endif */
		/* #ifndef H5 */
		@include position(fixed, 0 0 0 0);
		/* #endif */
	}
	.page-content {
		height: 0;
		flex: 1;
	}
	.index-title-list {
		
	}
</style>