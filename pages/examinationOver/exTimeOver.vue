<template>
	 <view class="content">
		 
		 <image class="bg-set" src="/assets/images/bgi.jpg"></image>
       <text>时间到考试结束</text>
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
<style lang="less" scoped>
	.bg-set{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
	}
	text{
		width: 70%;
		color: #fff;
		font-size: 90rpx;
		text-align: center;
		margin: auto;
        letter-spacing: 5px;
    	margin-top: 50%;
	}
</style>
