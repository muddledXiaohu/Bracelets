<template>
	 <view class="content">
        <view class="backgroundSize">
        </view>
        <view class="iconfont icon-delete">&#xe73c;</view>
         <view class="Tips">
             认证成功
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
            this.goRQerw()
		},
		methods: {
            goRQerw () {
				setTimeout(() => {
					uni.redirectTo({
						url: `../success/QRcode`
					});
				}, 700);
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
    .backgroundSize{
        width: 130px;
        height: 130px;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 12%;
        left: 34%;
        z-index: -1;
    }
    .iconfont{
        color: rgb(4, 190, 1);
        font-size: 180px;
        text-align: center;
        margin-top: 15%;
    }
    .Tips{
        color: #fff;
        font-size: 34px;
        text-align: center;
        font-weight: 700;
        margin-top: 10%;
        letter-spacing: 5px;
    }
</style>
