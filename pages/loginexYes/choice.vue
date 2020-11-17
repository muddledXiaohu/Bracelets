<template>
	 <view class="content">
		 <image class="bg-set" src="/static/bgi.jpg"></image>
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
                    url: `./QRlogin`
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
		margin-top: 30%;
		line-height: 80px;
		text-align: center;
	}
	.iconfont{
		font-size: 90px;
		color: #fff;
	}
</style>
