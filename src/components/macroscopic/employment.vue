<template>
	<div class="mainbox">
		<div class="titleBox">湖北省<span>2019年</span>就业及收入
			<div class="buttons">下载</div>
		</div>
		<div class="modelDetailsBox">
			<el-row>
				<el-col :span='24'>
					
				</el-col>
			</el-row>
			<el-row>
				<el-col :span='24'>
					<div class="modelOneBox">
						<div class="modelboxs">
							<div class="levelTwoTitle"><span></span>全社会从业人员情况
								<div class="buttonsBox">
									<div @click="modelOneChange(1)" :class="modelOneIndex==1?'choosen':''">总人口数</div>
									<div @click="modelOneChange(2)" :class="modelOneIndex==2?'choosen':''">按产业</div>
									<div @click="modelOneChange(3)" :class="modelOneIndex==3?'choosen':''">按城乡</div>
								</div>
							</div>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div class="emmodelOneEchartsBoxs">
									<init-echartsone :id='"emmodelOneEchartsBoxs"' :datas = 'modelOneDataOne'></init-echartsone>
								</div>
								<div class="dataDetailBox">
									<p style="color: #666666;">全社会从业人员</p>
									<p style="color: #487fff;">(2018年)</p>
									<div><span>937 </span> 万人</div>
									<p>同比上期<span class="up">10%<i></i></span></p>
									<p style="color: #666666;margin-top: 24px;">劳动年龄人口</p>
									<p style="color: #487fff;">(2018年)</p>
									<div><span>961 </span> 万人</div>
									<p>同比上期<span class="down">7.8%<i></i></span></p>
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
								<div class="emmodelTwoEchartsBoxs">
									<init-echartsseven :id='"emmodelTwoEchartsBoxs"' :datas = 'modelTwoDataOne'></init-echartsseven>
								</div>
								<div class="dataDetailBox">
									<p style="color: #666666;">新增就业人口</p>
									<p style="color: #487fff;">(2018年)</p>
									<div><span>137 </span> 万人</div>
									<p>同比上期<span class="up">10%<i></i></span></p>
									<p style="color: #666666;margin-top: 24px;">失业人口</p>
									<p style="color: #487fff;">(2018年)</p>
									<div><span>51 </span> 万人</div>
									<p>同比上期<span class="down">7.8%<i></i></span></p>
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
								<div id="emmodelThreeEchartsOne"></div>
								<div id="emmodelThreeEchartsTwo"></div>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span='24'>
					<div class="modelForeBox">
						<div class="modelboxs">
							<div class="levelTwoTitle"><span></span>主要城市人才分布
								<div class="buttonsBox">
									<div @click="modelForeChange(1)" :class="modelForeIndex==1?'choosen':''">学历分布</div>
									<div @click="modelForeChange(2)" :class="modelForeIndex==2?'choosen':''">行业分布</div>
								</div>
							</div>
							<div style="width: 100%;height: calc(100% - 56px);">
								<map-echarts :id = '"emmodelForeEchartsOne"' :datas = 'modelForeDataOne'></map-echarts>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
			<el-row>
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
								<div id="emmodelSevenEchartsOne"></div>
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
	import mapEcharts from '../mapEcharts.vue'
	export default{
		components:{initEchartsone,initEchartsseven,mapEcharts},
		data(){
			return{
				modelOneIndex:1,
				modelForeIndex:1,
				modelOneDataOne:{
					unit:'单位(万人)',
					legendList:['全社会从业人员','劳动人员人口'],
					nameList:['2014','2015','2016','2017','2018'],
					dataListOne:[1500,600,700,500,1000],
					dataListTwo:[500,500,500,500,500],
					color:['#487fff','#84a9ff','#ffc56a','#ffd99e']
				},
				modelTwoDataOne:{
					unit:['单位(万人)','同比(%)'],
					legendList:['新增就业人口','失业人数','新增就业人数同比','失业人数同比'],
					nameList:['2014','2015','2016','2017','2018'],
					dataListOne:[1500,600,700,500,1000],
					dataListTwo:[300,200,500,200,300],
					dataListThree:[2.3,3.2,2.4,3.4,1.2],
					dataListFore:[3.2,3.4,1.6,2.9,1.1],
					color:['#487fff','#84a9ff','#f0db4b','#fbeb81','#ffc770','#5bb8ff']
				},
				modelForeDataOne:{
					type:2,
					unit:'人',
					size:[0,1000],
					title:'',
					data : [
						{
							name:'武汉市',
							value:988,
							dataList:[
								{
									name:'博士研究生',
									value:'391',
									unit:'人'
								},
								{
									name:'硕士研究生',
									value:'2209',
									unit:'人'
								},
								{
									name:'大学本科',
									value:'22739',
									unit:'人'
								},
								{
									name:'大学专科',
									value:'11930',
									unit:'人'
								},
							]
						},
						{
							name:'恩施土家族苗族自治州',
							value:188,
							dataList:[
								{
									name:'博士研究生',
									value:'391',
									unit:'人'
								},
								{
									name:'硕士研究生',
									value:'2209',
									unit:'人'
								},
								{
									name:'大学本科',
									value:'22739',
									unit:'人'
								},
								{
									name:'大学专科',
									value:'11930',
									unit:'人'
								},
							]
						},
						{
							name:'十堰市',
							value:688,
							dataList:[
								{
									name:'博士研究生',
									value:'391',
									unit:'人'
								},
								{
									name:'硕士研究生',
									value:'2209',
									unit:'人'
								},
								{
									name:'大学本科',
									value:'22739',
									unit:'人'
								},
								{
									name:'大学专科',
									value:'11930',
									unit:'人'
								},
							]
						},
						{
							name:'宜昌市',
							value:888,
							dataList:[
								{
									name:'博士研究生',
									value:'391',
									unit:'人'
								},
								{
									name:'硕士研究生',
									value:'2209',
									unit:'人'
								},
								{
									name:'大学本科',
									value:'22739',
									unit:'人'
								},
								{
									name:'大学专科',
									value:'11930',
									unit:'人'
								},
							]
						},
						{
							name:'襄阳市',
							value:888,
							dataList:[
								{
									name:'博士研究生',
									value:'391',
									unit:'人'
								},
								{
									name:'硕士研究生',
									value:'2209',
									unit:'人'
								},
								{
									name:'大学本科',
									value:'22739',
									unit:'人'
								},
								{
									name:'大学专科',
									value:'11930',
									unit:'人'
								},
							]
						},
						{
							name:'黄冈市',
							value:288,
							dataList:[
								{
									name:'博士研究生',
									value:'391',
									unit:'人'
								},
								{
									name:'硕士研究生',
									value:'2209',
									unit:'人'
								},
								{
									name:'大学本科',
									value:'22739',
									unit:'人'
								},
								{
									name:'大学专科',
									value:'11930',
									unit:'人'
								},
							]
						},
						{
							name:'荆州市',
							value:388,
							dataList:[
								{
									name:'博士研究生',
									value:'391',
									unit:'人'
								},
								{
									name:'硕士研究生',
									value:'2209',
									unit:'人'
								},
								{
									name:'大学本科',
									value:'22739',
									unit:'人'
								},
								{
									name:'大学专科',
									value:'11930',
									unit:'人'
								},
							]
						},
						{
							name:'荆门市',
							value:288,
							dataList:[
								{
									name:'博士研究生',
									value:'391',
									unit:'人'
								},
								{
									name:'硕士研究生',
									value:'2209',
									unit:'人'
								},
								{
									name:'大学本科',
									value:'22739',
									unit:'人'
								},
								{
									name:'大学专科',
									value:'11930',
									unit:'人'
								},
							]
						},
						{
							name:'咸宁市',
							value:388,
							dataList:[
								{
									name:'博士研究生',
									value:'391',
									unit:'人'
								},
								{
									name:'硕士研究生',
									value:'2209',
									unit:'人'
								},
								{
									name:'大学本科',
									value:'22739',
									unit:'人'
								},
								{
									name:'大学专科',
									value:'11930',
									unit:'人'
								},
							]
						},
						{
							name:'随州市',
							value:388,
							dataList:[
								{
									name:'博士研究生',
									value:'391',
									unit:'人'
								},
								{
									name:'硕士研究生',
									value:'2209',
									unit:'人'
								},
								{
									name:'大学本科',
									value:'22739',
									unit:'人'
								},
								{
									name:'大学专科',
									value:'11930',
									unit:'人'
								},
							]
						},
						{
							name:'孝感市',
							value:488,
							dataList:[
								{
									name:'博士研究生',
									value:'391',
									unit:'人'
								},
								{
									name:'硕士研究生',
									value:'2209',
									unit:'人'
								},
								{
									name:'大学本科',
									value:'22739',
									unit:'人'
								},
								{
									name:'大学专科',
									value:'11930',
									unit:'人'
								},
							]
						},
						{
							name:'黄石市',
							value:388,
							dataList:[
								{
									name:'博士研究生',
									value:'391',
									unit:'人'
								},
								{
									name:'硕士研究生',
									value:'2209',
									unit:'人'
								},
								{
									name:'大学本科',
									value:'22739',
									unit:'人'
								},
								{
									name:'大学专科',
									value:'11930',
									unit:'人'
								},
							]
						},
						{
							name:'神农架林区',
							value:88,
							dataList:[
								{
									name:'博士研究生',
									value:'391',
									unit:'人'
								},
								{
									name:'硕士研究生',
									value:'2209',
									unit:'人'
								},
								{
									name:'大学本科',
									value:'22739',
									unit:'人'
								},
								{
									name:'大学专科',
									value:'11930',
									unit:'人'
								},
							]
						},
						{
							name:'天门市',
							value:288,
							dataList:[
								{
									name:'博士研究生',
									value:'391',
									unit:'人'
								},
								{
									name:'硕士研究生',
									value:'2209',
									unit:'人'
								},
								{
									name:'大学本科',
									value:'22739',
									unit:'人'
								},
								{
									name:'大学专科',
									value:'11930',
									unit:'人'
								},
							]
						},
						{
							name:'仙桃市',
							value:388,
							dataList:[
								{
									name:'博士研究生',
									value:'391',
									unit:'人'
								},
								{
									name:'硕士研究生',
									value:'2209',
									unit:'人'
								},
								{
									name:'大学本科',
									value:'22739',
									unit:'人'
								},
								{
									name:'大学专科',
									value:'11930',
									unit:'人'
								},
							]
						},
						{
							name:'潜江市',
							value:488,
							dataList:[
								{
									name:'博士研究生',
									value:'391',
									unit:'人'
								},
								{
									name:'硕士研究生',
									value:'2209',
									unit:'人'
								},
								{
									name:'大学本科',
									value:'22739',
									unit:'人'
								},
								{
									name:'大学专科',
									value:'11930',
									unit:'人'
								},
							]
						},
						{
							name:'鄂州市',
							value:588,
							dataList:[
								{
									name:'博士研究生',
									value:'391',
									unit:'人'
								},
								{
									name:'硕士研究生',
									value:'2209',
									unit:'人'
								},
								{
									name:'大学本科',
									value:'22739',
									unit:'人'
								},
								{
									name:'大学专科',
									value:'11930',
									unit:'人'
								},
							]
						},
					]
				},
				modelFiveDataOne:{
					type:2,
					unit:'人',
					title:'',
					size:[0,1000],
					data : [
						{
							name:'武汉市',
							dataList:[
								{
									name:'普通本专科在校学生数',
									value:'391',
									unit:'人'
								},
								{
									name:'从事科技活动人员人数',
									value:'2209',
									unit:'人'
								},
								{
									name:'公共图书馆图书总藏量',
									value:'80',
									unit:'万册'
								}
							]
						},
						{
							name:'恩施土家族苗族自治州',
							dataList:[
								{
									name:'普通本专科在校学生数',
									value:'391',
									unit:'人'
								},
								{
									name:'从事科技活动人员人数',
									value:'2209',
									unit:'人'
								},
								{
									name:'公共图书馆图书总藏量',
									value:'80',
									unit:'万册'
								}
							]
						},
						{
							name:'十堰市',
							dataList:[
								{
									name:'普通本专科在校学生数',
									value:'391',
									unit:'人'
								},
								{
									name:'从事科技活动人员人数',
									value:'2209',
									unit:'人'
								},
								{
									name:'公共图书馆图书总藏量',
									value:'80',
									unit:'万册'
								}
							]
						},
						{
							name:'宜昌市',
							dataList:[
								{
									name:'普通本专科在校学生数',
									value:'391',
									unit:'人'
								},
								{
									name:'从事科技活动人员人数',
									value:'2209',
									unit:'人'
								},
								{
									name:'公共图书馆图书总藏量',
									value:'80',
									unit:'万册'
								}
							]
						},
						{
							name:'襄阳市',
							dataList:[
								{
									name:'普通本专科在校学生数',
									value:'391',
									unit:'人'
								},
								{
									name:'从事科技活动人员人数',
									value:'2209',
									unit:'人'
								},
								{
									name:'公共图书馆图书总藏量',
									value:'80',
									unit:'万册'
								}
							]
						},
						{
							name:'黄冈市',
							dataList:[
								{
									name:'普通本专科在校学生数',
									value:'391',
									unit:'人'
								},
								{
									name:'从事科技活动人员人数',
									value:'2209',
									unit:'人'
								},
								{
									name:'公共图书馆图书总藏量',
									value:'80',
									unit:'万册'
								}
							]
						},
						{
							name:'荆州市',
							dataList:[
								{
									name:'普通本专科在校学生数',
									value:'391',
									unit:'人'
								},
								{
									name:'从事科技活动人员人数',
									value:'2209',
									unit:'人'
								},
								{
									name:'公共图书馆图书总藏量',
									value:'80',
									unit:'万册'
								}
							]
						},
						{
							name:'荆门市',
							dataList:[
								{
									name:'普通本专科在校学生数',
									value:'391',
									unit:'人'
								},
								{
									name:'从事科技活动人员人数',
									value:'2209',
									unit:'人'
								},
								{
									name:'公共图书馆图书总藏量',
									value:'80',
									unit:'万册'
								}
							]
						},
						{
							name:'咸宁市',
							dataList:[
								{
									name:'普通本专科在校学生数',
									value:'391',
									unit:'人'
								},
								{
									name:'从事科技活动人员人数',
									value:'2209',
									unit:'人'
								},
								{
									name:'公共图书馆图书总藏量',
									value:'80',
									unit:'万册'
								}
							]
						},
						{
							name:'随州市',
							dataList:[
								{
									name:'普通本专科在校学生数',
									value:'391',
									unit:'人'
								},
								{
									name:'从事科技活动人员人数',
									value:'2209',
									unit:'人'
								},
								{
									name:'公共图书馆图书总藏量',
									value:'80',
									unit:'万册'
								}
							]
						},
						{
							name:'孝感市',
							dataList:[
								{
									name:'普通本专科在校学生数',
									value:'391',
									unit:'人'
								},
								{
									name:'从事科技活动人员人数',
									value:'2209',
									unit:'人'
								},
								{
									name:'公共图书馆图书总藏量',
									value:'80',
									unit:'万册'
								}
							]
						},
						{
							name:'黄石市',
							dataList:[
								{
									name:'普通本专科在校学生数',
									value:'391',
									unit:'人'
								},
								{
									name:'从事科技活动人员人数',
									value:'2209',
									unit:'人'
								},
								{
									name:'公共图书馆图书总藏量',
									value:'80',
									unit:'万册'
								}
							]
						},
						{
							name:'神农架林区',
							dataList:[
								{
									name:'普通本专科在校学生数',
									value:'391',
									unit:'人'
								},
								{
									name:'从事科技活动人员人数',
									value:'2209',
									unit:'人'
								},
								{
									name:'公共图书馆图书总藏量',
									value:'80',
									unit:'万册'
								}
							]
						},
						{
							name:'天门市',
							dataList:[
								{
									name:'普通本专科在校学生数',
									value:'391',
									unit:'人'
								},
								{
									name:'从事科技活动人员人数',
									value:'2209',
									unit:'人'
								},
								{
									name:'公共图书馆图书总藏量',
									value:'80',
									unit:'万册'
								}
							]
						},
						{
							name:'仙桃市',
							dataList:[
								{
									name:'普通本专科在校学生数',
									value:'391',
									unit:'人'
								},
								{
									name:'从事科技活动人员人数',
									value:'2209',
									unit:'人'
								},
								{
									name:'公共图书馆图书总藏量',
									value:'80',
									unit:'万册'
								}
							]
						},
						{
							name:'潜江市',
							dataList:[
								{
									name:'普通本专科在校学生数',
									value:'391',
									unit:'人'
								},
								{
									name:'从事科技活动人员人数',
									value:'2209',
									unit:'人'
								},
								{
									name:'公共图书馆图书总藏量',
									value:'80',
									unit:'万册'
								}
							]
						},
						{
							name:'鄂州市',
							dataList:[
								{
									name:'普通本专科在校学生数',
									value:'391',
									unit:'人'
								},
								{
									name:'从事科技活动人员人数',
									value:'2209',
									unit:'人'
								},
								{
									name:'公共图书馆图书总藏量',
									value:'80',
									unit:'万册'
								}
							]
						},
					]
				},
				modelSixDataOne:{
					unit:['单位(万人)','同比(%)'],
					legendList:['职工年平均工资','同比名义增长率','排除物价因素增长率'],
					nameList:['2012','2013' ,'2014','2015','2016','2017','2018'],
					dataListOne:[300,400,500,600,700,500,1000],
					dataListTwo:[1.9,2.8,3.2,3.4,1.6,2.9,1.1],
					dataListThree:[1.1,1.9,2.3,3.2,2.4,3.4,1.2],
					color:['#ffc56a','#ffd99e','#5ab7ff','#47e57f']
				},
			}
		},
		mounted() {
			this.initModelThreeEchartsOne('emmodelThreeEchartsOne')
			this.initModelThreeEchartsTwo('emmodelThreeEchartsTwo')
			this.initModelSevenEchartsOne('emmodelSevenEchartsOne')
		},
		methods:{
			modelOneChange(e){
				this.modelOneIndex = e;
			},
			modelForeChange(e){
				this.modelForeIndex = e;
			},
			
			
			initModelThreeEchartsOne(dom,data){
				var rich = {
					numOne:{
						fontSize: 16,
						color:'#0487ff',
						fontStyle:'italic'
					},
					numTwo:{
						fontSize: 20,
						color:'#0487ff'
					},
					numThree:{
						fontSize: 14,
						color:'#333'
					},
				};
				var echartData = [{value:45,name:'高中',selected:true},{value:56,name:'大专'},{value:76,name:'本科'},{value:22,name:'硕士'},{value:8,name:'博士'}];
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
										return '{numThree|' + params.name + '}{numOne|' + params.value + '}{numThree| 万人}\n{numTwo|' + percent + '%}';
									}
								}
							}
						}
					]
				})
			},
			initModelThreeEchartsTwo(dom,data){
				var echartDataOne = [{value:45,name:'第一产业',selected:true},{value:56,name:'第二产业'},{value:76,name:'第三产业'}];
				var echartDataTwo = [{value:45,name:'信息传输、软件和信息技术服务'},{value:56,name:'文化、体育和娱乐业'},{value:76,name:'采矿业、制造业、电力、燃气及水的生产和供应业'},{value:76,name:'农、林、牧、渔业'},{value:76,name:'其他产业'}];
				var color = ['#6aadff','#ffec6a','#ffc56a','#32d89f','#5ed8f7'];
				var rich = {
					numOne:{
						fontSize: 16,
						color:'#0487ff',
						fontStyle:'italic'
					},
					numTwo:{
						fontSize: 20,
						color:'#0487ff'
					},
					numThree:{
						fontSize: 14,
						color:'#333'
					},
				};
				let myChart = this.$echarts.init(document.getElementById(dom));
				myChart.setOption({
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} 万人({d}%)"
					},
					legend:{show:false},
					color:color,
					series :[
						{
							name:'产业分布',
							type: 'pie',
							selectedMode: 'single',
							radius: [0, '36%'],
							center: ['50%', '50%'],
							data:echartDataOne,
							itemStyle: {
								emphasis: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
							},
							label:{
								normal: {
									position: 'inner'
								}
							}
						},
						{
							name:'行业分布',
							type:'pie',
							radius: ['48%', '63%'],
							label:{
								normal:{
									rich: rich,
									formatter:function(params, ticket, callback){
										var total = 0;
										var percent = 0;
										echartDataTwo.forEach(function(value, index, array,name) {
											total += value.value;
										});
										percent = ((params.value / total) * 100).toFixed(1);
										return '{numThree|' + params.name + '}{numOne|' + params.value + '}{numThree| 万人}\n{numTwo|' + percent + '%}';
									}
								}
							},
							data:echartDataTwo
						}
					]
					
				})
			},
			
			initModelSevenEchartsOne(dom,data){
				var namelist = ['电力、燃气及水的生产和供应业','电力、燃气及水的生产和供应业','电力、燃气及水的生产和供应业','电力、燃气及水的生产和供应业','电力、燃气及水的生产和供应业','电力、燃气及水的生产和供应业','电力、燃气及水的生产和供应业','电力、燃气及水的生产和供应业','电力、燃气及水的生产和供应业','电力、燃气及水的生产和供应业','电力、燃气及水的生产和供应业','电力、燃气及水的生产和供应业','电力、燃气及水的生产和供应业','电力、燃气及水的生产和供应业'];
				var valuelist = [18000,17000,16000,15000,14000,13900,13800,13522,13000,12900,12500,12100,11600,11000];
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
						right:'20',
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
							formatter:function(val){
								var strs = val.split('');
								var str = '';
								for(var i=0;i<strs.length;i++){
									if(i%3==0&&i!=0){
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
							name:'平均工资',
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
							data:valuelist
						}
					]
				})
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
			#emmodelThreeEchartsOne{
				width: 45%;
				height: 100%;
				float: left;
			}
			#emmodelThreeEchartsTwo{
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
			#emmodelSevenEchartsOne{
				width: 100&;
				height: 100%;
			}
		}
	}
</style>
