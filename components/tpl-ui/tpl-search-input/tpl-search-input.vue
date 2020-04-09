<template>
	<view class="search-input">
		<xg-search-input :leftIcon="leftIcon || searchInput.leftIcon" :rightIcon="rightIcon || searchInput.rightIcon" :searchInputStyle="searchInput.searchInputStyle" :inputStyle="searchInput.inputStyle" :placeholder="placeholder || searchInput.placeholder" @rightTap="searchInputRightIconTap" :placeholderStyle="placeholderStyle || searchInput.placeholderStyle" @leftTap="searchInputLeftIconTap"></xg-search-input>
	</view>
</template>

<script>
	import config from './tpl-search-input.js';
	
	export default {
		mixins: [config],
		props: {
			leftIcon: {
				type: Object,
				// default: function () {
				// 	return {
				// 		fontFamily: '',
				// 		text: '',
				// 		iconSize: '',
				// 		iconColor: ''
				// 	}
				// }
			},
			rightIcon: {
				type: Object,
				// default: function () {
				// 	return {
				// 		fontFamily: '',
				// 		text: '',
				// 		iconSize: '',
				// 		iconColor: ''
				// 	}
				// }
			},
			placeholder: {
				type: String,
			},
			placeholderStyle: {
				type: String,
			}
		},
		methods: {
			searchInputRightIconTap(e) {
				console.log('点击搜索框右侧按钮');
			},
			searchInputLeftIconTap(e) {
				console.log('点击搜索框左侧侧按钮');
			}
		},
	}
</script>

<style lang="scss" scoped>
	.search-input {
	}
</style>