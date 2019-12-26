<template>
	<div class="mainbox">
		<div class="titleBox">湖北省<span>2019年</span>人口基本情况
			<div class="buttons"><a href="">下载</a></div>
		</div>
		
		<div class="modelDetailsBox">
			<el-row>
				<el-col :span='24'>
					<div class="modelOneBox">
						<div class="modelboxs">
							<div class="levelTwoTitle"><span></span>全省人口情况
								<div class="buttonsBox">
									<div @click="modelOneChange(1)" :class="modelOneIndex==1?'choosen':''">总人口数</div>
									<div @click="modelOneChange(2)" :class="modelOneIndex==2?'choosen':''">出生情况</div>
									<div @click="modelOneChange(3)" :class="modelOneIndex==3?'choosen':''">死亡情况</div>
								</div>
							</div>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div class="modelEchartsBox">
									<init-echartssix :id='"modelEchartsBox"' :datas='modelOneDataOne'></init-echartssix>
								</div>
								<div class="dataDetailBox">
									<p style="color: #666666;">全省总人口</p>
									<p style="color: #487fff;">(2018年)</p>
									<div><span>5917 </span> 万人</div>
									<p style="color: #666666;margin-top: 34px;">人口自然增长率</p>
									<p style="color: #487fff;">(2018年)</p>
									<div><span>4.5 </span> %</div>
								</div>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span='24'>
					<div class="modelTwoBox">
						<div class="modelboxs">
							<div class="levelTwoTitle"><span></span>生育情况及趋势分析</div>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div class="modelTwoEchartsOne">
									<init-echartsfore :id='"modelTwoEchartsOne"' :datas = 'modelTwoDataOne'></init-echartsfore>
								</div>
								<div class="modelTwoEchartsTwo">
									<init-echartsone :id='"modelTwoEchartsTwo"' :datas = 'modelTwoDataTwo'></init-echartsone>
								</div>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span='24'>
					<div class="modelThreeBox">
						<div class="modelboxs">
							<div class="levelTwoTitle"><span></span>全省人口构成</div>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div class="modelThreeEchartsOne">
									<init-echartsone :id='"modelThreeEchartsOne"' :datas = 'modelThreeDataOne'></init-echartsone>
								</div>
								<div class="modelThreeEchartsTwo">
									<init-echartsfive :id='"modelThreeEchartsTwo"' :datas = 'modelThreeDataTwo'></init-echartsfive>
								</div>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span='24'>
					<div class="modelForeBox">
						<div class="modelboxs">
							<div class="levelTwoTitle"><span></span>各年龄层人口结构
								<div class="buttonsBox">
									<div @click="modelForeChange(1)" :class="modelForeIndex==1?'choosen':''">整体性别比</div>
									<div @click="modelForeChange(2)" :class="modelForeIndex==2?'choosen':''">出生性别比</div>
								</div>
							</div>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div style="width: 100%;height: calc(100% - 56px);">
									<div id="modelForeEchartsOne"></div>
									<div class="datadetailbox">
										<p>老年人口占比</p>
										<p><span>14.5</span>%</p>
										<p style="padding-top: 10px;">整体性别比</p>
										<p><span>114</span></p>
										<p style="padding-top: 10px;">出生性别比</p>
										<p><span>114</span></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span='24'>
					<div class="modelFiveBox">
						<div class="modelboxs">
							<div class="levelTwoTitle"><span></span>人口密度分布</div>
							<div style="width: 100%;height: calc(100% - 56px);">
								<map-echarts :id = '"modelFiveEchartsOne"' :datas = 'modelFiveDataOne'></map-echarts>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span='24'>
					<div class="modelSixBox">
						<div class="modelboxs">
							<div class="levelTwoTitle"><span></span>人口密度分布</div>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div class="modelSixEchartsOne" id="modelSixEchartsOne">
									
								</div>
								<div class="modelSixEchartsTwo">
									<init-echartsfive :id='"modelSixEchartsTwo"' :datas = 'modelSixDataTwo'></init-echartsfive>
								</div>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
			
		</div>
	</div>
</template>

<script>
	import initEchartsone from '../initEchartsone.vue'
	import initEchartssix from '../initEchartssix.vue'
	import initEchartsfore from '../initEchartsfore.vue'
	import initEchartsfive from '../initEchartsfive.vue'
	import mapEcharts from '../mapEcharts.vue'
	export default{
		components:{initEchartsone,initEchartssix,initEchartsfore,initEchartsfive,mapEcharts},
		data(){
			return{
				modelOneIndex:1,
				modelForeIndex:1,
				modelOneDataOne:{
					unit:['单位(万人)','增长率'],
					legendList:['全省总人口','人口自然增长率'],
					nameList:['2014','2015','2016','2017','2018'],
					dataListOne:[3000,3200,3500,3800,4200],
					dataListTwo:[11,13,14,11,16],
					color:['#487fff','#84a9ff','#ffc56a']
				},
				modelTwoDataOne:{
					unit:'生育率(%)',
					nameList:['2014','2015','2016','2017','2018'],
					dataListOne:[1.1, 0.6, 1.8, 1.6, 1.2]
				},
				modelTwoDataTwo:{
					type:2,
					unit:['单位(万人)'],
					legendList:['出生人口','二胎人口'],
					nameList:['2014','2015','2016','2017','2018'],
					dataListOne:[1500, 1400, 1300, 1400, 1600],
					dataListTwo:[1800, 1600, 1600, 1200, 1500],
					color:['#487fff','#84a9ff','#80ebf5','#3dc5dd']
				},
				modelThreeDataOne:{
					unit:'单位(万人)',
					legendList:['常住人口','户籍人口'],
					nameList:['2014','2015','2016','2017','2018'],
					dataListOne:[1500,1500,1500,1500,1500],
					dataListTwo:[500,500,500,500,500],
					color:['#487fff','#84a9ff','#ffc56a','#ffd99e']
				},
				modelThreeDataTwo:{
					unit:['单位(万人)','城镇化率(%)'],
					legendList:['城镇人口','城镇化率'],
					nameList:['2014','2015','2016','2017','2018'],
					dataListOne:[3700, 3600, 3200, 3700, 3500],
					dataListTwo:[27, 35, 32, 29, 39]
				},
				modelFiveDataOne:{
					type:1,
					size:[0,1000],
					title:'',
					data : [
						{
							name:'武汉市',
							value:988,
							dataList:[
								{
									name:'常驻人口',
									value:'105',
									unit:'万人'
								},
								{
									name:'户籍人口',
									value:'150',
									unit:'万人'
								},
								{
									name:'城镇人口',
									value:'50',
									unit:'万人'
								},
								{
									name:'乡村人口',
									value:'45',
									unit:'万人'
								},
							]
						},
						{
							name:'恩施土家族苗族自治州',
							value:188,
							dataList:[
								{
									name:'常驻人口',
									value:'105',
									unit:'万人'
								},
								{
									name:'户籍人口',
									value:'150',
									unit:'万人'
								},
								{
									name:'城镇人口',
									value:'50',
									unit:'万人'
								},
								{
									name:'乡村人口',
									value:'45',
									unit:'万人'
								},
							]
						},
						{
							name:'十堰市',
							value:688,
							dataList:[
								{
									name:'常驻人口',
									value:'105',
									unit:'万人'
								},
								{
									name:'户籍人口',
									value:'150',
									unit:'万人'
								},
								{
									name:'城镇人口',
									value:'50',
									unit:'万人'
								},
								{
									name:'乡村人口',
									value:'45',
									unit:'万人'
								},
							]
						},
						{
							name:'宜昌市',
							value:888,
							dataList:[
								{
									name:'常驻人口',
									value:'105',
									unit:'万人'
								},
								{
									name:'户籍人口',
									value:'150',
									unit:'万人'
								},
								{
									name:'城镇人口',
									value:'50',
									unit:'万人'
								},
								{
									name:'乡村人口',
									value:'45',
									unit:'万人'
								},
							]
						},
						{
							name:'襄阳市',
							value:888,
							dataList:[
								{
									name:'常驻人口',
									value:'105',
									unit:'万人'
								},
								{
									name:'户籍人口',
									value:'150',
									unit:'万人'
								},
								{
									name:'城镇人口',
									value:'50',
									unit:'万人'
								},
								{
									name:'乡村人口',
									value:'45',
									unit:'万人'
								},
							]
						},
						{
							name:'黄冈市',
							value:288,
							dataList:[
								{
									name:'常驻人口',
									value:'105',
									unit:'万人'
								},
								{
									name:'户籍人口',
									value:'150',
									unit:'万人'
								},
								{
									name:'城镇人口',
									value:'50',
									unit:'万人'
								},
								{
									name:'乡村人口',
									value:'45',
									unit:'万人'
								},
							]
						},
						{
							name:'荆州市',
							value:388,
							dataList:[
								{
									name:'常驻人口',
									value:'105',
									unit:'万人'
								},
								{
									name:'户籍人口',
									value:'150',
									unit:'万人'
								},
								{
									name:'城镇人口',
									value:'50',
									unit:'万人'
								},
								{
									name:'乡村人口',
									value:'45',
									unit:'万人'
								},
							]
						},
						{
							name:'荆门市',
							value:288,
							dataList:[
								{
									name:'常驻人口',
									value:'105',
									unit:'万人'
								},
								{
									name:'户籍人口',
									value:'150',
									unit:'万人'
								},
								{
									name:'城镇人口',
									value:'50',
									unit:'万人'
								},
								{
									name:'乡村人口',
									value:'45',
									unit:'万人'
								},
							]
						},
						{
							name:'咸宁市',
							value:388,
							dataList:[
								{
									name:'常驻人口',
									value:'105',
									unit:'万人'
								},
								{
									name:'户籍人口',
									value:'150',
									unit:'万人'
								},
								{
									name:'城镇人口',
									value:'50',
									unit:'万人'
								},
								{
									name:'乡村人口',
									value:'45',
									unit:'万人'
								},
							]
						},
						{
							name:'随州市',
							value:388,
							dataList:[
								{
									name:'常驻人口',
									value:'105',
									unit:'万人'
								},
								{
									name:'户籍人口',
									value:'150',
									unit:'万人'
								},
								{
									name:'城镇人口',
									value:'50',
									unit:'万人'
								},
								{
									name:'乡村人口',
									value:'45',
									unit:'万人'
								},
							]
						},
						{
							name:'孝感市',
							value:488,
							dataList:[
								{
									name:'常驻人口',
									value:'105',
									unit:'万人'
								},
								{
									name:'户籍人口',
									value:'150',
									unit:'万人'
								},
								{
									name:'城镇人口',
									value:'50',
									unit:'万人'
								},
								{
									name:'乡村人口',
									value:'45',
									unit:'万人'
								},
							]
						},
						{
							name:'黄石市',
							value:388,
							dataList:[
								{
									name:'常驻人口',
									value:'105',
									unit:'万人'
								},
								{
									name:'户籍人口',
									value:'150',
									unit:'万人'
								},
								{
									name:'城镇人口',
									value:'50',
									unit:'万人'
								},
								{
									name:'乡村人口',
									value:'45',
									unit:'万人'
								},
							]
						},
						{
							name:'神农架林区',
							value:88,
							dataList:[
								{
									name:'常驻人口',
									value:'105',
									unit:'万人'
								},
								{
									name:'户籍人口',
									value:'150',
									unit:'万人'
								},
								{
									name:'城镇人口',
									value:'50',
									unit:'万人'
								},
								{
									name:'乡村人口',
									value:'45',
									unit:'万人'
								},
							]
						},
						{
							name:'天门市',
							value:288,
							dataList:[
								{
									name:'常驻人口',
									value:'105',
									unit:'万人'
								},
								{
									name:'户籍人口',
									value:'150',
									unit:'万人'
								},
								{
									name:'城镇人口',
									value:'50',
									unit:'万人'
								},
								{
									name:'乡村人口',
									value:'45',
									unit:'万人'
								},
							]
						},
						{
							name:'仙桃市',
							value:388,
							dataList:[
								{
									name:'常驻人口',
									value:'105',
									unit:'万人'
								},
								{
									name:'户籍人口',
									value:'150',
									unit:'万人'
								},
								{
									name:'城镇人口',
									value:'50',
									unit:'万人'
								},
								{
									name:'乡村人口',
									value:'45',
									unit:'万人'
								},
							]
						},
						{
							name:'潜江市',
							value:488,
							dataList:[
								{
									name:'常驻人口',
									value:'105',
									unit:'万人'
								},
								{
									name:'户籍人口',
									value:'150',
									unit:'万人'
								},
								{
									name:'城镇人口',
									value:'50',
									unit:'万人'
								},
								{
									name:'乡村人口',
									value:'45',
									unit:'万人'
								},
							]
						},
						{
							name:'鄂州市',
							value:588,
							dataList:[
								{
									name:'常驻人口',
									value:'105',
									unit:'万人'
								},
								{
									name:'户籍人口',
									value:'150',
									unit:'万人'
								},
								{
									name:'城镇人口',
									value:'50',
									unit:'万人'
								},
								{
									name:'乡村人口',
									value:'45',
									unit:'万人'
								},
							]
						},
					]
				},
				modelSixDataOne:{
					type:2,
					unit:['单位(万人)','男女比'],
					legendList:['适婚男性','适婚女性','适婚男女比例'],
					nameList:['2014','2015','2016','2017','2018'],
					dataListOne:[1500, 1400, 1300, 1400, 1600],
					dataListTwo:[1800, 1600, 1600, 1200, 1500],
					dataListThree:[1.3,1.2,1.4,0.8,0.9]
				},
				modelSixDataTwo:{
					unit:['单位(万人)','增长率(%)'],
					legendList:['结婚家庭数','增长率'],
					nameList:['2014','2015','2016','2017','2018'],
					dataListOne:[3700, 1600, 3200, 1700, 3500],
					dataListTwo:[27, 35, 32, 9, 39]
				},
			}
		},
		mounted() {
			this.initModelTwoEchartsTwo('modelSixEchartsOne',this.modelSixDataOne)
			this.initModelForeEchartsOne('modelForeEchartsOne')
		},
		methods:{
			modelOneChange(e){
				this.modelOneIndex = e;
			},
			modelForeChange(e){
				this.modelForeIndex = e;
			},
			
			initModelTwoEchartsTwo(dom,data){
				var series = [];
				var yAxis = [];
				if(data.type==1){
					series = [
						{
							name:data.legendList[0],
							type:'bar',
							barWidth: 20,
							stack: '1',
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
							data:data.dataListOne
						},
						{
							name:data.legendList[1],
							type:'bar',
							barWidth: 20,
							stack: '1',
							itemStyle: {
								color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: "#80ebf5"
									},
									{
										offset: 1,
										color: "#3dc5dd "
									}
								])
							},
							data:data.dataListTwo
						}
					]
					yAxis = [{
						type: 'value',
						name: data.unit[0],
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
					}]
				}else if(data.type==2){
					series = [
						{
							name:data.legendList[0],
							type:'bar',
							barWidth: 20,
							stack: '1',
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
							data:data.dataListOne
						},
						{
							name:data.legendList[1],
							type:'bar',
							barWidth: 20,
							stack: '1',
							itemStyle: {
								color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: "#80ebf5"
									},
									{
										offset: 1,
										color: "#3dc5dd "
									}
								])
							},
							data:data.dataListTwo
						},
						{
							name:data.legendList[2],
							type:'line',
							yAxisIndex: 1,
							itemStyle:{
								normal:{
									color:'#4eddac',
									lineStyle:{
										color:'#4eddac',
										width:2
									}
								}
							},
							data:data.dataListThree
						}
					]
					yAxis = [{
						type: 'value',
						name: data.unit[0],
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
					},{
						type: 'value',
						show:true,
						name :data.unit[1],
						axisLine:{
							show:false,
							lineStyle:{
								color:"#666"
							}
						},
						splitLine:{
							show:false
						},
						axisTick:{
							show:false
						}
					}]
				}
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
					yAxis:yAxis,
					series:series
				})
			},
			
			initModelForeEchartsOne(dom,data){
				var labelData = ['幼儿(0岁-3岁)','儿童(4岁-6岁)','少年(7岁-18岁)','青年(19岁-40岁)','壮年(41岁-49岁)','中年(50岁-64岁)','老年(65岁及以上)'];
				// var labelData2 = ['109.3','109.3','109.3','109.3','109.3','109.3','109.3'];
				let myChart = this.$echarts.init(document.getElementById(dom));
				myChart.setOption({
					tooltip: {
						trigger: 'axis',
						        axisPointer: {
						            type: 'shadow'
						        },
						        formatter: function(a) {
						            var v = a[0];
						            return v.name + '<br/>' + v.marker + v.seriesName + '：' + Math.abs(v.value) + '%';
						        }
					},
					xAxis: [{
					        type: 'value',
					        max: 0,
					        gridIndex: 0,
					        axisTick: {
					            show: false
					        },
					        axisLabel: {
					            show: true,
					            formatter: function(v) {
					                return (v * -1) + '%'
					            },
								color:'#666'
					        },
					        axisLine: {
					            show: true,
								lineStyle:{
								    color:"#eee"
								}
					        },
					        splitLine: {
					            show: false
					        }
					    }, {
					        type: 'value',
					        gridIndex: 1,
					        min: 0,
					        axisTick: {
					            show: false
					        },
					        axisLine: {
					            show: true,
								lineStyle:{
								    color:"#eee",
								},
					        },
					        axisLabel: {
					            show: true,
								formatter: function(v) {
								    return v + '%'
								},
								color:'#666'
					        },
					        splitLine: {
					            show: false
					        }
					    }],
					    yAxis: [{
					        type: 'category',
					        gridIndex: 0,
					        inverse: true,
							// name:'年龄段',
					        data: labelData,
					        axisTick: {
					            show: false
					        },
					        axisLabel: {
					            show: true
					        },
					        axisLine: {
					            show: false
					        }
					    }, {
					        type: 'category',
					        gridIndex: 1,
							// name:'整体性别比',
					        inverse: true,
							position:'right',
					        data: labelData,
					        axisTick: {
					            show: false
					        },
					        axisLabel: {
					            show:false
					        },
					        axisLine: {
					            show: false
					        }
					    }],
					    grid: [{
					        top: 30,
					        width: '34%',
							bottom:20,
					        left: 115,
					        gridIndex: 0,
					    }, {
					        top: 30,
					        left: '54%',
					        right: 65,
							bottom:20,
					        gridIndex: 1,
					    }],
					    series: [{
					            name: '男性',
					            type: 'bar',
					            barWidth: 10,
					            gridIndex: 0,
					            itemStyle: {
					                normal: {
					                    show: true,
					                    color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{
					                        offset: 0,
					                        color: "#0487ff" // 0% 处的颜色
					                    }, {
					                        offset: 1,
					                        color: "#84a9ff" // 100% 处的颜色
					                    }], false),
					                    barBorderRadius: 50,
					                    borderWidth: 0,
					                    borderColor: '#333',
					                    label: {
					                        show: true,
					                        position: 'left',
					                        formatter: function(v) {
					                            return (v.value * -1)+'%';
					                        }
					                    }
					                }
					            },
					            data: [-50, -48, -42, -45, -48, -45, -56,]
					        },
					        {
					            name: '女性',
					            type: 'bar',
					            barWidth: 10,
					            xAxisIndex: 1,
					            yAxisIndex: 1,
					            itemStyle: {
					                normal: {
					                    show: true,
					                    color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{
					                        offset: 0,
					                        color: "#ffd99e" // 0% 处的颜色
					                    }, {
					                        offset: 1,
					                        color: "#ffc56a" // 100% 处的颜色
					                    }], false),
					                    barBorderRadius: 50,
					                    borderWidth: 0,
					                    borderColor: '#333',
					                    label: {
					                        show: true,
					                        position: 'right',
					                        formatter: function(v) {
					                            return v.value+'%';
					                        }
					                    }
					                }
					            },
					            data: [50, 52, 58, 55, 52, 55, 44]
					        }
					
					    ]
				})
			},
		}
	}
</script>

<style scoped lang="less">
	.modelDetailsBox{
		width: 100%;
		height: auto;
		.modelOneBox{
			height: 366px;
			background: #fff;
			.buttonsBox{
				float: right;
				height: 30px;
				margin-top: 13px;
				div{
					width: 88px;
					height: 30px;
					border-radius: 15px;
					text-align: center;
					line-height: 30px;
					margin: 0 7px;
					float: left;
					border: solid 1px #487fff;
					color: #487fff;
					cursor: pointer;
					font-size: 14px;
				}
				.choosen{
					background: #487fff;
					border: 0;
					color: #fff;
				}
			}
			.modelEchartsBox{
				height: 100%;
				width: 75%;
				float: left;
			}
			.dataDetailBox{
				width: 24%;
				height: 202px;
				float: left;
				margin-top: 58px;
				border-left: 1px dashed #eeeeee;
				p{
					font-size: 14px;
					line-height: 21px;
					padding-left: 45px;
				}
				div{
					line-height: 38px;
					padding-left: 45px;
					color: #333;
					font-size: 14px;
					span{
						display: inline-block;
						font-size: 20px;
						font-family: Arial;
						color: #487fff;
						font-weight: bold;
						font-style:italic;
					}
				}
			}
		}
		.modelTwoBox{
			height: 366px;
			background: #fff;
			.modelTwoEchartsOne{
				width: 45%;
				float: left;
				height: 100%;
			}
			.modelTwoEchartsTwo{
				float: left;
				width:55%;
				height: 100%;
			}
		}
		.modelThreeBox{
			height: 366px;
			background: #fff;
			.modelThreeEchartsOne{
				width: 50%;
				float: left;
				height: 100%;
			}
			.modelThreeEchartsTwo{
				width: 50%;
				float: left;
				height: 100%;
			}
		}
		.modelForeBox{
			height: 366px;
			background: #fff;
			#modelForeEchartsOne{
				width: 80%;
				float: left;
				height: 100%;
			}
			.datadetailbox{
				width: 18%;
				float: left;
				height: 232px;
				margin-top: 36px;
				border-left: 1px dashed #eeeeee;
				p{
					font-size: 14px;
					color: #666666;
					padding-left: 37px;
					line-height: 28px;
					span{
						display: inline-block;
						font-family: Arial;
						color: #487fff;
						font-weight: bold;
						font-style:italic;
						font-size: 18px;
					}
				}
			}
		}
		.modelFiveBox{
			height: 444px;
			background: #fff;
		}
		.modelSixBox{
			height: 444px;
			background: #fff;
			.modelSixEchartsOne{
				width: 50%;
				float: left;
				height: 100%;
			}
			.modelSixEchartsTwo{
				width: 50%;
				float: left;
				height: 100%;
			}
		}
	}
	
</style>
