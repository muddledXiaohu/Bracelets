<template>
	 <view class="content">
		 <image class="bg-set" src="/static/bgi.jpg"></image>
        <!-- 学习 -->
        <view class="titles">
            <text class="textH1">
                {{types}}
            </text>
            <!-- 内容项 -->
                <view class="uni-padding-wrap">
                    <view class="page-section swiper">
                        <view class="page-section-spacing">
                            <swiper :style="{height: windowHeight / 1.3 + 'px'}" class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
                                <swiper-item v-for="(item, index) in contentTs" :key="index">
                                    <view class="swiper-item uni-bg-red" :style="{height: windowHeight / 1.3 + 'px'}">
                                        <img :src="item.image" alt="">
                                    </view>
                                </swiper-item>
                            </swiper>
                        </view>
                    </view>
                </view>
            </view>
	 </view>
</template>

<script>
	export default {
		data() {
		    return {
                types: '知识点学习',
                contentTs: [],
                autoplay: false,
                indicatorDots: true,
                countdown: '',
                windowWidth: 0,
                windowHeight: 0,
			}
		},
		onLoad() {
            this.ondata()
            uni.getSystemInfo({
                success: res => {
                    this.windowWidth = res.windowWidth;
                    this.windowHeight = res.windowHeight;
                }
            })
		},
		methods: {
            ondata() {
                uni.request({
                    url: 'http://localhost:5000/integratedM',
                    // url: 'http://api.cms.liulongbin.top/api/getlunbo',
                    success: (res) => {
                        this.contentTs = res.data;
                        console.log(res.data);
                    }
                });
            },
		}
	}
</script>

<style lang="less">
	page{
		background-color:rgb(12, 6, 54);
	}
</style>

<style lang="less" scoped>
	.bg-set{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
	}
    .titles{
        width: 100%;
        text-align: center;
        margin-top: 3%;
    }
    text{
        color: #fff;
    }
    .textH1{
        width: 100%;
        font-size: 48px;
    }
    .content{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 5%;
    }
    image{
        width: 100%;
        height: 80%;
    }
    .uni-padding-wrap{
        width: 100%;
    }
</style>
