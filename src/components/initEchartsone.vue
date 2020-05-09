<template>
	<div :id='id' style="width: 100%;height: 100%;"></div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: ['id', 'datas', 'type'],
		mounted() {
			var series = [];
			if (this.datas.type == 3) {
				series = [{
						name: this.datas.legendList[0],
						type: 'bar',
						barWidth: 14,
						itemStyle: {
							color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: this.datas.color[0]
								},
								{
									offset: 1,
									color: this.datas.color[1]
								}
							])
						},
						data: this.datas.dataListOne
					},
					{
						name: this.datas.legendList[1],
						type: 'bar',
						barWidth: 14,
						itemStyle: {
							color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: this.datas.color[2]
								},
								{
									offset: 1,
									color: this.datas.color[3]
								}
							])
						},
						data: this.datas.dataListTwo
					},
					{
						name: this.datas.legendList[2],
						type: 'bar',
						barWidth: 14,
						itemStyle: {
							color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: this.datas.color[4]
								},
								{
									offset: 1,
									color: this.datas.color[5]
								}
							])
						},
						data: this.datas.dataListThree
					}
				]
			} else
			if (this.datas.type == 2) {
				series = [{
						name: this.datas.legendList[0],
						type: 'bar',
						barWidth: 20,
						stack: '1',
						itemStyle: {
							color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: this.datas.color[0]
								},
								{
									offset: 1,
									color: this.datas.color[1]
								}
							])
						},
						data: this.datas.dataListOne
					},
					{
						name: this.datas.legendList[1],
						type: 'bar',
						barWidth: 20,
						stack: '1',
						itemStyle: {
							color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: this.datas.color[2]
								},
								{
									offset: 1,
									color: this.datas.color[3]
								}
							])
						},
						data: this.datas.dataListTwo
					}
				]
			} else {
				series = [{
						name: this.datas.legendList[0],
						type: 'bar',
						barWidth: 14,
						itemStyle: {
							color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: this.datas.color[0]
								},
								{
									offset: 1,
									color: this.datas.color[1]
								}
							])
						},
						data: this.datas.dataListOne
					},
					{
						name: this.datas.legendList[1],
						type: 'bar',
						barWidth: 14,
						itemStyle: {
							color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: this.datas.color[2]
								},
								{
									offset: 1,
									color: this.datas.color[3]
								}
							])
						},
						data: this.datas.dataListTwo
					}
				]
			}
			let myChart = this.$echarts.init(document.getElementById(this.id));
			var options = {
				grid: {
					left: '5%',
					right: '5%',
					bottom: '8%',
					top: '16%',
					containLabel: true
				},
				legend: {
					show: true,
					top: '10',
					right: '10',
					itemGap: 20,
					textStyle: {
						color: "#666"
					},
				},
				tooltip: {
					trigger: 'axis'
				},
				xAxis: {
					type: 'category',
					data: this.datas.nameList,
					axisPointer: {
						type: 'shadow'
					},
					axisLine: {
						show: false,
						lineStyle: {
							color: "#666"
						}
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						fontSize: 10,
						formatter: function(val) {
							var strs = val.split('');
							var str = '';
							for (var i = 0; i < strs.length; i++) {
								if (i % 3 == 0 && i != 0) {
									str += strs[i] + '\n';
								} else {
									str += strs[i];
								}
							}
							return str
						}
					}
				},
				yAxis: {
					type: 'value',
					name: this.datas.unit,
					min:this.datas.min[0],
					axisLine: {
						show: false,
						lineStyle: {
							color: "#666"
						}
					},
					splitLine: {
						show: true,
						lineStyle: {
							color: "#eeeeee"
						}
					},
					axisTick: {
						show: false
					}
				},
				series: series
			}
			myChart.setOption(options)
			// var app = {
			// 	currentIndex: -1,
			// };
			// setInterval(function() {
			// 	var dataLen = options.series[0].data.length;
			// 	myChart.dispatchAction({
			// 		type: 'downplay',
			// 		seriesIndex: 0,
			// 		dataIndex: app.currentIndex
			// 	});
			// 	app.currentIndex = (app.currentIndex + 1) % dataLen;
			// 	myChart.dispatchAction({
			// 		type: 'highlight', 
			// 		seriesIndex: 0,
			// 		dataIndex: app.currentIndex,
			// 	});
			// 	myChart.dispatchAction({
			// 		type: 'showTip',
			// 		seriesIndex: 0,
			// 		dataIndex: app.currentIndex
			// 	});
			// }, 4000);
		}
	}
</script>

<style scoped lang="less">

</style>
