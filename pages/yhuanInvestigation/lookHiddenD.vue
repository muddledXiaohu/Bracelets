<template>
	 <view class="content">
		 <image class="bg-set" src="/assets/images/bgi.jpg"></image>
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
			this.setinout()
		},
		methods: {
			// 跳转到扫码页面
			setinout () {
				setTimeout(() => {
					uni.redirectTo({
                        url: './EwmLookdisaster'
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
