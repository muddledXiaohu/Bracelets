<template>
	 <view class="content">
         <view class="Tips">
             扫码进入<br/>实训基地
         </view>
		<view class="RQ">
            <img src="../../assets/images/ewm.png" alt="">
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
		}
	}
</script>

<style lang="less">
	page{
		background-color:rgb(12, 6, 54);
	}
</style>

<style lang="less" scoped>
    .RQ{
        width: 200px;
        height: 200px;
        margin: auto;
    }
    .RQ img{
        width: 100%;
        height: 100%;
    }
    .Tips{
        width: 200px;
        height: 100px;
        margin: auto;
        text-align: center;
        margin-top: 15%;
        color: #fff;
        font-size: 40px;
        margin-bottom: 10%;
        letter-spacing:8px;
        font-weight: 700;
    }
</style>
