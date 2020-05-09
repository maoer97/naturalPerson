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
					fontStyle:'italic',
					padding:[4,0]
				},
				numTwo:{
					fontSize: 18,
					color:'#0487ff',
					padding:[4,0]
				},
				numThree:{
					fontSize: 14,
					color:'#333',
					padding:[4,0]
				},
			};
			var echartData = this.datas.dataList;
			// var echartData = [{value:45,name:'高中',selected:true},{value:56,name:'大专'},{value:76,name:'本科'},{value:22,name:'硕士'},{value:8,name:'博士'}];
			var color = ['#6aadff','#ffec6a','#ffc56a','#32d89f','#5ed8f7'];
			let myChart = this.$echarts.init(document.getElementById(this.id));
			var options = {
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
						radius : '45%',
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
						},
						labelLine:{
							lineStyle:{
								type:'dashed'
							}
						}
					}
				]
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
