<template>
	<div class="loginBox">
		<div class="loginImgBox">
			<img src="../assets/logo.png" class="loginImg">
			<div class="loginWord">智慧停车</div>
		</div>
		<div class="loginInput">
			<div class="input1">
				<img src="../assets/phone.png" class="inpImg1">
				<input type="text" class="inpText" v-model="phone">
				<div class="blueBot" v-show="show" @click="getCode(),getyanzheng()">
					获取验证码
				</div>
				<span v-show="!show" class="blueBot1">{{count}}s后重新发送</span>
			</div>
			<div class="input1">
				<img src="../assets/Verificationcode.png" class="inpImg1">
				<input type="text" class="inpText1">
			</div>
		</div>
		<div class="loginBot">
			绑定
		</div>
	</div>
</template>
<script>
	export default {
		// import {
		// 	loginConfig
		// } from "../config.js";
		data() {
			return {
				show: true,
				count: '',
				timer: null,
				phone:'',
			}
		},
		methods: {
			getCode() {
				const TIME_COUNT = 60;
				if (!this.timer) {
					this.count = TIME_COUNT;
					this.show = false;
					this.timer = setInterval(() => {
						if (this.count > 0 && this.count <= TIME_COUNT) {
							this.count--;
						} else {
							this.show = true;
							clearInterval(this.timer);
							this.timer = null;
						}
					}, 1000)
				}
			},
			getyanzheng() {
				this.$axios.post("api/captcha",{type:1,telephone:this.phone})
					.then(res => {
						console.log(this.phone)
						console.log(res)
						if(res.data.error != 0){
							return this.$toast.fail(res.data.errmsg)
						}
					})
			},
		}
	}
</script>
<style scoped="scoped">
	.loginImg {
		width: 200px;
		height: 200px;
	}

	.loginBot {
		width: 590px;
		height: 75px;
		background-color: #bbbbbb;
		border-radius: 34px;
		margin: 0 auto;
		font-size: 30px;
		line-height: 75px;
		color: white;
	}

	.input1 {
		width: 590px;
		height: 66px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border-bottom: solid 1px grey;
		margin: 0 auto;
	}

	.inpText1 {
		border: none;
		width: 513px;
		height: 50px;
		font-size: 30px;
	}

	.loginInput {
		height: 200px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.blueBot1 {
		height: 50px;
		width: 175px;
		background-color: #bbbbbb;
		font-size: 20px;
		line-height: 50px;
		border-radius: 25px;
		color: white;
	}

	.blueBot {
		height: 50px;
		width: 175px;
		background-color: #3474f6;
		font-size: 26px;
		line-height: 50px;
		border-radius: 25px;
		color: white;
	}

	.inpText {
		border: none;
		width: 300px;
		height: 50px;
		font-size: 30px;
	}

	.loginBox {
		width: 100%;
		height: 670px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-top: 300px;
	}

	.loginImgBox {}

	.loginWord {
		font-size: 39px;
	}

	.loginInput {}

	.inpImg1 {
		width: 25px;
		height: 35px;
	}
</style>
