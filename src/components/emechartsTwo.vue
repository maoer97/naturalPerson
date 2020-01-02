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
			var echartDataOne = this.datas.dataListOne;
			var echartDataTwo = this.datas.dataListTwo;
			var color = ['#6aadff','#ffec6a','#ffc56a','#32d89f','#5ed8f7'];
			var rich = {
				numOne:{
					fontSize: 16,
					color:'#0487ff',
					fontStyle:'italic'
				},
				numTwo:{
					fontSize: 20,
					color:'#0487ff'
				},
				numThree:{
					fontSize: 14,
					color:'#333'
				},
			};
			let myChart = this.$echarts.init(document.getElementById(this.id));
			myChart.setOption({
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b}: {c} 万人({d}%)"
				},
				legend:{show:false},
				color:color,
				series :[
					{
						name:'产业分布',
						type: 'pie',
						selectedMode: 'single',
						radius: [0, '36%'],
						center: ['50%', '50%'],
						data:echartDataOne,
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						},
						label:{
							normal: {
								position: 'inner'
							}
						}
					},
					{
						name:'行业分布',
						type:'pie',
						radius: ['48%', '63%'],
						label:{
							normal:{
								rich: rich,
								formatter:function(params, ticket, callback){
									var total = 0;
									var percent = 0;
									echartDataTwo.forEach(function(value, index, array,name) {
										total += value.value;
									});
									percent = ((params.value / total) * 100).toFixed(1);
									return '{numThree|' + params.name + '}{numOne|' + params.value + '}{numThree| 万人}\n{numTwo|' + percent + '%}';
								}
							}
						},
						data:echartDataTwo
					}
				]
				
			})
		}
	}
</script>

<style scoped lang="less">
	
</style>
