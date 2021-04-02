<template>
	<view class="captcha-list">
		<template v-if="!isSeparated">
			<view class="captcha-item" :style="[{borderColor: (isFocused && currentIndex === item) ? selectedBorderColor : borderColor}, captchaItemStyles]" v-for="item of cellList" :key="item">
				<text :style="{fontSize: fontSize}">{{inputValue[item]}}</text>
			</view>
		</template>
		<template v-else>
			<view class="captcha-item" :style="[{borderColor: (isFocused && currentIndex === item) ? selectedBorderColor : borderColor}, captchaItemStyles]" v-for="item of startList" :key="item">
				<text :style="{fontSize: fontSize}">{{inputValue[item]}}</text>
			</view>
			<text :style="{fontSize: fontSize}">******</text>
			<view class="captcha-item" :style="[{borderColor: (isFocused && currentIndex === item) ? selectedBorderColor : borderColor}, captchaItemStyles]" v-for="item of endList" :key="item">
				<text :style="{fontSize: fontSize}">{{inputValue[item]}}</text>
			</view>
		</template>
		
		
		<view class="hidden-input-wrap">
			<input class="hidden-input" :type="inputType" :maxlength="maxlength" @input="onInput" @focus="onFocus" @blur="onBlur "/>
		</view>
	</view>
</template>

<script>
	/**
	 * @event {Function()} input 
	 * @event {Function()} unfinished 
	 * @event {Function()} finished 
	 */
	export default {
		props: {
			borderType: {
				type: String,
				default: 'box' ,//underline,box,none
				validator(value) {
					return ['underline', 'box', 'none'].indexOf(value) !== -1;
				}
			},
			borderWidth: {
				type: String,
				default: '2px'
			},
			borderColor: {
				type: String,
				default: '#e5e5e5'
			},
			selectedBorderColor: {
				type: String,
				default: '#FF0000'
			},
			cellWidth: {
				type: String,
				default: '70rpx'
			},
			cellHeight: {
				type: String,
				default: '70rpx'
			},
			fontSize: {
				type: String,
				default: '40rpx'
			},
			maxlength: {
				type: Number,
				default: 6
			},
			inputType: {
				type: String,
				default: 'number'
			},
			
			isSeparated: { //是否为前后分离式
				type: Boolean,
				default: false,
			},
			startLength: {//isSeparated为true时生效
				type: Number,
				default: 2
			}
		},
		data() {
			return {
				isFocused: false,
				
				inputValue: '',
			}
		},
		computed: {
			cellList() {
				return (new Array(this.maxlength)).fill(1).map((item, index) => {
					return index;
				})
			},
			startList() {
				return this.cellList.slice(0, this.startLength);
			},
			endList() {
				return this.cellList.slice(this.startLength);
			},
			
			currentIndex() {
				return Math.min(this.inputValue.length, this.maxlength - 1) ; 
			},
			
			captchaItemStyles() {
				if (this.borderType === 'underline') {
					return {
						width: this.cellWidth,
						height: this.cellHeight,
						borderBottomWidth: this.borderWidth,
						borderBottomStyle: 'solid',
					}
				}
				
				if (this.borderType === 'box') {
					return {
						width: this.cellWidth,
						height: this.cellHeight,
						borderWidth: this.borderWidth,
						borderStyle: 'solid',
					}
				}
				
				if (this.borderType === 'none') {
					return {
						width: this.cellWidth,
						height: this.cellHeight,
					}
				}
			}
		},
		
		created() {
			if (this.isSeparated && this.startLength > this.maxlength) {
				throw new Error('startLength不能大于maxLength!');
			}
		},
		
		methods: {
			onInput(e) {
				this.inputValue = e.detail.value;
				
				const payload = this.isSeparated ? [this.inputValue.substr(0, this.startLength), this.inputValue.substr(this.startLength)] : this.inputValue;
				
				if (this.inputValue.length === this.maxlength) {
					this.$emit('finished', {
						detail: {
							value: payload
						}
					})
				} else {
					this.$emit('unfinished', {
						detail: {
							value: payload
						}
					})
				}
				
				this.$emit('input', {
					detail: {
						value: payload
					}
				})
			},
			onFocus() {
				this.isFocused = true;
			},
			onBlur() {
				this.isFocused = false;
			}
		},
	}
</script>

<style lang="scss" scoped>
	.captcha-list {
		position: relative;
		
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.captcha-item {
		// border-width: 1px;
		// border-style: solid;
		// border-color: $uni-border-color;
		
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.captcha-item-selected {
		border-color: red;
	}
	
	.hidden-input-wrap {
		opacity: 0;
		
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		
		border-width: 1px;
		border-style: solid;
		border-color: green;
		
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: stretch;
	}
	.hidden-input {
		border-width: 1px;
		border-style: solid;
		border-color: red;
		
		flex: 1;
	}
</style>