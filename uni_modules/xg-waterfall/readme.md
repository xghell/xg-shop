# 瀑布流组件
## 一、概述
自定义瀑布流组件，兼容nvue与vue页面
## 二、属性及说明
|属性			|类型	|默认值	|说明|
|--				|--		|--		|--	|
|width	|Number/String	|750rpx|[可选]描述瀑布流的最佳列数，column-width 和 column-count 都指定非0值， 则 column-count 代表最大列数|
|column-count	|Number	|		|[可选]描述瀑布流的最佳列数，column-width 和 column-count 都指定非0值， 则 column-count 代表最大列数|
|column-width	|String/Number	|		|[可选]描述瀑布流每一列的列宽																		|
|column-gap		|String/Number	|0	|[可选]列与列的间隙																					|
|left-gap		|String/Number	|0		|[可选]左边的间隙																					|
|right-gap		|String/Number	|0		|[可选]右边的间隙				|
|show-scrollbar		|Boolean	|false		|是否显示滚动条				|
|@loadmore		|EventHandle	|		|nvue页面使用|
|@scroll		|EventHandle	|		|vue页面使用|
|@scrolltolower		|EventHandle	|		|vue页面使用|

## 三、使用方法
* 参考原生瀑布流组件
* 可使用setSpecialEffects方法，使用方法参考原生waterfall组件
* 使用示例参考[商城项目](https://ext.dcloud.net.cn/plugin?id=1276)

```
<xg-waterfall>
	<xg-waterfall-header>
		
	</xg-waterfall-header>
	<xg-waterfall-item>
				
	</xg-waterfall-item>
	<xg-waterfall-footer>

	</xg-waterfall-footer>
</xg-waterfall>

```