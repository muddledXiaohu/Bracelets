<template>
	 <view class="content">
        <view class="delete">距离考试结束还剩</view>
         <view class="Tips">
           {{countdown}}
         </view>
          <button @click="signOut" type="warn">Normal</button>
	 </view>
</template>

<script>
	export default {
		data() {
		    return {
                countdown: ''
			}
		},
		onLoad() {
            this.addtime();
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

            // 退出
            signOut () {
                uni.showModal({
                    title: '您是否确定要提前退出考试',
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
    .delete{
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin-top: 15%;
        letter-spacing: 5px;
    }
    .Tips{
        color: #fff;
        font-size: 100px;
        text-align: center;
        font-weight: 700;
        margin-top: 24%;
        letter-spacing: 5px;
    }
    button{
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        width: 40%;
    }
</style>
