<template>
	<div :id = 'id' style="width: 100%;height: 100%;"></div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:['id','datas'],
		mounted() {
			var data = this.datas;
			var series = [];
			var yAxis = [];
			if(data.type==1){
				series = [
					{
						name:data.legendList[0],
						type:'bar',
						barWidth: 20,
						stack: '1',
						itemStyle: {
							color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: "#487fff"
								},
								{
									offset: 1,
									color: "#84a9ff"
								}
							])
						},
						data:data.dataListOne
					},
					{
						name:data.legendList[1],
						type:'bar',
						barWidth: 20,
						stack: '1',
						itemStyle: {
							color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: "#80ebf5"
								},
								{
									offset: 1,
									color: "#3dc5dd "
								}
							])
						},
						data:data.dataListTwo
					}
				]
				yAxis = [{
					type: 'value',
					name: data.unit[0],
					axisLine:{
							  show:false,
					    lineStyle:{
					        color:"#666"
					    }
					},
					splitLine:{
					  show:true,
					  lineStyle:{
					      color:"#eeeeee"
					  }
					},
					axisTick:{
					  show:false
					}
				}]
			}else if(data.type==2){
				series = [
					{
						name:data.legendList[0],
						type:'bar',
						barWidth: 20,
						stack: '1',
						itemStyle: {
							color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: "#487fff"
								},
								{
									offset: 1,
									color: "#84a9ff"
								}
							])
						},
						data:data.dataListOne
					},
					{
						name:data.legendList[1],
						type:'bar',
						barWidth: 20,
						stack: '1',
						itemStyle: {
							color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: "#80ebf5"
								},
								{
									offset: 1,
									color: "#3dc5dd "
								}
							])
						},
						data:data.dataListTwo
					},
					{
						name:data.legendList[2],
						type:'line',
						yAxisIndex: 1,
						itemStyle:{
							normal:{
								color:'#4eddac',
								lineStyle:{
									color:'#4eddac',
									width:2
								}
							}
						},
						data:data.dataListThree
					}
				]
				yAxis = [{
					type: 'value',
					name: data.unit[0],
					axisLine:{
							  show:false,
					    lineStyle:{
					        color:"#666"
					    }
					},
					splitLine:{
					  show:true,
					  lineStyle:{
					      color:"#eeeeee"
					  }
					},
					axisTick:{
					  show:false
					}
				},{
					type: 'value',
					show:true,
					name :data.unit[1],
					axisLine:{
						show:false,
						lineStyle:{
							color:"#666"
						}
					},
					splitLine:{
						show:false
					},
					axisTick:{
						show:false
					}
				}]
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
					top:'20',
					itemGap:20,
				    textStyle: {
				      color: "#666"
				    },
				},
				tooltip: {
					trigger: 'axis'
				},
				xAxis: {
					type: 'category',
					data: data.nameList,
					axisPointer: {
						type: 'shadow'
					},
					axisLine:{
						show:false,
						lineStyle:{
							color:"#666"
						}
					},
					axisTick:{
						show:false
					}
				},
				yAxis:yAxis,
				series:series
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
