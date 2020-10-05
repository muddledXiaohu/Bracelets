<template>
	 <view class="content">
        <!-- 学习 -->
        <view class="titles">
            <text class="textH1">
                {{types}}
            </text>
            <!-- 内容项 -->
            <view class="content">
                <view class="project" v-for="(item, index) in contentTs" :key="index" @click="query(item)">
                    <image :src="item.img_url"></image>
                    <text class="introduce">{{item.sell_price}}</text>
                </view>
            </view>
        </view>
	 </view>
</template>

<script>
	export default {
		data() {
		    return {
                types: '防火防洪',
                contentTs: []
			}
		},
		onLoad() {
            this.ondata()
		},
		methods: {
            ondata() {
                uni.request({
                    url: 'http://api.cms.liulongbin.top/api/getgoods', //仅为示例，并非真实接口地址。
                    // url: 'http://api.cms.liulongbin.top/api/getlunbo',
                    success: (res) => {
                        this.contentTs = res.data.message;
                        console.log(this.contentTs);
                    }
                });
            },

            // 查看学习
            query(e) {
                uni.redirectTo({
                    url: `./content?id=${e.id}`
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
    .titles{
        width: 100%;
        text-align: center;
        margin-top: 3%;
    }
    text{
        color: #fff;
    }
    .textH1{
        width: 100%;
        font-size: 48px;
    }
    .content{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 5%;
    }
    .project{
        width: 40%;
        height: 160px;
        margin-top: 6%;
    }
    image{
        width: 100%;
        height: 80%;
    }
    .introduce{
        font-size: 30px;
    }
</style>
