<template>
	 <view class="content">
        <text>考试结束返回课程表</text>
	 </view>
</template>

<script>
	export default {
		data() {
		    return {

			}
		},
		onLoad() {
			this.setinout()
		},
		methods: {
			// 返回课程表
			setinout () {
				setTimeout(() => {
					uni.redirectTo({
                        url: '../Generating/scheduleS'
                    });
				}, 1000);
			}
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
