<template>
	<div class="mainbox">
		<div class="titleBox">湖北省<span>{{year}}年</span>社会保障情况
			<div class="buttons" @click="downLoad" style="position: relative;">下载<a style="width: 100%;height: 100%;position: absolute;left: 0;top: 0;" :href="baseUrlOne"></a></div>
		</div>
		<div style="width: 100%;height: 200px; z-index: 9;" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(255, 255, 255, 0.1)" v-show="loading"></div>
		<div class="modelDetailsBox" v-if="showAll">
			<el-row>
				<el-col :span='24'>
					<div class="modelOneBox">
						<div class="modelboxs">
							<subheading :items='modelOneList' :titles='"各项社会保险征缴情况"' @changeIndex='modelOneChange'></subheading>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div class="levelTwoechartsBoxs">
									<init-echartsthree :id='"somodelOneEchartsOne"' :datas = 'modelOneDataOne[modelOneIndex]' v-if="showModelOne"></init-echartsthree>
								</div>
								<div class="levelTwoechartsBoxs">
									<emecharts-one :id='"somodelOneEchartsTwo"' :datas='modelOneDataTwo[modelOneIndex]' v-if="showModelOne"></emecharts-one>
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
							<subheading :items='modelTwoList' :titles='"各项社会保险征缴走势分析"' @changeIndex='modelTwoChange'></subheading>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div class="levelTwoechartsBoxs">
									<init-echartsone :id='"somodelTwoEchartsOne"' :datas = 'modelTwoDataOne[modelTwoIndex]' v-if="showModelTwo"></init-echartsone>
								</div>
								<div class="levelTwoechartsBoxs">
									<init-echartstwo :id='"somodelTwoEchartsTwo"' :datas = 'modelTwoDataTwo[modelTwoIndex]' v-if="showModelTwo"></init-echartstwo>
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
				</el-col>
			</el-row>
			<el-row>
				<el-col :span='24'>
					<div class="modelForeBox">
						<div class="modelboxs">
							<subheading :items='modelForeList' :titles='"各项社会参保人数走势分析"' @changeIndex='modelForeChange'></subheading>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div class="levelTwoechartsBoxs">
									<init-echartsfive :id='"somodelForeEchartsOne"' :datas = 'modelForeDataOne[modelForeIndex]' v-if="showModelFore"></init-echartsfive>
								</div>
								<div class="levelTwoechartsBoxs">
									<init-echartsthree :id='"somodelForeEchartsTwo"' :datas = 'modelForeDataTwo[modelForeIndex]' v-if="showModelFore"></init-echartsthree>
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
							<subheading :items='modelFiveList' :titles='"各项社会保险参保情况地区分析"' @changeIndex='modelFiveChange'></subheading>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div style="width: 100%;height: 100%;">
									<init-echartsone :id='"somodelFiveEchartsOne"' :datas = 'modelFiveData[modelFiveIndex]' v-if="showModelFive"></init-echartsone>
								</div>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span='24'>
					<div class="modelSixBox">
						<div class="modelboxs">
							<div class="levelTwoTitle"><span></span>公积金缴纳情况分析</div>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div style="float: left;width: 40%;margin: 0 5%;height: 100%;">
									<init-echartssix :id='"somodelSixEchartsOne"' :datas = 'modelSixDataOne'></init-echartssix>
								</div>
								<div style="float: left;width: 40%;margin: 0 5%;height: 100%;">
									<init-echartsone :id='"somodelSixEchartsTwo"' :datas = 'modelSixDataTwo'></init-echartsone>
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
	import initEchartstwo from '../initEchartstwo.vue'
	import initEchartsthree from '../initEchartsthree.vue'
	import initEchartsfore from '../initEchartsfore.vue'
	import initEchartssix from '../initEchartssix.vue'
	import emechartsOne from '../emechartsOne.vue'
	import initEchartsfive from '../initEchartsfive.vue'
	import subheading from '../subheading.vue'
	import {socialSecurityApi} from '../../util/api.js'
	export default{
		components:{emechartsOne,subheading,initEchartsone,initEchartstwo,initEchartsthree,initEchartsfore,initEchartssix,initEchartsfive},
		data(){
			return{
				baseUrlOne:'',
				modelOneList:[
					{label: '征缴收入', value: 1},
					{label: '支出', value: 2}
				],
				modelTwoList:[
					{label: '养老保险', value: 1},
					{label: '医疗保险', value: 2},
					{label: '失业保险', value: 3},
					{label: '工伤保险', value: 4},
					{label: '生育保险', value: 5}
				],
				modelForeList:[
					{label: '养老保险', value: 1},
					{label: '医疗保险', value: 2},
					{label: '失业保险', value: 3},
					{label: '工伤保险', value: 4},
					{label: '生育保险', value: 5}
				],
				modelFiveList:[
					{label: '养老保险', value: 1},
					{label: '医疗保险', value: 2},
					{label: '失业保险', value: 3},
					{label: '工伤保险', value: 4},
					{label: '生育保险', value: 5}
				],
				modelOneDataOne:[{
					unit:'亿元',
					titles:'',
					nameList:['养老保险','医疗保险','失业保险','工伤保险','生育保险'],
					dataListOne:[],
					color:['#ffd99d','#ffc66c']
				},{
					unit:'亿元',
					titles:'',
					nameList:['养老保险','医疗保险','失业保险','工伤保险','生育保险'],
					dataListOne:[],
					color:['#ffd99d','#ffc66c']
				}],
				modelOneDataTwo:[{
					dataList:[]
				},{
					dataList:[]
				}],
				showModelOne:true,
				modelOneIndex:0,
				modelTwoDataOne:[{
					unit:'单位(万元)',
					min:[0,0],
					legendList:['征缴收入(万元)','支出(万元)'],
					nameList:[],
					dataListOne:[],
					dataListTwo:[],
					color:['#487fff','#84a9ff','#80ebf5','#3dc5dd']
				},{
					unit:'单位(万元)',
					legendList:['征缴收入(万元)','支出(万元)'],
					nameList:[],
					min:[0,0],
					dataListOne:[],
					dataListTwo:[],
					color:['#487fff','#84a9ff','#80ebf5','#3dc5dd']
				},{
					unit:'单位(万元)',
					legendList:['征缴收入(万元)','支出(万元)'],
					nameList:[],
					min:[0,0],
					dataListOne:[],
					dataListTwo:[],
					color:['#487fff','#84a9ff','#80ebf5','#3dc5dd']
				},{
					unit:'单位(万元)',
					legendList:['征缴收入(万元)','支出(万元)'],
					nameList:[],
					min:[0,0],
					dataListOne:[],
					dataListTwo:[],
					color:['#487fff','#84a9ff','#80ebf5','#3dc5dd']
				},{
					unit:'单位(万元)',
					legendList:['征缴收入(万元)','支出(万元)'],
					nameList:[],
					min:[0,0],
					dataListOne:[],
					dataListTwo:[],
					color:['#487fff','#84a9ff','#80ebf5','#3dc5dd']
				}],
				modelTwoDataTwo:[{
					unit:'单位(万元)',
					legendList:['累计结余(万元)'],
					nameList:[],
					min:[0,0],
					dataListOne:[],
					color:['#80ebf5','#3dc5dd']
				},{
					unit:'单位(万元)',
					legendList:['累计结余(万元)'],
					nameList:[],
					min:[0,0],
					dataListOne:[],
					color:['#80ebf5','#3dc5dd']
				},{
					unit:'单位(万元)',
					legendList:['累计结余(万元)'],
					nameList:[],
					min:[0,0],
					dataListOne:[],
					color:['#80ebf5','#3dc5dd']
				},{
					unit:'单位(万元)',
					legendList:['累计结余(万元)'],
					nameList:[],
					min:[0,0],
					dataListOne:[],
					color:['#80ebf5','#3dc5dd']
				},{
					unit:'单位(万元)',
					legendList:['累计结余(万元)'],
					nameList:[],
					min:[0,0],
					dataListOne:[],
					color:['#80ebf5','#3dc5dd']
				},],
				showModelTwo:true,
				modelTwoIndex:0,
				modelThreeDataOne:{
					unit:'万人',
					titles:'',
					nameList:['养老保险','医疗保险','失业保险','工伤保险','生育保险'],
					dataListOne:[],
					color:['#80ebf5','#3dc5dd']
				},
				modelThreeDataTwo:{
					unit:'覆盖率(%)',
					nameList:['养老保险','医疗保险','失业保险','工伤保险','生育保险'],
					dataListOne:[]
				},
				modelForeDataOne:[{
					unit:['单位(万人)','覆盖率(%)'],
					legendList:['参保人数(万人)','覆盖率(%)'],
					min:[1000,0],
					nameList:[],
					dataListOne:[],
					dataListTwo:[]
				},{
					unit:['单位(万人)','覆盖率(%)'],
					legendList:['参保人数(万人)','覆盖率(%)'],
					nameList:[],
					min:[500,0],
					dataListOne:[],
					dataListTwo:[]
				},{
					unit:['单位(万人)','覆盖率(%)'],
					legendList:['参保人数(万人)','覆盖率(%)'],
					nameList:[],
					min:[500,0],
					dataListOne:[],
					dataListTwo:[]
				},{
					unit:['单位(万人)','覆盖率(%)'],
					legendList:['参保人数(万人)','覆盖率(%)'],
					nameList:[],
					min:[500,0],
					dataListOne:[],
					dataListTwo:[]
				},{
					unit:['单位(万人)','覆盖率(%)'],
					legendList:['参保人数(万人)','覆盖率(%)'],
					nameList:[],
					min:[400,0],
					dataListOne:[],
					dataListTwo:[]
				}],
				modelForeDataTwo:[{
					unit:'个月',
					titles:'预计可发放月数',
					nameList:[],
					dataListOne:[],
					color:['#84a9ff','#487fff']
				},{
					unit:'个月',
					titles:'预计可发放月数',
					nameList:[],
					dataListOne:[],
					color:['#84a9ff','#487fff']
				},{
					unit:'个月',
					titles:'预计可发放月数',
					nameList:[],
					dataListOne:[],
					color:['#84a9ff','#487fff']
				},{
					unit:'个月',
					titles:'预计可发放月数',
					nameList:[],
					dataListOne:[],
					color:['#84a9ff','#487fff']
				},{
					unit:'个月',
					titles:'预计可发放月数',
					nameList:[],
					dataListOne:[],
					color:['#84a9ff','#487fff']
				},],
				showModelFore:true,
				modelForeIndex:0,
				modelFiveData:[{
					unit:'单位(万元)',
					min:[0,0],
					legendList:['征缴收入(万元)','支出(万元)'],
					nameList:[],
					dataListOne:[],
					dataListTwo:[],
					color:['#487fff','#84a9ff','#ffc66d','#ffd89a']
				},{
					unit:'单位(万元)',
					legendList:['征缴收入(万元)','支出(万元)'],
					min:[0,0],
					nameList:[],
					dataListOne:[],
					dataListTwo:[],
					color:['#487fff','#84a9ff','#ffc66d','#ffd89a']
				},{
					unit:'单位(万元)',
					legendList:['征缴收入(万元)','支出(万元)'],
					nameList:[],
					min:[0,0],
					dataListOne:[],
					dataListTwo:[],
					color:['#487fff','#84a9ff','#ffc66d','#ffd89a']
				},{
					unit:'单位(万元)',
					legendList:['征缴收入(万元)','支出(万元)'],
					nameList:[],
					min:[0,0],
					dataListOne:[],
					dataListTwo:[],
					color:['#487fff','#84a9ff','#ffc66d','#ffd89a']
				},{
					unit:'单位(万元)',
					legendList:['征缴收入(万元)','支出(万元)'],
					nameList:[],
					min:[0,0],
					dataListOne:[],
					dataListTwo:[],
					color:['#487fff','#84a9ff','#ffc66d','#ffd89a']
				},],
				showModelFive:true,
				modelFiveIndex:0,
				modelSixDataOne:{
					unit:['单位(万人)','单位(人)'],
					legendList:['公积金缴存金额(万人)','实缴职工人数(人)'],
					nameList:[],
					min:[0,0],
					dataListOne:[],
					dataListTwo:[],
					color:['#487fff','#84a9ff','#80ebf5','#3dc5dd']
				},
				modelSixDataTwo:{
					unit:'单位(万元)',
					legendList:['年末公积金贷款总额(万元)','年末公积金贷款余额(万元)'],
					nameList:[],
					min:[0,0],
					dataListOne:[],
					dataListTwo:[],
					color:['#80ebf5','#3dc5dd','#f0db4b','#fbeb81']
				},
				showAll:false,
				year:2017,
				loading:true
			}
		},
		mounted() {
			this.getData(2017);
		},
		methods:{
			async getData(params){
				this.showAll = false;
				this.loading = true;
				this.modelOneIndex = 0;
				this.modelTwoIndex = 0;
				this.modelForeIndex = 0;
				this.modelFiveIndex = 0;
				this.year = params;
				this.baseUrlOne = IPConfigOne+'/api/socialsecurity/downloadExcel?year='+this.year;
				try {
					let res = await socialSecurityApi(params)
					console.log(res)
					this.$store.commit('savesocialSecurityData',res.data)
				} catch (err) {
					console.log(err)
				} 
				var allList = this.$store.state.socialSecurityData;
				//缺模块一
				this.modelOneDataOne[0].dataListOne = [allList.shbzOne.levyList[0].endowmentIns,allList.shbzOne.levyList[0].medicalIns,allList.shbzOne.levyList[0].unemployIns,allList.shbzOne.levyList[0].employInjury,allList.shbzOne.levyList[0].maternityIns]
				this.modelOneDataOne[1].dataListOne = [allList.shbzOne.levyList[1].endowmentIns,allList.shbzOne.levyList[1].medicalIns,allList.shbzOne.levyList[1].unemployIns,allList.shbzOne.levyList[1].employInjury,allList.shbzOne.levyList[1].maternityIns]
				this.modelOneDataTwo[0].dataList = [
					{value:Number(allList.shbzOne.levyList[0].endowmentIns),name:'养老保险',selected:true},
					{value:Number(allList.shbzOne.levyList[0].medicalIns),name:'医疗保险'},
					{value:Number(allList.shbzOne.levyList[0].unemployIns),name:'失业保险'},
					{value:Number(allList.shbzOne.levyList[0].employInjury),name:'工伤保险'},
					{value:Number(allList.shbzOne.levyList[0].maternityIns),name:'生育保险'}
				]
				this.modelOneDataTwo[1].dataList = [
					{value:Number(allList.shbzOne.levyList[1].endowmentIns),name:'养老保险',selected:true},
					{value:Number(allList.shbzOne.levyList[1].medicalIns),name:'医疗保险'},
					{value:Number(allList.shbzOne.levyList[1].unemployIns),name:'失业保险'},
					{value:Number(allList.shbzOne.levyList[1].employInjury),name:'工伤保险'},
					{value:Number(allList.shbzOne.levyList[1].maternityIns),name:'生育保险'}
				]
				
				//缺模块二
				for(var i in this.modelTwoDataOne){this.modelTwoDataOne[i].nameList=[];this.modelTwoDataOne[i].dataListOne=[];this.modelTwoDataOne[i].dataListTwo=[]}
				for(var i in this.modelTwoDataTwo){this.modelTwoDataTwo[i].nameList=[];this.modelTwoDataTwo[i].dataListOne=[];}
				var ylbx = allList.shbzTwo.tendencyList.filter(item=>item.typeName=='养老保险');
				for(var i in ylbx){
					this.modelTwoDataOne[0].nameList.push(ylbx[i].year)
					this.modelTwoDataTwo[0].nameList.push(ylbx[i].year)
					this.modelTwoDataOne[0].dataListOne.push(ylbx[i].income)
					this.modelTwoDataOne[0].dataListTwo.push(ylbx[i].expenditure)
					this.modelTwoDataTwo[0].dataListOne.push(ylbx[i].surplus)
				}
				var yilbx = allList.shbzTwo.tendencyList.filter(item=>item.typeName=='医疗保险');
				for(var i in yilbx){
					this.modelTwoDataOne[1].nameList.push(yilbx[i].year)
					this.modelTwoDataTwo[1].nameList.push(yilbx[i].year)
					this.modelTwoDataOne[1].dataListOne.push(yilbx[i].income)
					this.modelTwoDataOne[1].dataListTwo.push(yilbx[i].expenditure)
					this.modelTwoDataTwo[1].dataListOne.push(yilbx[i].surplus)
				}
				var sybx = allList.shbzTwo.tendencyList.filter(item=>item.typeName=='失业保险');
				for(var i in sybx){
					this.modelTwoDataOne[2].nameList.push(sybx[i].year)
					this.modelTwoDataTwo[2].nameList.push(sybx[i].year)
					this.modelTwoDataOne[2].dataListOne.push(sybx[i].income)
					this.modelTwoDataOne[2].dataListTwo.push(sybx[i].expenditure)
					this.modelTwoDataTwo[2].dataListOne.push(sybx [i].surplus)
				}
				var gsbx = allList.shbzTwo.tendencyList.filter(item=>item.typeName=='工伤保险');
				for(var i in gsbx){
					this.modelTwoDataOne[3].nameList.push(gsbx[i].year)
					this.modelTwoDataTwo[3].nameList.push(gsbx[i].year)
					this.modelTwoDataOne[3].dataListOne.push(gsbx[i].income)
					this.modelTwoDataOne[3].dataListTwo.push(gsbx[i].expenditure)
					this.modelTwoDataTwo[3].dataListOne.push(gsbx[i].surplus)
				}
				var shybx = allList.shbzTwo.tendencyList.filter(item=>item.typeName=='生育保险');
				for(var i in shybx){
					this.modelTwoDataOne[4].nameList.push(shybx[i].year)
					this.modelTwoDataTwo[4].nameList.push(shybx[i].year)
					this.modelTwoDataOne[4].dataListOne.push(shybx[i].income)
					this.modelTwoDataOne[4].dataListTwo.push(shybx[i].expenditure)
					this.modelTwoDataTwo[4].dataListOne.push(shybx[i].surplus)
				}
				
				//缺模块三
				var bxList = allList.shbzThree.cbrsList.filter(item=>item.year == this.year)[0]
				this.modelThreeDataOne.dataListOne = [bxList.endowmentIns,bxList.medicalIns,bxList.unemployIns,bxList.employInjury,bxList.maternityIns];
				this.modelThreeDataTwo.dataListOne = [bxList.endRate,bxList.medRate,bxList.uneRate,bxList.empRate,bxList.matRate];
				
				
				//模块四缺少字段
				for(var i in this.modelForeDataOne){this.modelForeDataOne.nameList=[];this.modelForeDataOne.dataListOne=[];this.modelForeDataOne.dataListTwo=[];}
				for(var i in this.modelForeDataTwo){this.modelForeDataTwo.nameList=[];this.modelForeDataTwo.dataListOne=[];}
				for(var j=0;j<this.modelForeDataOne.length;j++){
					for(var i=0;i<allList.shbzFour.numberList.length;i++){
						this.modelForeDataOne[j].nameList.push(allList.shbzFour.numberList[i].year)
					}
				}
				for(var j=0;j<this.modelForeDataTwo.length;j++){
					for(var i=0;i<allList.shbzFour.numberList.length;i++){
						this.modelForeDataTwo[j].nameList.push(allList.shbzFour.numberList[i].year)
					}
				}
				for(var i=0;i<allList.shbzFour.numberList.length;i++){
					this.modelForeDataOne[0].dataListOne.push(allList.shbzFour.numberList[i].endowmentIns)
					this.modelForeDataOne[1].dataListOne.push(allList.shbzFour.numberList[i].medicalIns)
					this.modelForeDataOne[2].dataListOne.push(allList.shbzFour.numberList[i].unemployIns)
					this.modelForeDataOne[3].dataListOne.push(allList.shbzFour.numberList[i].employInjury)
					this.modelForeDataOne[4].dataListOne.push(allList.shbzFour.numberList[i].maternityIns)
					this.modelForeDataOne[0].dataListTwo.push(allList.shbzFour.numberList[i].endRate)
					this.modelForeDataOne[1].dataListTwo.push(allList.shbzFour.numberList[i].medRate)
					this.modelForeDataOne[2].dataListTwo.push(allList.shbzFour.numberList[i].uneRate)
					this.modelForeDataOne[3].dataListTwo.push(allList.shbzFour.numberList[i].empRate)
					this.modelForeDataOne[4].dataListTwo.push(allList.shbzFour.numberList[i].matRate)
				}
				for(var i=0;i<allList.shbzFour.ffysList.length;i++){
					this.modelForeDataTwo[0].dataListOne.push(allList.shbzFour.ffysList[i].endowmentIns)
					this.modelForeDataTwo[1].dataListOne.push(allList.shbzFour.ffysList[i].medicalIns)
					this.modelForeDataTwo[2].dataListOne.push(allList.shbzFour.ffysList[i].unemployIns)
					this.modelForeDataTwo[3].dataListOne.push(allList.shbzFour.ffysList[i].employInjury)
					this.modelForeDataTwo[4].dataListOne.push(allList.shbzFour.ffysList[i].maternityIns)
				}
				//模块五
				for(var i in this.modelFiveData){this.modelFiveData.nameList=[];this.modelFiveData.dataListOne=[];this.modelFiveData.dataListTwo=[];}
				for(var i=0;i<this.modelFiveData.length;i++){
					for(var j=0;j<allList.shbzFive.cityanalysisList.length;j++){
						this.modelFiveData[i].nameList.push(allList.shbzFive.cityanalysisList[j].city)
					}
				}
				for(var i in allList.shbzFive.cityanalysisList){
					this.modelFiveData[0].dataListOne.push(allList.shbzFive.cityanalysisList[i].yanglaosr)
					this.modelFiveData[0].dataListTwo.push(allList.shbzFive.cityanalysisList[i].yanglaozc)
					this.modelFiveData[1].dataListOne.push(allList.shbzFive.cityanalysisList[i].yiliaosr)
					this.modelFiveData[1].dataListTwo.push(allList.shbzFive.cityanalysisList[i].yiliaozc)
					this.modelFiveData[2].dataListOne.push(allList.shbzFive.cityanalysisList[i].shiyesr)
					this.modelFiveData[2].dataListTwo.push(allList.shbzFive.cityanalysisList[i].shiyezc)
					this.modelFiveData[3].dataListOne.push(allList.shbzFive.cityanalysisList[i].gongshangsr)
					this.modelFiveData[3].dataListTwo.push(allList.shbzFive.cityanalysisList[i].gongshangzc)
					this.modelFiveData[4].dataListOne.push(allList.shbzFive.cityanalysisList[i].shengyusr)
					this.modelFiveData[4].dataListTwo.push(allList.shbzFive.cityanalysisList[i].shengyuzc)
				}
				
				//模块六
				this.modelSixDataOne.nameList=[];this.modelSixDataOne.dataListOne=[];this.modelSixDataOne.dataListTwo=[];
				this.modelSixDataTwo.nameList=[];this.modelSixDataTwo.dataListOne=[];this.modelSixDataTwo.dataListTwo=[];
				for(var i in allList.shbzSix.houseFundList){
					this.modelSixDataOne.nameList.push(allList.shbzSix.houseFundList[i].year);
					this.modelSixDataTwo.nameList.push(allList.shbzSix.houseFundList[i].year);
					this.modelSixDataOne.dataListOne.push(allList.shbzSix.houseFundList[i].cjje);
					this.modelSixDataOne.dataListTwo.push(allList.shbzSix.houseFundList[i].workerNum);
					this.modelSixDataTwo.dataListOne.push(allList.shbzSix.houseFundList[i].dkze);
					this.modelSixDataTwo.dataListTwo.push(allList.shbzSix.houseFundList[i].dkye);
				}
				
				
				
				this.loading = false;
				this.showAll = true;
			},
			
			modelOneChange(e){
				this.modelOneIndex = e-1;
				console.log(e);
				this.showModelOne = false;
				this.$nextTick(()=>{
					this.showModelOne = true;
				})
			},
			modelTwoChange(e){
				this.modelTwoIndex = e-1;
				console.log(e);
				this.showModelTwo = false;
				this.$nextTick(()=>{
					this.showModelTwo = true;
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
			modelFiveChange(e){
				this.modelFiveIndex = e-1;
				console.log(e);
				this.showModelFive = false;
				this.$nextTick(()=>{
					this.showModelFive = true;
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
			height: 332px;
			background: #fff;
		}
		.modelTwoBox{
			height: 332px;
			background: #fff;
		}
		.modelThreeBox{
			height: 332px;
			background: #fff;
		}
		.modelForeBox{
			height: 332px;
			background: #fff;
		}
		.modelFiveBox{
			height: 352px;
			background: #fff;
		}
		.modelSixBox{
			height: 352px;
			background: #fff;
		}
	}
</style>
