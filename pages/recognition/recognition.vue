<template>
	 <view class="content">
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
			this.goFace()
		},
		methods: {
			OpenPrompts() {
				// 关闭弹出框
				const that = this
				setTimeout(function () {
					that.visible = false
				}, 1500);
			},
			goFace () {
				setTimeout(() => {
					uni.redirectTo({
						url: `../success/Facescan`
					});
				}, 2000);
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
