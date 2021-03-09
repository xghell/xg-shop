export default {
	data() {
		return {
			currentAddressItemIndex: 'province',
		}
	},
	methods: {
		setCurrentAddressItemIndex(index) {
			this.currentAddressItemIndex = index;
		},
	}
}