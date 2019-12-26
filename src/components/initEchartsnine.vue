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
			var datas = this.datas;
			var color = ['#6aadff','#ffec6a','#ffc56a','#32d89f','#5ed8f7'];
			let myChart = this.$echarts.init(document.getElementById(this.id));
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
			var totals = 0;
			for(var i in datas.data){
				totals += datas.data[i].value
			}
			myChart.setOption({
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b}: {c} "+datas.unit+"({d}%)"
				},
				title:{
					text:totals,
					subtext:datas.title,
					textStyle: {
						fontSize: 24,
						color:'#0487ff',
						fontStyle:'italic'
					},
					subtextStyle: {
						color: '#666',
						fontSize: 14,
						align: 'center'
					},
					x: 'center',
					y: '40%',
				},
				legend:{show:false},
				color:color,
				series :[
					{
						name:this.datas.names,
						type:'pie',
						radius: ['35%', '48%'],
						selectedMode: 'single',
						label:{
							normal:{
								rich: rich,
								formatter:function(params, ticket, callback){
									var total = 0;
									var percent = 0;
									datas.data.forEach(function(value, index, array,name) {
										total += value.value;
									});
									percent = ((params.value / total) * 100).toFixed(1);
									return '{numThree|' + params.name + '}\n{numOne|' + params.value + '}{numThree| '+ datas.unit +'}\n{numTwo|' + percent + '%}';
								}
							}
						},
						data:datas.data
					}
				]
			})
		}
	}
</script>

<style scoped lang="less">
	
</style>
