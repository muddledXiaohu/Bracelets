<template>
	 <view class="content">
		 <image class="bg-set" src="/assets/images/bgi.jpg"></image>
        <view class="backgroundSize">
        </view>
        <view class="iconfont icon-delete">&#xe73c;</view>
         <view class="Tips">
             登录成功
             <br />
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
            this.goTimestsk()
		},
		methods: {
            goTimestsk () {
				setTimeout(() => {
					uni.redirectTo({
						url: `../Generating/Generating`
					});
				}, 700);
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
    .backgroundSize{
        width: 130px;
        height: 130px;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 15%;
        left: 34%;
        z-index: -1;
    }
    .iconfont{
        color: rgb(4, 190, 1);
        font-size: 180px;
        text-align: center;
        margin-top: 18%;
    }
    .Tips{
        color: #fff;
        font-size: 34px;
        text-align: center;
        font-weight: 700;
        margin-top: 14%;
        letter-spacing: 5px;
    }
</style>
