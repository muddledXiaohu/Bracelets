<template>
	 <view class="content">
        <text>请将您的手环对准您认为的隐患点二维码扫码</text>
	 </view>
</template>

<script>
	export default {
		data() {
		    return {

			}
		},
		onLoad() {
			// this.setinout()
		},
		methods: {
			// 返回课程表
			// setinout () {
			// 	setTimeout(() => {
			// 		uni.redirectTo({
            //             url: '../Generating/scheduleS'
            //         });
			// 	}, 1000);
			// }
		}
	}
</script>

<style lang="less">
	page{
		background-color:rgb(12, 6, 54);
	}
</style>

<style lang="less" scoped>
	text{
		display: block;
		width: 70%;
		color: #fff;
		font-size: 90rpx;
		text-align: center;
		margin: auto;
        letter-spacing: 5px;
   		margin-top: 50%;
	}
</style>
