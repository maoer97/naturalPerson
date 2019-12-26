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
				yAxis:[{
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
					},{
					    type: 'value',
						name: this.datas.unit[1],
					    axisLine:{
								  show:false,
					        lineStyle:{
					            color:"#666"
					        }
					    },
					    splitLine:{
					      show:false ,
						  lineStyle:{
						      color:"#eeeeee"
						  }
					    },
						axisLabel:{
							formatter:function(val){
								return val + '%'
							}
						},
					    axisTick:{
					      show:false
					    }
				}],
				series:[
					{
						name:this.datas.legendList[0],
						type:'bar',
						barWidth: 14,
						itemStyle: {
							color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: "#ffc66d"
								},
								{
									offset: 1,
									color: "#ffd89a"
								}
							])
						},
						data:this.datas.dataListOne
					},{
					data: this.datas.dataListTwo,
					type: 'line',
					yAxisIndex: 1,
					name:this.datas.legendList[1],
					color:'#32d89f',
					areaStyle: {
						color:new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0.2,
								color: 'rgba(50,216,159,0.1)'
							}, {
								offset: 1,
								color: 'rgba(50,216,159,0.7)'
						}]),
					}
				}]
			})
		}
	}
</script>

<style scoped lang="less">
	
</style>
