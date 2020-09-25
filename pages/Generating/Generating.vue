<template>
	 <view class="content">
         <view class="generats">
            <cmd-progress  type="circle" :percent="down" :showInfo="false" :stroke-width="15" :width="200" stroke-color="#21B574">
            </cmd-progress>
            <cmd-progress class="kants" type="circle" :percent="down" :showInfo="false" :stroke-width="20" :width="120" stroke-color="#85C62E">
            </cmd-progress>
             <cmd-progress class="buttons" type="circle" :percent="down" :showInfo="false" :stroke-width="25" :width="50" stroke-color="#D9E019">
            </cmd-progress>
         </view>
         <view class="geners">正在生成课程表...</view>
	 </view>
</template>

<script>
    import cmdProgress from "@/components/cmd-progress/cmd-progress.vue"
	export default {
		components: {
            cmdProgress
		},
		data() {
		    return {
                down: 0
			}
		},
		onLoad() {
            this.countDown()
		},
		methods: {
            countDown () {
                setInterval(() => {
                    this.down ++
                    if (this.down === 100) {
                        return this.down
                    }
                }, 30);
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
    .generats{
        width: 200px;
        height: 200px;
        margin: auto;
        margin-top: 18%;
        position: relative;
    }
    .kants{
        position: absolute;
        top: 20%;
        left: 20%;
    }
    .buttons{
        position: absolute;
        top: 37%;
        left: 37%;
    }
    .geners{
        width: 100%;
        height: 50px;
        color: #fff;
        text-align: center;
        margin-top: 20%;
        font-size: 35px;
        letter-spacing:8px;
        font-weight: 500;
    }

</style>
