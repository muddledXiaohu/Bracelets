<template>
	 <view class="content">
       <view class="examinatin">
		   <view>
				<view class="unimt">
					<text class="iconfont icon-delete">&#xe60c;</text>
				</view>
            	<button type="primary" @click="StartLearning">开始学习</button>
		   </view>
		   <view>
				<view class="unimt">
					<text class="iconfont icon-delete">&#xe62f;</text>
				</view>
            	<button type="primary" @click="TrainingExam">实训考试</button>
		   </view>
		   <view>
				<view class="unimt">
					<text class="iconfont icon-delete">&#xe632;</text>
				</view>
            	<button type="primary" @click="JumpScene">隐患排查</button>
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
			// 实训考试
			TrainingExam () {
				uni.redirectTo({
                    url: `../loginexYes/loginexYes`
                });
			},
			// 隐患查找
			JumpScene () {
				uni.redirectTo({
                    url: `../yhuanInvestigation/lookHiddenD`
                });
			},

			// 开始学习
			StartLearning () {
				uni.redirectTo({
                    url: `../yhuanInvestigation/startLearn`
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
		margin-top: 12%;
		line-height: 80px;
		text-align: center;
	}
	.iconfont{
		font-size: 90px;
		color: #fff;
	}
</style>
