<template>
	<view>
		<view :class="{'border-top-solid-1': 0 !== addressIndex}" class="padding-v-side-base margin-left-xl padding-right-xl" v-for="(address, addressIndex) of addresses" :key="addressIndex">
			<view class="row-start-center">
				<view v-if="address.is_default" class="bg-color-red border-radius-base padding-side-sm margin-right-base">
					<text class="text-color-white font-size-sm">默认</text>
				</view>
				<view v-if="address.tag" class="bg-color-blue border-radius-base padding-side-sm margin-right-base">
					<text class="text-color-white font-size-sm">{{address.tag}}</text>
				</view>
				<text class="font-size-base">{{address.province + address.town + address.district}}</text>
			</view>
			<view class="row-between-center margin-v-side-sm">
				<text class="font-size-lg font-weight-bold">{{address.detail}}</text>
				<uni-icons :size="22" type="compose" @click="onEditBtnClick(address)"></uni-icons>
			</view>
			<view class="row-start-center">
				<text class="font-size-base">{{address.consignee_name}}</text>
				<text class="font-size-base margin-left-xl">{{address.consignee_phone}}</text>
			</view>
		</view>
		
		
		<!-- 新建收获地址按钮 -->
		<view class="add-address-btn-wrap-placeholder"></view>
		<navigator hover-class="none" class="row-center-stretch padding-bottom-base add-address-btn-wrap" url="/pages/address/edit">
			<view class="row-center-center bg-color-red border-radius-rect-circle add-address-btn">
				<text class="font-size-lg text-color-white">新建收货地址</text>
			</view>
		</navigator>
		
	</view>
</template>

<script>
	import data from '@/data/address/list';
	
	export default {
		data() {
			return {
				addresses: []
			}
		},
		async onLoad() {
			const addressesPromise = data.addresses();
			
			this.addresses = await addressesPromise;
		},
		methods: {
			onEditBtnClick(address) {
				const address_query = encodeURIComponent(JSON.stringify(address));
				
				uni.navigateTo({
					url: '/pages/address/edit?address=' + address_query,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style lang="scss">
	/* #ifndef APP-NVUE */
	page {
		background-color: $uni-color-white;
	}
	/* #endif */
	
	$add-address-btn-height: 100rpx;
	.add-address-btn-wrap-placeholder {
		height: $add-address-btn-height;
	}
	.add-address-btn-wrap {
		@include position(fixed, none 0 0 0);
		height: $add-address-btn-height;
		
		/* #ifndef APP-NVUE */
		box-sizing: border-box;
		/* #endif */
	}
	.add-address-btn {
		width: 600rpx;
	}
</style>
