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
			var data = this.datas;
			console.log(data)
			var labelData = data.labelData;
			// var labelData2 = ['109.3','109.3','109.3','109.3','109.3','109.3','109.3'];
			let myChart = this.$echarts.init(document.getElementById(this.id));
			var options = {
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					},
					formatter: function(a) {
						var v = a[0];
						return v.name + '<br/>' + v.marker + v.seriesName + '：' + Math.abs(v.value) + '%';
					}
				},
				xAxis: [{
					type: 'value',
					max: 0,
					gridIndex: 0,
					axisTick: {
						show: false
					},
					axisLabel: {
						show: true,
						formatter: function(v) {
							return (v * -1) + '%'
						},
						color: '#666'
					},
					axisLine: {
						show: true,
						lineStyle: {
							color: "#eee"
						}
					},
					splitLine: {
						show: false
					}
				}, {
					type: 'value',
					gridIndex: 1,
					min: 0,
					axisTick: {
						show: false
					},
					axisLine: {
						show: true,
						lineStyle: {
							color: "#eee",
						},
					},
					axisLabel: {
						show: true,
						formatter: function(v) {
							return v + '%'
						},
						color: '#666'
					},
					splitLine: {
						show: false
					}
				}],
				yAxis: [{
					type: 'category',
					gridIndex: 0,
					inverse: true,
					// name:'年龄段',
					data: labelData,
					axisTick: {
						show: false
					},
					axisLabel: {
						show: true,
						padding:[0,30]
					},
					axisLine: {
						show: false
					}
				}, {
					type: 'category',
					gridIndex: 1,
					// name:'整体性别比',
					inverse: true,
					position: 'right',
					data: labelData,
					axisTick: {
						show: false
					},
					axisLabel: {
						show: false
					},
					axisLine: {
						show: false
					}
				}],
				grid: [{
					top: 30,
					width: '39%',
					bottom: 20,
					left: 115,
					gridIndex: 0,
				}, {
					top: 30,
					left: '56%',
					right: 65,
					bottom: 20,
					gridIndex: 1,
				}],
				series: [{
						name: '男性',
						type: 'bar',
						barWidth: 10,
						gridIndex: 0,
						itemStyle: {
							normal: {
								show: true,
								color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{
									offset: 0,
									color: "#0487ff" // 0% 处的颜色
								}, {
									offset: 1,
									color: "#84a9ff" // 100% 处的颜色
								}], false),
								barBorderRadius: 50,
								borderWidth: 0,
								borderColor: '#333',
								label: {
									show: true,
									position: 'left',
									formatter: function(v) {
										return (v.value * -1) + '%';
									}
								}
							}
						},
						data: data.dataListOne
					},
					{
						name: '女性',
						type: 'bar',
						barWidth: 10,
						xAxisIndex: 1,
						yAxisIndex: 1,
						itemStyle: {
							normal: {
								show: true,
								color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{
									offset: 0,
									color: "#ffd99e" // 0% 处的颜色
								}, {
									offset: 1,
									color: "#ffc56a" // 100% 处的颜色
								}], false),
								barBorderRadius: 50,
								borderWidth: 0,
								borderColor: '#333',
								label: {
									show: true,
									position: 'right',
									formatter: function(v) {
										return v.value + '%';
									}
								}
							}
						},
						data: data.dataListTwo
					}

				]
			}
			myChart.setOption(options)
		}
	}
</script>

<style scoped lang="less">

</style>
