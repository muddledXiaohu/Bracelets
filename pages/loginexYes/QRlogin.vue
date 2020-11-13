<template>
<!-- 二维码找隐患 -->
	 <view class="content">
		 <image class="bg-set" src="/assets/images/bgi.jpg"></image>
         <view class="icons">
            <text class="iconfont icon-delete" @click="OpenQR">&#xe600;</text>
         </view>
	 </view>
</template>

<script>
	export default {
		data() {
		    return {
                numbers: 0,
                answer: [],
                username: ''
			}
		},
		onLoad() {
            this.OPtoken()
		},
		methods: {
            OPtoken(){
                const that = this
                uni.getStorage({
                    key:'storage_key',
                    success(e){
                    that.username = e.data.data[0].username
                    }
                })
            },
			OpenQR() {
                // 只允许通过相机扫码
                const that = this
                uni.scanCode({
                    onlyFromCamera: true,
                    success: function (res) {
                        // console.log('条码类型：' + res.scanType);
                        // console.log('条码内容：' + res.result);
                        that.answer.push(res.result)
                        that.numbers = that.answer.length
                    }
                })
                setTimeout(() => {
                    uni.request({
                        url: 'http://localhost:5000/RQLongin',
                        method: 'POST',
					    data: {
					        "username": that.username
                        },
                        dataType: 'json', 
                        header: {
                            'content-type': 'application/x-www-form-urlencoded'  //自定义请求头信息
                        },
                        success: (res) => {
                            console.log(res);
                            // uni.redirectTo({
                            //     url: './loginexYes'
                            // });
                        }
                    })
                }, 5000);
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
    .icons{
        display: flex;
        margin-top: 30%;
        justify-content: center;
        align-items:center;
    }
    .iconfont{
		font-size: 300px;
        color:  #1AAD19;
    }

</style>
