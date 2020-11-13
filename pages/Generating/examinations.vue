<template>
	 <view class="content">
		 <image class="bg-set" src="/assets/images/bgi.jpg"></image>
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
				uni.navigateTo({
                    url: `../loginexYes/choice`
                });
			},
			// 隐患查找
			JumpScene () {
				uni.navigateTo({
                    url: `../yhuanInvestigation/lookHiddenD`
                });
			},

			// 开始学习
			StartLearning () {
				uni.navigateTo({
                    url: `../yhuanInvestigation/startLearn`
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
