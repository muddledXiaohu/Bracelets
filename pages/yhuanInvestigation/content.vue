<template>
	 <view class="content">
       123
	 </view>
</template>

<script>
	export default {
		data() {
		    return {
				iId: 0
			}
		},
		onLoad(e) {
			this.iId = e.id
		},
		methods: {
			ondata() {
                uni.request({
                    url: 'http://api.cms.liulongbin.top/api/getgoods', //仅为示例，并非真实接口地址
                    success: (res) => {
                        this.contentTs = res.data.message;
                        console.log(this.contentTs);
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

</style>
