<template>
	 <view class="content">
       <view class="examinatin">
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
            	<button type="primary">隐患排查</button>
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
		width: 40%;
		border-radius: 30px;
        letter-spacing: 3px;
	}
	.unimt{
		width: 160px;
		height: 160px;
		margin: 0 auto;
		margin-top: 12%;
		line-height: 160px;
		text-align: center;
	}
	.iconfont{
		font-size: 110px;
		color: #fff;
	}
</style>
