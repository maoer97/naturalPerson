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
			let myChart = this.$echarts.init(document.getElementById(this.id));
			var units = this.datas.unit
			myChart.setOption({
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
				grid: {
					left: '5%',
					right: '5%',
					bottom: '8%',
					top: '20%',
					containLabel: true
				},
				xAxis: [
				    {
				        type: 'category',
						data: this.datas.nameList,
						axisPointer: {
							type: 'shadow'
						},
						axisLine:{
							lineStyle:{
								color:"#666"
							}
						},
						axisTick:{
							show:false
						}
					}
				],
				yAxis: [
					{
						type: 'value',
						name: this.datas.unit[0],
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
					},
					{
						type: 'value',
						show:true,
						name :this.datas.unit[1],
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
					}
				],
				series: [
					{
						name:this.datas.legendList[0],
						type:'bar',
						barWidth:16,
						itemStyle: {
							normal: {
								color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
										offset: 0,
										color: this.datas.color[0]
				                    }, {
										offset: 1,
										color: this.datas.color[1]
				                    }], false)
				                }
				            },
				            data:this.datas.dataListOne
				        },
					{
						name:this.datas.legendList[1],
						type:'line',
						yAxisIndex: 1,
						data:this.datas.dataListTwo,
						itemStyle:{
							normal:{
								color:this.datas.color[2],
								lineStyle:{
									color:this.datas.color[2],
									width:2
								}
							}
						}
					}
				]
			})
		}
	}
</script>

<style scoped lang="less">
	
</style>
