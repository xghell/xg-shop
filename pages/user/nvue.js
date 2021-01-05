const Bindingx = uni.requireNativePlugin('bindingx');

export default {
	mounted() {
		this.$nextTick(function() {
			const page_ref = this.getEl(this.$refs['product-list']);
			const nav_bar_ref = this.getEl(this.$refs['nav-bar']);
			const nav_bar_left_ref = this.getEl(this.$refs['nav-bar-left']);
			const nav_bar_left_right = this.getEl(this.$refs['nav-bar-right']);
			
			
			const nav_opacity_duration = 150;
			
			Bindingx.bind({
				eventType: 'scroll',
				anchor: page_ref,
				props:[
					{
						element: nav_bar_ref,
						property: 'opacity',
						expression: `y/${nav_opacity_duration}`
					},
					{
						element: nav_bar_left_ref,
						property: 'opacity',
						expression: `y<${nav_opacity_duration}?0:1`
					},
					{
						element: nav_bar_left_right,
						property: 'opacity',
						expression: `y<${nav_opacity_duration}?0:1`
					},
				]
			}, res => {
				// console.log(res);
			});
		});
	},
	methods: {
		getEl: function(el) {
			if (el.$el) {
				return el.$el.ref;
			} else {
				return el.ref;
			}
		},
	}
}