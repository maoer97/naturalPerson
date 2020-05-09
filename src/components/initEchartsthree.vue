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
			for(var i in this.datas.dataListOne){
				this.datas.dataListOne[i] = Number(this.datas.dataListOne[i]).toFixed(0)
			}
			let myChart = this.$echarts.init(document.getElementById(this.id));
			var units = this.datas.unit
			myChart.setOption({
				grid: {
					left: '5%',
					right: '15%',
					bottom: '8%',
					top: '10%',
					containLabel: true
				},
				legend: {
				    show: true,
					top:0,
					left:20,
					itemGap:20,
				    textStyle: {
				      color: "#666"
				    },
				}, 
				tooltip: {
					trigger: 'axis',
					formatter: "{b}: <br/>{c} " + this.datas.unit
				},
				yAxis: {
					type: 'category',
					data:this.datas.nameList,
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
				xAxis: {
					type: 'value',
					axisPointer: {
						type: 'shadow'
					},
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
					axisLabel:{
						show:false
					},
					axisTick:{
						show:false
					}
				},
				series:[{
					type:'bar',
					barWidth: 14,
					name:this.datas.titles,
					itemStyle: {
					   color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{
					            offset: 0,
					            color: this.datas.color[0]
					        },
					        {
					            offset: 1,
					            color: this.datas.color[1]
					        }
					    ])
					},
					label: {
					    show: true,
						position:'right',
						// color:'#333333',
						// fontSize:14,
					    formatter: function(v) {
					        return v.value + units
					    }
					},
					data:this.datas.dataListOne
				}]
			})
		}
	}
</script>

<style scoped lang="less">
	
</style>
