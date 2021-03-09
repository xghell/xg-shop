<template>
	<scroll-view class="index-list" :show-scrollbar="showScrollbar" :scroll-y="true" :scroll-with-animation="true" :scroll-top="scrollTop" @scroll="onScroll">
		<view>
			<slot></slot>
		</view>
	</scroll-view>
</template>

<script>
	/**
	 * @event {Function()} change 
	 */
	export default {
		name: 'IndexList',
		provide() {
			return {
				'_indexList': this,
			}
		},
		props: {
			showScrollbar: {
				type: Boolean,
				default: false,
			},
			current: {
				type: Number,
				default: 0
			},
		},
		data() {
			return {
				old: {
					scrollTop: 0,
				},
				
				headerHeight: 0,
				
				scrollTop: 0,
				
				itemTopList: [],
			}
		},
		computed: {
			itemTopListInner() {
				const list = this.itemTopList.sort(function(a, b){
					return a - b;
				})
				
				return list.map(top => {
					return top - list[0] + this.headerHeight;
				});
			},
		},
		created() {
			this.$watch('current', () => {
				this.scrollTop = this.itemTopListInner[this.current] + 1;
			})
		},
		mounted() {
			this.$nextTick(function(){
				this.relayout();
			})
		},
		methods: {
			relayout() {
				
				this.itemTopList.length = 0;
				
				this.toTop();
				
				setTimeout(() => {
					this.change(0);
					
					// #ifdef APP-NVUE || MP-WEIXIN
					this.$children.forEach(item => {
						item.layout();
					})
					// #endif
					// #ifdef H5
					this.$children[0].$children[0].$children.forEach(item => {
						item.layout();
					})
					// #endif
				}, 300)
			},
			
			toTop() {
				this.scrollTop = this.old.scrollTop;
				
				this.$nextTick(function(){
					this.scrollTop = 0;
				})
			},
			
			change(index) {
				this.$emit('change', {
					detail: {
						current: index,
					}
				});
			},
			
			onScroll(e) {
				const scrollTop = e.detail.scrollTop;
				
				this.old.scrollTop = scrollTop;
				
				this.itemTopListInner.forEach((item, itemIndex) => {
					if (this.itemTopListInner[itemIndex] < scrollTop && this.itemTopListInner[itemIndex + 1] > scrollTop) {
						this.change(itemIndex);
						
						return;
					}
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.index-list {
		/* #ifdef MP-WEIXIN */
		height: 100%;
		/* #endif */
		
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
	}
</style>