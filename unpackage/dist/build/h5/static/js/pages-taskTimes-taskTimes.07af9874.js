(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-taskTimes-taskTimes"],{"048e":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"delete"},[t._v("距离考试结束还剩")]),n("v-uni-view",{staticClass:"Tips"},[t._v(t._s(t.countdown))]),n("v-uni-view",{staticClass:"content"},[n("check-xi",{attrs:{questionList:t.questionList},on:{nextAnswer:function(e){arguments[0]=e=t.$handleEvent(e),t.nextAnswer.apply(void 0,arguments)},checkOption:function(e){arguments[0]=e=t.$handleEvent(e),t.checkOption.apply(void 0,arguments)}}})],1)],1)},s=[]},"0bc0":function(t,e,n){"use strict";n("99af"),n("d81d"),n("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{questionList:{type:Array,default:function(){return[{id:1,type:"radio",number:1,title:"1生物大灭绝是指大规模的集群灭绝，生物灭绝又叫生物绝种。历史上一共有几次大灭绝？",imageList:["https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1588056060&di=67dc5595a44e90101f524bae2273cc0a&src=http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg"],question_option:[{id:1,name:"A",content:"一次",active:0},{id:2,name:"B",content:"二次",active:0},{id:3,name:"C",content:"三次",active:0},{id:4,name:"D",content:"四次",active:0}]}]}},colorStyle:{type:Object,default:function(){return{nextBac:"#C9784F",nextCol:"#FFFFFF",optBac:"#EEB67A",optCol:"#232131",optBacActive:"#C9784F",optColActive:"#FFFFFF"}}}},data:function(){return{newOptList:[],showQuestionIndex:0,isEnd:!1}},watch:{},computed:{nextStyle:function(){return"background:".concat(this.colorStyle.nextBac,";color:").concat(this.colorStyle.nextCol,";")},optStyle:function(){return"background:".concat(this.colorStyle.optBac,";color:").concat(this.colorStyle.optCol,";")},optActiveStyle:function(){return"background:".concat(this.colorStyle.optBacActive,";color:").concat(this.colorStyle.optColActive,";")}},created:function(){this.newOptList=this.questionList},methods:{checkOption:function(t){this.questionList[this.showQuestionIndex];this.checkActive(t.currentTarget.dataset.id);var e={id:this.questionList[this.showQuestionIndex].id,value:t.currentTarget.dataset.id};this.$emit("checkOption",e)},checkActive:function(t){var e=this.questionList,n=e[this.showQuestionIndex].question_option;"radio"==e[this.showQuestionIndex].type?n.map((function(e,n){e.id==t?e.active=!e.active:e.active=!1})):"checkbox"==e[this.showQuestionIndex].type&&n.map((function(e,n){e.id==t&&(e.active=!e.active)})),this.questionList=e},nextQuestionBtn:function(t){if(!this.checkTest())return wx.showToast({title:"请先作答",icon:"none"});var e={current_id:this.showQuestionIndex,isEnd:this.isEnd};if(this.isEnd)return this.formatKey(e);var n=this.questionList;this.showQuestionIndex<n.length-1&&(this.showQuestionIndex=this.showQuestionIndex+1,this.showQuestionIndex==n.length-1&&(this.isEnd=!0)),this.$emit("nextAnswer",e)},checkTest:function(){var t=!1;if("write"==this.questionList[this.showQuestionIndex].type)""!==this.questionList[this.showQuestionIndex].question_key.trim()&&(t=!0);else{var e=this.questionList[this.showQuestionIndex];e.question_option.map((function(e,n){if(e.active)return t=!0}))}return t},formatKey:function(t){var e=[],n=this.questionList,i=[];n.map((function(t,n){var o=[],s={id:t.id,keyFormat:[]};"write"==t.type?(o.push(t.question_key.trim()),s.keyFormat.push(t.question_key.trim())):t.question_option.map((function(t,e){t.active&&(o.push(t),s.keyFormat.push(t.id))})),i.push(s),e.push({id:t.id,type:t.type,number:t.number,title:t.title,keyRes:o})})),t.checkRes={check_res:e,keyFormat:i},this.$emit("nextAnswer",t)}}};e.default=i},"2f53":function(t,e,n){"use strict";var i=n("9655"),o=n.n(i);o.a},3936:function(t,e,n){"use strict";var i=n("f694"),o=n.n(i);o.a},"7e75":function(t,e,n){"use strict";n.r(e);var i=n("0bc0"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a},"83b0":function(t,e,n){var i=n("8712");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("48d11a0c",i,!0,{sourceMap:!1,shadowMode:!1})},8712:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-7e5e6cba]{background-color:#fff}uni-view[data-v-7e5e6cba]{-webkit-box-sizing:border-box;box-sizing:border-box}.answer__content[data-v-7e5e6cba]{width:100%}.answer__banner[data-v-7e5e6cba]{width:100%;height:%?388?%}.answer__banner uni-swiper[data-v-7e5e6cba],\r\n.answer__banner uni-swiper uni-swiper-item[data-v-7e5e6cba]{width:100%;height:100%}.answer__banner uni-swiper uni-swiper-item uni-image[data-v-7e5e6cba]{width:100%;height:100%}.answer__question[data-v-7e5e6cba]{width:100%;padding:0 %?50?% %?100?%;margin-top:%?30?%}.answer__question .question_title[data-v-7e5e6cba]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;font-size:%?28?%}.answer__question .title__number[data-v-7e5e6cba]{padding-top:%?0?%;min-width:%?34?%}.answer__question .question__option[data-v-7e5e6cba]{width:100%;margin-top:%?13?%}.answer__question .question__option__item[data-v-7e5e6cba]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;padding:%?23?% %?98?%;margin-top:%?30?%;font-size:%?26?%;color:#232131;background:#eeb67a;-webkit-border-radius:%?14?%;border-radius:%?14?%;overflow:hidden}.answer__question .question__option__item .question__option__item__number[data-v-7e5e6cba]{padding-top:%?4?%;margin-right:%?10?%}.answer__next__btn[data-v-7e5e6cba]{position:fixed;left:0;bottom:0;width:100%;height:%?90?%;line-height:%?90?%;color:#fff;font-size:%?30?%;text-align:center;background:#c9784f}.question__option__active[data-v-7e5e6cba]{color:#fff!important;background-color:#c9784f!important}.item__key__box[data-v-7e5e6cba]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;margin-top:%?30?%}.item__key__box .write_input[data-v-7e5e6cba]{width:%?400?%;font-size:%?28?%;color:#333;text-align:center;border-bottom:%?1?% solid #999}body.?%PAGE?%[data-v-7e5e6cba]{background-color:#fff}',""]),t.exports=e},"919d":function(t,e,n){"use strict";n.r(e);var i=n("ac95"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a},"95cd":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"answer__content"},[t.newOptList[t.showQuestionIndex].imageList.length>0?[n("v-uni-view",{staticClass:"answer__banner"},[n("v-uni-swiper",{attrs:{"indicator-dots":!0,autoplay:!0}},[t._l(t.newOptList[t.showQuestionIndex].imageList,(function(t,e){return[n("v-uni-swiper-item",[n("v-uni-image",{attrs:{src:t,mode:"aspectFill"}})],1)]}))],2)],1)]:t._e(),[n("v-uni-view",{staticClass:"answer__question"},[n("v-uni-view",{staticClass:"question_title"},[n("v-uni-view",{staticClass:"title__number"},[t._v(t._s(t.newOptList[t.showQuestionIndex].number||t.showQuestionIndex+1)+".")]),n("v-uni-view",[t._v("（"+t._s("write"==t.newOptList[t.showQuestionIndex].type?"填空":"radio"==t.newOptList[t.showQuestionIndex].type?"单选":"checkbox"==t.newOptList[t.showQuestionIndex].type?"多选":"")+")\n\t\t\t\t\t"+t._s(t.newOptList[t.showQuestionIndex].title))])],1),n("v-uni-view",{staticClass:"question__option"},["radio"==t.newOptList[t.showQuestionIndex].type||"checkbox"==t.newOptList[t.showQuestionIndex].type?[t._l(t.newOptList[t.showQuestionIndex].question_option,(function(e,i){return[n("v-uni-view",{key:i+"_0",staticClass:"question__option__item",style:e.active?t.optActiveStyle:t.optStyle,attrs:{"data-id":e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkOption.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"question__option__item__number"},[t._v(t._s(e.name)+" .")]),n("v-uni-view",[t._v(t._s(e.content))])],1)]}))]:t._e(),"write"==t.newOptList[t.showQuestionIndex].type?[n("v-uni-view",{staticClass:"item__key__box"},[t._v("答案："),n("v-uni-input",{staticClass:"write_input",attrs:{placeholder:"请填写你的答案"},model:{value:t.newOptList[t.showQuestionIndex].question_key,callback:function(e){t.$set(t.newOptList[t.showQuestionIndex],"question_key",e)},expression:"newOptList[showQuestionIndex].question_key"}})],1)]:t._e()],2)],1)],n("v-uni-view",{staticClass:"answer__next__btn",style:t.nextStyle,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nextQuestionBtn.apply(void 0,arguments)}}},[t._v(t._s(t.isEnd?"完  成  答  题":"下 一 题"))])],2)},s=[]},9655:function(t,e,n){var i=n("a877");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("67c7bff4",i,!0,{sourceMap:!1,shadowMode:!1})},a750:function(t,e,n){"use strict";var i=n("83b0"),o=n.n(i);o.a},a877:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-3082790b]{background-color:#0c0636}body.?%PAGE?%[data-v-3082790b]{background-color:#0c0636}",""]),t.exports=e},ac81:function(t,e,n){"use strict";n.r(e);var i=n("048e"),o=n("919d");for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);n("2f53"),n("3936");var a,c=n("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"3082790b",null,!1,i["a"],a);e["default"]=r.exports},ac95:function(t,e,n){"use strict";var i=n("4ea4");n("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("d340")),s={components:{checkXi:o.default},data:function(){return{countdown:"",colorStyle:{nextBac:"#C9784F",nextCol:"#FFFFFF",optBac:"#EEB67A",optCol:"#232131",optBacActive:"#C9784F",optColActive:"#FFFFFF"},questionList:[{id:1,type:"radio",number:1,title:"生物灭绝又叫生物绝种。历史上一共有几次大灭绝？",imageList:["https://car2.autoimg.cn/cardfs/product/g3/M04/6C/76/1024x0_1_q95_autohomecar__ChsEm18wzhKARxf4ABHDjRTzR6U737.jpg"],question_option:[{id:1,name:"A",content:"一次",active:0},{id:2,name:"B",content:"二次",active:0},{id:3,name:"C",content:"三次",active:0},{id:4,name:"D",content:"四次",active:0}]},{id:2,type:"radio",number:1,title:"三相电流不平衡，缺相（P1587612851123-00-T03-10-0000-00A00-323A-Z）？",question_option:[{id:1,name:"A",content:"一次",active:0},{id:2,name:"B",content:"二次",active:0},{id:3,name:"C",content:"三次",active:0},{id:4,name:"D",content:"四次",active:0}]}]}},onLoad:function(){this.addtime()},methods:{addtime:function(){var t=1800,e=this;setInterval((function(){t-=1;var n=parseInt(t/60),i=parseInt(t%60);e.countdown=n+":"+i,"0:0"===e.countdown&&(console.log(e.countdown),e.goRedirects())}),1e3)},goRedirects:function(){uni.redirectTo({url:"../examinationOver/exTimeOver"})},signOut:function(){uni.showModal({title:"您是否确定要退出考试",success:function(t){t.confirm?uni.redirectTo({url:"../examinationOver/exIOver"}):t.cancel&&console.log("用户点击取消")}})},nextAnswer:function(t){console.log("next",t),t.isEnd&&this.signOut()},checkOption:function(t){console.log("check",t)}}};e.default=s},d340:function(t,e,n){"use strict";n.r(e);var i=n("95cd"),o=n("7e75");for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);n("a750");var a,c=n("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"7e5e6cba",null,!1,i["a"],a);e["default"]=r.exports},ddf7:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".delete[data-v-3082790b]{color:#fff;font-size:16px;text-align:center;margin-top:2%;letter-spacing:5px}.Tips[data-v-3082790b]{color:#fff;font-size:40px;text-align:center;font-weight:700;letter-spacing:5px}[data-v-3082790b] uni-view.data-v-15e25b84{color:#fff}[data-v-3082790b] .answer__banner.data-v-15e25b84{height:%?260?%}[data-v-3082790b] .answer__next__btn.data-v-15e25b84{bottom:7%}",""]),t.exports=e},f694:function(t,e,n){var i=n("ddf7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("97142d16",i,!0,{sourceMap:!1,shadowMode:!1})}}]);