const screenHeight = uni.getSystemInfoSync().screenHeight;

export default {
	data() {
		return {
			// #ifdef MP-WEIXIN
			pickerPopupShow: false,
			// #endif
			pickerPopupHeight: screenHeight * 0.7,
			
			currentTagIndex: undefined,
			tagOptions: ['家', '公司', '学校'],
			customTagShowed: false,
			customTapInputShowed: false,
		}
	},
	methods: {
		// #ifdef MP-WEIXIN
		showPickerPopup() {
			this.pickerPopupShow = true;
		},
		hiddenPickerPopup() {
			this.pickerPopupShow = false;
		},
		// #endif
		showCustomTag(showed) {
			this.customTagShowed = showed;
		},
		showCustomTapInput(showed) {
			this.showCustomTag(true);
			this.customTapInputShowed = showed;
		},
		
		getTagIndex(tag) {
			if (tag) {
				return this.tagOptions.indexOf(tag);
			}
			
			return undefined;
		},
		setCurrentTagIndex(index) {
			this.currentTagIndex = index;
		},
		toggleCurrentTagIndex(index) {
			if (index === this.currentTagIndex) {
				this.currentTagIndex = undefined;
			} else {
				this.currentTagIndex = index;
			}
		}
	}
}