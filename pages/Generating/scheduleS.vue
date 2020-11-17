<template>
	 <view class="content">
		 <image class="bg-set" src="/static/bgi.jpg"></image>
         <view class="schedule">
            <view class="uni-padding-wrap">
                <view class="page-section swiper">
                    <view class="page-section-spacing">
                        <swiper indicator-color="#999" indicator-active-color="#ccc" class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
                            <swiper-item  v-for="(item, index) in text" :key="index">
                                <view class="swiper-item uni-bg-red" @click="examination(item)">
                                    <text>{{item.id}}</text>
                                    <!-- <img :src="item.img_url" alt="" /> -->
                                    <img src="../../../../对接文件/图标(2)/吴兴项目图标-02.png" alt="" />
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
                indicatorDots: true,
                autoplay: false,
                interval: 2000,
                duration: 500,
                text: []
			}
		},
		onLoad() {
            this.ondata()
		},
		methods: {
            ondata() {
                uni.request({
                    url: 'http://api.cms.liulongbin.top/api/getgoods', //仅为示例，并非真实接口地址。
                    // url: 'http://api.cms.liulongbin.top/api/getlunbo', //仅为示例，并非真实接口地址。
                    success: (res) => {
                        this.text = res.data.message;
                        console.log(this.text);
                    }
                });
            },
            examination (options) {
                console.log(options);
                uni.navigateTo({
					url: `../Generating/examinations?text=${this.text}`
				});
            },
            changeIndicatorDots(e) {
                this.indicatorDots = !this.indicatorDots
            },
            changeAutoplay(e) {
                this.autoplay = !this.autoplay
            },
            intervalChange(e) {
                this.interval = e.target.value
            },
            durationChange(e) {
                this.duration = e.target.value
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
    .schedule{
        color: #fff;
        margin-top: 30%;
    }
    .swiper{
        height: 800rpx;
    }
    .swiper-item{
        text-align: center;
        font-size: 60px;
        letter-spacing: 5px;
    }
    .swiper-item img{
        display: block;
        margin: 0 auto;
        width: 60%;
        margin-top: 10%;
        padding-bottom: 10%;
    }

</style>
