<template>
	<view :style="{width: size, height: size}" @tap="checkIconTap">
		<xg-icon v-if="checkedInner" :fontFamily="checkedIconConfig.fontFamily" :text="checkedIconConfig.text" :textStyle="checkedIconConfig.textStyle + ';font-size:' + size"></xg-icon>
		<xg-icon v-if="!checkedInner" :fontFamily="uncheckedIconConfig.fontFamily" :text="uncheckedIconConfig.text" :textStyle="uncheckedIconConfig.textStyle + ';font-size:' + size"></xg-icon>
	</view>
</template>

<script>
	import config from './tpl-check.js';
	
	/**
	 * @change
	 * @checkTap
	 */
	export default {
		name: 'TplCheck',
		mixins: [config],
		props: {
			checked: {
				type: Boolean,
				default: false,
			},
			size: {
				type: String,
				default: '40rpx',
			}
		},
		data() {
			return {
				checkedInner: false,
			}
		},
		created() {
			this.$watch('checked', () => {
				this.checkedInner = this.checked;
			}, {immediate: true});
			
			this.$watch('checkedInner', () => {
				this.$emit('change', this.checkedInner);
			}, {immediate: true});
		},
		methods: {
			checkIconTap() {
				this.checkedInner = !this.checkedInner;
				
				this.$emit('checkTap', this.checkedInner);
			}
		},
	}
</script>

<style lang="scss" scoped>
	
</style>