<template>
	<view class="picker-region">
		<view class="header">
			<text class="header-text">请选择所在地区</text>
		</view>
		<!-- <view class="country-option-list">
			<view class="country-option">
				<text class="country-option-text">中国大陆</text>
				<view class="title-line"></view>
			</view>
		</view> -->
		
		<view class="current-address-section">
			<view class="current-address-item" @tap="onCurrentAddressItemTap('province', currentProvince)">
				<text :class="{'current-address-item-text-selected': currentAddressItemIndex === 'province'}" class="current-address-item-text">{{currentProvinceTitle}}</text>
			</view>
			<view class="current-address-item" @tap="onCurrentAddressItemTap('city', currentCity)">
				<text :class="{'current-address-item-text-selected': currentAddressItemIndex === 'city'}" class="current-address-item-text">{{currentCityTitle}}</text>
			</view>
			<view class="current-address-item" @tap="onCurrentAddressItemTap('area', currentArea)">
				<text :class="{'current-address-item-text-selected': currentAddressItemIndex === 'area'}" class="current-address-item-text">{{currentAreaTitle}}</text>
			</view>
		</view>
		
		<view class="address-list-wrap">
			<address-list class="address-list" :show-hot-citys="showHotCitys" :hot-citys="hotCitysInner" :address-list="indexList" @itemTap="onAddressItemTap" @hotCityTap="onHotCityTap"></address-list>
		</view>
	</view>
</template>

<script>
	import config from './config';
	
	import provinces from './city-data/province.js'	
	import citys from './city-data/city.js'	
	import areas from './city-data/area.js'	
	import hotCitys from './city-data/hot-city.js'	
	
	
	import addressList from './address-list/address-list';
	
	/**
	 * @event {Function()} confirm 
	 */
	export default {
		mixins: [config],
		components: {
			addressList
		},
		props: {
			hotCityColumn: {
				type: Number,
				default: 3
			},
			hotCitys: {
				type: Array,
				default: function() {
					return []
				}
			},
			provinces: {
				type: Array,
				default: function() {
					return []
				}
			},
			citys: {
				type: Array,
				default: function() {
					return []
				}
			},
			areas: {
				type: Array,
				default: function() {
					return []
				}
			},
		},
		data() {
			return {
				allProvinces: [],
				allCitys: [],
				allAreas: [],
				
				indexList: [],
				address_code: '000000',
			}
		},
		computed: {
			showHotCitys() {
				return this.currentAddressItemIndex === 'province';
			},
			hotCitysInner() {
				return this.hotCitys.length > 0 ? this.hotCitys : hotCitys;
			},
			
			provinceOptions() {
				return this.allProvinces;
			},
			cityOptions() {
				const province_code = this.address_code.slice(0, 2);
				const citys = this.allCitys.filter(city => {
					return city.code.slice(0,2) === province_code;
				});
				return citys;
			},
			areaOptions() {
				const city_code = this.address_code.slice(0, 4);
				
				const areas = this.allAreas.filter(area => {
					return area.code.slice(0, 4) === city_code;
				});
				
				return areas;
			},

			
			
			currentProvince() {
				return this.allProvinces.find((province) => {
					return this.address_code.slice(0, 2).localeCompare(province.code.slice(0, 2)) === 0
				})
			},
			currentProvinceTitle() {
				return this.currentProvince ? this.currentProvince.name : '';
			},
			currentCityTitle() {
				if (this.currentProvinceTitle === '') {
					return '';
				}
				
				return this.currentCity ? this.currentCity.name : '请选择';
			},
			currentAreaTitle() {
				if (this.currentCityTitle === '' || this.currentCityTitle === '请选择') {
					return '';
				}
				
				return this.currentArea ? this.currentArea.name : '请选择';
			},
			currentCity() {
				return this.allCitys.find((city) => {
					return this.address_code.slice(0, 4).localeCompare(city.code.slice(0, 4)) === 0;
				});
			},
			currentArea() {
				return this.allAreas.find((area) => {
					return this.address_code.slice(0, 6).localeCompare(area.code.slice(0, 6)) === 0;
				})
			}
		},
		async created() {
			this.allProvinces = this.provinces.length > 0 ? this.provinces : provinces;
			this.allCitys = this.citys.length > 0 ? this.citys : citys;
			this.allAreas = this.areas.length > 0 ? this.areas: areas;
			
			this.setIndexList(this.provinceOptions);
		},
		
		methods: {
			onCurrentAddressItemTap(index, item) {
				this.setCurrentAddressItemIndex(index);
				
				if (index === 'province') {
					this.setIndexList(this.provinceOptions);
					return ;
				}
				if (index === 'city') {
					this.setIndexList(this.cityOptions);
					return ;
				}
				if (index === 'area') {
					this.setIndexList(this.areaOptions);
					return ;
				}
			},
			
			
			setIndexList(list) {
				this.indexList = list;
			},
			
			onAddressItemTap(e) {
				this.address_code = e.detail.address.code;
				
				if (this.address_code.slice(4, 6) !== '00') {
					// this.setIndexList(this.areaOptions);
					this.setCurrentAddressItemIndex('area');
					
					this.$emit('confirm', {
						detail: {
							province: this.currentProvince,
							city: this.currentCity,
							area: this.currentArea,
						}
					})
					return ;
				}
				
				if (this.address_code.slice(2, 4) !== '00') {
					this.setIndexList(this.areaOptions);
					this.setCurrentAddressItemIndex('area');
					
					return ;
				}
				
				if (this.address_code.slice(0, 2) !== '00') {
					this.setIndexList(this.cityOptions);
					this.setCurrentAddressItemIndex('city');
					
					return ;
				}
			},
		},
	}
</script>

<style lang="scss" scoped>
	$color-red: #FF0000;
	$spacing-col-xl: 40rpx;
	$spacing-row-xl: 50rpx;
	
	
	
	.picker-region {
		// @include border(2px solid red);
		/* #ifdef MP-WEIXIN */
		height: 100%;
		/* #endif */
		
		overflow: hidden;
		background-color: $uni-bg-color;
		
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		
		// @include border(2px solid red)
	}
	
	.title-line {
		width: 80rpx;
		height: 8rpx;
		background-image: linear-gradient(to right, rgba($color-red, 1),rgba($color-red, 0.4));
	}
	.header {
		margin: $uni-spacing-row-lg 0;
		
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.header-text {
		font-size: $uni-font-size-lg*1.2;
		font-weight: bold;
	}
	.country-option-list {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}
	.country-option {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		
		height: 60rpx;
		margin-right: $uni-spacing-col-lg;
	}
	.country-option-text {
		font-size: $uni-font-size-lg;
	}
	
	.current-address-section {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}
	.current-address-item {
		padding: $uni-spacing-col-base $spacing-col-xl;
	}
	.current-address-item-text {
		font-size: $uni-font-size-lg;
	}
	.current-address-item-text-selected {
		color: $color-red;
	}
	
	
	.address-list-wrap {
		// @include border(2px solid green);
		height: 0;
		flex: 1;
		
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
	}
	.address-list {
		// @include border(2px solid red);
		flex: 1;
		
		margin-top: $uni-spacing-row-base;
		
		/* #ifdef MP-WEIXIN */
		height: 100%;
		/* #endif */
	}
</style>