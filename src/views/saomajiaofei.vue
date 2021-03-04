<template>
	<div class="topClass">
		<div class="fristBox">
			<div class="none">
				<img src="../assets/back.png" alt="返回" class="backImg">
			</div>
			<div class="topCon">扫码缴费</div>
			<div class="none">

			</div>
		</div>
		<div class="con">
			<div class="sedBox">
				<div class="wordBox">
					<div class="sedw1">金牛座停车场</div>
					<div class="sedw2">杭州市余杭区五常西溪软件有金牛座</div>
					<div class="sedw3">￥1.50<span class="sedw4">/小时</span></div>
				</div>
			</div>
			<div class="thBox">
				<van-cell title="停车时长" value="2H" />
				<van-cell title="泊位号" value="F1C区32号" />
				<van-cell title="驶入时间" value="2020-04 24:32:31" />
				<van-cell title="车牌信息" value="鲁B23458" />
			</div>
			<div class="thBox">
				<van-cell title="选择套餐" is-link value="充10元打8折" />
				<van-cell title="支付方式" is-link value="钱包支付" />
				<van-cell title="优惠券" is-link value="￥4.00" />
			</div>
		</div>
		<div class="lastBox">
			<div class="lastB">
				<div class="moneyBox">
					<div style="display: flex;flex-direction: row;height: 50%;justify-content: space-between;align-items: flex-end;width: 95%;ma">
						<div class="hejiWord">合计:</div>
						<div class="moneyWord">￥22.22</div>
					</div>
					<div class="youhuiWord">已优惠￥1.00</div>
				</div>
				<div class="blueBox">
					<div class="blueBot" @click="getTokenVue">立即支付</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		created() {

		},
		methods: {
			getTokenVue() {
				console.log(this.$route.query);
			}
		}
	}
</script>

<style>
	.topClass {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		background-color: #f7f5f5;
	}

	.con {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.blueBox {
		width: 50%;
		height: 100%;
		display: flex;
		font-size: 16px;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.youhuiWord {
		font-size: 12px;
		color: grey;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.moneyWord {
		font-size: 18px;
		color: #FFA935;
	}

	.hejiWord {
		font-size: 14px;
	}

	.blueBot {
		width: 90px;
		height: 35px;
		border-radius: 25px;
		background-image: linear-gradient(90deg,
			#4599ee 0%,
			#3a6cd6 100%);
		text-align: center;
		line-height: 38px;
		color: white;
	}

	.van-cell__title {
		text-align: left;
	}

	.moneyBox {
		width: 50%;
		height: 100%;
	}

	.lastB {
		width: 55%;
		height: 70px;
		display: flex;
		flex-direction: row;
		margin-right: 10px;
	}

	.thBox {
		width: 95%;
		margin: 0 auto;
		margin-top: 15px;
		border-radius: 15px;
		overflow: hidden;
	}

	.lastBox {
		width: 100%;
		height: 70px;
		background-color: white;
		position: fixed;
		bottom: 0px;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}

	.sedw2 {
		font-size: 13px;
		color: #999999;
	}

	.wordBox {
		width: 90%;
		margin: 0 auto;
		height: 90%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
	}

	.sedw4 {
		font-size: 16px;
		color: #666666;
	}

	.sedw3 {
		color: #ffa935;
		font-size: 20px;
	}

	.backImg {
		width: 7px;
		height: 14px;
	}

	.sedw1 {
		font-size: 22px;
	}

	.fristBox {
		width: 100%;
		height: 50px;
		background-color: #3474F6;
		display: flex;
		flex-direction: row;
	}

	.none {
		width: 10%;
		height: 50px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.sedBox {
		height: 117px;
		width: 95%;
		margin: 0 auto;
		background-color: white;
		margin-top: 15px;
		border-radius: 15px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.topCon {
		width: 80%;
		font-size: 15px;
		text-align: center;
		line-height: 50px;
		color: white;
	}
</style>
