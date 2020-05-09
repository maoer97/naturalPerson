<template>
	<div class="titles">
		<div class="decorationSpan"></div>
		<div class="text">{{titles}}</div>
		<div style="display: inline-block;float: right;">
			<el-select v-model="itemChoosen" placeholder="请选择" @change="itemChange">
				<el-option
				v-for="item in items"
				:key="item.value"
				:label="item.label"
				:value="item.value">
				</el-option>
			</el-select>
			<el-popover
				placement="bottom"
				title=""
				width="214"
				trigger="hover"
				v-if="false"
				>
				<div class="questionContent">
					<p>
						<span style="color: #FF4848;">*</span>
						<span style="color: #487FFF;">城镇居民人均：</span>居民家庭全部收入 中，可用于支付生活费用的收入</p>
					<p>
					<span style="color: #FF4848;">*</span>
					<span style="color: #487FFF;">城镇居民人均：</span>居民家庭全部收入 中，可用于支付生活费用的收入</p>
				</div>
				<img slot="reference" src="../assets/img/问号.png" width="26px" height="26px" class="questionMark" alt="">
			</el-popover>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				itemChoosen:1,
			}
		},
		props:['titles','items'],
		methods:{
			itemChange(e){
				this.$emit('changeIndex',e)
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.titles{
		width: 100%;
		height: 56px;
		line-height: 56px; 
		color: #333;
		font-size: 16px;
		border-bottom: 1px solid #eee;
		box-sizing: border-box;
		.decorationSpan{
			float: left;
			margin-top: 21px;
			width: 3px;
			height: 14px;
			background: #487fff;
			margin-right: 10px;
		}
		.text{
			float: left;
		}
		.questionMark {
			vertical-align: middle;
			margin-left: 10px;
			cursor: pointer;
		}
	}
</style>
