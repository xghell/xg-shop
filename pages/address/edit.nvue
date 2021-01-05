<template>
	<view class="page">
		<!-- 收货地址信息表单 -->
		<view class="border-top-solid-1 bg-color-white">
			<view class=" form-item">
				<label class="label">
					<view class="label-text-wrap">
						<text class="label-text">收货人</text>
					</view>
					<input class="field field-text" type="text" placeholder="请填写收货人姓名" placeholder-class="placeholder" v-model="consigneeName" />
				</label>
				<uni-icons :size="20" type="contact"></uni-icons>
			</view>
			<view class="border-top-solid-1 form-item">
				<label class="label">
					<view class="label-text-wrap">
						<text class="label-text">手机号码</text>
					</view>
					<input class="field field-text" type="text" placeholder="请填写收货人手机号码" placeholder-class="placeholder" v-model="consigneePhone" />
				</label>
			</view>
			<view class="border-top-solid-1 form-item" @tap="onAddressPickerTap">
				<label class="label">
					<view class="label-text-wrap">
						<text class="label-text">所在地区</text>
					</view>
					<view class="field">
						<text v-if="location" class="field-text">{{location}}</text>
						<text class="field-text placeholder" v-else>省市区县等</text>
					</view>
				</label>
				<uni-icons :size="20" type="location-filled"></uni-icons>
			</view>
			<view class="border-top-solid-1 form-item">
				<label class="label">
					<view class="label-text-wrap">
						<text class="label-text">详细地址</text>
					</view>
					<input class="field field-text" v-model="detail" placeholder="街道、楼牌号"  placeholder-class="placeholder"/>
				</label>
				<uni-icons :size="20" type="mic-filled"></uni-icons>
			</view>
		</view>
		
		<!-- 标签 -->
		<view class="bg-color-white padding-v-side-lg margin-top-base">
			<view class="row-start-stretch margin-side-xl">
				<view class="tag-label">
					<text class="font-size-lg">标签</text>
				</view>
				
				<view class="tag-list-section">
					<view :class="{'bg-color-blue': tagIndex === currentTagIndex, 'border-solid-1': tagIndex !== currentTagIndex,}" class="row-center-center border-radius-rect-circle  margin-right-lg margin-bottom-base tag" v-for="(tag, tagIndex) of tagOptions" :key="tagIndex" @tap="onTagTap(tagIndex, tag)">
						<text :class="{'text-color-white': tagIndex === currentTagIndex}" class="font-size-lg">{{tag}}</text>
					</view>
					
					
					<!-- 自定义标签 -->
					<view class="row-center-stretch custom-tag">
						<view v-if="customTagShowed" class="row-around-stretch" @tap="onTagTap(-1)">
							<view :class="(!customTapInputShowed && currentTagIndex === -1) ?'bg-color-blue text-color-white': 'bg-color-grey'" class="row-center-stretch border-top-left-radius-rect-circle border-bottom-left-radius-rect-circle padding-side-lg ">
								<view v-if="!customTapInputShowed" class="row-center-center">
									<text :class="{'text-color-white': !customTapInputShowed && currentTagIndex === -1,}" class=" font-size-lg">{{customTag}}</text>
								</view>
								<input v-else class="font-size-lg tag tag-input" type="text" placeholder="请输入标签名" v-model="customTag"/>
							</view>
							<view :class="{
								'bg-color-blue': !customTapInputShowed && currentTagIndex === -1,
								'bg-color-black': !customTapInputShowed && currentTagIndex !== -1,
								'bg-color-red': customTapInputShowed && customTag.length > 0,
								'bg-color-greyblack': customTapInputShowed && customTag.length <= 0,
							}" class="row-center-center border-left-solid-1 border-top-right-radius-rect-circle border-bottom-right-radius-rect-circle padding-side-base" @tap.prevent.stop="onCustomTagBtnTap(customTapInputShowed)">
								<text class="font-size-lg text-color-white">{{customTapInputShowed ? '确定' : '编辑'}}</text>
							</view>
						</view>
						<view v-else class="row-center-center border-radius-rect-circle border-solid-1 margin-right-lg tag" @tap="onAddTagBtnTap">
							<uni-icons type="plusempty"></uni-icons>
						</view>
					</view>
					
				</view>
			</view>
		
			<!-- 设置默认标签 -->
			<view class="row-between-center  margin-side-xl margin-top-xl">
				<view class="">
					<text class="font-size-lg">设置默认标签</text>
					<text class="font-size-sm text-color-greyblack margin-top-sm">提醒：每次下单会默认推荐使用该地址</text>
				</view>
				<switch class="switch" :checked="isDefault" @change="onSetDefaultSwitchChange" />
			</view>
		</view>
		
		<!-- 保存按钮 -->
		<view class="row-center-stretch padding-bottom-base save-address-btn-wrap">
			<view class="row-center-center bg-color-red border-radius-rect-circle save-address-btn" @tap="onSaveBtnTap">
				<text class="font-size-lg text-color-white">保存</text>
			</view>
		</view>
		
		
		<uni-popup ref="pick-region-popup" type="bottom">
			<!-- #ifdef MP-WEIXIN -->
			<view v-if="pickerPopupShow" class="pick-region-popup" :style="{height: pickerPopupHeight + 'px'}">
			<!-- #endif -->
			<!-- #ifndef MP-WEIXIN -->
			<view class="pick-region-popup" :style="{height: pickerPopupHeight + 'px'}">
			<!-- #endif -->
				<xg-picker-region class="flex-1" @confirm="onPickerRegionConfirm"></xg-picker-region>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import config from './edit/config';
	
	export default {
		mixins: [config],
		data() {
			return {
				customTag: '',
				isDefault: false,
				tag: '',
				consigneeName: '',
				consigneePhone: '',
				province: '',
				town: '',
				district: '',
				detail: ''
			};
		},
		computed: {
			location() {
				return this.province + this.town + this.district;
			},
		},
		onLoad(options) {
			if (options.address) {
				const address = JSON.parse(decodeURIComponent(options.address));
				this.isDefault = address.is_default;
				this.consigneeName = address.consignee_name;
				this.consigneePhone = address.consignee_phone;
				this.province = address.province;
				this.town = address.town;
				this.district = address.district;
				this.detail = address.detail;
				this.tag = address.tag;
				
				
				const tagIndex = this.getTagIndex(this.tag);
				
				this.setCurrentTagIndex(tagIndex);
				
				if (tagIndex === -1) {
					this.customTag = this.tag;
					this.showCustomTag(true);
				}
				
				uni.setNavigationBarTitle({
					title: '编辑收货地址'
				})
			}
		},
		methods: {
			onAddressPickerTap() {
				this.$refs['pick-region-popup'].open();
				// #ifdef MP-WEIXIN
				this.showPickerPopup();
				// #endif
			},
			onPickerRegionConfirm(e) {
				this.$refs['pick-region-popup'].close();
				// #ifdef MP-WEIXIN
				this.hiddenPickerPopup();
				// #endif
				
				
				const province = e.detail.province;
				const city = e.detail.city;
				const area = e.detail.area;
				
				this.province = province.name;
				this.town = city.name;
				this.district = area.name;
			},
			
			onTagTap(index, tag) {
				this.toggleCurrentTagIndex(index);
				this.tag = tag;
			},
			
			onSetDefaultSwitchChange(e) {
				this.isDefault = e.detail.value;
			},
			
			onAddTagBtnTap() {
				this.showCustomTapInput(true);
			},
			
			onCustomTagBtnTap(status) {
				if (status) {
					//点击确认按钮
					if (this.customTag.length > 0) {
						this.tag = this.customTag;
						this.showCustomTapInput(false);
						this.$nextTick(function(){
							this.setCurrentTagIndex(-1);
						})
					}
					
				} else {
					//点击编辑按钮
					this.showCustomTapInput(true);
				}
			},
			
			onSaveBtnTap() {
				const address = {
					isDefault: this.isDefault,
					tag: this.tag,
					consigneeName: this.consigneeName,
					consigneePhone: this.consigneePhone,
					province: this.province,
					town: this.town,
					district: this.district,
					detail: this.detail
				}
				
				console.log(address);
				uni.navigateTo({
					url: '/pages/address/list',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		},
	}
</script>

<style lang="scss">
	/* #ifndef APP-NVUE */
	page {
		background-color: $uni-color-white;
	}
	/* #endif */
	
	.page {
		background-color: $uni-color-grey;
	}
	
	$form-item-height: 100rpx;
	$label-width: 180rpx;
	
	.form-item {
		@include flex-layout(row, flex-start, center);
		
		margin-left: $uni-spacing-col-xl;
		padding-right: $uni-spacing-col-xl;
	}
	.label {
		flex: 1;
		@include flex-layout(row, center);
	}
	.label-text-wrap {
		width: $label-width;
		// height: $form-item-height;
	}
	.label-text {
		font-size: $uni-font-size-lg;
		line-height: $form-item-height;
	}
	.field {
		flex: 1;
		width: 0px;
		height: $form-item-height;
	}
	.field-text {
		line-height: $form-item-height;
		
		font-size: $uni-font-size-lg;
	}
	.placeholder {
		color: $uni-color-greyblack;
	}
	
	
	.tag-list-section {
		flex: 1;
		@include flex-layout(row, flex-start);
		flex-wrap: wrap;
		height: 150rpx;
		
		// @include border(2px solid red)
	}
	$tag-height: 55rpx;
	.tag-label {
		width: $label-width;
		height: $tag-height;
	}
	.tag {
		width: 130rpx;
		height: $tag-height;
	}
	.custom-tag {
		height: $tag-height;
	}
	.tag-input {
		width: 300rpx;
	}
	
	
	$save-address-btn-height: 100rpx;
	.save-address-btn-wrap {
		@include position(fixed, none 0 0 0);
		height: $save-address-btn-height;
		
		/* #ifndef APP-NVUE */
		box-sizing: border-box;
		/* #endif */
	}
	.save-address-btn {
		width: 600rpx;
	}
	
	.switch {
		transform: scale(0.7);
	}
	
	
	.pick-region-popup {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
	}
</style>
