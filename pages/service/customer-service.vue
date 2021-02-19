<template>
	<view class="page" :style="{transform: 'translateY(-' + (showFooterPopup ? footerPopupHeight : 0) + ')'}">
		<view class="page-list-wrap">
			<scroll-view id="page-list" class="page-list" :scroll-with-animation="true" :scroll-y="true" :scroll-top="pageScrollTop" @scroll="onPageScroll">
				<view id="page-list-content" class="margin-side-lg">
					<view class="message-item" v-for="(message, messageIndex) of messages" :key="messageIndex">
						<view class="padding-v-side-lg">
							<!-- 对方消息 -->
							<view v-if="!message.isSelf" class="row-start-stretch">
								<image class="img-size-lg border-radius-lg" src="/static/mock/avatars/3.jpg" mode="aspectFit"></image>
								<view class="row-start-stretch message-box">
									<view v-if="message.type !== 'image'" class="margin-top-base  left-arrow"></view>
									<view v-if="message.type === 'text'" class="row-start-stretch message-text-wrap">
										<!-- <text class="font-size-lg border-radius-lg bg-color-white message-text-wrap-text">{{message.content}}</text> -->
										<rich-text class="font-size-lg border-radius-lg bg-color-white message-text-wrap-text" :nodes="message.content"></rich-text>
									</view>
									
									<view v-if="message.type === 'voice'" class="row-center-center bg-color-white border-radius-lg padding-v-side-sm padding-left-sm padding-right-lg" @tap="onVoicePlayTap(message.content, messageIndex)">
										<image class="message-voice-icon" :src="currentPlayingVoiceIndex === messageIndex ? '/static/service/voice-playing.png' : '/static/service/right-voice-icon.png'" mode="heightFix"></image>
										<text :class="{'text-color-red': currentPlayingVoiceIndex === messageIndex}" class="font-size-base margin-side-sm">{{message.duration}}″</text>
									</view>
									
									<image class="message-image" v-if="message.type === 'image'" :src="message.content" mode="widthFix"></image>
								</view>
							</view>
							
							<!-- 自己消息 -->
							<view v-else class="row-end-stretch">
								<view  class="row-end-stretch message-box">
									<view v-if="message.type === 'text'" class="row-end-stretch message-text-wrap">
										<rich-text class="font-size-lg border-radius-lg bg-color-green message-text-wrap-text" :nodes="message.content"></rich-text>
									</view>
									
									
									<view v-if="message.type === 'voice'" class="row-center-center bg-color-green border-radius-lg padding-v-side-sm padding-left-lg padding-right-sm" @tap="onVoicePlayTap(message.content, messageIndex)">
										<text :class="{'text-color-red': currentPlayingVoiceIndex === messageIndex}" class="font-size-base margin-side-sm">{{message.duration}}″</text>
										<image class="message-voice-icon" :src="currentPlayingVoiceIndex === messageIndex ? '/static/service/voice-playing.png' : '/static/service/left-voice-icon.png'" mode="heightFix"></image>
									</view>
									
									
									<image class="message-image" v-if="message.type === 'image'" :src="message.content" mode="widthFix"></image>
									
									<view v-if="message.type !== 'image'" class="margin-top-base  right-arrow"></view>
								</view>
								<image class="img-size-lg border-radius-lg" src="/static/mock/avatars/2.jpg" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<view class="footer">
			<view class="row-center-center">
				<!-- #ifndef H5 -->
				<template>
					<view v-show="voiceIconShow" @tap="onVoiceIconTap">
						<image class="footer-icon margin-right-lg" src="/static/service/voice-input.png" mode="aspectFit"></image>
					</view>
					<view v-show="!voiceIconShow" @tap="onKeyboardIconTap">
						<image class="footer-icon margin-right-lg" src="/static/service/keyboard.png" mode="aspectFit"></image>
					</view>
				</template>
				<!-- #endif -->
				
				<view class="footer-editor-wrap">
					<view hover-class="bg-color-grey text-color-greyblack" class="footer-editor-bg row-center-center bg-color-white" @touchstart="sayTouchstart"  @touchend="sayTouchend">
						<!-- #ifndef H5 -->
						<text v-show="!voiceIconShow" class="font-size-lg">按住说话</text>
						<!-- #endif -->
					</view>
					<!-- #ifndef H5 -->
					<template>
						<editor v-show="voiceIconShow" id="footer-editor" class="footer-editor" @ready="onEditorReady" @input="onEditorInput" @focus="onEditorFocus"></editor>
						<view  v-show="!voiceIconShow" class="footer-editor"></view>
					</template>
					<!-- #endif -->
					<!-- #ifdef H5 -->
					<editor id="footer-editor" class="footer-editor" @ready="onEditorReady" @input="onEditorInput" @focus="onEditorFocus"></editor>
					<!-- #endif -->
				</view>
				<template>
					<view v-show="!emojiIconShow" @tap="onFooterIconTap('keyboard')">
						<image class="footer-icon margin-side-lg" src="/static/service/keyboard.png" mode="aspectFit"></image>
					</view>
					<view v-show="emojiIconShow" @tap="onFooterIconTap('emoji')">
						<image class="footer-icon margin-side-lg" src="/static/service/emoji.png" mode="aspectFit"></image>
					</view>
				</template>
				<template>
					<view v-show="!plusIconShow" class="bg-color-green border-radius-lg padding-v-side-sm padding-side-lg" @touchend.prevent="onFooterIconTap('send')">
						<text class="row-center-center font-size-lg text-color-white">发送</text>
					</view>
					<view  v-show="plusIconShow" @tap="onFooterIconTap('plus')">
						<image class="footer-icon" src="/static/service/plus.png" mode="aspectFit"></image>
					</view>
				</template>
			</view>
		</view>
		
		<swiper class="footer-popup" :style="{height: footerPopupHeight}" :indicator-dots="false" :autoplay="false" :duration="0" :disable-touch="true" :current="currentFooterBtnIndex">
			<swiper-item>
				<scroll-view class="footer-popup-scroll" :scroll-y="true">
					<view>
						<uni-grid class="" :column="8" :highlight="false" :showBorder="false" key="emoji">
							<uni-grid-item v-for="(emoji, emojiIndex) of emojies" :key="emojiIndex">
								<view class="row-center-center" @tap="onEmojiTap(emoji)">
									<image class="emoji-image" :src="emoji.url" mode=""></image>
								</view>
							</uni-grid-item>
						</uni-grid>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="footer-popup-scroll" :scroll-y="true">
					<view>
						<uni-grid :column="4" :highlight="false" :showBorder="false" key="plus">
							<uni-grid-item>
								<view class="column-center-center" @tap="onAlbumTap">
									<image class="img-size-xl" src="/static/service/picture.png" mode="aspectFit"></image>
									<text>相册</text>
								</view>
							</uni-grid-item>
							<uni-grid-item>
								<view class="column-center-center" @tap="onCameraTap">
									<image class="img-size-xl" src="/static/service/picture.png" mode="aspectFit"></image>
									<text>拍摄</text>
								</view>
							</uni-grid-item>
						</uni-grid>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	
		<!-- #ifndef H5 -->
		<view v-if="recordingIconShow" class="recording-wrap">
			{{recordingIconShow}}
			<image class="recording-gif" src="/static/service/recording.gif" mode="aspectFit"></image>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import data from '@/data/service/customer-service';
	import config from './customer-service/config';
	
	import parseHtml from '@/common/html-parser';
	
	let lastVoice = '';
	
	export default {
		mixins: [config],
		data() {
			return {
				messages: [],
				
				emojies: {},
				
				editorHtml: '',
			}
		},
		computed: {
			editorContent() {
				return parseHtml(this.editorHtml);
			},
			editorIsEmpty() {
				return !this.editorHtml||'<p><br></p>' === this.editorHtml
			}
		},
		async onLoad() {
			this.innerAudioContext = uni.createInnerAudioContext();
			this.innerAudioContext.onEnded(() => {
				this.setCurrentPlayingVoiceIndex(-1);
			});
			
			this.recorderManager = uni.getRecorderManager();
			this.recorderManager.onStop(res => {
				this.messages.push({
					_id: '',
					isSelf: true,
					type: 'voice',
					content: res.tempFilePath,
					duration: this.recordDurating
				});
				
				this.scrollToBottom();
			})
			
			const messagesPromise = data.messages();
			const emojiesPromise = data.emojies();
			
			this.messages = await messagesPromise;
			this.emojies = await emojiesPromise;
		},
		onUnload() {
			this.innerAudioContext = null;
			this.recorderManager = null;
		},
		onShow() {
			setTimeout(() => {
				this.scrollToBottom();
			},5);
		},
		methods: {
			//点击声音消息
			onVoicePlayTap(src, voiceIndex) {
				if (lastVoice !== src) {
					this.innerAudioContext.src = src;
					this.innerAudioContext.play();
					
					lastVoice = src;
					this.setCurrentPlayingVoiceIndex(voiceIndex);
					return ;
				}
				
				if (this.innerAudioContext.paused) {
					this.innerAudioContext.src = src;
					this.innerAudioContext.play();
					this.setCurrentPlayingVoiceIndex(voiceIndex);
				} else {
					this.innerAudioContext.stop();
					this.setCurrentPlayingVoiceIndex(-1);
				}
				
			},
			
			// #ifndef H5
			//点击语音输入按钮
			onVoiceIconTap() {
				this.hiddenVoiceIcon();
			},
			onKeyboardIconTap() {
				this.showVoiceIcon();
			},
			sayTouchstart(e) {
				// console.log(e);
				this.recordStartTime = Date.now();
				
				this.showRecordingIcon();
				this.recorderManager.start({
					audioSource: "auto"
				})
			},
			sayTouchend(e) {
				this.recordDurating = Math.round((Date.now() - this.recordStartTime)/1000);
				// console.log(e);
				this.hiddenRecordingIcon();
				this.recorderManager.stop();
			},
			// #endif
			
			// 点击输入栏按钮（表情，更多）
			onFooterIconTap(index) {
				if (index === 'emoji') {
					this.openFooterPopup();
					this.setCurrentFooterBtnIndex(0);
					this.hiddenEmojiIcon();
					uni.hideKeyboard();
					
					this.scrollToBottom();
					return ;
				}
				
				if (index === 'keyboard') {
					this.setCurrentFooterBtnIndex(0);
					this.showEmojiIcon();
					// this.editorCtx.insertText();
					this.closeFooterPopup();
					
					return ;
				}
				
				if (index === 'plus') {
					this.openFooterPopup();
					this.setCurrentFooterBtnIndex(1);
					this.showEmojiIcon();
					
					this.scrollToBottom();
					return ;
				}
				
				if (index === 'send') {
					this.messages.push({
						_id: '',
						isSelf: true,
						type: 'text',
						content: this.editorContent
					});
					// console.log(this.messages);
					this.scrollToBottom();
					// console.log(this.messages[0]);
					
					this.editorCtx.clear({
						success: () => {
							this.editorHtml = '';
						}
					});
					
					
					return ;
				}
			},
			// 点击表情
			onEmojiTap(emoji) {
				// console.log(emoji);
				this.editorCtx.insertImage({
					alt: emoji.alt,
					src: emoji.url,
				});
				this.editorCtx.insertText();
			},
			
			
			onEditorReady() {
				uni.createSelectorQuery().in(this).select('#footer-editor').context(res => {
					this.editorCtx = res.context;
				}).exec();
			},
			onEditorInput(e) {
				this.editorHtml = e.detail.html.replace(new RegExp('<p><br></p>', 'g'), '');
				// console.log(this.editorHtml);
				if (this.editorIsEmpty) {
					this.showPlusIcon();
				} else {
					this.hiddenPlusIcon();
				}
				// console.log(this.editorContent);
			},
			onEditorFocus() {
				this.showEmojiIcon();
			},
			
			onAlbumTap() {
				uni.chooseImage({
					count: 9,
					sourceType: ['album'],
					success: res => {
						this.messages.push(...res.tempFilePaths.map(filePath => {
							return {
								_id: '',
								isSelf: true,
								type: 'image',
								content: filePath
							}
						}));
						
						this.scrollToBottom();
						
					}
				})
			},
			onCameraTap() {
				uni.chooseImage({
					sourceType: ['camera'],
					success: res => {
						this.messages.push(...res.tempFilePaths.map(filePath => {
							return {
								_id: '',
								isSelf: true,
								type: 'image',
								content: filePath
							}
						}));
						
						this.scrollToBottom();
					}
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.page {
		/* #ifdef H5 */
		@include position(fixed, var(--window-top) 0 0 0);
		/* #endif */
		/* #ifndef H5 */
		@include position(fixed, 0 0 0 0);
		/* #endif */
		
		@include flex-layout(column);
		
		transition-property: transform;
		transition-timing-function: ease;
		transition-delay: 0s;
		transition-duration: 0.3s;
	}
	.page-list-wrap {
		height: 0;
		flex: 1;
		@include flex-layout(column);
	}
	.page-list {
		height: 0;
		flex: 1;
		
		/* #ifdef MP-WEIXIN */
		height: 100%;
		/* #endif */
		
		
		// transform: rotate(180deg);
		// transform-style: preserve-3d;
		// transform: rotateY(179deg) rotateZ(180deg);
		// backface-visibility: visible;
	}
	
	.message-item {
		// transform: rotate(180deg);
		// transform-style: preserve-3d;
		// transform: rotateY(180deg) rotateZ(180deg);
		// backface-visibility: visible;
	}
	
	$arrow-size: 20rpx;
	.left-arrow {
		width: 0;
		height: 0;
		
		@include border($arrow-size solid rgba(0,0,0,0))
		border-right-color: $uni-color-white;
	}
	.right-arrow {
		width: 0;
		height: 0;
		@include border($arrow-size solid rgba(0,0,0,0))
		
		border-left-color: $uni-color-green;
	}
	
	.message-box {
		width: 500rpx;
		// @include border(2px solid red);
	}
	
	.message-text-wrap {
		width: 0;
		flex: 1;
	}
	.message-text-wrap-text {
		padding: $uni-spacing-row-base $uni-spacing-col-lg;
		
		word-wrap: break-word;
		word-break: break-word;
	}
	
	.message-voice-icon {
		width: 20rpx;
		height: 40rpx;
	}
	
	.message-image {
		width: 300rpx;
		
		margin: 0 $uni-spacing-col-lg;
	}
	
	
	.footer {
		background-color: #EEEEEE;
		
		padding: 0 $uni-spacing-col-lg;
	}
	.footer-icon {
		width: 60rpx;
		height: 60rpx;
	}
	.footer-editor-wrap {
		width: 0;
		flex: 1;
		position: relative;
		// margin: $uni-spacing-row-sm 0;
		
		border-radius: $uni-border-radius-base;
		
		// height: 100rpx;
		// @include flex-layout(row, center, center);
	}
	
	.footer-editor-bg {
		@include position(absolute, 0 0 0 0);
		
		margin: $uni-spacing-row-sm 0;
		border-radius: $uni-border-radius-base;
	}
	.footer-editor {
		box-sizing: border-box;
		height: 100rpx;
		line-height: 60rpx;
		padding: 20rpx $uni-spacing-col-lg;
	}
	//覆盖editor组件内置样式
	.ql-container {
		min-height: 0px;
	}
	
	
	
	.footer-popup {
		
		
		@include position(absolute, none 0 0 0);
		transform: translateY(100%);
	}
	.footer-popup-scroll {
		@include position(absolute, 0 0 0 0);
	}
	
	.emoji-image {
		width: 65rpx;
		height: 65rpx;
	}
	.emoji-text {
		font-size: 80rpx;
	}
	
	/* #ifndef H5 */
	.recording-wrap {
		@include position(fixed, 0 0 0 0);
		@include flex-layout(row, center, center);
	}
	.recording-gif {
		width: 400rpx;
		height: 400rpx;
	}
	/* #endif */
	
</style>
