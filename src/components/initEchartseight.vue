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
			var data = {
			    value:this.datas.data,
				color:this.datas.color
			}
			let myChart = this.$echarts.init(document.getElementById(this.id));
			var rich = {
				numOne:{
					fontSize: 24,
					color:this.datas.color,
					fontStyle:'italic',
					fontWeight:'bold',
					fontFamily:'Arial'
				},
				numThree:{
					fontSize: 14,
					color:'#333'
				},
			};
			myChart.setOption({
			  series: [{
			              name: "仪表盘",
			              type: "gauge",
			              splitNumber: 10,
			              axisLine: {
			                  lineStyle: {
			                      color: [
			                          [data.value, data.color], //外环基础色
			                          [1, "#f0f0f0"]
			                      ],
			                      width: 12
			                  }
			              },
			              axisLabel: {
			                  show: false,
			              },
			              axisTick: {
			                  show: false,
			  
			              },
			              splitLine: {
			                  show: false,
			              },
			              itemStyle: {
			                  show: false,
			              },
			              detail: {
							  rich: rich,
			                  formatter: function(value) {
			                          // return `${value*100}%`
									  return '{numOne|' + (value*100).toFixed(1) + '%}';
			                  },
			                  offsetCenter: [0, 0],
			                  textStyle: {
			                      fontSize: '18',
			                      color: '#333'
			                  }
			              },
			              title: {
			                  offsetCenter: [0, "100%"],
			              },
			              pointer: {
			                  show: false,
			              },
			              data: [{
			                  "name": "",
			                  "value": data.value,
			              }]
			          }
			      ]
			})
		}
	}
</script>

<style scoped lang="less">
	
</style>
