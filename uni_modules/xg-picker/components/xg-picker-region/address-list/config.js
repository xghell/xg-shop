export default {
	data() {
		return {
			old: {
				currentContentIndex: 0,
			},
			
			currentContentIndex: 0,
			currentTitleIndex: 0,
		}
	},
	methods: {
		setOldCurrentContentIndex(index) {
			this.old.currentContentIndex = index;
		},
		setCurrentContentIndex(index) {
			this.currentContentIndex = this.old.currentContentIndex;
			
			this.$nextTick(() => {
				this.currentContentIndex = index;
			})
		},
		setCurrentTitleIndex(index) {
			this.currentTitleIndex = index;
		}
	}
}