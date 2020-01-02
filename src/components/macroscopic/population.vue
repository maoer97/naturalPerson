<template>
	<div class="mainbox">
		<div class="titleBox">湖北省<span>{{year}}年</span>人口基本情况
			<div class="buttons"><a href="">下载</a></div>
		</div>
		<div style="width: 100%;height: 200px; z-index: 9;" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(255, 255, 255, 0.1)" v-show="loading"></div>
		<div class="modelDetailsBox"  v-if="showAll">
			<el-row>
				<el-col :span='24'>
					<div class="modelOneBox">
						<div class="modelboxs">
							<subheading :items='modelOneList' :titles='"全省人口情况"' @changeIndex='modelOneChange'></subheading>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div class="modelEchartsBox">
									<init-echartssix :id='"modelEchartsBox"' :datas='modelOneDataOne[modelOneIndex]' v-if="showModelOne"></init-echartssix>
								</div>
								<div class="dataDetailBox">
									<p style="color: #666666;">全省总人口</p>
									<p style="color: #487fff;">({{modelOneDataOneD.year}}年)</p>
									<div><span>{{modelOneDataOneD.sum}} </span> 万人</div>
									<p style="color: #666666;margin-top: 34px;">人口自然增长率</p>
									<p style="color: #487fff;">({{modelOneDataOneD.year}}年)</p>
									<div><span>{{modelOneDataOneD.ratio}} </span> %</div>
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
							<subheading :items='modelForeList' :titles='"各年龄层人口结构"' @changeIndex='modelForeChange'></subheading>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div style="width: 100%;height: calc(100% - 56px);">
									<div class="modelForeEchartsOne">
										<popuecharts-one :id='"modelForeEchartsOne"' :datas='modelForeDataOne.dataList[modelForeIndex]'  v-if="showModelFore"></popuecharts-one>
									</div>
									<div class="datadetailbox">
										<p>老年人口占比</p>
										<p><span>{{modelForeDataOne.lnrkzb}}</span>%</p>
										<p style="padding-top: 10px;">整体性别比</p>
										<p><span>{{modelForeDataOne.ztxbb}}</span></p>
										<p style="padding-top: 10px;">出生性别比</p>
										<p><span>{{modelForeDataOne.csxbb}}</span></p>
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
							<div class="levelTwoTitle"><span></span>婚姻情况及趋势分析</div>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div class="modelSixEchartsOne">
									<popuecharts-two :id='"modelSixEchartsOne"' :datas='modelSixDataOne'></popuecharts-two>
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
	import popuechartsOne from '../popuechartsOne.vue'
	import popuechartsTwo from '../popuechartsTwo.vue'
	import mapEcharts from '../mapEcharts.vue'
	import subheading from '../subheading.vue'
	import {populationApi} from '../../util/api.js'
	export default{
		components:{popuechartsOne,popuechartsTwo,initEchartsone,initEchartssix,initEchartsfore,initEchartsfive,mapEcharts,subheading},
		// props:['year'],
		data(){
			return{
				showAll:false,
				loading:true,
				modelOneList:[
					{label: '总人口数', value: 1},
					{label: '出生情况', value: 2},
					{label: '死亡情况', value: 3}
				],
				modelForeList:[
					{label: '整体性别比', value: 1},
					{label: '出生性别比', value: 2}
				],
				modelOneDataOneD:{
					sum:0,
					ratio:0,
					year:0
				},
				modelOneDataOne:[{
					unit:['单位(万人)','增长率'],
					legendList:['全省总人口','人口自然增长率'],
					nameList:[],
					dataListOne:[],
					dataListTwo:[],
					color:['#487fff','#84a9ff','#ffc56a']
				},{
					unit:['单位(万人)','增长率'],
					legendList:['全省出生人口','出生人口自然增长率'],
					nameList:[],
					dataListOne:[],
					dataListTwo:[],
					color:['#487fff','#84a9ff','#ffc56a']
				},{
					unit:['单位(万人)','增长率'],
					legendList:['全省死亡总人口','死亡人口自然增长率'],
					nameList:[],
					dataListOne:[],
					dataListTwo:[],
					color:['#487fff','#84a9ff','#ffc56a']
				}],
				showModelOne:true,
				modelOneIndex:0,
				modelTwoDataOne:{
					unit:'生育率(%)',
					nameList:[],
					dataListOne:[]
				},
				modelTwoDataTwo:{
					type:2,
					unit:['单位(万人)'],
					legendList:['出生人口','二胎人口'],
					nameList:[],
					dataListOne:[],
					dataListTwo:[],
					color:['#487fff','#84a9ff','#80ebf5','#3dc5dd']
				},
				modelThreeDataOne:{
					unit:'单位(万人)',
					legendList:['常住人口','户籍人口'],
					nameList:[],
					dataListOne:[],
					dataListTwo:[],
					color:['#487fff','#84a9ff','#ffc56a','#ffd99e']
				},
				modelThreeDataTwo:{
					unit:['单位(万人)','城镇化率(%)'],
					legendList:['城镇人口','城镇化率'],
					nameList:[],
					dataListOne:[],
					dataListTwo:[]
				},
				modelForeDataOne:{
					lnrkzb:0,
					ztxbb:0,
					csxbb:0,
					dataList:[
						{
							labelData:[],
							dataListOne:[],
							dataListTwo:[],
						},
						{
							labelData:[],
							dataListOne:[],
							dataListTwo:[],
						}
					]
					
				},
				showModelFore:true,
				modelForeIndex:0,
				modelFiveDataOne:{
					type:1,
					size:[0,1100],
					title:'',
					data : []
				},
				modelSixDataOne:{
					type:2,
					unit:['单位(万人)','男女比'],
					legendList:['适婚男性','适婚女性','适婚男女比例'],
					nameList:[],
					dataListOne:[],
					dataListTwo:[],
					dataListThree:[]
				},
				modelSixDataTwo:{
					unit:['单位(个)','增长率(%)'],
					legendList:['结婚家庭数','增长率'],
					nameList:[],
					dataListOne:[],
					dataListTwo:[]
				},
				allData:'',
				year:2017,
				fullscreenLoading:true
			}
		},
		mounted() {
			// this.openFullScreen2(true)
			this.getData(2017);
			// this.modelForeChange(1);
		},
		methods:{
			modelOneChange(e){
				this.modelOneIndex = e-1;
				console.log(e);
				this.showModelOne = false;
				this.$nextTick(()=>{
					this.showModelOne = true;
				})
			},
			modelForeChange(e){
				this.modelForeIndex = e-1;
				console.log(e);
				this.showModelFore = false;
				this.$nextTick(()=>{
					this.showModelFore = true;
				})
			},
			async getData(params){
				this.showAll = false;
				this.loading = true;
				this.modelOneIndex = 0;
				this.modelForeIndex=0;
				this.year = params;
				try {
					let res = await populationApi(params)
					console.log(res)
					this.$store.commit('savepopulationData',res.data)
				} catch (err) {
					console.log(err)
				} 
				
				var allList = this.$store.state.populationData;
				this.modelOneDataOne[0].nameList=[],this.modelOneDataOne[0].dataListOne=[],this.modelOneDataOne[0].dataListTwo=[];
				this.modelOneDataOne[1].nameList=[],this.modelOneDataOne[1].dataListOne=[],this.modelOneDataOne[1].dataListTwo=[];
				this.modelOneDataOne[2].nameList=[],this.modelOneDataOne[2].dataListOne=[],this.modelOneDataOne[2].dataListTwo=[];
				for(var i in allList.rkqkOne.zrkList){
					this.modelOneDataOne[0].nameList.push(allList.rkqkOne.zrkList[i].year)
					this.modelOneDataOne[0].dataListOne.push(allList.rkqkOne.zrkList[i].zrkNum)
					this.modelOneDataOne[0].dataListTwo.push(allList.rkqkOne.zrkList[i].growthRatio)
				}
				for(var i in allList.rkqkOne.zrkListLeft){
					this.modelOneDataOneD.sum = allList.rkqkOne.zrkListLeft[0].zrkNum
					this.modelOneDataOneD.ratio = allList.rkqkOne.zrkListLeft[0].growthRatio
					this.modelOneDataOneD.year = allList.rkqkOne.zrkListLeft[0].year
				}
				for(var i in allList.rkqkOne.csrkList){
					this.modelOneDataOne[1].nameList.push(allList.rkqkOne.csrkList[i].year)
					this.modelOneDataOne[1].dataListOne.push(allList.rkqkOne.csrkList[i].birthNum)
					this.modelOneDataOne[1].dataListTwo.push(allList.rkqkOne.csrkList[i].birthRate)
				}
				for(var i in allList.rkqkOne.swrkList){
					this.modelOneDataOne[2].nameList.push(allList.rkqkOne.swrkList[i].year)
					this.modelOneDataOne[2].dataListOne.push(allList.rkqkOne.swrkList[i].deathNum)
					this.modelOneDataOne[2].dataListTwo.push(allList.rkqkOne.swrkList[i].deathRate)
				}
				this.modelTwoDataOne.nameList=[],this.modelTwoDataOne.dataListOne=[],this.modelTwoDataTwo.nameList=[],this.modelTwoDataTwo.dataListOne=[],this.modelTwoDataTwo.dataListTwo=[];
				for(var i in allList.rkqkTwo.syqkList){
					this.modelTwoDataOne.nameList.push(allList.rkqkTwo.syqkList[i].year)
					this.modelTwoDataOne.dataListOne.push(allList.rkqkTwo.syqkList[i].syRatio)
					this.modelTwoDataTwo.nameList.push(allList.rkqkTwo.syqkList[i].year)
					this.modelTwoDataTwo.dataListOne.push(allList.rkqkTwo.syqkList[i].birthNum)
					this.modelTwoDataTwo.dataListTwo.push(allList.rkqkTwo.syqkList[i].secNum)
				}
				this.modelThreeDataOne.nameList=[],this.modelThreeDataTwo.nameList=[],this.modelThreeDataOne.dataListOne=[],this.modelThreeDataOne.dataListTwo=[],this.modelThreeDataTwo.dataListOne=[],this.modelThreeDataTwo.dataListTwo=[];
				for(var i in allList.rkqkThree.qsrkgcList){
					this.modelThreeDataOne.nameList.push(allList.rkqkThree.qsrkgcList[i].year)
					this.modelThreeDataTwo.nameList.push(allList.rkqkThree.qsrkgcList[i].year)
					this.modelThreeDataOne.dataListOne.push(allList.rkqkThree.qsrkgcList[i].czrk)
					this.modelThreeDataOne.dataListTwo.push(allList.rkqkThree.qsrkgcList[i].hjrk)
					this.modelThreeDataTwo.dataListOne.push(allList.rkqkThree.qsrkgcList[i].urban)
					this.modelThreeDataTwo.dataListTwo.push(allList.rkqkThree.qsrkgcList[i].czhl)
				}
				this.modelForeDataOne.dataList[0].labelData=[],this.modelForeDataOne.dataList[0].dataListOne=[],this.modelForeDataOne.dataList[0].dataListTwo=[],this.modelForeDataOne.dataList[1].labelData=[],this.modelForeDataOne.dataList[1].dataListOne=[],this.modelForeDataOne.dataList[1].dataListTwo=[]
				for(var i in allList.rkqkFour.rknljztList){
					this.modelForeDataOne.dataList[0].labelData.push(allList.rkqkFour.rknljztList[i].ageRange+'('+allList.rkqkFour.rknljztList[i].ageName+'岁)')
					var sum = Number(allList.rkqkFour.rknljztList[i].maleNum)+Number(allList.rkqkFour.rknljztList[i].femaleNum)
					this.modelForeDataOne.dataList[0].dataListOne.push(0-((Number(allList.rkqkFour.rknljztList[i].maleNum)/sum)*100).toFixed(1))
					this.modelForeDataOne.dataList[0].dataListTwo.push(((Number(allList.rkqkFour.rknljztList[i].femaleNum)/sum)*100).toFixed(1))
				}
				for(var i in allList.rkqkFour.csrkxbbList){
					this.modelForeDataOne.dataList[1].labelData.push(allList.rkqkFour.csrkxbbList[i].year+'年出生  ')
					var sum = Number(allList.rkqkFour.csrkxbbList[i].male)+Number(allList.rkqkFour.csrkxbbList[i].female)
					this.modelForeDataOne.dataList[1].dataListOne.push(0-((Number(allList.rkqkFour.csrkxbbList[i].male)/sum)*100).toFixed(1))
					this.modelForeDataOne.dataList[1].dataListTwo.push(((Number(allList.rkqkFour.csrkxbbList[i].female)/sum)*100).toFixed(1))
				}
				
				for(var i in allList.rkqkFour.xbbList){
					this.modelForeDataOne.lnrkzb = allList.rkqkFour.xbbList[0].agedRatio
					this.modelForeDataOne.ztxbb = allList.rkqkFour.xbbList[0].ztxbb
					this.modelForeDataOne.csxbb = allList.rkqkFour.xbbList[0].csxbb
				}
				
				this.modelFiveDataOne.data=allList.rkqkFive.rkqkFiveVos;
				
				this.modelSixDataOne.nameList=[],this.modelSixDataOne.dataListOne=[],this.modelSixDataOne.dataListTwo=[],this.modelSixDataOne.dataListThree=[]
				for(var i in allList.rkqkSix.hlnnblList){
					this.modelSixDataOne.nameList.push(allList.rkqkSix.hlnnblList[i].year)
					this.modelSixDataOne.dataListOne.push(allList.rkqkSix.hlnnblList[i].male)
					this.modelSixDataOne.dataListTwo.push(allList.rkqkSix.hlnnblList[i].female)
					this.modelSixDataOne.dataListThree.push(allList.rkqkSix.hlnnblList[i].ratio)
				}
				this.modelSixDataTwo.nameList=[],this.modelSixDataTwo.dataListOne=[],this.modelSixDataTwo.dataListTwo=[]
				for(var i in allList.rkqkSix.jhjtsList){
					this.modelSixDataTwo.nameList.push(allList.rkqkSix.jhjtsList[i].year)
					this.modelSixDataTwo.dataListOne.push(allList.rkqkSix.jhjtsList[i].marryNum)
					this.modelSixDataTwo.dataListTwo.push(allList.rkqkSix.jhjtsList[i].growthRate)
				}
				
				// this.openFullScreen2(false)
				this.loading = false;
				this.showAll = true;
			},
			openFullScreen2(state) {
				const loading = this.$loading({
					lock: true,
					text: 'Loading',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				});
				if(state == false){
					loading.close();
				}
			}
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
			.modelForeEchartsOne{
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
