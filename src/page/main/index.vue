<template>
	<div style="width: 100%;background: #eee;">
		<el-header>
			<div style="width: 1440px;margin: 0 auto;">
				<div class="title">湖北省自然人综合查询分析平台</div>
				<!-- <div class="logout" title="退出"></div>
				<div class="setup" title="设置"></div>
				<div class="help" title="帮助"><span></span>帮助</div>
				<div class="user"><span></span>欢迎您,王明</div> -->
			</div>
		</el-header>
		<el-container style='width: 1440px;margin: 0 auto;'>
			<el-container>
				<el-aside width="240px" style='background: #fff;'>
					<el-menu default-active="1-1" class='el-menu-vertical-demo' active-text-color='#477eff' unique-opened @open='handleOpen'
					 @close="handleClose" style='border: 0;overflow: auto;'>
						<el-submenu index='1'>
							<template slot='title'>
								<i :class="itemIndex<20?'myicon icons11':'myicon icons1'"></i>
								<span :class="itemIndex<20?'title2':'title1'" style="font-size: 16px;">自然人宏观画像</span>
							</template>
							<el-menu-item-group>
								<el-menu-item index="1-1" @click='showMain(11)'><span :class="itemIndex==11?'point2':'point1'"></span>人口基本情况</el-menu-item>
								<el-menu-item index="1-2" @click='showMain(12)'><span :class="itemIndex==12?'point2':'point1'"></span>就业及收入</el-menu-item>
								<!-- <el-menu-item index="1-3" @click='showMain(13)'><span :class="itemIndex==13?'point2':'point1'"></span>社会保障情况</el-menu-item> -->
								<el-menu-item index="1-4" @click='showMain(14)'><span :class="itemIndex==14?'point2':'point1'"></span>经济水平</el-menu-item>
								<el-menu-item index="1-5" @click='showMain(15)'><span :class="itemIndex==15?'point2':'point1'"></span>医疗卫生情况</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<!-- <el-submenu index='2'>
							<template slot='title'>
								<i :class="itemIndex<30&&itemIndex>20?'myicon icons22':'myicon icons2'"></i>
								<span :class="itemIndex<30&&itemIndex>20?'title2':'title1'" style="font-size: 16px;">专题分析</span>
							</template>
							<el-menu-item-group>
								<el-menu-item index="2-1" @click='showMain(21)'><span :class="itemIndex==21?'point2':'point1'"></span>人口基本情况</el-menu-item>
								<el-menu-item index="2-2" @click='showMain(22)'><span :class="itemIndex==22?'point2':'point1'"></span>就业及收入</el-menu-item>
								<el-menu-item index="2-3" @click='showMain(23)'><span :class="itemIndex==23?'point2':'point1'"></span>社会保障情况</el-menu-item>
								<el-menu-item index="2-4" @click='showMain(24)'><span :class="itemIndex==24?'point2':'point1'"></span>经济水平</el-menu-item>
								<el-menu-item index="2-5" @click='showMain(25)'><span :class="itemIndex==25?'point2':'point1'"></span>医疗卫生情况</el-menu-item>
							</el-menu-item-group>
						</el-submenu> -->
						<!-- <el-submenu index='3'>
							<template slot='title'>
								<i :class="itemIndex<40&&itemIndex>30?'myicon icons33':'myicon icons3'"></i>
								<span :class="itemIndex<40&&itemIndex>30?'title2':'title1'" style="font-size: 16px;">自然人查询</span>
							</template>
							<el-menu-item-group>
								<el-menu-item index="3-1" @click='showMain(31)'><span :class="itemIndex==31?'point2':'point1'"></span>人口基本情况</el-menu-item>
								<el-menu-item index="3-2" @click='showMain(32)'><span :class="itemIndex==32?'point2':'point1'"></span>就业及收入</el-menu-item>
								<el-menu-item index="3-3" @click='showMain(33)'><span :class="itemIndex==33?'point2':'point1'"></span>社会保障情况</el-menu-item>
								<el-menu-item index="3-4" @click='showMain(34)'><span :class="itemIndex==34?'point2':'point1'"></span>经济水平</el-menu-item>
								<el-menu-item index="3-5" @click='showMain(35)'><span :class="itemIndex==35?'point2':'point1'"></span>医疗卫生情况</el-menu-item>
							</el-menu-item-group>
						</el-submenu> -->
					</el-menu>
				</el-aside>
				<el-main style='position: relative;' id="mianref">
					<div class="searchBox">
						<div class="labels" style="margin-left: 20px;">时间:</div>
						<el-select v-model="choosenYear" placeholder="请选择" style='line-height: 80px;float: left;'>
							<el-option v-for="item2 in yearLists" :key="item2.value" :label="item2.label" :value="item2.value">
							</el-option>
						</el-select>
						<div class="buttonbox">
							<div @click="resetting()">重置</div>
							<div @click="inquiry()">查询</div>
						</div>
					</div>
					<transition name="el-zoom-in-center" style="position: absolute;">
						<population v-if="itemIndex==11" style="position: absolute;" ref='population'></population>
					</transition>
					<transition name="el-zoom-in-center">
						<employment v-if="itemIndex==12" style="position: absolute;" ref='employment'></employment>
					</transition>
					<transition name="el-zoom-in-center">
						<socialSecurity v-if="itemIndex==13" style="position: absolute;" ref='socialSecurity'></socialSecurity>
					</transition>
					<transition name="el-zoom-in-center">
						<economics v-if="itemIndex==14" style="position: absolute;" ref='economics'></economics>
					</transition>
					<transition name="el-zoom-in-center">
						<medical v-if="itemIndex==15" style="position: absolute;" ref='medical'></medical>
					</transition>
				</el-main>
			</el-container>
		</el-container>
	</div>

</template>

<script>
	import population from '@/components/macroscopic/population'
	import employment from '@/components/macroscopic/employment'
	import socialSecurity from '@/components/macroscopic/socialSecurity'
	import economics from '@/components/macroscopic/economics'
	import medical from '@/components/macroscopic/medical'
	export default {
		data() {
			return {
				itemIndex: 11,
				cityLists: [{
						value: 11111,
						label: '武汉市'
					},
					{
						value: 22222,
						label: '襄阳市'
					},
					{
						value: 33333,
						label: '孝感市'
					},
					{
						value: 44444,
						label: '宜昌市'
					},
				],
				yearLists: [{
						value: 2017,
						label: 2017
					},
					{
						value: 2016,
						label: 2016
					},
					{
						value: 2015,
						label: 2015
					},
					{
						value: 2014,
						label: 2014
					},
				],
				choosenCity: '',
				choosenYear: 2017
			}
		},
		components: {
			population,
			employment,
			economics,
			socialSecurity,
			medical
		},
		mounted() {
			document.onmousewheel = this.wheelHander;//非火狐
			document.addEventListener('DOMMouseScroll',this.wheelHander,false);
		},
		methods: {
			wheelHander(e) {
				let temp = 0;
				//事件的兼容性写法 
				let oEvent = e || window.event;
				if(oEvent.wheelDelta){//非火狐
					if(oEvent.wheelDelta > 0){//向上滚动
						setTimeout(() => {
							for (let i = 0; i < Math.abs(oEvent.wheelDelta)/10;i++) {
								document.getElementById('mianref').scrollTop -= 10;
							}
							
						},50);
					}else{//向下滚动
						setTimeout(() => {
							for (let i = 0; i < Math.abs(oEvent.wheelDelta)/10;i++) {
								document.getElementById('mianref').scrollTop += 10;
							}
							
						},50);					
					}
				}else if(oEvent.detail){
					if(oEvent.detail > 0){//向下滚动
						setTimeout(() => {
							for (let i = 0; i < Math.abs(oEvent.detail)/100;i++) {
								document.getElementById('mianref').scrollTop += 100;
							}
						},50);
					}else{//向上滚动
						
						setTimeout(() => {
							for (let i = 0; i < Math.abs(oEvent.detail)/100;i++) {
								document.getElementById('mianref').scrollTop -= 100;
							}
						},50);
					}
				}				
			},
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			showMain(e) {
				console.log(e)
				this.itemIndex = e;
				this.choosenYear = 2017;
				this.$nextTick(() => {
					setTimeout(() => {
						document.getElementById('mianref').scrollTop  = 0;
					},100);
				})

			},
			resetting() {
				this.choosenCity = '';
				this.choosenYear = 2017;
				this.inquiry()
			},
			inquiry() {
				console.log(this.choosenYear)
				if (this.itemIndex == 11) {
					this.$refs.population.getData(this.choosenYear)
				}
				if (this.itemIndex == 12) {
					this.$refs.employment.getData(this.choosenYear)
				}
				if (this.itemIndex == 13) {
					this.$refs.socialSecurity.getData(this.choosenYear)
				}
				if (this.itemIndex == 14) {
					this.$refs.economics.getData(this.choosenYear)
				}
				if (this.itemIndex == 15) {
					this.$refs.medical.getData(this.choosenYear)
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	* {
		box-sizing: border-box;
	}

	.buttonbox {
		width: 180px;
		height: 32px;
		float: left;
		margin-top: 24px;
		margin-left: 80px;
		display: flex;
		justify-content: space-between;

		div {
			width: 80px;
			height: 32px;
			border-radius: 3px;
			line-height: 32px;
			text-align: center;
			font-size: 14px;
			cursor: pointer;

			&:nth-child(1) {
				color: #487fff;
				border: 1px solid #487fff;
			}

			&:nth-child(2) {
				color: #fff;
				background: #487fff;
			}
		}
	}

	.el-header {
		background: url(../../assets/img/topbg.png)no-repeat;
		color: #fff;
		line-height: 60px;

		.title {
			font-size: 24px;
			font-weight: bold;
			float: left;
		}

		.logout {
			float: right;
			width: 19px;
			height: 19px;
			margin-top: 20px;
			margin-right: 24px;
			background: url(../../assets/img/退出icon.png)no-repeat;
			cursor: pointer;
		}

		.setup {
			float: right;
			width: 20px;
			height: 20px;
			margin-top: 20px;
			margin-right: 24px;
			background: url(../../assets/img/设置icon.png)no-repeat;
			cursor: pointer;
		}

		.help {
			line-height: 60px;
			color: #fff;
			font-size: 14px;
			float: right;
			margin-right: 24px;
			cursor: pointer;

			span {
				display: block;
				float: left;
				width: 20px;
				height: 20px;
				background: url(../../assets/img/帮助icon.png)no-repeat;
				margin-right: 6px;
				margin-top: 20px;
			}
		}

		.user {
			line-height: 60px;
			color: #fff;
			font-size: 14px;
			float: right;
			margin-right: 55px;

			span {
				display: block;
				float: left;
				width: 34px;
				height: 34px;
				margin-top: 13px;
				margin-right: 16px;
				cursor: pointer;
				background: url(../../assets/img/图层2.png)no-repeat;
			}
		}
	}

	.el-aside {
		// height: 900px;
		// background: #f6f6f6;
		min-height: 900px;
	}

	.el-main {
		background: #f6f6f6;
		position: relative;
		overflow: auto;

		.searchBox {
			width:100%;
			height: 80px;
			background: #fff;
		}
	}

	.el-menu::-webkit-scrollbar {
		width: 0 !important
	}

	.el-menu {
		-ms-overflow-style: none;
	}

	.el-menu {
		overflow: -moz-scrollbars-none;
	}

	.el-menu {
		scrollbar-width: none;
	}
	.el-main{
		overflow-x: hidden;
	}
	.el-main::-webkit-scrollbar {
		width: 0 !important
	}

	.el-main {
		-ms-overflow-style: none;
	}

	.el-main {
		overflow: -moz-scrollbars-none;
	}

	.el-main {
		scrollbar-width: none;
	}

	body>.el-container {
		margin-bottom: 40px;
	}

	.point1 {
		display: inline-block;
		margin-right: 5px;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		border: solid 1px #8a8fa0;
	}

	.point2 {
		display: inline-block;
		margin-right: 5px;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background-color: #477eff;
	}

	.title2 {
		color: #477eff;
	}

	.myicon {
		width: 26px;
		height: 26px;
		display: inline-block;
		margin-right: 10px;
	}

	.icons1 {
		background: url(../../assets/img/宏观icon1.png)no-repeat;
	}

	.icons11 {
		background: url(../../assets/img/宏观icon2.png)no-repeat;
	}

	.icons2 {
		background: url(../../assets/img/专题分析icon1.png)no-repeat;
	}

	.icons22 {
		background: url(../../assets/img/专题分析icon2.png)no-repeat;
	}

	.icons3 {
		background: url(../../assets/img/自然人查询icon1.png)no-repeat;
	}

	.icons33 {
		background: url(../../assets/img/自然人查询icon2.png)no-repeat;
	}

	.labels {
		float: left;
		line-height: 80px;
		font-size: 14px;
		color: #666666;
		margin-right: 8px;
		margin-left: 20px;
	}
</style>
