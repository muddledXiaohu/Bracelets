<template>
	 <view class="content">
		 <image class="bg-set" src="/static/bgi.jpg"></image>
		<s-popup custom-class="demo-popup" position="bottom" v-model="visible">
				<!-- 内容 -->
				请将手环对准一体机二维码
			</s-popup>
	 </view>
</template>

<script>
	import sPopup from '@/components/s-popup/index.vue';
	export default {
		components: {
			sPopup
		},
		data() {
		    return {
				visible: true
			}
		},
		onLoad(options) {
			console.log(options);
            this.OpenPrompts()
		},
		methods: {
			OpenPrompts() {
				// 关闭弹出框
				const that = this
				setTimeout(function () {
                    that.visible = false
                    // 只允许通过相机扫码
                    uni.scanCode({
                        onlyFromCamera: true,
                        success: function (res) {
                            console.log('条码类型：' + res.scanType);
                            console.log('条码内容：' + res.result);
                        }
                    });
				}, 2000);
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

</style>
