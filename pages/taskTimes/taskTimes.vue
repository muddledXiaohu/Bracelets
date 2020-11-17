<template>
<!-- 考试倒计时 -->
	 <view class="content">
		 <image class="bg-set" src="/static/bgi.jpg"></image>
        <view class="delete">距离考试结束还剩</view>
         <view class="Tips">
           {{countdown}}
         </view>
         <!-- 选择题 -->

        <view class="uni-padding-wrap">
            <view class="page-section swiper">
                <view class="page-section-spacing">
                    <swiper :style="{height: windowHeight / 1.3 + 'px'}" class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay">
                        <swiper-item v-for="item in questionList" :key="item.indicator">
                            <view class="swiper-item uni-bg-red">
                                 <view class="uni-form-item uni-column">
                                    <view class="title titleID">{{item.id}}</view>
                                    <view class="title">{{item.ask}}</view>
                                    <radio-group name="radio" @change="qweasd" :id="item.id">
                                        <label>
                                            <radio  value="1" /><text>A：{{item.A}}</text>
                                        </label>
                                        <label>
                                            <radio  value="2" /><text>B：{{item.B}}</text>
                                        </label>
                                        <label>
                                            <radio  value="3" /><text>C：{{item.C}}</text>
                                        </label>
                                    </radio-group>
                                </view>
                            </view>
                        </swiper-item>
                    </swiper>
                </view>
            </view>
            </view>
            <button @click="an" :style="{width: windowWidth / 1.3 + 'px'}">试卷提交</button>
    </view>

</template>

<script>
	export default {
		data() {
		    return {
                autoplay: false,
                indicatorDots: true,
                countdown: '',
                questionList:[],
                windowWidth: 0,
                windowHeight: 0,
                // 选择答案
                choice: [],
                // 提交答案
                Submis: []
			}
		},
		onLoad() {
            this.addtime();
            this.integratedm();
            uni.getSystemInfo({
                success: res => {
                    this.windowWidth = res.windowWidth;
                    this.windowHeight = res.windowHeight;
                }
            })
        },
		methods: {
             addtime() {
                let time = 1800;
                const that = this
                setInterval(function(){
                    time=time-1;
                    const minute=parseInt(time/60);
                    const second=parseInt(time%60);
                    that.countdown = (minute+':'+second);
                    if (that.countdown === '0:0') {
                        console.log(that.countdown);
                        that.goRedirects()
                    }
                },1000);
            },

            // 跳转
            goRedirects () {
                uni.redirectTo({
                    url: '../examinationOver/exTimeOver'
                });
            },
            qweasd(e) {
                const id = e.target.id;
                const value = e.target.value;
                this.choice.unshift({id: id, value: value})
                console.log(this.choice);
            },

            an() {
                let hash = {};
                this.choice = this.choice.reduce((preVal, curVal) => {
                    hash[curVal.id] ? '' : hash[curVal.id] = true && preVal.push(curVal);
                    return preVal
                }, []);
                console.log(this.choice);
                this.signOut()
            },

            // // 退出
            signOut () {
                uni.showModal({
                    title: '您是否确定要退出考试',
                    success: function (res) {
                        if (res.confirm) {
                            uni.redirectTo({
                                url: '../examinationOver/exIOver'
                            });
                        } else if (res.cancel) {
                            console.log('用户点击取消');
                        }
                    }
                });
            },

            // 考题获取
            integratedm() {
                uni.request({
                    url: 'http://localhost:5000/integKAOt', //仅为示例，并非真实接口地址。
                    success: res => {
                        const data = res.data
                        this.questionList = data
                    }
                })
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
    view{
        color: #fff;
    }
    .delete{
        color: #fff;
        font-size: 16px;
        text-align: center;
        margin-top: 2%;
        letter-spacing: 5px;
    }
    .Tips{
        color: #fff;
        font-size: 40px;
        text-align: center;
        font-weight: 700;
        letter-spacing: 5px;
    }
    .title{
        width: 100%;
        text-align: center;
        margin: 5% 0;
    }
    label{
        width: 80%;
        margin-left: 5%;
        display: block;
        background-color: cornflowerblue;
        border-radius: 5px;
        margin: 5% auto;
        position: relative;
    }
    text{
        padding-left: 30%;
        padding-top: 5%;
        padding-bottom: 3%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    radio{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 1%;
    }
    .titleID{
        margin: 0 auto;
        text-align: center;
        line-height: 40px;
        width: 40px;
        height: 40px;
        border-radius: 40px;
        background-color: cadetblue;
    }
    button{
        background-color: cornflowerblue;
        color: #fff;
    }
</style>
