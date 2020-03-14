<template>
	<view class="input-item" :style="{'align-items': !textarea ? 'center' : 'flex-start'}">
		<text class="label">{{leftTitle}}</text>
		<view class="content">
			<input v-if="!textarea" class="input" :type="type" placeholder-class="placeholder-class" :placeholder="placeholder" :value="valueInner" @input="inputChange" />
			<textarea v-if="textarea"  class="input" auto-height :type="type" placeholder-class="placeholder-class" placeholder-style="font-weight: normal" :placeholder="placeholder" :value="valueInner" @input="inputChange" />
			<text class="clear-icon" v-if="showClearIcon" :style="{'font-family': clearIcon.fontFamily}" @tap="clearIconTap">{{clearIcon.text}}</text>
			<text class="right-icon" :style="{'font-family': rightIcon.fontFamily}" @tap="rightIconTap">{{rightIcon.text}}</text>
		</view>
	</view>
</template>

<script>
	/**
	 * @input
	 */
	
	export default {
		props: {
			textarea: {
				type: Boolean,
				default: false,
			},
			type: {
				type: String,
				default: 'text',
			},
			leftTitle: {
				type: String,
				default: '左侧标题'
			},
			placeholder: {
				type: String,
				default: '占位符'
			},
			value: {
				type: String,
			},
			clearIcon: {
				type: Object,
				default: function () {
					return {
						fontFamily: '',
						text: '清除',
					}
				}
			},
			rightIcon: {
				type: Object,
				default: function () {
					return {
						// fontFamily: '',
						// text: '右按钮',
					}
				}
			},
		},
		created() {
			this.$watch('value', (nval, oval) => {
				this.valueInner = nval;
			}, {immediate: true})
		},
		data() {
			return {
				valueInner: '',
				showClearIcon: false,
			}
		},
		methods: {
			inputChange(e) {
				this.$emit('input', e);
				
				this.valueInner = e.detail.value;
				
				if (this.valueInner.length !== 0) {
					this.showClearIcon = true;
				} else {
					this.showClearIcon = false;
				}
			},
			
			clearIconTap() {
				this.valueInner = '';
				this.showClearIcon = false;
			},
			
			rightIconTap() {
				this.$emit('rightIconTap');
			}
		},
	}
</script>

<style lang="scss" scoped>
	.input-item {
		/* #ifdef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
	}
	.label {
		width: 160rpx;
		font-size: $uni-font-size-base;
		font-weight: normal;
	}
	.content {
		// border-width: 1px;
		width: 0rpx;
		flex: 1;
		/* #ifdef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
	}
	.input {
		flex: 1;
		font-size: $uni-font-size-base;
		font-weight: bold;
	}
	.placeholder-class {
		font-size: $uni-font-size-base;
		font-weight: normal;
	}
	.clear-icon {
		margin-left: $uni-spacing-col-base;
	}
	.right-icon {
		margin-left: $uni-spacing-col-base;
	}
</style>