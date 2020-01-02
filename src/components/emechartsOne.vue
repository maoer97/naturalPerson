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
			var echartData = this.datas.dataList;
			// var echartData = [{value:45,name:'高中',selected:true},{value:56,name:'大专'},{value:76,name:'本科'},{value:22,name:'硕士'},{value:8,name:'博士'}];
			var color = ['#6aadff','#ffec6a','#ffc56a','#32d89f','#5ed8f7'];
			let myChart = this.$echarts.init(document.getElementById(this.id));
			myChart.setOption({
				tooltip : {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} 万人({d}%)"
				},
				legend:{show:false},
				color:color,
				series :[
					{
						name:'各部占比',
						type: 'pie',
						selectedMode: 'single',
						radius : '55%',
						center: ['50%', '50%'],
						data:echartData,
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						},
						label:{
							normal:{
								rich: rich,
								formatter:function(params, ticket, callback){
									var total = 0;
									var percent = 0;
									echartData.forEach(function(value, index, array,name) {
										total += value.value;
									});
									percent = ((params.value / total) * 100).toFixed(2);
									return '{numThree|' + params.name + '}{numOne|' + params.value + '}{numThree| 万人}\n{numTwo|' + percent + '%}';
									// return '{numThree|' + params.name + '}{numOne|' + params.value + '}{numThree| 万人}';
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
