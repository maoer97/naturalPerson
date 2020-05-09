<template>
	<div :id='id' style="width: 100%;height: 100%;"></div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: ['id', 'datas'],
		mounted() {
			var series = [];
			if (this.datas.legendList.length == 3) {
				series = [{
						name: this.datas.legendList[0],
						type: 'bar',
						barWidth: 20,
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
						type: 'line',
						yAxisIndex: 1,
						data: this.datas.dataListTwo,
						itemStyle: {
							normal: {
								color: this.datas.color[2],
								lineStyle: {
									color: this.datas.color[2],
									width: 2
								}
							}
						}
					},
					{
						name: this.datas.legendList[2],
						type: 'line',
						yAxisIndex: 1,
						data: this.datas.dataListThree,
						itemStyle: {
							normal: {
								color: this.datas.color[3],
								lineStyle: {
									color: this.datas.color[3],
									width: 2
								}
							}
						}
					},
				]
			} else if (this.datas.legendList.length == 4) {
				series = [{
						name: this.datas.legendList[0],
						type: 'bar',
						barWidth: 20,
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
						type: 'line',
						yAxisIndex: 1,
						data: this.datas.dataListThree,
						itemStyle: {
							normal: {
								color: this.datas.color[4],
								lineStyle: {
									color: this.datas.color[4],
									width: 2
								}
							}
						}
					},
					{
						name: this.datas.legendList[3],
						type: 'line',
						yAxisIndex: 1,
						data: this.datas.dataListFore,
						itemStyle: {
							normal: {
								color: this.datas.color[5],
								lineStyle: {
									color: this.datas.color[5],
									width: 2
								}
							}
						}
					},
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
					}
				},
				yAxis: [{
					type: 'value',
					name: this.datas.unit[0],
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
				}, {
					type: 'value',
					name: this.datas.unit[1],
					min:this.datas.min[1],
					axisLine: {
						show: false,
						lineStyle: {
							color: "#666"
						}
					},
					splitLine: {
						show: false,
						lineStyle: {
							color: "#eeeeee"
						}
					},
					axisTick: {
						show: false
					}
				}],
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
