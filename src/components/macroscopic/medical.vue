<template>
	<div class="mainbox">
		<div class="titleBox">湖北省<span>{{year}}年</span>医疗卫生情况
			<div class="buttons" @click="downLoad" style="position: relative;">下载<a style="width: 100%;height: 100%;position: absolute;left: 0;top: 0;" :href="baseUrlOne"></a></div>
		</div>
		<div style="width: 100%;height: 200px; z-index: 9;" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(255, 255, 255, 0.1)" v-show="loading"></div>
		<div class="modelDetailsBox" v-if="showAll">
			<el-row>
				<el-col :span='24'>
					<div class="modelOneBox">
						<div class="modelboxs">
							<subheading :items='modelOneList' :titles='"卫生机构数"' @changeIndex='modelOneChange'></subheading>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div class="levelTwoechartsBoxs">
									<init-echartsthree :id='"memodelOneEchartsOne"' :datas = 'modelOneDataOne[modelOneIndex]' v-if="showModelOne"></init-echartsthree>
								</div>
								<div class="levelTwoechartsBoxs">
									<init-echartstwo :id='"memodelOneEchartsTwo"' :datas = 'modelOneDataTwo'></init-echartstwo>
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
							<div class="levelTwoTitle"><span></span>卫生机构人员及床位数</div>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div class="levelTwoechartsBoxs">
									<init-echartsone :id='"memodelTwoEchartsOne"' :datas = 'modelTwoDataOne'></init-echartsone>
								</div>
								<div class="levelTwoechartsBoxs">
									<init-echartsnine :id='"memodelTwoEchartsTwo"' :datas = 'modelTwoDataTwo'></init-echartsnine>
								</div>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
			<el-row v-if="false">
				<el-col :span='24'>
					<div class="modelThreeBox">
						<div class="modelboxs">
							<div class="levelTwoTitle"><span></span>主要城市卫生机构人员及床位数</div>
							<div style="width: 100%;height: calc(100% - 56px);">
								<!-- <div style="float: left;width: 40%;margin-left: 2%;height: 100%;">
									<init-echartsone :id='"memodelThreeEchartsOne"' :datas = 'modelThreeDataOne'></init-echartsone>
								</div> -->
								<div style="float: left;width: 100%;height: 100%;">
									<map-echarts :id = '"memodelThreeEchartsTwo"' :datas = 'modelThreeDataTwo'></map-echarts>
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
							<div class="levelTwoTitle"><span></span>农村村级卫生组织情况</div>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div class="levelTwoechartsBoxs">
									<init-echartsone :id='"memodelForeEchartsOne"' :datas = 'modelForeDataOne'></init-echartsone>
								</div>
								<div class="levelTwoechartsBoxs">
									<init-echartsone :id='"memodelForeEchartsTwo"' :datas = 'modelForeDataTwo'></init-echartsone>
								</div>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
			<el-row v-if="false">
				<el-col :span='24'>
					<div class="modelFiveBox">
						<div class="modelboxs">
							<subheading :items='modelFiveList' :titles='"医疗卫生机构情况"' @changeIndex='modelFiveChange'></subheading>
							<div style="width: 100%;height: calc(100% - 56px);">
								<map-echarts :id = '"memodelFiveEchartsOne"' :datas = 'modelFiveDataOne[modelFiveIndex]' v-if="showModelFive"></map-echarts>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import initEchartstwo from '../initEchartstwo.vue'
	import initEchartsone from '../initEchartsone.vue'
	import initEchartsthree from '../initEchartsthree.vue'
	import mapEcharts from '../mapEcharts.vue'
	import initEchartsnine from '../initEchartsnine.vue'
	import subheading from '../subheading.vue'
	import {medicalApi} from '../../util/api.js'
	export default{
		components:{subheading,initEchartsone,initEchartstwo,initEchartsthree,initEchartsnine,mapEcharts},
		data(){
			return{
				showAll:false,
				loading:true,
				baseUrlOne:'',
				year:2017,
				modelOneList:[
					{label: '医院', value: 1},
					{label: '基层医疗卫生机构', value: 2},
					{label: '专业公共卫生机构', value: 3}
				],
				modelFiveList:[
					{label: '医疗服务', value: 1},
					{label: '资源配置', value: 2},
				],
				modelOneDataOne:[{
					unit:'所',
					titles:'',
					nameList:['医院','综合医院','中西医院','专科医院'],
					dataListOne:[],
					color:['#ffd99d','#ffc66c']
				},{
					unit:'所',
					titles:'',
					nameList:['基层卫生机构','社区医疗卫生中心','街道卫生中心','乡镇卫生中心','村卫生室','门诊部'],
					dataListOne:[],
					color:['#ffd99d','#ffc66c']
				},{
					unit:'所',
					titles:'',
					nameList:['疾控中心','专科疾病防治','妇幼保健院','卫生监督所'],
					dataListOne:[],
					color:['#ffd99d','#ffc66c']
				},],
				modelOneDataTwo:{
					unit:'单位(所)',
					min:[35000,0],
					legendList:['卫生机构总计(所)'],
					nameList:[],
					dataListOne:[],
					color:['#80ebf5','#3dc5dd']
				},
				showModelOne:true,
				modelOneIndex:0,
				modelTwoDataOne:{
					unit:'单位(张/人)',
					min:[0,0],
					legendList:['每千人口拥有医疗机构床位数(张)','每千人口医生数(人)'],
					nameList:[],
					dataListOne:[],
					dataListTwo:[],
					color:['#80ebf5','#3dc5dd','#f0db4b','#fbeb81']
				},
				modelTwoDataTwo:{
					data:[],
					unit:'张',
					title:'卫生机构床位\n数及分布',
					names:'卫生机构'
				},
				// modelThreeDataOne:{
				// 	unit:'单位(张)',
				// 	legendList:['城镇每千人口拥有医疗机构床位数','乡村每千人口拥有医疗机构床位数'],
				// 	nameList:['2014','2015','2016','2017','2018'],
				// 	dataListOne:[500,600,700,500,800],
				// 	dataListTwo:[100,200,100,200,200],
				// 	color:['#487fff','#84a9ff','#80ebf5','#3dc5dd']
				// },
				modelThreeDataTwo:{
					type:2,
					size:[0,1000],
					data : [
						
					]
				},
				modelForeDataOne:{
					type:2, 
					unit:'单位(人)',
					legendList:['乡村医生(人)','卫生员(人)'],
					nameList:[],
					dataListOne:[],
					min:[0,0],
					dataListTwo:[],
					color:['#487fff','#84a9ff','#80ebf5','#3dc5dd']
				},
				modelForeDataTwo:{
					unit:'单位(个)',
					legendList:['村设置的医疗点数(个)','村均医疗点数(个)'],
					nameList:[],
					min:[20000,0],
					dataListOne:[],
					dataListTwo:[],
					color:['#487fff','#84a9ff','#ffc66d','#ffd89a']
				},
				modelFiveDataOne:[
					{
						type:2,
						size:[0,1000],
						data : [
							
						]
					},
					{
						type:2,
						size:[0,1000],
						data : [
							
						]
					},
				],
				showModelFive:true,
				modelFiveIndex:0,
			}
		},
		mounted() {
			this.getData(2017)
		},
		methods:{
			async getData(params){
				this.showAll = false;
				this.loading = true;
				this.modelOneIndex = 0;
				this.modelFiveIndex = 0;
				this.year = params;
				this.baseUrlOne = IPConfigOne+'/api/healthcare/downloadExcel?year='+this.year;
				try {
					let res = await medicalApi(params)
					console.log(res)
					this.$store.commit('savemedicalData',res.data.res)
				} catch (err) {
					console.log(err)
				} 
				var allList = this.$store.state.medicalData;
				//模块一
				this.modelOneDataOne[0].dataListOne = [allList.healthcareOne.hospital.hosNum,allList.healthcareOne.hospital.genNum,allList.healthcareOne.hospital.tcmhosNum,allList.healthcareOne.hospital.spechosNum,];
				this.modelOneDataOne[1].dataListOne = [allList.healthcareOne.bmi.jcwsjgNum,allList.healthcareOne.bmi.sqwszxNum,allList.healthcareOne.bmi.jdwszxNum,allList.healthcareOne.bmi.xzwszxNum,allList.healthcareOne.bmi.cwssNum,allList.healthcareOne.bmi.mzbNum];
				this.modelOneDataOne[2].dataListOne = [allList.healthcareOne.phi.jkzxNum,allList.healthcareOne.phi.zkjbfzNum,allList.healthcareOne.phi.fybjyNum,allList.healthcareOne.phi.wsjdsNum]
				this.modelOneDataTwo.nameList = [];this.modelOneDataTwo.dataListOne = [];
				for(var i in allList.healthcareOne.totalHealthcare){
					this.modelOneDataTwo.nameList.push(allList.healthcareOne.totalHealthcare[i].year)
					this.modelOneDataTwo.dataListOne.push(Number(allList.healthcareOne.totalHealthcare[i].total).toFixed(0))
				}
				//模块二
				this.modelTwoDataOne.nameList = [];this.modelTwoDataOne.dataListOne = [];
				for(var i in allList.healthcareTwo.listBnhci){
					this.modelTwoDataOne.nameList.push(allList.healthcareTwo.listBnhci[i].year)
					this.modelTwoDataOne.dataListOne.push(allList.healthcareTwo.listBnhci[i].total)
				}
				for(var i in allList.healthcareTwo.listPehci){
					this.modelTwoDataOne.dataListTwo.push(allList.healthcareTwo.listPehci[i].total)
				}
				this.modelTwoDataTwo.data = [
					{value:Number(allList.healthcareTwo.latestBnhci.yycwNum),name:'医院',selected:true},{value:Number(allList.healthcareTwo.latestBnhci.xzwsycwNum),name:'乡镇卫生院'},{value:Number(allList.healthcareTwo.latestBnhci.zyggwscwNum),name:'专业公共卫生机构'},{value:Number(allList.healthcareTwo.latestBnhci.jcylsscwNum),name:'基层医疗卫生机构'}
				]
				//模块三
				this.modelThreeDataTwo.data = allList.healthcareThree.citysCitybase;
				
				//模块四
				this.modelForeDataOne.nameList=[];this.modelForeDataTwo.nameList=[];this.modelForeDataOne.dataListOne=[];this.modelForeDataOne.dataListTwo=[];this.modelForeDataTwo.dataListOne=[];this.modelForeDataTwo.dataListTwo=[];
				for(var i in allList.healthcareFive.listVlhci){
					this.modelForeDataOne.nameList.push(allList.healthcareFive.listVlhci[i].year)
					this.modelForeDataTwo.nameList.push(allList.healthcareFive.listVlhci[i].year)
					this.modelForeDataOne.dataListOne.push(allList.healthcareFive.listVlhci[i].xcysNum)
					this.modelForeDataOne.dataListTwo.push(allList.healthcareFive.listVlhci[i].wsyNum)
					this.modelForeDataTwo.dataListOne.push(allList.healthcareFive.listVlhci[i].yldNum)
					this.modelForeDataTwo.dataListTwo.push(allList.healthcareFive.listVlhci[i].villNum)
				}
				//模块五
				this.modelFiveDataOne[0].data = allList.healthcareFour.citysMedicalse;
				this.modelFiveDataOne[1].data = allList.healthcareFour.citysMedicalsor;
				
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
			height: 433px;
			background: #fff;
		}
		.modelForeBox{
			height: 430px;
			background: #fff;
		}
		.modelFiveBox{
			height: 430px;
			background: #fff;
		}
	}
</style>
