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
			var namelist = this.datas.nameList;
			var valuelist = this.datas.dataListOne;
			let myChart = this.$echarts.init(document.getElementById(this.id));
			myChart.setOption({
				grid: {
					left: '5%',
					right: '5%',
					bottom: '0%',
					top: '16%',
					containLabel: true
				},
				legend: {
				    show: true,
					top:'20',
					right:'20',
					itemGap:20,
				    textStyle: {
				      color: "#666"
				    },
				},
				tooltip: {
					// trigger: 'axis',
					show:true,
					// formatter: "{a} <br/>排名:{dataIndex}<br/>{b} : {c} 元",
					formatter:(params) => {
					  return '排名:  '+ (params.dataIndex + 1) +'<br/>' + params.name+'<br/>平均工资:  '+ params.data +'元'
					}
				},
				xAxis: {
					type: 'category',
					data: namelist,
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
						fontSize:10,
						formatter:function(val){
							var strs = val.split('');
							var str = '';
							for(var i=0;i<strs.length;i++){
								if(i%2==0&&i!=0){
									str+=strs[i]+'\n';
								}else{
									str+=strs[i];
								}
							}
							return str
						}
					}
				},
				yAxis:{
					type: 'value',
					name: '单位(元)',
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
						name:'平均工资(元)',
						type:'bar',
						barWidth: 18,
						itemStyle: {
						   color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						            offset: 0,
						            color: "#487fff"
						        },
						        {
						            offset: 1,
						            color: "#84a9ff"
						        }
						    ])
						},
						data:valuelist,
						label: {
						    normal: {
						        show: true,
						        position: 'top',
						        color: '#333333',
						        fontSize: '10',
								formatter: function(params) {
									return params.data + '元'
								}
						    }
						},
					}
				]
			})
		}
	}
</script>

<style scoped lang="less">
	
</style>
