<template>
	<div :id = 'id' style="width: 100%;height: 100%;"></div>
</template>

<script>
	import uploadedDataURL from "../../static/allcity.json" 
	export default{
		data(){
			return{
				
			}
		},
		props:['id','datas'],
		mounted() {
			var rich = {
				numOne:{
					fontSize: 18,
					color:'#487fff',
					fontWeight:'bold',
				},
				numTwo:{
					fontSize: 14,
					color:'#487fff',
					fontStyle:'italic',
				},
				numThree:{
					fontSize: 12,
					color:'#333'
				},
			};
			var that = this;
			var visualMap = {};
			var colors = '';
			var data_map = this.datas.data;
			if(this.datas.type == 1){
				visualMap = {
					min: this.datas.size[0],
					max: this.datas.size[1],
					left:'1%',
					bottom:'1%',
					itemWidth: 25,
					itemHeight: 100,
					text:['低','高'],
					realtime: false,
					calculable: true,
					orient: 'horizontal',
					textStyle: {
						color:'#666',
						fontSize:'12'
					},
					inRange: {
						color: ['#fff','#0086ff'],
						symbolSize: [20, 60]
					}
				}
				colors = '#ffd188'
			}else if(this.datas.type == 2){
				visualMap = {
					show:false,
					min: this.datas.size[0],
					max: this.datas.size[1],
					left:'1%',
					bottom:'1%',
					itemWidth: 25,
					itemHeight: 100,
					text:['低','高'],
					realtime: false,
					calculable: true,
					orient: 'horizontal',
					textStyle: {
						color:'#666',
						fontSize:'12'
					},
					inRange: {
						color: ['#f3f7ff','#f3f7ff'],
						symbolSize: [20, 60]
					}
				}
				colors = '#487fff'
			}
			$.get('../../static/allcity.json', function (hubei){
				that.$echarts.registerMap('hubei1', hubei);
				let myChart = that.$echarts.init(document.getElementById(that.id));
				myChart.setOption({
					visualMap: visualMap,
					tooltip: {
						trigger: 'item',
					},
					title:{
						text:that.datas.title,
						textStyle:{
							color:'#666'
						}
					},
					color:['#f3f7ff'],
					series: [{
						type: 'map',
						mapType: 'hubei1',
						aspectScale:1,
						// left:'10%',
						label: {
							normal: {
								show: true,
								textStyle: {
									color: '#666',
									fontSize:'12'
								},
							},
							emphasis: {
								show: true,
								textStyle: {
									color:'#666',
									fontSize:'12',
								}
							}
						},
						tooltip : {
							trigger: 'item',
							padding: 0,
							enterable: true,
							transitionDuration: 1,
							textStyle: {
								color: '#333',
								decoration: 'none',
							},
							formatter: function (params, ticket, callback) {
								var tipHtml = '';
								var dataList = params.data.dataList;
								var str = '';
								for( var i in dataList){
									str+='<p style="height: 30px;line-height: 30px;padding-left: 24px;color: #666;font-size: 14px;">'+dataList[i].name+': <span style="display: inline-block;color: #487fff;font-style: italic;padding-right:5px;">'+dataList[i].value+'</span>'+dataList[i].unit+'</p>'
								}
								tipHtml = '<div style="padding-bottom:10px;height:auto;width:300px;border-radius:5px;background:#fff;box-shadow:0 0 5px 3px rgba(0,0,0,0.1)">'+
								'<div style="height: 44px;width: 100%;line-height: 44px;color: #487fff;font-size: 16px;font-weight: bold;padding-left: 14px;">'+params.name+''+
								'</div>'+
								str+
								'</div>'
								// return "&nbsp;&nbsp;"+params.name+"</br>工单量："+params.value+"</br>";
								return tipHtml;
							}
						},
						roam: false,
						itemStyle: {
							normal: {
								borderColor: '#5396ff',
								areaColor: '#f3f7ff'
							},
							emphasis: {
								areaColor: colors
							}
						},
						data:data_map,
						
						
						
					}]
				})
				
				// var count = 0;
				// var timeTicket = null;
				// var dataLength = that.datas.data.length;
				// timeTicket && clearInterval(timeTicket);
				// timeTicket = setInterval(function() {
				//     myChart.dispatchAction({
				//         type: 'downplay',
				//         seriesIndex: 0,
				//     });
				//     myChart.dispatchAction({
				//         type: 'highlight',
				//         seriesIndex: 0,
				//         dataIndex: (count) % dataLength
				//     });
				//     myChart.dispatchAction({
				//         type: 'showTip',
				//         seriesIndex: 0,
				//         dataIndex: (count) % dataLength
				//     });
				//     count++;
				// }, 1500);
				// myChart.on('mouseover', function(params) {
				//     clearInterval(timeTicket);
				//     myChart.dispatchAction({
				//         type: 'downplay',
				//         seriesIndex: 0
				//     });
				//     myChart.dispatchAction({
				//         type: 'highlight',
				//         seriesIndex: 0,
				//         dataIndex: params.dataIndex
				//     });
				//     myChart.dispatchAction({
				//         type: 'showTip',
				//         seriesIndex: 0,
				//         dataIndex: params.dataIndex,
				//     });
				// });
				// myChart.on('mouseout', function(params) {
				//     timeTicket && clearInterval(timeTicket);
				//     timeTicket = setInterval(function() {
				//         myChart.dispatchAction({
				//             type: 'downplay',
				//             seriesIndex: 0,
				//         });
				//         myChart.dispatchAction({
				//             type: 'highlight',
				//             seriesIndex: 0,
				//             dataIndex: (count) % dataLength
				//         });
				//         myChart.dispatchAction({
				//             type: 'showTip',
				//             seriesIndex: 0,
				//             dataIndex: (count) % dataLength
				//         });
				//         count++;
				//     }, 4000);
				// });
			})
		}
	}
</script>

<style scoped lang="less">
	
</style>
