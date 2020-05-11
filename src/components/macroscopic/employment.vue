<template>
	<div class="mainbox">
		<div class="titleBox">湖北省<span>{{year}}年</span>就业及收入
			<div class="buttons" @click="downLoad" style="position: relative;">下载<a style="width: 100%;height: 100%;position: absolute;left: 0;top: 0;" :href="baseUrlOne"></a></div>
		</div>
		<div style="width: 100%;height: 200px; z-index: 9;" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(255, 255, 255, 0.1)" v-show="loading"></div>
		<div class="modelDetailsBox" v-if="showAll">
			<el-row>
				<el-col :span='24'>
					<div class="modelOneBox">
						<div class="modelboxs">
							<subheading :items='modelOneList' :titles='"全社会从业人员情况"' @changeIndex='modelOneChange'></subheading>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div class="dataDetailBox">
									<p style="color: #666666;">全社会从业人员</p>
									<p style="color: #487fff;">({{modelOneDetail.year}}年)</p>
									<div><span>{{modelOneDetail.qshcy}} </span> 万人</div>
									<p>同比上期<span :class="modelOneDetail.type">{{modelOneDetail.cyratio.toFixed(2)}}%<i></i></span></p>
									<p style="color: #666666;margin-top: 24px;">劳动年龄人口</p>
									<p style="color: #487fff;">({{modelOneDetail.year}}年)</p>
									<div><span>{{modelOneDetail.ldrk}} </span> 万人</div>
									<!-- <p>同比上期<span class="down">7.8%<i></i></span></p> -->
								</div>
								<div class="emmodelOneEchartsBoxs">
									<init-echartsone :id='"emmodelOneEchartsBoxs"' :datas = 'modelOneDataOne[modelOneIndex]' v-if="showModelOne"></init-echartsone>
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
							<div class="levelTwoTitle"><span></span>就业人数及失业人数</div>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div class="dataDetailBox">
									<p style="color: #666666;">新增就业人口</p>
									<p style="color: #487fff;">({{modelTwoDataOne.year}}年)</p>
									<div><span>{{modelTwoDataOne.xzjyrs}} </span> 万人</div>
									<p>同比上期<span :class="modelTwoDataOne.xzjyRatio>0?'up':'down'">{{modelTwoDataOne.xzjyRatio}}%<i></i></span></p>
									<p style="color: #666666;margin-top: 24px;">失业人口</p>
									<p style="color: #487fff;">({{modelTwoDataOne.year}}年)</p>
									<div><span>{{modelTwoDataOne.syrs}} </span> 万人</div>
									<p>同比上期<span :class="modelTwoDataOne.syRatio>0?'up':'down'">{{modelTwoDataOne.syRatio}}%<i></i></span></p>
								</div>
								<div class="emmodelTwoEchartsBoxs">
									<init-echartsseven :id='"emmodelTwoEchartsBoxs"' :datas = 'modelTwoDataOne'></init-echartsseven>
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
							<div class="levelTwoTitle"><span></span>全省人才分布</div>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div class="emmodelThreeEchartsOne">
									<emecharts-one :id='"emmodelThreeEchartsOne"' :datas='modelThreeDataOne'></emecharts-one>
								</div>
								<div class="emmodelThreeEchartsTwo">
									<emecharts-two :id='"emmodelThreeEchartsTwo"' :datas='modelThreeDataTwo'></emecharts-two>
								</div>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
			<el-row v-if="false">
				<el-col :span='24'>
					<div class="modelForeBox">
						<div class="modelboxs">
							<subheading :items='modelForeList' :titles='"主要城市人才分布"' @changeIndex='modelForeChange'></subheading>
							<div style="width: 100%;height: calc(100% - 56px);">
								<map-echarts :id = '"emmodelForeEchartsOne"' :datas = 'modelForeDataOne[modelForeIndex]' v-if="showModelFore"></map-echarts>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
			<el-row v-if="false">
				<el-col :span='24'>
					<div class="modelFiveBox">
						<div class="modelboxs">
							<div class="levelTwoTitle"><span></span>主要城市文教、科技情况</div>
							<div style="width: 100%;height: calc(100% - 56px);">
								<map-echarts :id = '"emmodelFiveEchartsOne"' :datas = 'modelFiveDataOne'></map-echarts>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span='24'>
					<div class="modelSixBox">
						<div class="modelboxs">
							<div class="levelTwoTitle"><span></span>职工平均工资</div>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div class="emmodelSixEchartsOne">
									<init-echartsseven :id='"emmodelSixEchartsOne"' :datas = 'modelSixDataOne'></init-echartsseven>
								</div>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span='24'>
					<div class="modelSevenBox">
						<div class="modelboxs">
							<div class="levelTwoTitle"><span></span>分行业在岗职工平均工资</div>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div class="emmodelSevenEchartsOne">
									<emecharts-three :id='"emmodelSevenEchartsOne"' :datas='modelSevenDataOne'></emecharts-three>
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
	import initEchartsseven from '../initEchartsseven.vue'
	import emechartsOne from '../emechartsOne.vue'
	import emechartsTwo from '../emechartsTwo.vue'
	import emechartsThree from '../emechartsThree.vue'
	import mapEcharts from '../mapEcharts.vue'
	import subheading from '../subheading.vue'
	import {employmentApi} from '../../util/api.js'
	export default{
		components:{subheading,initEchartsone,initEchartsseven,mapEcharts,emechartsOne,emechartsTwo,emechartsThree},
		data(){
			return{
				loading:true,
				fullscreenLoading: true,
				baseUrlOne:'',
				modelOneList:[
					{label: '总人口数', value: 1},
					{label: '按产业', value: 2},
					{label: '按城乡', value: 3}
				],
				modelForeList:[
					{label: '学历分布', value: 1},
					{label: '行业分布', value: 2}
				],
				modelOneDetail:{
					qshcy:0,
					cyratio:0,
					type:'',
					ldrk:0,
					year:2017
				},
				modelOneDataOne:[
				{
					unit:'单位(万人)',
					min:[0,0],
					legendList:['全社会从业人员(万人)','劳动人员人口(万人)'],
					nameList:[],
					dataListOne:[],
					dataListTwo:[],
					color:['#487fff','#84a9ff','#ffc56a','#ffd99e']
				},{
					unit:'单位(万人)',
					type:3,
					min:[0,0],
					legendList:['第一产业从业(万人)','第二产业从业(万人)','第三产业从业(万人)'],
					nameList:[],
					dataListOne:[],
					dataListTwo:[],
					dataListThree:[],
					color:['#487fff','#84a9ff','#ffc56a','#ffd99e','#f0db4b','#fbeb81']
				},{
					unit:'单位(万人)',
					legendList:['城镇从业人员(万人)','农村人员人口(万人)'],
					nameList:[],
					min:[1000,0],
					dataListOne:[],
					dataListTwo:[],
					color:['#487fff','#84a9ff','#ffc56a','#ffd99e']
				}],
				showModelOne:true,
				modelOneIndex:0,
				modelTwoDataOne:{
					year:0,
					xzjyrs:0,
					xzjyRatio:0,
					syrs:0,
					min:[0,0],
					syRatio:0,
					unit:['单位(万人)','同比(%)'],
					legendList:['新增就业人口(万人)','失业人数(万人)','新增就业人数同比(%)','失业人数同比(%)'],
					nameList:[],
					dataListOne:[],
					dataListTwo:[],
					dataListThree:[],
					dataListFore:[],
					color:['#487fff','#84a9ff','#f0db4b','#fbeb81','#ffc770','#5bb8ff']
				},
				modelThreeDataOne:{
					dataList:[]
				},
				modelThreeDataTwo:{
					dataListOne:[],
					dataListTwo:[],
				},
				modelForeDataOne:[{
					type:2,
					unit:'人',
					size:[0,1000],
					title:'',
					data : [
						
					]
				},{
					type:2,
					unit:'人',
					size:[0,1000],
					title:'',
					data : [
						
					]
				}],
				showModelFore:true,
				modelForeIndex:0,
				modelFiveDataOne:{
					type:2,
					unit:'人',
					title:'',
					size:[0,1000],
					data : [
						
					]
				},
				modelSixDataOne:{
					unit:['单位(万元)','同比增长率(%)'],
					legendList:['职工年平均工资(万元)','同比名义增长率(%)','排除物价因素增长率(%)'],
					min:[30000,0],
					nameList:[],
					dataListOne:[],
					dataListTwo:[],
					dataListThree:[],
					color:['#ffc56a','#ffd99e','#5ab7ff','#47e57f']
				},
				modelSevenDataOne:{
					nameList:[],
					dataListOne:[]
				},
				showAll:false,
				year:2017
			}
		},
		mounted() {
			this.getData(2017);
		},
		methods:{
			async getData(params){
				this.loading = true;
				this.showAll = false;
				this.modelOneIndex = 0;
				this.modelForeIndex = 0;
				this.year = params;
				this.baseUrlOne = IPConfigOne+'/api/jysr/downloadExcel?year='+this.year;
				try {
					let res = await employmentApi(params)
					console.log(res)
					this.$store.commit('saveemploymentData',res.data)
				} catch (err) {
					console.log(err)
				} 
				var allList = this.$store.state.employmentData;
				this.modelOneDataOne[0].nameList = [],this.modelOneDataOne[1].nameList = [],this.modelOneDataOne[2].nameList = []
				this.modelOneDataOne[0].dataListOne = [],this.modelOneDataOne[1].dataListOne = [],this.modelOneDataOne[2].dataListOne = []
				this.modelOneDataOne[0].dataListTwo = [],this.modelOneDataOne[1].dataListTwo = [],this.modelOneDataOne[2].dataListTwo = [],this.modelOneDataOne[1].dataListThree=[]
				for(var i in allList.jysrOne.qshcyrsListLeft){
					this.modelOneDetail.year = allList.jysrOne.qshcyrsListLeft[0].year
					this.modelOneDetail.qshcy = allList.jysrOne.qshcyrsListLeft[0].cyryNum
					if(Number(allList.jysrOne.qshcyrsListLeft[0].cyryRatio)>0){
						this.modelOneDetail.cyratio = Number(allList.jysrOne.qshcyrsListLeft[0].cyryRatio) * 100
						this.modelOneDetail.type='up'
					}else if(Number(allList.jysrOne.qshcyrsListLeft[0].cyryRatio)<0){
						this.modelOneDetail.cyratio = Number(allList.jysrOne.qshcyrsListLeft[0].cyryRatio) * -100
						this.modelOneDetail.type='down'
					}
					this.modelOneDetail.ldrk = allList.jysrOne.qshcyrsListLeft[0].ldrkNum 
				}
				for( var i in allList.jysrOne.qshcyrsList){
					this.modelOneDataOne[0].nameList.push(allList.jysrOne.qshcyrsList[i].year)
					this.modelOneDataOne[0].dataListOne.push(allList.jysrOne.qshcyrsList[i].cyryNum)
					this.modelOneDataOne[0].dataListTwo.push(allList.jysrOne.qshcyrsList[i].ldrkNum)
				}
				for(var i in allList.jysrOne.fcycyqkList){
					this.modelOneDataOne[1].nameList.push(allList.jysrOne.fcycyqkList[i].year)
					this.modelOneDataOne[1].dataListOne.push(allList.jysrOne.fcycyqkList[i].first)
					this.modelOneDataOne[1].dataListTwo.push(allList.jysrOne.fcycyqkList[i].second)
					this.modelOneDataOne[1].dataListThree.push(allList.jysrOne.fcycyqkList[i].third)
				}
				for( var i in allList.jysrOne.fcxcyrsList){
					this.modelOneDataOne[2].nameList.push(allList.jysrOne.fcxcyrsList[i].year)
					this.modelOneDataOne[2].dataListOne.push(allList.jysrOne.fcxcyrsList[i].urban)
					this.modelOneDataOne[2].dataListTwo.push(allList.jysrOne.fcxcyrsList[i].rural)
				}
				this.modelTwoDataOne.nameList=[],this.modelTwoDataOne.dataListOne=[],this.modelTwoDataOne.dataListTwo=[],this.modelTwoDataOne.dataListThree=[],this.modelTwoDataOne.dataListFore=[];
				this.modelTwoDataOne.year = allList.jysrTwo.jyqkListLeft[0].year;
				this.modelTwoDataOne.xzjyrs = allList.jysrTwo.jyqkListLeft[0].xzjyrs;
				this.modelTwoDataOne.xzjyRatio = Number(allList.jysrTwo.jyqkListLeft[0].xzjyRatio);
				this.modelTwoDataOne.syrs = allList.jysrTwo.jyqkListLeft[0].syrs;
				this.modelTwoDataOne.syRatio = Number(allList.jysrTwo.jyqkListLeft[0].syRatio);
				for(var i in allList.jysrTwo.jyqkList){
					this.modelTwoDataOne.nameList.push(allList.jysrTwo.jyqkList[i].year)
					this.modelTwoDataOne.dataListOne.push(allList.jysrTwo.jyqkList[i].xzjyrs)
					this.modelTwoDataOne.dataListTwo.push(allList.jysrTwo.jyqkList[i].syrs)
					this.modelTwoDataOne.dataListThree.push(allList.jysrTwo.jyqkList[i].xzjyRatio)
					this.modelTwoDataOne.dataListFore.push(allList.jysrTwo.jyqkList[i].syRatio)
				}
				this.modelThreeDataOne.dataList=[
					{name:'专科生',value:Number(allList.jysrThree.xlqkMap.xlqkList[0].zksNum),selected:true},
					{name:'硕士生',value:Number(allList.jysrThree.xlqkMap.xlqkList[0].sssNum)},
					{name:'本科生',value:Number(allList.jysrThree.xlqkMap.xlqkList[0].bksNum)},
					{name:'博士生',value:Number(allList.jysrThree.xlqkMap.xlqkList[0].bssNum)},
				]
				this.modelThreeDataTwo.dataListOne = [
					{value:45,name:'第一产业',selected:true},{value:56,name:'第二产业'},{value:76,name:'第三产业'}
				]
				this.modelThreeDataTwo.dataListTwo = [];
				this.modelThreeDataTwo.dataListTwo = [
					{value:Number(allList.jysrThree.fhycyrsMap.fhycyrsList[0].wtylNum),name:'文体娱乐业'},
					{value:Number(allList.jysrThree.fhycyrsMap.fhycyrsList[0].jzdcNum),name:'建筑地产业'},
					{value:Number(allList.jysrThree.fhycyrsMap.fhycyrsList[0].nlnyNum),name:'农、林、牧、渔业'},
					{value:Number(allList.jysrThree.fhycyrsMap.fhycyrsList[0].ckgyNum),name:'采矿供应业'},
					{value:Number(allList.jysrThree.fhycyrsMap.fhycyrsList[0].ggglNum),name:'公共管理业'},
					{value:Number(allList.jysrThree.fhycyrsMap.fhycyrsList[0].jyNum),name:'教育业'},
					{value:Number(allList.jysrThree.fhycyrsMap.fhycyrsList[0].wsgzNum),name:'卫生工作'},
					{value:Number(allList.jysrThree.fhycyrsMap.fhycyrsList[0].jtysNum),name:'交通运输业'},
					{value:Number(allList.jysrThree.fhycyrsMap.fhycyrsList[0].otherNum),name:'其他产业'},
					
				]
				//缺模块四地图数据
				this.modelForeDataOne[0].data = allList.jysrFour.jysrFourVos;
				this.modelForeDataOne[1].data = allList.jysrFour.cshyFourVos;
				//缺模块五地图数据
				this.modelFiveDataOne.data=allList.jysrFive.jysrFiveVos;
				
				this.modelSixDataOne.nameList=[],this.modelSixDataOne.dataListOne=[],this.modelSixDataOne.dataListTwo=[],this.modelSixDataOne.dataListThree=[]
				for(var i in allList.jysrSix.zgpjgzList){
					this.modelSixDataOne.nameList.push(allList.jysrSix.zgpjgzList[i].year)
					this.modelSixDataOne.dataListOne.push(allList.jysrSix.zgpjgzList[i].zgpjgz)
					this.modelSixDataOne.dataListTwo.push(allList.jysrSix.zgpjgzList[i].tbRatio)
					this.modelSixDataOne.dataListThree.push(allList.jysrSix.zgpjgzList[i].pcRatio)
				}
				this.modelSevenDataOne.nameList=[],this.modelSevenDataOne.dataListOne=[]
				for(var i in allList.jysrSeven.fhypjgzList){
					this.modelSevenDataOne.nameList.push(allList.jysrSeven.fhypjgzList[i].workName)
					this.modelSevenDataOne.dataListOne.push(Number(allList.jysrSeven.fhypjgzList[i].pjgz).toFixed(0))
				}
				
				this.showAll = true;
				this.loading = false;
			}, 
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
			downLoad(){
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.modelDetailsBox{
		width: 100%;
		height: auto;
		.modelOneBox{
			height: 366px;
			background: #fff;
			.emmodelOneEchartsBoxs{
				height: 100%;
				width: 79%;
				float: left;
			}
			.dataDetailBox{
				width: 18%;
				margin-left: 2%;
				height: 202px;
				float: left;
				margin-top: 58px;
				border-right: 1px dashed #eeeeee;
				p{
					font-size: 14px;
					line-height: 21px;
					padding-left: 45px;
					.up{
						color: #19c375;
						padding-left: 5px;
						i{
							background: url(../../assets/img/upicon.png);
							width: 10px;
							height: 13px;
							display: inline-block;
						}
					}
					.down{
						color: #ef9751;
						padding-left: 5px;
						i{
							background: url(../../assets/img/downicon.png);
							width: 10px;
							height: 13px;
							display: inline-block;
						}
					}
				}
				div{
					line-height: 28px;
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
			.emmodelTwoEchartsBoxs{
				height: 100%;
				width: 79%;
				float: left;
			}
			.dataDetailBox{
				width: 18%;
				margin-left: 2%;
				height: 202px;
				float: left;
				margin-top: 58px;
				border-right: 1px dashed #eeeeee;
				p{
					font-size: 14px;
					line-height: 21px;
					padding-left: 45px;
					.up{
						color: #19c375;
						padding-left: 5px;
						i{
							background: url(../../assets/img/upicon.png);
							width: 10px;
							height: 13px;
							display: inline-block;
						}
					}
					.down{
						color: #ef9751;
						padding-left: 5px;
						i{
							background: url(../../assets/img/downicon.png);
							width: 10px;
							height: 13px;
							display: inline-block;
						}
					}
				}
				div{
					line-height: 28px;
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
		.modelThreeBox{
			height: 432px;
			background: #fff;
			.emmodelThreeEchartsOne{
				width: 45%;
				height: 100%;
				float: left;
			}
			.emmodelThreeEchartsTwo{
				width: 55%;
				height: 100%;
				float: left;
			}
		}
		.modelForeBox{
			height: 432px;
			background: #fff;
		}
		.modelFiveBox{
			height: 430px;
			background: #fff;
		}
		.modelSixBox{
			height: 430px;
			background: #fff;
			.emmodelSixEchartsOne{
				width: 100%;
				height: 100%;
			}
		}
		.modelSevenBox{
			height: 418px;
			background: #fff;
			.emmodelSevenEchartsOne{
				width: 100&;
				height: 100%;
			}
		}
	}
</style>
