<template>
	<view class="page">
		<uni-list class="list user-section">
			<uni-list-item :title="userInfo.username"  :note="userInfo.nickname"  :thumb="userInfo.avatar" @tap="listItemTap(userInfo.url)"/>
			<uni-list-item v-for="(item, index) of userSectionConfig" :key="index" :title="item.leftTitle" :rightText="item.rightTitle" @click="listItemTap(item.url)"/>
		</uni-list>
		
		<uni-list class="list account-section">
			<uni-list-item v-for="(item, index) of accountSectionConfig" :key="index" :title="item.leftTitle" :rightText="item.rightTitle"  @click="listItemTap(item.url)"/>
		</uni-list>
		
		<uni-list class="list functional-section">
			<uni-list-item v-for="(item, index) of functionalSectionConfig" :key="index" :title="item.leftTitle" :rightText="item.rightTitle" @click="listItemTap(item.url)" />
		</uni-list>
		
		<text class="logout-btn" @tap="logoutBtnTap">退出登录</text>
		
		<view class="bottom-placeholder"></view>
	</view>
</template>

<script>
	import config from '@/config/setting/setting.js';
	import data from '@/data/setting/setting.js';
	
	export default {
		mixins: [config],
		data() {
			return {
				userInfo: {},
			}
		},
		async onLoad() {
			const userInfoData = data.userInfo();
			this.userInfo = await userInfoData;
		},
		methods: {
			listItemTap(url) {
				uni.navigateTo({
					url: url,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			logoutBtnTap() {
				uni.showModal({
					title: '确定退出登录',
					content: '',
					showCancel: true,
					cancelText: '取消',
					confirmText: '确定',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style lang="scss">
	.list {
		margin-bottom: $uni-spacing-row-base;
		border-radius: $uni-border-radius-base;
	}
	
	.user-section {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	
	.logout-btn {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
		
		border-radius: $uni-border-radius-base;
		background-color: $uni-bg-color;
		height: 100rpx;
		font-size: $uni-font-size-base;
		
	}
	
	.bottom-placeholder {
		height: $uni-spacing-row-base;
	}
</style>
