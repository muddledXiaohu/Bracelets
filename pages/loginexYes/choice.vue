<template>
	 <view class="content">
       <view class="examinatin">
		   <view>
				<view class="unimt">
					<text class="iconfont icon-delete">&#xe62f;</text>
				</view>
            	<button type="primary" @click="StartLearning">一体机考试</button>
		   </view>
		   <view>
				<view class="unimt">
					<text class="iconfont icon-delete">&#xe62f;</text>
				</view>
            	<button type="primary" @click="TrainingExam">手机考试</button>
		   </view>
	   </view>
	 </view>
</template>

<script>
	export default {
		data() {
		    return {
			}
		},
		onLoad() {
		},
		methods: {
			TrainingExam () {
				uni.redirectTo({
                    url: `../taskTimes/taskTimes`
                });
			},
			StartLearning () {
				uni.redirectTo({
                    url: `../loginexYes/loginexYes`
                });
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
	/deep/button{
		color: #fff;
		width: 40%;
		border-radius: 30px;
        letter-spacing: 3px;
	}
	.unimt{
		width: 110px;
		height: 100px;
		margin: 0 auto;
		margin-top: 30%;
		line-height: 80px;
		text-align: center;
	}
	.iconfont{
		font-size: 90px;
		color: #fff;
	}
</style>
