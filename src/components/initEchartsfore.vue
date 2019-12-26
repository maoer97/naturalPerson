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
					},
					axisLabel:{
						fontSize:10
					}
				},
				grid: {
					left: '5%',
					right: '5%',
					bottom: '8%',
					top: '16%',
					containLabel: true
				},
				tooltip: {
					trigger: 'axis'
				},
				yAxis:{
				        type: 'value',
						name: this.datas.unit,
				        axisLine:{
								  show:false,
				            lineStyle:{
				                color:"#666"
				            }
				        },
						axisLabel:{
							formatter:function(val){
								return val + '%'
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
				series:[{
					data: this.datas.dataListOne,
					type: 'line',
					name:this.datas.unit,
					color:'#ffc56a',
					areaStyle: {
						color:new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0.2,
								color: 'rgba(255,197,106,0.1)'
							}, {
								offset: 1,
								color: 'rgba(255,197,106,0.7)'
						}]),
					}
				}]
			})
		}
	}
</script>

<style scoped lang="less">
	
</style>
