<template>
	 <view class="content">
		 <image class="bg-set" src="/static/bgi.jpg"></image>
		<s-popup custom-class="demo-popup" position="bottom" v-model="visible">
				<!-- 内容 -->
				实人身份验证请正视摄像头
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
			this.chooseImages()
		},
		methods: {
			OpenPrompts() {
				// 关闭弹出框
				const that = this
				setTimeout(function () {
					that.visible = false
				}, 800);
			},
			chooseImages () {
				setTimeout(() => {
					uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'],
					sourceType: ['camera','album'], //从相册选择
					success: (res) => {
						this.src = res.tempFilePaths[0]
            			uni.getFileSystemManager().readFile({
							filePath: this.src,
							encoding: 'base64',
							success: r => {
								console.log(r);
								console.log(`data:image/png;base64,${r.data}`);
								if (r.data.length !== 0) {
									uni.redirectTo({
										url: `../success/Facescan`
									});
								}
							}
                        })
					}
                })
				}, 1000);
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
	button{
		color: #ccc;
	}
</style>
