<template>
	<view class="address-section">
		<view class="address-list-wrap" >
			<xg-index-list ref="adderss-list" class="address-list" :current="currentContentIndex" @change="onIndexListChange">
				<xg-index-list-header v-if="hotCitys.length > 0 && showHotCitys">
					<view class="hot-city-list">
						<view class="hot-city-title">
							<text class="hot-city-title-text">热门城市</text>
						</view>
						<view class="hot-city-content">
							<uni-grid :highlight="false" :show-border="false" :square="false" :column="4">
								<uni-grid-item v-for="(hotCity, hotCityIndex) of hotCitys" :key="hotCityIndex">
									<view class="hot-city-item" @tap="onAddressItemTap(hotCity)">
										<text class="hot-city-item-text">{{hotCity&&hotCity.name}}</text>
									</view>
									
								</uni-grid-item>
							</uni-grid>
						</view>
					</view>
				</xg-index-list-header>
				<xg-index-list-item v-for="(group, groupIndex) of indexList" :key="groupIndex">
					<view class="address-group">
						<view class="address-group-name border-bottom">
							<text class="address-group-name-text">{{groupIndex}}</text>
						</view>
						<view class="address-group-content">
							<view class="address-group-item" v-for="(item, itemIndex) of group" :key="itemIndex" @tap="onAddressItemTap(item)">
								<text class="address-group-item-text">{{item.name}}</text>
							</view>
						</view>
					</view>
				</xg-index-list-item>
			</xg-index-list>
		</view>
		<view class="address-index-wrap">
			<view class="address-index">
				<view class="address-index-item" v-for="(title, index) of indexTitles" :key="index" @tap="onTitleTap(index)">
					<text :class="{'address-index-item-text-selected': currentTitleIndex === index}" class="address-index-item-text">{{title}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import config from './config';
	
	/**
	 * @event {Function()} itemTap 
	 * @event {Function()} hotCityTap 
	 */
	export default {
		mixins: [config],
		props: {
			showHotCitys: {
				type: Boolean,
				default: true
			},
			hotCitys: {
				type: Array
			},
			addressList: {
				type: Array,
			},
		},
		data() {
			return {
			}
		},
		created() {
			this.$watch('hotCitys', () => {
				this.$nextTick(function(){
					this.$forceUpdate();
					this.$refs['adderss-list'].relayout();
				})
			});
			this.$watch('indexList', () => {
				this.$nextTick(function(){
					this.$forceUpdate();
					this.$refs['adderss-list'].relayout();
				})
			});
		},
		computed: {
			indexList() {
				return this.orderBy(this.addressList, 'pinyin');
			},
			indexTitles() {
				return Object.keys(this.indexList).map(key => key);
			},
		},
		methods: {
			orderBy(collection, field) {
				const res = {};
				
				collection.sort((doc1, doc2) => {
					return doc1[field].toUpperCase().localeCompare(doc2[field].toUpperCase());
				}).forEach(doc => {
					const first_char = doc[field][0].toUpperCase();
					
					if (!res[first_char]) {
						res[first_char] = []
					}
						
					res[first_char].push(doc);
				})
				
				return res;
			},
			
			onIndexListChange(e) {
				const index = e.detail.current;
				this.setCurrentTitleIndex(index);
				this.setOldCurrentContentIndex(index);
			},
			onAddressItemTap(item) {
				this.$emit('itemTap', {
					detail: {
						address: item
					}
				})
			},
			
			onTitleTap(index) {
				// console.log(index);
				this.setCurrentContentIndex(index);
			},
		},
	}
</script>

<style lang="scss" scoped>
	$color-red: #FF0000;
	$spacing-col-xl: 40rpx;
	// $spacing-row-xl: 50rpx;
	
	.border-bottom {
		border-bottom-width: 0.5px;
		border-bottom-color: #EEEEEE;
		border-bottom-style: solid;
	}
	
	.address-section {
		/* #ifdef MP-WEIXIN */
		height: 100%;
		/* #endif */
		
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}
	.address-list-wrap {
		// @include border(2px solid blue)
		width: 0;
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		// margin-left: $uni-spacing-col-lg*2;
	}
	.hot-city-list {
		padding: 0 $spacing-col-xl;
	}
	.hot-city-title {}
	.hot-city-title-text {
		font-size: $uni-font-size-lg;
	}
	.hot-city-content {
		// @include border(2px solid red)
		
	}
	.hot-city-item {
		// @include border(2px solid)
		height: 70rpx;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.hot-city-item-text {
		font-size: $uni-font-size-lg;
	}
	.address-list {
		height: 0;
		flex: 1;
		// @include border(2px solid green)
	}
	.address-group {
		
	}
	.address-group-name {
		// position: sticky;
		// top: 0;
		// left: 0;
		// right: 0;
		padding: $uni-spacing-row-base 0;
		// padding-bottom: $uni-spacing-row-base;
		margin: 0 $spacing-col-xl;
		
		background-color: $uni-bg-color;
		
		// @include border(2px solid red);
		
		/* #ifndef APP-NVUE */
		z-index: 1;
		/* #endif */
	}
	.address-group-name-text {
		font-size: $uni-font-size-base;
		font-weight: bold;
	}
	.address-group-content {
		// @include border(2px solid red)
		margin: 0 $spacing-col-xl;
	}
	.address-group-item {
		// @include border(2px solid green)
		padding: $uni-spacing-row-base 0;
	}
	.address-group-item-text {
		font-size: $uni-font-size-base;
	}
	
	.address-index-wrap {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
		margin-right: $uni-spacing-col-lg;
	}
	.address-index {
		// @include border(2px solid red);
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: space-around;
		
		padding: $uni-spacing-row-base 0;
		margin: $uni-spacing-row-lg 0;
		
		border-radius: 10000px;
		background-color: $uni-bg-color-grey;
	}
	.address-index-item {
		// @include  border(2px solid red)
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0 $uni-spacing-col-base;
	}
	.address-index-item-text {
		font-size: $uni-font-size-sm;
	}
	.address-index-item-text-selected {
		color: $color-red;
	}
</style>