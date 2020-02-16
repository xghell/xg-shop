<template>
	<view class="xg-badge-component" :style="{width: width + 'px', height: height + 'px'}">
		<view ref="content" class="content">
			<slot></slot>
		</view>
		<view ref="badge" class="badge" :style="badgeStyle">
			<text  :style="{color: textColor, 'font-size': size}">{{text}}</text>
		</view>
	</view>
</template>

<script>
	/**
	 * text 角标文本，如果为空怎显示为红点
	 * textColor 角标文本颜色
	 * backgroundColor 角标背景颜色
	 * size 角标字体大小，不支持百分比
	 * top 角标距离顶端偏移，不支持百分比
	 * right 角标距离右侧偏移，不支持百分比
	 */
	export default {
		props: {
			/**
			 * @description 角标属性
			 */
			text: {
				type: String|Number,
				default: ''
			},
			textColor: {
				type: String,
				default: 'white'
			},
			backgroundColor: {
				type: String,
				default: 'red'
			},
			size: {
				type: String,
				default: '30rpx'
			},
			top: {
				type: String,
				default: '0rpx'
			},
			right: {
				type: String,
				default: '0rpx'
			}
		},
		data() {
			return {
				width: undefined,
				height: undefined,
				topInner: undefined,
				rightInner: undefined
			}
		},
		computed: {
			badgeStyle() {
				return `
					top: ${this.topInner}px;
					right: ${this.rightInner}px;
					background-color: ${this.backgroundColor};
					width: ${String(this.text).length <= 1 ? this.toPx(this.size) * 1.2 + 'px' : ''};
					height: ${this.toPx(this.size) * 1.2}px;
					padding-left: ${String(this.text).length <= 1 ? 0 : this.toPx(this.size) * 0.3}px;
					padding-right: ${String(this.text).length <= 1 ? 0 : this.toPx(this.size) * 0.3}px
				`;
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
				
			},
			// #ifdef APP-NVUE
			getComponentRect(ref) {
				
				const dom = uni.requireNativePlugin('dom');
				
				return new Promise(function (resolve, reject) {
					dom.getComponentRect(ref, data => {
						resolve(data);
					})
				})
			}
			// #endif
		},
		mounted() {
			this.$nextTick(async function () {
				// #ifndef APP-PLUS-NVUE
				const selector = uni.createSelectorQuery().in(this);
				selector.select('.content').fields({size: true});
				selector.select('.badge').fields({size: true});
				selector.exec(data => {
					this.width = Math.max(data[0].width, data[0].width + data[1].width/2 - this.toPx(this.right));
					this.height = Math.max(data[0].height, data[0].height + data[1].height/2 - this.toPx(this.top));
					this.topInner = data[1].height / 2 + this.toPx(this.top);
					this.rightInner = data[1].width / 2 + this.toPx(this.right);
				})
				// #endif
				
				// #ifdef APP-PLUS-NVUE
				const contentData = await this.getComponentRect(this.$refs.content);
				const badgeData = await this.getComponentRect(this.$refs.badge);
				this.width = Math.max(contentData.size.width, contentData.size.width + badgeData.size.width/2 - this.toPx(this.right));
				this.height = Math.max(contentData.size.height, contentData.size.height + badgeData.size.height/2 - this.toPx(this.top));
				this.topInner = badgeData.size.height / 2 + this.toPx(this.top);
				this.rightInner = badgeData.size.width / 2 + this.toPx(this.right);
				// #endif
			})
		}
	}
</script>

<style lang="scss">
	.xg-badge-component {
		position: relative;
		
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: flex-end;
	}
	.badge {
		position: absolute;
		transform: translate(50%, -50%);
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		align-items: center;
		justify-content: center;
		border-radius: 10000px;
	}
</style>
