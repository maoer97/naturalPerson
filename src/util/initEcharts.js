export default{
	initBarTwo(dom,data){
		let myChart = this.$echarts.init(document.getElementById(dom));
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
				top:'20',
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
				data: data.nameList,
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
				name: data.unit,
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
					name:data.legendList[0],
					type:'bar',
					barWidth: 14,
					itemStyle: {
						color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: data.color[0]
							},
							{
								offset: 1,
								color: data.color[1]
							}
						])
					},
					data:data.dataListOne
				},
				{
					name:data.legendList[1],
					type:'bar',
					barWidth: 14,
					itemStyle: {
						color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: data.color[2]
							},
							{
								offset: 1,
								color: data.color[3]
							}
						])
					},
					data:data.dataListTwo
				}
			]
		})
	}
}