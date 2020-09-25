<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="less">
	@import './assets/iconfont/iconfont.css';
// /*每个页面公共css */
	@import './components/uni.css';
	.cmd-progress-circle-trail[data-v-7dbf0984] {
    	stroke: #1D4934 !important;
	}
	.kants .cmd-progress-circle-trail[data-v-7dbf0984] {
    	stroke: #364225 !important;
	}
	.buttons .cmd-progress-circle-trail[data-v-7dbf0984] {
    	stroke: #757D5E !important;
	}
	// /deep/uni-swiper .uni-swiper-dot {
    //     width: 15px;
    //     height: 15px;
    // }
    // /deep/uni-swiper .uni-swiper-wrapper {
    //     padding-bottom: 70%;
    // }
</style>
