<template>
	<div class="mainbox">
		<div class="titleBox">湖北省<span>{{year}}年</span>经济水平
			<div class="buttons" @click="downLoad" style="position: relative;">下载<a style="width: 100%;height: 100%;position: absolute;left: 0;top: 0;" :href="baseUrlOne"></a></div>
		</div>
		<div style="width: 100%;height: 200px; z-index: 9;" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(255, 255, 255, 0.1)" v-show="loading"></div>
		<div class="modelDetailsBox" v-if="showAll">
			<el-row>
				<el-col :span='24'>
					<div class="modelOneBox">
						<div class="modelboxs">
							<div class="levelTwoTitle"><span></span>国内生产总值情况</div>
							<!-- <subheading :items='modelOneList' :titles='"国内生产总值情况"' @changeIndex='modelOneChange'></subheading> -->
							<div style="width: 100%;height: calc(100% - 56px);">
								<div class="dataDetailBox">
									<p style="color: #666666;">湖北省GDP</p>
									<p style="color: #487fff;">({{modelOneDataOne.year}}年)</p>
									<div><span>{{modelOneDataOne.sumGdp}} </span> 亿元</div>
									<p>同比上期<span :class="modelOneDataOne.sumGdpRate>0?'up':'down'">{{modelOneDataOne.sumGdpRate}}%<i></i></span></p>
									<p style="color: #666666;margin-top: 24px;">湖北省人均GDP</p>
									<p style="color: #487fff;">({{modelOneDataOne.year}}年)</p>
									<div><span>{{modelOneDataOne.aveGdp}} </span> 元</div>
									<p>同比上期<span :class="modelOneDataOne.aveGdpRate>0?'up':'down'">{{modelOneDataOne.aveGdpRate}}%<i></i></span></p>
									<!-- <p>同比上期<span class="down">7.8%<i></i></span></p> -->
								</div>
								<div class="ecmodelOneEchartsOne">
									<map-echarts :id = '"ecmodelOneEchartsOne"' :datas = 'modelOneDataOne'></map-echarts>
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
							<div class="levelTwoTitle"><span></span>居民人均可支配收入</div>
							<div style="width: 100%;height: calc(100% - 56px);">
								<!-- <div class="dataDetailBox">
									<div class="cardBox" style="width: 212px;height: 106px;background: #ffc56a;margin: 0 auto; margin-top: 20px;">
										<div class="detailBox">
											<p style="font-size: 12px;padding-top: 14px;">城镇居民人均可支配收入({{modelTwoDataOne.year}}年)</p>
											<p style="font-size: 14px;padding-top: 12px;text-align: center;"><span style="font-size: 20px;">{{modelTwoDataOne.urban}}</span> 元</p>
											<p style="height: 36px;line-height: 36px;border-top: 1px solid rgba(255,255,255,0.4);margin-top: 12px;">同比上期 {{modelTwoDataOne.urbanRatio}}% <i :class="modelTwoDataOne.urbanRatio>0?'up':'down'"></i></p>
										</div>
									</div>
									<div class="cardBox" style="width: 212px;height: 106px;background: #6aadff;margin: 0 auto;margin-top: 20px;">
										<div class="detailBox">
											<p style="font-size: 12px;padding-top: 14px;">农村居民人均可支配收入({{modelTwoDataOne.year}}年)</p>
											<p style="font-size: 14px;padding-top: 12px;text-align: center;"><span style="font-size: 20px;">{{modelTwoDataOne.rural}}</span> 元</p>
											<p style="height: 36px;line-height: 36px;border-top: 1px solid rgba(255,255,255,0.4);margin-top: 12px;">同比上期 {{modelTwoDataOne.ruralRatio}}% <i :class="modelTwoDataOne.ruralRatio>0?'up':'down'"></i></p>
										</div>
									</div>
									<div class="cardBox" style="width: 212px;height: 106px;background: #5ed8f7;margin: 0 auto;margin-top: 20px;">
										<div class="detailBox">
											<p style="font-size: 12px;padding-top: 14px;">城乡居民收入比({{modelTwoDataOne.year}}年)</p>
											<p style="font-size: 14px;padding-top: 12px;text-align: center;"><span style="font-size: 20px;">{{modelTwoDataOne.rate}}</span> 元</p>
										</div>
									</div>
								</div> -->
								<div class="dataDetailBox">
									<p style="color: #666666;">城镇居民人均可支配收入</p>
									<p style="color: #487fff;">({{modelTwoDataOne.year}}年)</p>
									<div><span>{{modelTwoDataOne.urban}} </span> 元</div>
									<p>同比上期<span :class="modelTwoDataOne.urbanRatio>0?'up':'down'">{{modelTwoDataOne.urbanRatio}}%<i></i></span></p>
									<p style="color: #666666;margin-top: 24px;">农村居民人均可支配收入</p>
									<p style="color: #487fff;">({{modelTwoDataOne.year}}年)</p>
									<div><span>{{modelTwoDataOne.rural}} </span> 元</div>
									<p>同比上期<span :class="modelTwoDataOne.ruralRatio>0?'up':'down'">{{modelTwoDataOne.ruralRatio}}%<i></i></span></p>
									<p style="color: #666666;margin-top: 24px;">城乡居民收入比</p>
									<p style="color: #487fff;">({{modelTwoDataOne.year}}年)</p>
									<div><span>{{modelTwoDataOne.rate}} </span> 元</div>
								</div>
								<div class="ecmodelTwoEchartsOne">
									<init-echartsseven :id='"ecmodelTwoEchartsOne"' :datas = 'modelTwoDataOne'></init-echartsseven>
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
							<div class="levelTwoTitle"><span></span>居民消费支出情况</div>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div class="ecmodelThreeEchartsOne">
									<init-echartsone :id='"ecmodelThreeEchartsOne"' :datas = 'modelThreeDataOne'></init-echartsone>
								</div>
								<div class="ecmodelThreeEchartsTwo">
									<init-echartsnine :id='"ecmodelThreeEchartsTwo"' :datas = 'modelThreeDataTwo'></init-echartsnine>
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
							<div class="levelTwoTitle"><span></span>主要城市居民消费、支出价格</div>
							<div style="width: 100%;height: calc(100% - 56px);">
								<map-echarts :id = '"ecmodelForeEchartsOne"' :datas = 'modelForeDataOne'></map-echarts>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span='24'>
					<div class="modelFiveBox">
						<div class="modelboxs">
							<div class="levelTwoTitle"><span></span>房产车辆情况</div>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div class="ecmodelFiveEchartsOne">
									<init-echartsone :id='"ecmodelFiveEchartsOne"' :datas = 'modelFiveDataOne'></init-echartsone>
								</div>
								<div class="ecmodelFiveEchartsTwo">
									<init-echartstwo :id='"ecmodelFiveEchartsTwo"' :datas = 'modelFiveDataTwo'></init-echartstwo>
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
							<div class="levelTwoTitle"><span></span>个税减税情况</div>
							<div style="width: 100%;height: calc(100% - 56px);">
								<div class="dataDetailBoxs">
									<div class="detailBox" style="background: #ffc56a;">
										<p style="padding-top: 28px;">享受扣除人次</p>
										<p style="padding-top: 20px;"><span>{{modelSixList.xsrc}}</span>万人</p>
									</div>
									<div class="detailBox" style="background: #6aadff;">
										<p style="padding-top: 28px;">享受扣除人数</p>
										<p style="padding-top: 20px;"><span>{{modelSixList.xsrs}}</span>万人</p>
									</div>
									<div class="detailBox" style="background: #5ed8f7;">
										<p style="padding-top: 28px;">政策享受覆盖率</p>
										<p style="padding-top: 20px;"><span>{{modelSixList.zcfgl}}</span>%</p>
									</div>
									<div class="detailBox" style="background: #32d89f;">
										<p style="padding-top: 28px;">累计扣除金额</p>
										<p style="padding-top: 20px;"><span>{{modelSixList.amount}}</span>万人</p>
									</div>
								</div>
								<div class="echartsBoxs">
									<div style="height: 50%;width: 200px;position: relative;">
										<div style="height: 80%;width: 100%;z-index: 1;position: absolute;top: 20px;">
											<init-echartseight :id='"ecmodelSixEchartsOne"' :datas = 'modelSixDataOne'></init-echartseight>
										</div>
										<div class="textBox">
											子女教育抵扣<br>{{modelSixList.data.znjydkNum}}万元
										</div>
									</div>
									<div style="height: 50%;width: 200px;position: relative;">
										<div style="height: 80%;width: 100%;z-index: 1;position: absolute;top: 20px;">
											<init-echartseight :id='"ecmodelSixEchartsTwo"' :datas = 'modelSixDataTwo'></init-echartseight>
										</div>
										<div class="textBox">
											个人继续教育抵扣<br>{{modelSixList.data.grjxjykdNum}}万元
										</div>
									</div>
									<div style="height: 50%;width: 200px;position: relative;">
										<div style="height: 80%;width: 100%;z-index: 1;position: absolute;top: 20px;">
											<init-echartseight :id='"ecmodelSixEchartsThree"' :datas = 'modelSixDataThree'></init-echartseight>
										</div>
										<div class="textBox">
											赡养老人抵扣<br>{{modelSixList.data.sylrdkNum}}万元
										</div>
									</div>
									<div style="height: 50%;width: 200px;position: relative;">
										<div style="height: 80%;width: 100%;z-index: 1;position: absolute;top: 20px;">
											<init-echartseight :id='"ecmodelSixEchartsFore"' :datas = 'modelSixDataFore'></init-echartseight>
										</div>
										<div class="textBox">
											房屋购置利息抵扣<br>{{modelSixList.data.fwgzlxdkNum}}万元
										</div>
									</div>
									<div style="height: 50%;width: 200px;position: relative;">
										<div style="height: 80%;width: 100%;z-index: 1;position: absolute;top: 20px;">
											<init-echartseight :id='"ecmodelSixEchartsFive"' :datas = 'modelSixDataFive'></init-echartseight>
										</div>
										<div class="textBox">
											租房抵扣<br>{{modelSixList.data.zfdkNum}}万元
										</div>
									</div>
									<div style="height: 50%;width: 200px;position: relative;">
										<div style="height: 80%;width: 100%;z-index: 1;position: absolute;top: 20px;">
											<init-echartseight :id='"ecmodelSixEchartsSix"' :datas = 'modelSixDataSix'></init-echartseight>
										</div>
										<div class="textBox">
											大病医疗保险抵扣<br>{{modelSixList.data.dbyldkNum}}万元
										</div>
									</div>
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
	import initEchartsseven from '../initEchartsseven.vue'
	import initEchartsone from '../initEchartsone.vue'
	import initEchartstwo from '../initEchartstwo.vue'
	import initEchartseight from '../initEchartseight.vue'
	import initEchartsnine from '../initEchartsnine.vue'
	import mapEcharts from '../mapEcharts.vue'
	import subheading from '../subheading.vue'
	import {economicsApi} from '../../util/api.js'
	export default{
		components:{subheading,initEchartsseven,initEchartsone,initEchartstwo,initEchartseight,initEchartsnine,mapEcharts},
		data(){
			return{
				showAll:false,
				loading:true,
				year:2017,
				baseUrlOne:'',
				// modelOneList:[
				// 	{label: 'GDP', value: 1},
				// 	{label: '人均GDP', value: 2}
				// ],
				modelOneDataOne:{
					sumGdp:0,
					aveGdp:0,
					sumGdpRate:0,
					aveGdpRate:0,
					year:2017,
					type:1,
					size:[0,14000],
					data : [
						
					]
				},
				// showModelOne:true,
				// modelOneIndex:0,
				modelTwoDataOne:{
					year:2017,
					urban:0,
					urbanRatio:0,
					rural:0,
					ruralRatio:0,
					rate:0,
					min:[0,0],
					unit:['单位(元)','同比(%)'],
					legendList:['城镇居民人均(元)','农村居民人均(元)','增长率(城镇)(%)','增长率(农村)(%)'],
					nameList:[],
					dataListOne:[],
					dataListTwo:[],
					dataListThree:[],
					dataListFore:[],
					color:['#487fff','#84a9ff','#ffc56a','#ffd99e','#ffa39c','#3ceeb1']
				},
				modelThreeDataOne:{
					min:[0,0],
					unit:'单位(元)',
					legendList:['城镇居民人均消费支出(元)','农村居民人均消费支出(元)'],
					nameList:[],
					dataListOne:[],
					dataListTwo:[],
					color:['#80ebf5','#3dc5dd','#f0db4b','#fbeb81']
				},
				modelThreeDataTwo:{
					data:[],
					unit:'元',
					title:'城镇人均消费\n支出及结构',
					names:'消费结构'
				},
				modelForeDataOne:{
					type:2,
					size:[0,1000],
					data : [
						
					]
				},
				modelFiveDataOne:{
					unit:'单位(平方米)',
					legendList:['城镇居民人均住房面积(平方米)','农村居民人均住房面积(平方米)'],
					nameList:[],
					dataListOne:[],
					dataListTwo:[],
					min:[30,0],
					color:['#487fff','#84a9ff','#f0db4b','#fbeb81']
				},
				modelFiveDataTwo:{
					unit:'单位(辆)',
					legendList:['城镇每百户汽车保有量(辆)'],
					nameList:[],
					dataListOne:[],
					min:[0,0],
					color:['#80ebf5','#3dc5dd']
				},
				modelSixList:{
					year:2017,
					xsrc:0,
					xsrs:0,
					zcfgl:0,
					amount:0,
					data:{}
				},
				modelSixDataOne:{
					data:0.48,
					sum:0,
					color:'#6aadff'
				},
				modelSixDataTwo:{
					data:0.56,
					sum:0,
					color:'#32d89f'
				},
				modelSixDataThree:{
					data:0.65,
					sum:0,
					color:'#ffc56a'
				},
				modelSixDataFore:{
					data:0.32,
					sum:0,
					color:'#5ed8f7'
				},
				modelSixDataFive:{
					data:0.72,
					sum:0,
					color:'#f7e05e'
				},
				modelSixDataSix:{
					data:0.50,
					sum:0,
					color:'#6a83ff'
				},
			}
		},
		mounted() {
			this.getData(2017);
		},
		methods:{
			async getData(params){
				this.showAll = false;
				this.loading = true;
				this.year = params;
				this.baseUrlOne = IPConfigOne+'/api/economic/downloadExcel?year='+this.year;
				try {
					let res = await economicsApi(params)
					console.log(res)
					this.$store.commit('saveeconomicsData',res.data.res)
				} catch (err) {
					console.log(err)
				} 
				
				var allList = this.$store.state.economicsData;
				//模块一
				this.modelOneDataOne.year=allList.economicOne.totalGDP.year;
				this.modelOneDataOne.sumGdp=allList.economicOne.totalGDP.sumGdp;
				this.modelOneDataOne.aveGdp=allList.economicOne.totalGDP.aveGdp;
				this.modelOneDataOne.sumGdpRate=(Number(allList.economicOne.totalGDP.sumGdpRate)*100).toFixed(2);
				this.modelOneDataOne.aveGdpRate=(Number(allList.economicOne.totalGDP.aveGdpRate)*100).toFixed(2);
				this.modelOneDataOne.data = allList.economicOne.citysGDP;
				//模块二
				this.modelTwoDataOne.year = allList.economicTwo.latestRpci.year;
				this.modelTwoDataOne.urban = allList.economicTwo.latestRpci.urban;
				this.modelTwoDataOne.rural = Number(allList.economicTwo.latestRpci.rural).toFixed(2);
				this.modelTwoDataOne.ruralRatio = (Number(allList.economicTwo.latestRpci.ruralRatio)*100).toFixed(2);
				this.modelTwoDataOne.urbanRatio = (Number(allList.economicTwo.latestRpci.urbanRatio)*100).toFixed(2);
				this.modelTwoDataOne.rate = Number(allList.economicTwo.latestRpci.rate).toFixed(2);
				for(var i in allList.economicTwo.listRpci){
					this.modelTwoDataOne.nameList.push(allList.economicTwo.listRpci[i].year)
					this.modelTwoDataOne.dataListOne.push(Number(allList.economicTwo.listRpci[i].urban).toFixed(2))
					this.modelTwoDataOne.dataListTwo.push(Number(allList.economicTwo.listRpci[i].rural).toFixed(2))
					this.modelTwoDataOne.dataListThree.push((Number(allList.economicTwo.listRpci[i].urbanRatio)*100).toFixed(2))
					this.modelTwoDataOne.dataListFore.push((Number(allList.economicTwo.listRpci[i].ruralRatio)*100).toFixed(2))
				}
				//模块三
				var xfzc = allList.economicThree.latestPcce.filter(item=>item.typeName=='城镇')[0];
				this.modelThreeDataTwo.data = [
					{name:'医疗保健支出',value:Number(xfzc.medical)},
					{name:'衣着支出',value:Number(xfzc.clothing)},
					{name:'家庭设备和服务支出',value:Number(xfzc.homeDevice)},
					{name:'居住支出',value:Number(xfzc.residence)},
					{name:'其他支出',value:Number(xfzc.other)},
					{name:'食品烟酒支出',value:Number(xfzc.food)},
					{name:'文教娱乐支出',value:Number(xfzc.wjyl)},
					{name:'交通通讯支出',value:Number(xfzc.jttx)},
				]
				for(var i in allList.economicThree.czxfgcList){
					this.modelThreeDataOne.nameList.push(allList.economicThree.czxfgcList[i].year);
					this.modelThreeDataOne.dataListOne.push(allList.economicThree.czxfgcList[i].urban);
					this.modelThreeDataOne.dataListTwo.push(allList.economicThree.czxfgcList[i].rural);
				}
				
				//模块四
				this.modelForeDataOne.data = allList.economicFour.citysUpcce;
				//模块五
				for(var i in allList.economicFive.totalFccl){
					this.modelFiveDataOne.nameList.push(allList.economicFive.totalFccl[i].year)
					this.modelFiveDataTwo.nameList.push(allList.economicFive.totalFccl[i].year)
					this.modelFiveDataOne.dataListOne.push(allList.economicFive.totalFccl[i].ruralArea)
					this.modelFiveDataOne.dataListTwo.push(allList.economicFive.totalFccl[i].urbanArea)
					this.modelFiveDataTwo.dataListOne.push(allList.economicFive.totalFccl[i].carNumPer)
				}
				//模块六(数据暂缺)
				this.modelSixList.data = allList.economicSix.totalPtd;
				this.modelSixList.year = allList.economicSix.totalPtd.year;
				this.modelSixList.xsrc = allList.economicSix.totalPtd.xsrc;
				this.modelSixList.xsrs = allList.economicSix.totalPtd.xsrs;
				this.modelSixList.zcfgl = allList.economicSix.totalPtd.zcfgl;
				this.modelSixList.amount = allList.economicSix.totalPtd.amount;
				this.modelSixDataOne.data = allList.economicSix.totalPtd.znjydkPec;
				this.modelSixDataTwo.data = allList.economicSix.totalPtd.grjxjykdPec;
				this.modelSixDataThree.data = allList.economicSix.totalPtd.sylrdkPec;
				this.modelSixDataFore.data = allList.economicSix.totalPtd.fwgzlxdkPec;
				this.modelSixDataFive.data = allList.economicSix.totalPtd.zfdkPec;
				this.modelSixDataSix.data = allList.economicSix.totalPtd.dbyldkPec;
				
				
				this.loading = false;
				this.showAll = true;
			},
			downLoad(){
				
			}
			// modelOneChange(e){
			// 	this.modelOneIndex = e-1;
			// 	console.log(e);
			// 	this.showModelOne = false;
			// 	this.$nextTick(()=>{
			// 		this.showModelOne = true;
			// 	})
			// }
		}
	}
</script>

<style lang="less" scoped>
	.modelDetailsBox{
		width: 100%;
		height: auto;
		.modelOneBox{
			height: 440px;
			background: #fff;
			.ecmodelOneEchartsOne{
				width: 79%;
				height: 100%;
				float: left;
			}
			// .dataDetailsBox{
			// 	width: 35%;
			// 	float: left;
			// 	height: 100%;
			// }
		}
		.modelTwoBox{
			height: 472px;
			background: #fff;
			// .dataDetailBox{
			// 	float: left;
			// 	width: 30%;
			// 	height: 100%;
			// 	margin-top: 10px;
			// }
			.ecmodelTwoEchartsOne{
				width: 79%;
				float: left;
				height: 100%;
			}
		}
		.modelThreeBox{
			height: 412px;
			background: #fff;
			.ecmodelThreeEchartsOne{
				float: left;
				width: 50%;
				height: 100%;
			}
			.ecmodelThreeEchartsTwo{
				float: left;
				width: 50%;
				height: 100%;
			}
		}
		.modelForeBox{
			height: 436px;
			background: #fff;
		}
		.modelFiveBox{
			height: 436px;
			background: #fff;
			.ecmodelFiveEchartsOne{
				float: left;
				width: 50%;
				height: 100%;
			}
			.ecmodelFiveEchartsTwo{
				float: left;
				width: 50%;
				height: 100%;
			}
		}
		.modelSixBox{
			height: 490px;
			background: #fff;
			.echartsBoxs{
				width: calc(100% - 500px);
				height: 100%;
				float: left;
				display: flex;
				flex-wrap: wrap;
				.textBox{
					position: absolute;
					bottom: 34px;
					z-index: 2;
					width: 100%;
					color: #333;
					text-align: center;
					font-size: 14px;
				}
			}
			.dataDetailBoxs{
				float: left;
				height: 346px;
				width: 500px;
				margin-top: 55px;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				.detailBox{
					width: 234px;
					height: 130px;
					border-radius: 14px;
					p{
						font-size: 14px;
						color: #fff;
						text-align: center;
						span{
							font-family: Arial;
							font-weight: bold;
							font-style:italic;
							font-size: 38px;
						}
					}
				}
			}
		}
		
		.cardBox{
			border-radius: 6px;
			.detailBox{
				width: calc(100% - 20px);
				margin-left: 10px;
				height: 100%;
				p{
					color: #fff;
					span{
						font-family: Arial;
						font-weight: bold;
						font-style:italic;
					}
					.up{
						background: url(../../assets/img/up2.png)no-repeat;
						width: 13px;
						height: 13px;
						display: inline-block;
						margin-left: 5px;
					}
					.down{
						background: url(../../assets/img/down2.png)no-repeat;
						width: 13px;
						height: 13px;
						display: inline-block;
						margin-left: 5px;
					}
				}
			}
			
		}
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
</style>
