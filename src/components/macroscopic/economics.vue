<template>
	<div class="mainbox">
		<div class="titleBox">湖北省<span>2019年第四季度</span>经济水平
			<div class="buttons">下载</div>
		</div>
		<div class="modelDetailsBox">
			<div class="modelOneBox">
				<div class="modelboxs">
					<div class="levelTwoTitle"><span></span>国内生产总值情况
						<div class="buttonsBox">
							<div @click="modelOneChange(1)" :class="modelOneIndex==1?'choosen':''">GDP</div>
							<div @click="modelOneChange(2)" :class="modelOneIndex==2?'choosen':''">人均GDP</div>
						</div>
					</div>
					<div style="width: 100%;height: calc(100% - 56px);">
						<div class="ecmodelOneEchartsOne">
							<map-echarts :id = '"ecmodelOneEchartsOne"' :datas = 'modelOneDataOne'></map-echarts>
						</div>
						<div class="dataDetailsBox">
							<div class="cardBox" style="width: 330px;height: 150px;background: #6aadff;margin-top: 32px;margin-left: 60px;">
								<div class="detailBox">
									<p style="font-size: 14px;padding-top: 20px;">湖北省GDP(2018年)</p>
									<p style="font-size: 14px;padding-top: 20px;text-align: center;"><span style="font-size: 32px;padding-top: 22px;">39367</span> 亿元</p>
									<p style="height: 40px;line-height: 40px;border-top: 1px solid rgba(255,255,255,0.4);margin-top: 20px;">同比上期 7.8% <i class="up"></i></p>
								</div>
							</div>
							<div class="cardBox" style="width: 330px;height: 150px;background: #5ed8f7;margin-top: 20px;margin-left: 60px;">
								<div class="detailBox">
									<p style="font-size: 14px;padding-top: 20px;">湖北省人均GDP(2018年)</p>
									<p style="font-size: 14px;padding-top: 20px;text-align: center;"><span style="font-size: 32px;padding-top: 22px;">66615.7</span> 元</p>
									<p style="height: 40px;line-height: 40px;border-top: 1px solid rgba(255,255,255,0.4);margin-top: 20px;">同比上期 7.8% <i class="down"></i></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="modelTwoBox">
				<div class="modelboxs">
					<div class="levelTwoTitle"><span></span>居民人均可支配收入</div>
					<div style="width: 100%;height: calc(100% - 56px);">
						<div class="dataDetailBox">
							<div class="cardBox" style="width: 212px;height: 106px;background: #ffc56a;">
								<div class="detailBox">
									<p style="font-size: 12px;padding-top: 14px;">城镇居民人均可支配收入(2018年)</p>
									<p style="font-size: 14px;padding-top: 12px;text-align: center;"><span style="font-size: 20px;">19700</span> 元</p>
									<p style="height: 36px;line-height: 36px;border-top: 1px solid rgba(255,255,255,0.4);margin-top: 12px;">同比上期 7.8% <i class="up"></i></p>
								</div>
							</div>
							<div class="cardBox" style="width: 212px;height: 106px;background: #6aadff;">
								<div class="detailBox">
									<p style="font-size: 12px;padding-top: 14px;">农村居民人均可支配收入(2018年)</p>
									<p style="font-size: 14px;padding-top: 12px;text-align: center;"><span style="font-size: 20px;">7142</span> 元</p>
									<p style="height: 36px;line-height: 36px;border-top: 1px solid rgba(255,255,255,0.4);margin-top: 12px;">同比上期 7.8% <i class="up"></i></p>
								</div>
							</div>
							<div class="cardBox" style="width: 212px;height: 106px;background: #5ed8f7;">
								<div class="detailBox">
									<p style="font-size: 12px;padding-top: 14px;">城乡居民收入比(2018年)</p>
									<p style="font-size: 14px;padding-top: 12px;text-align: center;"><span style="font-size: 20px;">2.77</span> 元</p>
									<p style="height: 36px;line-height: 36px;border-top: 1px solid rgba(255,255,255,0.4);margin-top: 12px;">同比上期 0.2% <i class="down"></i></p>
								</div>
							</div>
						</div>
						<div class="ecmodelTwoEchartsOne">
							<init-echartsseven :id='"ecmodelTwoEchartsOne"' :datas = 'modelTwoDataOne'></init-echartsseven>
						</div>
					</div>
				</div>
			</div>
			
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
			
			<div class="modelForeBox">
				<div class="modelboxs">
					<div class="levelTwoTitle"><span></span>主要城市居民消费、支出价格</div>
					<div style="width: 100%;height: calc(100% - 56px);">
						<map-echarts :id = '"ecmodelForeEchartsOne"' :datas = 'modelForeDataOne'></map-echarts>
					</div>
				</div>
			</div>
			
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
			
			<div class="modelSixBox">
				<div class="modelboxs">
					<div class="levelTwoTitle"><span></span>个税减税情况</div>
					<div style="width: 100%;height: calc(100% - 56px);">
						<div class="dataDetailBox">
							<div class="detailBox" style="background: #ffc56a;">
								<p style="padding-top: 28px;">享受扣除人次</p>
								<p style="padding-top: 20px;"><span>32</span>万人</p>
							</div>
							<div class="detailBox" style="background: #6aadff;">
								<p style="padding-top: 28px;">享受扣除人数</p>
								<p style="padding-top: 20px;"><span>17</span>万人</p>
							</div>
							<div class="detailBox" style="background: #5ed8f7;">
								<p style="padding-top: 28px;">政策享受覆盖率</p>
								<p style="padding-top: 20px;"><span>93</span>%</p>
							</div>
							<div class="detailBox" style="background: #32d89f;">
								<p style="padding-top: 28px;">累计扣除金额</p>
								<p style="padding-top: 20px;"><span>1200</span>万人</p>
							</div>
						</div>
						<div class="echartsBoxs">
							<div style="height: 50%;width: 240px;position: relative;">
								<div style="height: 80%;width: 100%;z-index: 1;position: absolute;top: 20px;">
									<init-echartseight :id='"ecmodelSixEchartsOne"' :datas = 'modelSixDataOne'></init-echartseight>
								</div>
								<div class="textBox">
									子女教育抵扣<br>1200万元
								</div>
							</div>
							<div style="height: 50%;width: 240px;position: relative;">
								<div style="height: 80%;width: 100%;z-index: 1;position: absolute;top: 20px;">
									<init-echartseight :id='"ecmodelSixEchartsTwo"' :datas = 'modelSixDataTwo'></init-echartseight>
								</div>
								<div class="textBox">
									个人继续教育抵扣<br>1200万元
								</div>
							</div>
							<div style="height: 50%;width: 240px;position: relative;">
								<div style="height: 80%;width: 100%;z-index: 1;position: absolute;top: 20px;">
									<init-echartseight :id='"ecmodelSixEchartsThree"' :datas = 'modelSixDataThree'></init-echartseight>
								</div>
								<div class="textBox">
									赡养老人抵扣<br>1200万元
								</div>
							</div>
							<div style="height: 50%;width: 240px;position: relative;">
								<div style="height: 80%;width: 100%;z-index: 1;position: absolute;top: 20px;">
									<init-echartseight :id='"ecmodelSixEchartsFore"' :datas = 'modelSixDataFore'></init-echartseight>
								</div>
								<div class="textBox">
									房屋购置利息抵扣<br>1200万元
								</div>
							</div>
							<div style="height: 50%;width: 240px;position: relative;">
								<div style="height: 80%;width: 100%;z-index: 1;position: absolute;top: 20px;">
									<init-echartseight :id='"ecmodelSixEchartsFive"' :datas = 'modelSixDataFive'></init-echartseight>
								</div>
								<div class="textBox">
									租房抵扣<br>1200万元
								</div>
							</div>
							<div style="height: 50%;width: 240px;position: relative;">
								<div style="height: 80%;width: 100%;z-index: 1;position: absolute;top: 20px;">
									<init-echartseight :id='"ecmodelSixEchartsSix"' :datas = 'modelSixDataSix'></init-echartseight>
								</div>
								<div class="textBox">
									大病医疗保险抵扣<br>1200万元
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
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
	export default{
		components:{initEchartsseven,initEchartsone,initEchartstwo,initEchartseight,initEchartsnine,mapEcharts},
		data(){
			return{
				modelOneIndex:1,
				modelOneDataOne:{
					type:1,
					size:[0,1000],
					data : [
						{
							name:'武汉市',
							value:988,
							dataList:[
								{
									name:'GDP',
									value:'100',
									unit:'亿元'
								},
								{
									name:'人均GDP',
									value:'50000',
									unit:'元'
								}
							]
						},
						{
							name:'恩施土家族苗族自治州',
							value:588,
							dataList:[
								{
									name:'GDP',
									value:'100',
									unit:'亿元'
								},
								{
									name:'人均GDP',
									value:'50000',
									unit:'元'
								}
							]
						},
						{
							name:'十堰市',
							value:688,
							dataList:[
								{
									name:'GDP',
									value:'100',
									unit:'亿元'
								},
								{
									name:'人均GDP',
									value:'50000',
									unit:'元'
								}
							]
						},
						{
							name:'宜昌市',
							value:888,
							dataList:[
								{
									name:'GDP',
									value:'100',
									unit:'亿元'
								},
								{
									name:'人均GDP',
									value:'50000',
									unit:'元'
								}
							]
						},
						{
							name:'襄阳市',
							value:888,
							dataList:[
								{
									name:'GDP',
									value:'100',
									unit:'亿元'
								},
								{
									name:'人均GDP',
									value:'50000',
									unit:'元'
								}
							]
						},
						{
							name:'黄冈市',
							value:688,
							dataList:[
								{
									name:'GDP',
									value:'100',
									unit:'亿元'
								},
								{
									name:'人均GDP',
									value:'50000',
									unit:'元'
								}
							]
						},
						{
							name:'荆州市',
							value:588,
							dataList:[
								{
									name:'GDP',
									value:'100',
									unit:'亿元'
								},
								{
									name:'人均GDP',
									value:'50000',
									unit:'元'
								}
							]
						},
						{
							name:'荆门市',
							value:488,
							dataList:[
								{
									name:'GDP',
									value:'100',
									unit:'亿元'
								},
								{
									name:'人均GDP',
									value:'50000',
									unit:'元'
								}
							]
						},
						{
							name:'咸宁市',
							value:288,
							dataList:[
								{
									name:'GDP',
									value:'100',
									unit:'亿元'
								},
								{
									name:'人均GDP',
									value:'50000',
									unit:'元'
								}
							]
						},
						{
							name:'随州市',
							value:388,
							dataList:[
								{
									name:'GDP',
									value:'100',
									unit:'亿元'
								},
								{
									name:'人均GDP',
									value:'50000',
									unit:'元'
								}
							]
						},
						{
							name:'孝感市',
							value:488,
							dataList:[
								{
									name:'GDP',
									value:'100',
									unit:'亿元'
								},
								{
									name:'人均GDP',
									value:'50000',
									unit:'元'
								}
							]
						},
						{
							name:'黄石市',
							value:488,
							dataList:[
								{
									name:'GDP',
									value:'100',
									unit:'亿元'
								},
								{
									name:'人均GDP',
									value:'50000',
									unit:'元'
								}
							]
						},
						{
							name:'神农架林区',
							value:188,
							dataList:[
								{
									name:'GDP',
									value:'100',
									unit:'亿元'
								},
								{
									name:'人均GDP',
									value:'50000',
									unit:'元'
								}
							]
						},
						{
							name:'天门市',
							value:288,
							dataList:[
								{
									name:'GDP',
									value:'100',
									unit:'亿元'
								},
								{
									name:'人均GDP',
									value:'50000',
									unit:'元'
								}
							]
						},
						{
							name:'仙桃市',
							value:688,
							dataList:[
								{
									name:'GDP',
									value:'100',
									unit:'亿元'
								},
								{
									name:'人均GDP',
									value:'50000',
									unit:'元'
								}
							]
						},
						{
							name:'潜江市',
							value:488,
							dataList:[
								{
									name:'GDP',
									value:'100',
									unit:'亿元'
								},
								{
									name:'人均GDP',
									value:'50000',
									unit:'元'
								}
							]
						},
						{
							name:'鄂州市',
							value:588,
							dataList:[
								{
									name:'GDP',
									value:'100',
									unit:'亿元'
								},
								{
									name:'人均GDP',
									value:'50000',
									unit:'元'
								}
							]
						},
					]
				},
				modelTwoDataOne:{
					unit:['单位(元)','同比(%)'],
					legendList:['城镇居民人均','农村居民人均','增长率(城镇)','增长率(农村)'],
					nameList:['2012','2013' ,'2014','2015','2016','2017','2018'],
					nameList:['2014','2015','2016','2017','2018'],
					dataListOne:[5500,5600,5700,6500,6800],
					dataListTwo:[3300,4200,4500,5200,5300],
					dataListThree:[2.3,3.2,2.4,3.4,1.2],
					dataListFore:[3.2,3.4,1.6,2.9,1.1],
					color:['#487fff','#84a9ff','#ffc56a','#ffd99e','#ffa39c','#3ceeb1']
				},
				modelThreeDataOne:{
					unit:'单位(元)',
					legendList:['城镇居民人均消费支出','农村居民人均消费支出'],
					nameList:['2014','2015','2016','2017','2018'],
					dataListOne:[3500,3600,3700,4500,5000],
					dataListTwo:[1500,2200,2300,2500,2700],
					color:['#80ebf5','#3dc5dd','#f0db4b','#fbeb81']
				},
				modelThreeDataTwo:{
					data:[{value:1234,name:'娱教、文化服务',selected:true},{value:1234,name:'医疗保健'},{value:1234,name:'交通和通讯'},{value:1234,name:'居住'}],
					unit:'元',
					title:'人均消费支出\n及结构',
					names:'消费结构'
				},
				modelForeDataOne:{
					type:2,
					size:[0,1000],
					data : [
						{
							name:'武汉市',
							dataList:[
								{
									name:'医疗保健',
									value:'1500',
									unit:'元'
								},
								{
									name:'交通和通讯',
									value:'2500',
									unit:'元'
								},
								{
									name:'娱乐、教育、文化服务',
									value:'3500',
									unit:'元'
								},
								{
									name:'居住',
									value:'4500',
									unit:'元'
								},
							]
						},
						{
							name:'恩施土家族苗族自治州',
							dataList:[
								{
									name:'医疗保健',
									value:'1500',
									unit:'元'
								},
								{
									name:'交通和通讯',
									value:'2500',
									unit:'元'
								},
								{
									name:'娱乐、教育、文化服务',
									value:'3500',
									unit:'元'
								},
								{
									name:'居住',
									value:'4500',
									unit:'元'
								},
							]
						},
						{
							name:'十堰市',
							dataList:[
								{
									name:'医疗保健',
									value:'1500',
									unit:'元'
								},
								{
									name:'交通和通讯',
									value:'2500',
									unit:'元'
								},
								{
									name:'娱乐、教育、文化服务',
									value:'3500',
									unit:'元'
								},
								{
									name:'居住',
									value:'4500',
									unit:'元'
								},
							]
						},
						{
							name:'宜昌市',
							dataList:[
								{
									name:'医疗保健',
									value:'1500',
									unit:'元'
								},
								{
									name:'交通和通讯',
									value:'2500',
									unit:'元'
								},
								{
									name:'娱乐、教育、文化服务',
									value:'3500',
									unit:'元'
								},
								{
									name:'居住',
									value:'4500',
									unit:'元'
								},
							]
						},
						{
							name:'襄阳市',
							dataList:[
								{
									name:'医疗保健',
									value:'1500',
									unit:'元'
								},
								{
									name:'交通和通讯',
									value:'2500',
									unit:'元'
								},
								{
									name:'娱乐、教育、文化服务',
									value:'3500',
									unit:'元'
								},
								{
									name:'居住',
									value:'4500',
									unit:'元'
								},
							]
						},
						{
							name:'黄冈市',
							dataList:[
								{
									name:'医疗保健',
									value:'1500',
									unit:'元'
								},
								{
									name:'交通和通讯',
									value:'2500',
									unit:'元'
								},
								{
									name:'娱乐、教育、文化服务',
									value:'3500',
									unit:'元'
								},
								{
									name:'居住',
									value:'4500',
									unit:'元'
								},
							]
						},
						{
							name:'荆州市',
							dataList:[
								{
									name:'医疗保健',
									value:'1500',
									unit:'元'
								},
								{
									name:'交通和通讯',
									value:'2500',
									unit:'元'
								},
								{
									name:'娱乐、教育、文化服务',
									value:'3500',
									unit:'元'
								},
								{
									name:'居住',
									value:'4500',
									unit:'元'
								},
							]
						},
						{
							name:'荆门市',
							dataList:[
								{
									name:'医疗保健',
									value:'1500',
									unit:'元'
								},
								{
									name:'交通和通讯',
									value:'2500',
									unit:'元'
								},
								{
									name:'娱乐、教育、文化服务',
									value:'3500',
									unit:'元'
								},
								{
									name:'居住',
									value:'4500',
									unit:'元'
								},
							]
						},
						{
							name:'咸宁市',
							dataList:[
								{
									name:'医疗保健',
									value:'1500',
									unit:'元'
								},
								{
									name:'交通和通讯',
									value:'2500',
									unit:'元'
								},
								{
									name:'娱乐、教育、文化服务',
									value:'3500',
									unit:'元'
								},
								{
									name:'居住',
									value:'4500',
									unit:'元'
								},
							]
						},
						{
							name:'随州市',
							dataList:[
								{
									name:'医疗保健',
									value:'1500',
									unit:'元'
								},
								{
									name:'交通和通讯',
									value:'2500',
									unit:'元'
								},
								{
									name:'娱乐、教育、文化服务',
									value:'3500',
									unit:'元'
								},
								{
									name:'居住',
									value:'4500',
									unit:'元'
								},
							]
						},
						{
							name:'孝感市',
							dataList:[
								{
									name:'医疗保健',
									value:'1500',
									unit:'元'
								},
								{
									name:'交通和通讯',
									value:'2500',
									unit:'元'
								},
								{
									name:'娱乐、教育、文化服务',
									value:'3500',
									unit:'元'
								},
								{
									name:'居住',
									value:'4500',
									unit:'元'
								},
							]
						},
						{
							name:'黄石市',
							dataList:[
								{
									name:'医疗保健',
									value:'1500',
									unit:'元'
								},
								{
									name:'交通和通讯',
									value:'2500',
									unit:'元'
								},
								{
									name:'娱乐、教育、文化服务',
									value:'3500',
									unit:'元'
								},
								{
									name:'居住',
									value:'4500',
									unit:'元'
								},
							]
						},
						{
							name:'神农架林区',
							dataList:[
								{
									name:'医疗保健',
									value:'1500',
									unit:'元'
								},
								{
									name:'交通和通讯',
									value:'2500',
									unit:'元'
								},
								{
									name:'娱乐、教育、文化服务',
									value:'3500',
									unit:'元'
								},
								{
									name:'居住',
									value:'4500',
									unit:'元'
								},
							]
						},
						{
							name:'天门市',
							dataList:[
								{
									name:'医疗保健',
									value:'1500',
									unit:'元'
								},
								{
									name:'交通和通讯',
									value:'2500',
									unit:'元'
								},
								{
									name:'娱乐、教育、文化服务',
									value:'3500',
									unit:'元'
								},
								{
									name:'居住',
									value:'4500',
									unit:'元'
								},
							]
						},
						{
							name:'仙桃市',
							dataList:[
								{
									name:'医疗保健',
									value:'1500',
									unit:'元'
								},
								{
									name:'交通和通讯',
									value:'2500',
									unit:'元'
								},
								{
									name:'娱乐、教育、文化服务',
									value:'3500',
									unit:'元'
								},
								{
									name:'居住',
									value:'4500',
									unit:'元'
								},
							]
						},
						{
							name:'潜江市',
							dataList:[
								{
									name:'医疗保健',
									value:'1500',
									unit:'元'
								},
								{
									name:'交通和通讯',
									value:'2500',
									unit:'元'
								},
								{
									name:'娱乐、教育、文化服务',
									value:'3500',
									unit:'元'
								},
								{
									name:'居住',
									value:'4500',
									unit:'元'
								},
							]
						},
						{
							name:'鄂州市',
							dataList:[
								{
									name:'医疗保健',
									value:'1500',
									unit:'元'
								},
								{
									name:'交通和通讯',
									value:'2500',
									unit:'元'
								},
								{
									name:'娱乐、教育、文化服务',
									value:'3500',
									unit:'元'
								},
								{
									name:'居住',
									value:'4500',
									unit:'元'
								},
							]
						},
					]
				},
				modelFiveDataOne:{
					unit:'单位(平方米)',
					legendList:['城镇居民人均住房面积','农村居民人均住房面积'],
					nameList:['2014','2015','2016','2017','2018'],
					dataListOne:[100,110,130,120,110],
					dataListTwo:[80,90,80,80,90],
					color:['#487fff','#84a9ff','#f0db4b','#fbeb81']
				},
				modelFiveDataTwo:{
					unit:'单位(辆)',
					legendList:['城镇每百户汽车保有量'],
					nameList:['2014','2015','2016','2017','2018'],
					dataListOne:[60,65,70,73,85],
					color:['#80ebf5','#3dc5dd']
				},
				modelSixDataOne:{
					data:0.48,
					color:'#6aadff'
				},
				modelSixDataTwo:{
					data:0.56,
					color:'#32d89f'
				},
				modelSixDataThree:{
					data:0.65,
					color:'#ffc56a'
				},
				modelSixDataFore:{
					data:0.32,
					color:'#5ed8f7'
				},
				modelSixDataFive:{
					data:0.72,
					color:'#f7e05e'
				},
				modelSixDataSix:{
					data:0.50,
					color:'#6a83ff'
				},
			}
		},
		mounted() {
			// this.initModelThreeEchartsTwo('ecmodelThreeEchartsTwo',this.modelThreeDataTwo)
		},
		methods:{
			modelOneChange(e){
				this.modelOneIndex = e;
			},
			initModelThreeEchartsTwo(dom,data){
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
				var totals = 0;
				for(var i in data){
					totals += data[i].value
				}
				let myChart = this.$echarts.init(document.getElementById(dom));
				myChart.setOption({
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} 元({d}%)"
					},
					title:{
						text:totals,
						subtext:'人均消费支出 \n 及结构',
						textStyle: {
							fontSize: 24,
							color:'#0487ff',
							fontStyle:'italic'
						},
						subtextStyle: {
							color: '#666',
							fontSize: 14,
							align: 'center'
						},
						x: 'center',
						y: '40%',
					},
					legend:{show:false},
					color:color,
					series :[
						{
							name:'消费支出',
							type:'pie',
							radius: ['35%', '48%'],
							selectedMode: 'single',
							label:{
								normal:{
									rich: rich,
									formatter:function(params, ticket, callback){
										var total = 0;
										var percent = 0;
										data.forEach(function(value, index, array,name) {
											total += value.value;
										});
										percent = ((params.value / total) * 100).toFixed(1);
										return '{numThree|' + params.name + '}\n{numOne|' + params.value + '}{numThree| 元}\n{numTwo|' + percent + '%}';
									}
								}
							},
							data:data
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
			width: 1632px;
			height: 440px;
			background: #fff;
			margin-bottom: 24px;
			.ecmodelOneEchartsOne{
				width: 55%;
				height: 100%;
				margin-left: 10%;
				float: left;
			}
			.dataDetailsBox{
				width: 35%;
				float: left;
				height: 100%;
			}
		}
		.modelTwoBox{
			width: 708px;
			height: 412px;
			background: #fff;
			margin-bottom: 24px;
			.dataDetailBox{
				width: 100%;
				height: 106px;
				margin-top: 10px;
				display: flex;
				justify-content: space-between;
			}
			.ecmodelTwoEchartsOne{
				width: 100%;
				height: calc(100% - 116px);
			}
		}
		.modelThreeBox{
			width: 900px;
			height: 412px;
			margin-left: 32px;
			background: #fff;
			margin-bottom: 24px;
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
			width: 708px;
			height: 436px;
			background: #fff;
			margin-bottom: 24px;
		}
		.modelFiveBox{
			width: 900px;
			height: 436px;
			margin-left: 32px;
			background: #fff;
			margin-bottom: 24px;
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
			width: 1632px;
			height: 490px;
			background: #fff;
			margin-bottom: 24px;
			.echartsBoxs{
				width: 720px;
				height: 100%;
				float: left;
				display: flex;
				margin-left: 132px;
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
			.dataDetailBox{
				float: left;
				height: 346px;
				width: 618px;
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
</style>
