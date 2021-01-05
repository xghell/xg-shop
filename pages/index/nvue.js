import data from '@/data/index/index';

const Bindingx = uni.requireNativePlugin('bindingx');

const systemInfo = uni.getSystemInfoSync()
const screen_height = systemInfo.screenHeight;
const status_bar_height = systemInfo.statusBarHeight;
const tabbar_height = 50;

let nav_bar_height = 0;
let nav_bar_movable_height = 0;

export default {
	data() {
		return {
			
			navBarPosterHeight: 1000,
			refreshText: '下拉更新',
			refreshing: true,
			
			navBarOpacity: 1,
			
			
			today: 1,//今日日期，用于导航栏日历显示
			
			poster: '',
		}
	},
	async onLoad() {
		this.today = (new Date()).getDate();//获取今日日期，用于导航栏日历显示
		
		const posterPromise = data.poster();
		
		
		
		this.poster = await posterPromise;
	},
	onReady() {
		this.$nextTick(function() {
			const query = uni.createSelectorQuery().in(this);
			
			query.select('#nav-bar-right').fields({size:true});
			query.select('#nav-bar-fixed').fields({size:true});
			query.select('#nav-bar-movable').fields({size:true});
			
			
			query.exec(data => {
				const nav_bar_width = data[1].width;
				const nav_bar_fixed_height = data[1].height;
				nav_bar_movable_height = data[2].height;
				nav_bar_height = nav_bar_fixed_height + nav_bar_movable_height + status_bar_height;
				const nav_bar_right_width = data[0].width;
				
				//产品列表tab区域高度
				this.productTabHeight = screen_height - tabbar_height - (nav_bar_height - nav_bar_movable_height);
				
				//y在此0-movable_width_duration范围内，导航栏可变部分宽度逐渐缩小
				const movable_width_duration = 100;
				
				//y在此movable_translate_y_start-(movable_translate_y_start+movable_translate_y_duration)范围内，导航栏可变部分逐渐向上平移
				const movable_translate_y_start = 50;
				const movable_translate_y_duration = 250;
				
				//导航栏透明度
				const nav_opacity_duration = 50;
				const nav_bg_opacity_duration = 150;
				
				const page_list = this.getEl(this.$refs['page-list-ref']);
				const nav_bar = this.getEl(this.$refs['nav-bar']);
				const nav_bar_movable = this.getEl(this.$refs['nav-bar-movable']);
				const nav_bar_left = this.getEl(this.$refs['nav-bar-left']);
				const nav_bar_bg_dynamic = this.getEl(this.$refs['nav-bar-bg-dynamic']);
				const nav_bar_bg = this.getEl(this.$refs['nav-bar-bg']);
				const nav_bar_poster = this.getEl(this.$refs['nav-bar-poster']);
				const page_top_bg = this.getEl(this.$refs['page-top-bg']);
				
				Bindingx.bind({
					eventType: 'scroll',
					anchor: page_list,
					props:[
						//导航栏可变部分
						{
							element: nav_bar_movable,
							property:'width',
							expression: `${nav_bar_width}-${nav_bar_right_width}*min(max(y, 0)/${movable_width_duration}, 1)`
						},
						{
							element: nav_bar_movable,
							property:'transform.translateY',
							expression: `0-${(nav_bar_fixed_height+nav_bar_movable_height)/2}*min(max(max(y, 0)-${movable_translate_y_start}, 0), ${movable_translate_y_duration})/${movable_translate_y_duration}`
						},
						
						//导航栏固定部分，左半部分
						{
							element: nav_bar_left, //动画元素
							property:'opacity', //动画属性
							expression: `1-min(max(max(y, 0)-${movable_translate_y_start}, 0), ${movable_translate_y_duration})/${movable_translate_y_duration}`
						},
						
						//导航栏整体
						{
							element: nav_bar, //动画元素
							property:'height', //动画属性
							expression: `${nav_bar_height}-${(nav_bar_fixed_height+nav_bar_movable_height)/2}*min(max(max(y, 0)-${movable_translate_y_start}, 0), ${movable_translate_y_duration})/${movable_translate_y_duration}`
						},
						{
							element: nav_bar, //动画元素
							property:'opacity', //动画属性
							expression: `1+y/${nav_opacity_duration}`
						},
						
						//导航栏背景部分，一般为图片
						{
							element: nav_bar_bg_dynamic, //动画元素
							property:'opacity', //动画属性
							expression: `(y-10)/${nav_bg_opacity_duration}`
						},
						{
							element: nav_bar_bg, //动画元素
							property:'opacity', //动画属性
							expression: `1+y/3`
						},
						
						//下拉刷新时顶部海报
						{
							element: nav_bar_poster, //动画元素
							property:'transform.translateY', //动画属性
							expression: `max(0-y-${nav_opacity_duration},0)`
						},
						{
							element: nav_bar_poster, //动画元素
							property:'opacity', //动画属性
							expression: `0-y/${nav_opacity_duration}`
						},
						
						// 页面顶部背景图片
						{
							element: page_top_bg, //动画元素
							property:'opacity', //动画属性
							expression: `1+y/${nav_opacity_duration}`
						},
					]
				}, res => {
					// console.log(res);
				});
			})
		})
	},
	methods: {
		getEl: function(el) {
			if (el.$el) {
				return el.$el.ref;
			} else {
				return el.ref;
			}
		},
		
		setPageHeaderHeight() {
			const query = uni.createSelectorQuery().in(this);
			query.select('#page-header').fields({size: true});
			
			
			query.exec(data => {
				this.pageHeaderHeight = data[0].height - (nav_bar_height - nav_bar_movable_height);
				
				setTimeout(async () => {
					this.setTabScrollRef(0);
				}, 100);
			})
		},
		
		onNavBarPosterLoad(e) {
			this.$nextTick(function() {
				uni.createSelectorQuery().in(this).select('#nav-bar-poster').fields({size:true}).exec(data => {
					this.navBarPosterHeight = data[0].height;
				})
			})
		},
		onrefresh(e) {
			this.refreshText = '更新中';
			
			this.refreshing = false;
			
			
			this.$nextTick(function(){
				this.refreshing = true;
			})
		},
		onpullingdown(e) {
			const pullingDistance = e.pullingDistance;
			const viewHeight = e.viewHeight;
			
			if (pullingDistance < viewHeight) {
				this.refreshText = '下拉刷新'
			}
			if (pullingDistance > viewHeight) {
				this.refreshText = '松手刷新'
			}
			// if (pullingDistance > (viewHeight*2)) {
			// 	this.refreshText = '松手得惊喜'
			// }
		},
	}
}