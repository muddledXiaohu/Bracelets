<template>
	 <view class="content">
		 <image class="bg-set" src="/static/bgi.jpg"></image>
		 <text class="id"> 预 约 ID 号 </text>
	        <verification-code-style borderStyle="border-bottom:2px solid #fff" borderCheckStyle="border-bottom:2px solid #008c8c;"
	         :latticeNum="6" @getInputVerification="getInputVerification"></verification-code-style>
			<s-popup custom-class="demo-popup" position="bottom" v-model="visible">
				<!-- 内容 -->
				ID号有误请重新输入
			</s-popup>
	 </view>
</template>

<script>
	import verificationCodeStyle from '@/components/verification-code-style2/verification-code-style2.vue'
	import sPopup from '@/components/s-popup/index.vue';
	export default {
		 components: {
			verificationCodeStyle,
			sPopup
		},
		        data() {
		            return {
						visible: false,
						id: '',
						and: 2
					}
		        },
		        onLoad() {
					this.getInputVerification();
		        },
		        methods: {
		            // 用户输入的值
		            async getInputVerification(e) {
						var that = this
						this.id = e
						console.log(e);
						if (this.id.length === 6) {
							uni.request({
								url:"http://localhost:5000/fractionss",
								method:"POST",
								data:{
									number:this.id
								},
								header: {
									'content-type': 'application/x-www-form-urlencoded', 
								},
								success:function(res){
									// uni.setStorageSync('storage_key', res.data);
									uni.setStorage({
										key:'storage_key',
										data:res.data
									})
									res.data.status !== 200 ? that.OpenPrompt() : that.ClosePrompt()
								},
								fail:function(res){
									console.log(res)
								}
							});
						}
					},

					OpenPrompt() {
						this.visible = true
						// 关闭弹出框
						const that = this
						setTimeout(function () {
							that.visible = false
							that.and = 2
						}, 1500);
					},
		
					ClosePrompt() {
						uni.redirectTo({
							url: `../recognition/recognition?id=${this.id}`
						});
					}
		        }
		    }
</script>

<style lang="less" scoped>
	.bg-set{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
	}
	.content .id{
		text-align: center;
		font-size: 90rpx;
		font-weight: 600;
		color: #fff;
		display: block;
		padding-bottom: 150rpx;
	}
	.content{
		width: 500rpx;
		margin: 20% auto;
	}
	.input_info {
		border-bottom: 1px solid #000;
	}
	/deep/.s-popup-position-bottom .s-popup-wrapper {
		left: 0px;
		right: 0px;
		bottom: 40%;
		width: 80%;
		height: 160px;
		margin: auto;
		line-height: 177%;
		background-color: rgb(63, 62, 104);
		color: #fff;
		font-size: 43px;
		word-wrap: break-word;
		border-radius: 50px;
		text-align: center;
		padding: 10px;
	}
	// /deep/.verification_code .input_info {
	// 	position: absolute;
	// 	left: -99999;
	// }
	// /deep/.style2--verification_code .style2--input_info {
	// 	width: 0;
	// }
</style>
