<template>
	<view class="avatar-group" :style="{width: avatarGroupWidth, height: size}">
			<image class="avatar" v-for="(avatar, index) of avatarList" :key="index" :style="{width: size, height: size, left: offsetNumber*index + 'px', 'border-radius': borderRadius, 'border-color': borderColor, 'border-width': borderWidth, 'border-left-width': borderLeftWidth, 'border-right-width': borderRightWidth, 'border-top-width': borderTopWidth, 'border-bottom-width': borderBottomWidth}" :src="avatar" mode="aspectFill"></image>
	</view>
</template>

<script>
	export default {
		props: {
			avatarList: {
				type: Array,
				required: true,
				default: function() {
					return [
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg'
					]
				}
			},
			//不支持百分号
			borderRadius: {
				type: String,
				default: '40rpx',
			},
			size: {
				type: String,
				default: '80rpx'
			},
			offset: {
				type: String,
				default: '40rpx'
			},
			borderColor: {
				type: String
			},
			borderWidth: {
				type: String,
			},
			borderTopWidth: {
				type: String
			},
			borderRightWidth: {
				type: String
			},
			borderBottomWidth: {
				type: String
			},
			borderLeftWidth: {
				type: String
			}
		},
		computed: {
			offsetNumber() {
				return this.toPx(this.offset); 
			},
			avatarGroupWidth() {
				return (this.toPx(this.size) - this.offsetNumber) * this.avatarList.length + this.offsetNumber + 'px';
			}
		},
		methods: {
			toPx(value) {
				const result = /(\d+)(\w+)/.exec(value);
				if ('rpx' === result[2].trim()) {
					return uni.getSystemInfoSync().screenWidth * Number(result[1]) / 750;
				} else if('px' === result[2].trim()) {
					return Number(result[1]);
				} else {
					throw new TypeError(`${value}单位格式不正确`);
				}
				
			}
		},
	}
</script>
<style scoped>
.avatar-group {
	position: relative;
	/* #ifndef APP-PLUS-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	align-items: center;
}
.avatar {
	position: absolute;
}
</style>
