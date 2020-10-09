<template>
	 <view class="content">
       <view v-for="item in contentTs" :key="item.id">
			<text>{{item.title}}</text>
			<text>
				<text class="time">发表时间：{{item.add_time}}</text>
				<text class="click">点击：{{item.click}}</text>
			</text>
			<view v-html="item.content" class="detail-content"></view>
	   </view>
	 </view>
</template>

<script>
	export default {
		data() {
		    return {
				iId: 0,
				contentTs: []
			}
		},
		onLoad(e) {
			this.iId = parseInt(e.id)
			this.ondata()
		},
		methods: {
			ondata() {
                uni.request({
                    url: `http://api.cms.liulongbin.top/api/getimageInfo/${this.iId}`, //仅为示例，并非真实接口地址
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
	.content{
		color: #fff;
	}
</style>
