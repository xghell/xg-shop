<template>
	<view :style="{height: height + 'px'}">
		<view ref="home-tab-bar" class="home-tab-bar">
			<tpl-tab-bar :currentIndex="currentIndex" :fontFamily="fontFamily" :titleStyle="titleStyle" :selectedTitleStyle="selectedTitleStyle" :textStyle="textStyle" :selectedTextStyle="selectedTextStyle" :iconList="iconList" @itemTap="itemTap"></tpl-tab-bar>
		</view>
	</view>
</template>

<script>
	import {mapState, mapMutations} from 'vuex';
	
	import config from '@/config/tab-bar/home-tab-bar.js';
	import {getComponentRect} from '@/common/helper.js';
	
	
	/**
	 * @getHomeTabBarHeight
	 */
	export default {
		mixins: [config],
		data() {
			return {
				height: 0,
			}
		},
		computed: {
		  ...mapState('homeTabBar', {
		    currentIndex: 'currentIndex',
		  })
		},
		mounted() {
			this.$nextTick(async function () {
				// #ifndef APP-PLUS-NVUE
				const selector = uni.createSelectorQuery().in(this);
				selector.select('.home-tab-bar').fields({size: true});
				selector.exec(data => {
					this.height = data[0].height;
					this.$emit('getHomeTabBarHeight', data[0].height);
				})
				// #endif
				
				// #ifdef APP-PLUS-NVUE
				const homeTabBarData = await getComponentRect(this.$refs['home-tab-bar']);
				this.height = homeTabBarData.size.height;
				this.$emit('getHomeTabBarHeight', homeTabBarData.size.height);
				// #endif
			})
		},
		methods: {
			...mapMutations('homeTabBar', {
				setCurrentIndex: 'setCurrentIndex'
			}),
			itemTap(index) {
				this.setCurrentIndex(index);
			}
		},
	}
</script>

<style lang="scss" scoped>
	.home-tab-bar {
		position: fixed;
		bottom: 0;
		padding-top: $uni-spacing-row-sm;
		padding-bottom: $uni-spacing-row-sm;
		
		background-color: #FFFFFF;
		
		border-top-width: 0.5px;
		border-color: $uni-border-color;
	}
</style>