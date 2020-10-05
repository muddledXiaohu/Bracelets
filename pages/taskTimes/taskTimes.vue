<template>
<!-- 考试倒计时 -->
	 <view class="content">
        <view class="delete">距离考试结束还剩</view>
         <view class="Tips">
           {{countdown}}
         </view>
         <!-- 选择题 -->
        <view class="content">
            <check-xi @nextAnswer="nextAnswer" @checkOption="checkOption" :questionList="questionList"></check-xi>
        </view>

        <!-- <button @click="signOut" type="warn">Normal</button> -->
	 </view>
</template>

<script>
    import checkXi from '@/components/xi-check/xi-check.vue'
	export default {
        components:{
            checkXi
        },
		data() {
		    return {
                countdown: '',
                 colorStyle: { // 颜色修改自定义 -- 若需修改必须全部都要有！！！
                    nextBac: '#C9784F', //下一题按钮背景色
                    nextCol: '#FFFFFF', //下一题按钮背字体颜色
                    optBac: '#EEB67A', //选项按钮背景色
                    optCol: '#232131', //选项按钮字体颜色
                    optBacActive: '#C9784F', //选项按钮背景色 - 选中
                    optColActive: '#FFFFFF', //选项按钮字体颜色-选中
                },
                questionList:[
                    {
                        id:1, //题目id
                        type:'radio',//单选 checkbox - 多选 ； write - 填空 
                        number:1, //题目序号 - 非必要
                        title:'生物灭绝又叫生物绝种。历史上一共有几次大灭绝？', //题目名称
                        imageList:['https://car2.autoimg.cn/cardfs/product/g3/M04/6C/76/1024x0_1_q95_autohomecar__ChsEm18wzhKARxf4ABHDjRTzR6U737.jpg'], //图片地址
                        question_option:[
                            {
                                id:1,//答案id
                                name:'A',//答案选项名
                                content:'一次',//答案内容
                                active:0//选中状态
                            },
                            {id:2,name:'B',content:'二次',active:0},
                            {id:3,name:'C',content:'三次',active:0},
                            {id:4,name:'D',content:'四次',active:0},
                            ]//选项集
                    },
                    {
                        id:2, //题目id
                        type:'radio',//单选 checkbox - 多选 ； write - 填空 
                        number:1, //题目序号 - 非必要
                        title:'三相电流不平衡，缺相（P1587612851123-00-T03-10-0000-00A00-323A-Z）？', //题目名称
                        question_option:[
                            {
                                id:1,//答案id
                                name:'A',//答案选项名
                                content:'一次',//答案内容
                                active:0//选中状态
                            },
                            {id:2,name:'B',content:'二次',active:0},
                            {id:3,name:'C',content:'三次',active:0},
                            {id:4,name:'D',content:'四次',active:0},
                            ]//选项集
                    },
                ]
			}
		},
		onLoad() {
            this.addtime();
        },
		methods: {
             addtime() {
                let time = 1800;
                const that = this
                setInterval(function(){
                    time=time-1;
                    const minute=parseInt(time/60);
                    const second=parseInt(time%60);
                    that.countdown = (minute+':'+second);
                    if (that.countdown === '0:0') {
                        console.log(that.countdown);
                        that.goRedirects()
                    }
                },1000);
            },

            // 跳转
            goRedirects () {
                uni.redirectTo({
                    url: '../examinationOver/exTimeOver'
                });
            },

            // 退出
            signOut () {
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

            // 选择题
            nextAnswer(e){
                console.log('next',e);
                if (e.isEnd) {
                    this.signOut()
                }
            },
            checkOption(e){
                console.log('check',e);
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
    .delete{
        color: #fff;
        font-size: 16px;
        text-align: center;
        margin-top: 2%;
        letter-spacing: 5px;
    }
    .Tips{
        color: #fff;
        font-size: 40px;
        text-align: center;
        font-weight: 700;
        letter-spacing: 5px;
    }
    // button{
    //     position: fixed;
    //     bottom: 7%;
    //     left: 50%;
    //     transform: translateX(-50%);
    //     width: 100%;
    //     display: none;
    // }
    /deep/view.data-v-15e25b84 {
        color: #fff;
    }
    /deep/.answer__banner.data-v-15e25b84 {
        height: 260rpx;
    }
    /deep/.answer__next__btn.data-v-15e25b84 {
        bottom: 7%;
    }

    // /deep/.answer__next__btn.data-v-15e25b84 {
    // }
</style>
