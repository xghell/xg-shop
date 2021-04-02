<template>
	<view>
		<text class="info-text" :style="{fontSize: fontSize, color: color}">{{infoPrivacy}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			fontSize: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: ''
			},
			info: {
				type: String,
				default: '15326897589'
			},
			placeholder: {
				type: String,
				default: '*'
			},
			startNumber: {
				type: Number,
				default: 3
			},
			endNumber: {
				type: Number,
				default: 4
			}
		},
		computed: {
			infoPrivacy() {
				const middleNumber = this.info.length - this.startNumber - this.endNumber;
				if (middleNumber > 0) {
					return this.info.substr(0, this.startNumber) + '*'.repeat(middleNumber) + this.info.slice(-this.endNumber);
				} else {
					return this.info;
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
	.info-text {
		font-size: $uni-font-size-lg;
	}
</style>