# 瀑布流组件
## 一、概述
自定义瀑布流组件，兼容nvue与vue页面
## 二、属性及说明
|属性			|类型	|默认值	|说明																								|	|
|--				|--		|--		|--																									|--	|
|column-count	|Number	|4		|[可选]描述瀑布流的最佳列数，column-width 和 column-count 都指定非0值， 则 column-count 代表最大列数|	|
|column-width	|String	|		|[可选]描述瀑布流每一列的列宽																		|	|
|column-gap		|String	|20rpx	|[可选]列与列的间隙																					|	|
|left-gap		|String	|0		|[可选]左边的间隙																					|	|
|right-gap		|String	|0		|[可选]右边的间隙																					|	|

```
<template>
	<view>
		<xg-waterfall>
			<xg-waterfall-item v-for="(item, index) of 10" :key="index">
				<view class="cell" :style="{height: Math.random()*100 + 100 + 'px'}">{{item}}</view>
			</xg-waterfall-item>
		</xg-waterfall>
	</view>
</template>

<script>
	export default {
		data() {
		},
	}
</script>

<style>
	
	.cell {
		background-color: red;
		margin: 20px 0;
	}
	
</style>

```