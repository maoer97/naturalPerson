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
			myChart.setOption({
				grid: {
					left: '5%',
					right: '5%',
					bottom: '8%',
					top: '16%',
					containLabel: true
				},
				legend: {
				    show: true,
					top:'10',
					right:'10',
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
					data: this.datas.nameList,
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
				yAxis:{
					type: 'value',
					name: this.datas.unit,
					min:this.datas.min[0],
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
				series:[
					{
						name:this.datas.legendList[0],
						type:'bar',
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
						data:this.datas.dataListOne
					}
				]
			})
		}
	}
</script>

<style scoped lang="less">
	
</style>
