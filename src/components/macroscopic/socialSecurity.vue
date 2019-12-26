<template>
	<div class="mainbox">
		<div class="titleBox">湖北省<span>2019年</span>社会保障情况
			<div class="buttons">下载</div>
		</div>
		<div class="modelDetailsBox">
			<div class="modelOneBox">
				<div class="modelboxs">
					<div class="levelTwoTitle"><span></span>各项社会保险征缴情况
						<div class="buttonsBox">
							<div @click="modelOneChange(1)" :class="modelOneIndex==1?'choosen':''">征缴收入</div>
							<div @click="modelOneChange(2)" :class="modelOneIndex==2?'choosen':''">支出</div>
						</div>
					</div>
					<div style="width: 100%;height: calc(100% - 56px);">
						<div class="levelTwoechartsBoxs">
							<init-echartsthree :id='"somodelOneEchartsOne"' :datas = 'modelOneDataOne'></init-echartsthree>
						</div>
						<div id="somodelOneEchartsTwo" class="levelTwoechartsBoxs"></div>
					</div>
				</div>
			</div>
			
			<div class="modelTwoBox">
				<div class="modelboxs">
					<div class="levelTwoTitle"><span></span>各项社会保险征缴走势分析
						<div class="buttonsBox">
							<div @click="modelTwoChange(1)" :class="modelTwoIndex==1?'choosen':''">养老保险</div>
							<div @click="modelTwoChange(2)" :class="modelTwoIndex==2?'choosen':''">医疗保险</div>
							<div @click="modelTwoChange(3)" :class="modelTwoIndex==3?'choosen':''">失业保险</div>
							<div @click="modelTwoChange(4)" :class="modelTwoIndex==4?'choosen':''">工伤保险</div>
							<div @click="modelTwoChange(5)" :class="modelTwoIndex==5?'choosen':''">生育保险</div>
						</div>
					</div>
					<div style="width: 100%;height: calc(100% - 56px);">
						<div class="levelTwoechartsBoxs">
							<init-echartsone :id='"somodelTwoEchartsOne"' :datas = 'modelTwoDataOne'></init-echartsone>
						</div>
						<div class="levelTwoechartsBoxs">
							<init-echartstwo :id='"somodelTwoEchartsTwo"' :datas = 'modelTwoDataTwo'></init-echartstwo>
						</div>
					</div>
				</div>
			</div>
			
			<div class="modelThreeBox">
				<div class="modelboxs">
					<div class="levelTwoTitle"><span></span>各项社会保险参保人数</div>
					<div style="width: 100%;height: calc(100% - 56px);">
						<div class="levelTwoechartsBoxs">
							<init-echartsthree :id='"somodelThreeEchartsOne"' :datas = 'modelThreeDataOne'></init-echartsthree>
						</div>
						<div class="levelTwoechartsBoxs">
							<init-echartsfore :id='"somodelThreeEchartsTwo"' :datas = 'modelThreeDataTwo'></init-echartsfore>
						</div>
					</div>
				</div>
			</div>
			
			<div class="modelForeBox">
				<div class="modelboxs">
					<div class="levelTwoTitle"><span></span>各项社会参保人数走势分析
						<div class="buttonsBox">
							<div @click="modelForeChange(1)" :class="modelForeIndex==1?'choosen':''">养老保险</div>
							<div @click="modelForeChange(2)" :class="modelForeIndex==2?'choosen':''">医疗保险</div>
							<div @click="modelForeChange(3)" :class="modelForeIndex==3?'choosen':''">失业保险</div>
							<div @click="modelForeChange(4)" :class="modelForeIndex==4?'choosen':''">工伤保险</div>
							<div @click="modelForeChange(5)" :class="modelForeIndex==5?'choosen':''">生育保险</div>
						</div>
					</div>
					<div style="width: 100%;height: calc(100% - 56px);">
						<div class="levelTwoechartsBoxs">
							<init-echartsfive :id='"somodelForeEchartsOne"' :datas = 'modelForeDataOne'></init-echartsfive>
						</div>
						<div class="levelTwoechartsBoxs">
							<init-echartsthree :id='"somodelForeEchartsTwo"' :datas = 'modelForeDataTwo'></init-echartsthree>
						</div>
					</div>
				</div>
			</div>
			
			<div class="modelFiveBox">
				<div class="modelboxs">
					<div class="levelTwoTitle"><span></span>各项社会保险参保情况地区分析
						<div class="buttonsBox">
							<div @click="modelFiveChange(1)" :class="modelFiveIndex==1?'choosen':''">养老保险</div>
							<div @click="modelFiveChange(2)" :class="modelFiveIndex==2?'choosen':''">医疗保险</div>
							<div @click="modelFiveChange(3)" :class="modelFiveIndex==3?'choosen':''">失业保险</div>
							<div @click="modelFiveChange(4)" :class="modelFiveIndex==4?'choosen':''">工伤保险</div>
							<div @click="modelFiveChange(5)" :class="modelFiveIndex==5?'choosen':''">生育保险</div>
						</div>
					</div>
					<div style="width: 100%;height: calc(100% - 56px);">
						<div style="width: 100%;height: 100%;">
							<init-echartsone :id='"somodelFiveEchartsOne"' :datas = 'modelFiveData'></init-echartsone>
						</div>
					</div>
				</div>
			</div>
			
			<div class="modelSixBox">
				<div class="modelboxs">
					<div class="levelTwoTitle"><span></span>公积金缴纳情况分析</div>
					<div style="width: 100%;height: calc(100% - 56px);">
						<div style="float: left;width: 40%;margin: 0 5%;height: 100%;">
							<init-echartsone :id='"somodelSixEchartsOne"' :datas = 'modelSixDataOne'></init-echartsone>
						</div>
						<div style="float: left;width: 40%;margin: 0 5%;height: 100%;">
							<init-echartsone :id='"somodelSixEchartsTwo"' :datas = 'modelSixDataTwo'></init-echartsone>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import initEchartsone from '../initEchartsone.vue'
	import initEchartstwo from '../initEchartstwo.vue'
	import initEchartsthree from '../initEchartsthree.vue'
	import initEchartsfore from '../initEchartsfore.vue'
	import initEchartsfive from '../initEchartsfive.vue'
	export default{
		components:{initEchartsone,initEchartstwo,initEchartsthree,initEchartsfore,initEchartsfive},
		data(){
			return{
				modelOneIndex:1,
				modelTwoIndex:1,
				modelForeIndex:1,
				modelFiveIndex:1,
				modelOneDataOne:{
					unit:'亿元',
					titles:'',
					nameList:['养老保险','医疗保险','失业保险','工伤保险','生育保险'],
					dataListOne:[2200, 2320, 2010, 2340, 2900],
					color:['#ffd99d','#ffc66c']
				},
				modelTwoDataOne:{
					unit:'单位(万元)',
					legendList:['征缴收入','支出'],
					nameList:['2014','2015','2016','2017','2018'],
					dataListOne:[4500,4500,4500,4500,4500],
					dataListTwo:[3500,3500,3500,3500,3500],
					color:['#487fff','#84a9ff','#80ebf5','#3dc5dd']
				},
				modelTwoDataTwo:{
					unit:'单位(万元)',
					legendList:['累计结余'],
					nameList:['2014','2015','2016','2017','2018'],
					dataListOne:[4500,4500,4500,4500,4500],
					color:['#80ebf5','#3dc5dd']
				},
				modelThreeDataOne:{
					unit:'万人',
					titles:'',
					nameList:['养老保险','医疗保险','失业保险','工伤保险','生育保险'],
					dataListOne:[2200, 2320, 2010, 2340, 2900],
					color:['#80ebf5','#3dc5dd']
				},
				modelThreeDataTwo:{
					unit:'覆盖率(%)',
					nameList:['养老保险','医疗保险','失业保险','工伤保险','生育保险'],
					dataListOne:[22, 23, 20, 23, 20]
				},
				modelForeDataOne:{
					unit:['单位(万人)','覆盖率(%)'],
					legendList:['参保人数','覆盖率'],
					nameList:['2014','2015','2016','2017','2018'],
					dataListOne:[3700, 3600, 3200, 3700, 3500],
					dataListTwo:[27, 35, 32, 29, 39]
				},
				modelForeDataTwo:{
					unit:'个月',
					titles:'预计可发放月数',
					nameList:['养老保险','医疗保险','失业保险','工伤保险','生育保险'],
					dataListOne:[22, 23, 20, 23, 29],
					color:['#84a9ff','#487fff']
				},
				modelSixDataOne:{
					unit:'单位(万人)',
					legendList:['全年公积金缴存金额','实缴职工人数'],
					nameList:['2014','2015','2016','2017','2018'],
					dataListOne:[4500,4500,4500,4500,4500],
					dataListTwo:[3500,3500,3500,3500,3500],
					color:['#487fff','#84a9ff','#80ebf5','#3dc5dd']
				},
				modelSixDataTwo:{
					unit:'单位(万元)',
					legendList:['年末公积金贷款总额','年末公积金贷款余额'],
					nameList:['2014','2015','2016','2017','2018'],
					dataListOne:[4500,4500,4500,4500,4500],
					dataListTwo:[3500,3500,3500,3500,3500],
					color:['#80ebf5','#3dc5dd','#f0db4b','#fbeb81']
				},
				modelFiveData:{
					unit:'单位(万元)',
					legendList:['征缴收入','支出'],
					nameList:['武汉','宜昌','黄石','襄阳','咸宁','黄冈','鄂州','十堰','荆州','孝感','神农架','仙桃','潜江','天门','随州','荆门','恩施'],
					dataListOne:[4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500],
					dataListTwo:[3500,3500,3500,3500,3500,3500,3500,3500,3500,3500,3500,3500,3500,3500,3500,3500,3500],
					color:['#487fff','#84a9ff','#ffc66d','#ffd89a']
				}
			}
		},
		mounted() {
			this.initModelOneEchartsTwo('somodelOneEchartsTwo')
		},
		methods:{
			modelOneChange(e){
				this.modelOneIndex = e;
			},
			modelTwoChange(e){
				this.modelTwoIndex = e;
			},
			modelForeChange(e){
				this.modelForeIndex = e;
			},
			modelFiveChange(e){
				this.modelFiveIndex = e;
			},
			initModelOneEchartsTwo(dom,data){
				var rich = {
					numTwo:{
						fontSize: 20,
						color:'#0487ff'
					},
					numThree:{
						fontSize: 14,
						color:'#333'
					},
				};
				var echartData = [{value:2200,name:'养老保险',selected:true},{value:2320,name:'医疗保险'},{value:2010,name:'失业保险'},{value:2340,name:'工伤保险'},{value:2900,name:'生育保险'}];
				var color = ['#6aadff','#ffec6a','#ffc56a','#32d89f','#5ed8f7'];
				let myChart = this.$echarts.init(document.getElementById(dom));
				myChart.setOption({
					tooltip : {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} 万人({d}%)"
					},
					legend:{show:false},
					color:color,
					series :[
						{
							name:'学历占比',
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
										percent = ((params.value / total) * 100).toFixed(1);
										return '{numThree|' + params.name + '}\n{numTwo|' + percent + '%}';
									}
								}
							}
						}
					]
				})
			},
			
		}
	}
</script>

<style lang="less" scoped>
	.modelDetailsBox{
		width: 100%;
		height: auto;
		display: flex;
		flex-wrap: wrap;
		.modelOneBox{
			width: 746px;
			height: 332px;
			background: #fff;
			margin-bottom: 24px;
		}
		.modelTwoBox{
			width: 862px;
			height: 332px;
			margin-left: 32px;
			background: #fff;
			margin-bottom: 24px;
		}
		.modelThreeBox{
			width: 746px;
			height: 332px;
			background: #fff;
			margin-bottom: 24px;
		}
		.modelForeBox{
			width: 862px;
			height: 332px;
			margin-left: 32px;
			background: #fff;
			margin-bottom: 24px;
		}
		.modelFiveBox{
			width: 1632px;
			height: 352px;
			background: #fff;
			margin-bottom: 24px;
		}
		.modelSixBox{
			width: 1632px;
			height: 352px;
			background: #fff;
			margin-bottom: 24px;
		}
	}
</style>
