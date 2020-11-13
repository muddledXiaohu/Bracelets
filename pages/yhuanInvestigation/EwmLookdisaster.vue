<template>
<!-- 二维码找隐患 -->
	 <view class="content">
		 <image class="bg-set" src="/assets/images/bgi.jpg"></image>
         <view class="tops">
            <button class="mini-btn btnone" type="primary" @click="revoke">撤销</button>
            <button class="mini-btn" type="warn" @click="end">结束</button>
         </view>
         <view class="icons">
            <text class="iconfont icon-delete" @click="OpenQR">&#xe600;</text>
         </view>
         <view class="buttons">
            <button class="mini-btn" type="primary" @click="Reset">重置</button>
            <text class="surplus">{{numbers}}/15</text>
         </view>
	 </view>
</template>

<script>
	export default {
		data() {
		    return {
                numbers: 0,
                answer: []
			}
		},
		onLoad(options) {
		},
		methods: {
			OpenQR() {
                // 只允许通过相机扫码
                const that = this
                uni.scanCode({
                    onlyFromCamera: true,
                    success: function (res) {
                        // console.log('条码类型：' + res.scanType);
                        // console.log('条码内容：' + res.result);
                        // 答题结束退出
                        if (that.numbers == 14) {
                            uni.redirectTo({
                                url: '../examinationOver/exIOver'
                            });
                        }

                        that.answer.push(res.result)
                        that.numbers = that.answer.length
                        console.log(that.answer, that.numbers)

						uni.navigateBack({
							url: './EwmLookdisaster'
                        });
                    }
                })
                setTimeout(() => {
                    uni.request({
                        url: 'http://localhost:5000/RQLongin',
                        method: 'POST',
					    data: {
					        "username": "qwe"
                        },
                        dataType: 'json', 
                        header: {
                            'content-type': 'application/x-www-form-urlencoded'  //自定义请求头信息
                        },
                        success: (res) => {
                            console.log(res);
                        }
                    })
                }, 3000);
            },

            // 撤销
            revoke () {
                this.answer.pop()
                this.numbers = this.answer.length
            },

            // 退出
            end () {
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
            },

            // 重置
            Reset () {
                this.answer.splice(0,this.answer.length)
                this.numbers = this.answer.length
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
	/deep/.s-popup-position-bottom .s-popup-wrapper {
		left: 0px;
		right: 0px;
		bottom: 40%;
		width: 80%;
		height: 160px;
		margin: auto;
		line-height: 177%;
		background-color: rgb(63, 62, 104);
		color: #fff;
		font-size: 43px;
		word-wrap: break-word;
		border-radius: 50px;
		text-align: center;
		padding: 10px;
    }
    .tops{
        margin-top: 5%;
        display: flex;
        justify-content: space-between;
    }
    .icons{
        display: flex;
        margin-top: 10%;
        justify-content: center;
        align-items:center;
    }
    .buttons{
        margin-top: 5%;
        display: flex;
        justify-content: space-between;
    }
    .mini-btn{
        width: 26%;
        padding: 0;
        margin: 0 20px;
        border-radius: 30px;
    }
    .surplus{
        color: #fff;
        margin-right: 6%;
        font-size: 35px;
    }
    .iconfont{
		font-size: 300px;
        color:  #1AAD19;
    }
    .btnone{
        background-color: rgb(63, 169, 245);
    }

</style>
