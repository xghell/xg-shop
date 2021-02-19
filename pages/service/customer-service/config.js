export default {
	data() {
		return {
			old: {
				pageScrollTop: 0,
			},
			pageScrollTop: 0,
			
			emojiIconShow: true,
			plusIconShow: true,
			// #ifndef H5
			voiceIconShow: true,
			recordingIconShow: false,
			// #endif
			
			footerPopupHeight: '500rpx',
			showFooterPopup: false,
			currentFooterBtnIndex: 'none',
			
			currentPlayingVoiceIndex: -1,
		}
	},
	methods: {
		scrollToBottom() {
			this.pageScrollTop = this.old.pageScrollTop;
			
			
			this.$nextTick(function() {
				this.pageScrollTop = 10000000;
				// const query = uni.createSelectorQuery().in(this);
				// query.select('#page-list').fields({size: true});
				// query.select('#page-list-content').fields({size: true});
				// query.exec(data => {
				// 	this.pageScrollTop = data[1].height - data[0].height;
				// })
			})
			
		},
		onPageScroll(e) {
			const scrollTop = e.detail.scrollTop;
			
			this.old.pageScrollTop = scrollTop;
			
			if (e.detail.deltaY > 1) {
				this.closeFooterPopup();
				this.showEmojiIcon();
				uni.hideKeyboard();
			}
		},
		
		//控制表情包按钮显隐
		hiddenEmojiIcon() {
			this.emojiIconShow = false;
		},
		showEmojiIcon() {
			this.emojiIconShow = true;
		},
		
		//控制加号按钮显隐
		hiddenPlusIcon() {
			this.plusIconShow = false;
		},
		showPlusIcon() {
			this.plusIconShow = true;
		},
		
		// #ifndef H5
		//控制语音按钮显隐
		hiddenVoiceIcon() {
			this.voiceIconShow = false;
			this.closeFooterPopup();
			this.showEmojiIcon();
			this.showPlusIcon();
		},
		showVoiceIcon() {
			this.voiceIconShow = true;
			
			if (this.editorIsEmpty) {
				this.showPlusIcon();
			} else {
				this.hiddenPlusIcon();
			}
		},
		
		showRecordingIcon() {
			this.recordingIconShow = true;
		},
		hiddenRecordingIcon() {
			this.recordingIconShow = false;
		},
		// #endif
		
		
		//控制底部弹窗显示隐藏
		openFooterPopup() {
			this.showFooterPopup = true;
			
			// #ifndef H5
			this.showVoiceIcon();
			// #endif
			
		},
		closeFooterPopup() {
			this.showFooterPopup = false;
		},
		
		//设置当前底部索引
		setCurrentFooterBtnIndex(index) {
			this.currentFooterBtnIndex = index;
		},
		
		setCurrentPlayingVoiceIndex(index) {
			this.currentPlayingVoiceIndex = index;
		}
	}
}