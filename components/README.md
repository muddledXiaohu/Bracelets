# 支付密码框效果 6位数验证码 4位数验证效果 使用说明：
1. 下载该插件，然后解压将其文件 “verification-code-style2” 拖入至项目的components中
2. 在需要使用的地方导入该组件并注册，使用<verification-code-style></verification-code-style>
### 参数说明
| props       | 类型    |  是否必填  |  默认值| 说明  |
| --------   | -----:   | :----: | :----:| :----: |
| latticeNum| Number|   否    | 4    | 输入框框框的个数 |
| borderStyle      | String      |   否   | "border-bottom:1px solid gray;" |显示的输入框的框框样式    |
| borderCheckStyle| String     |   否  | "border:1px solid rgb(117, 202, 104);"  | 输入框框框选中的样式|
| inputType| String   |   否   |  number   | 输入框的类型（值和uniapp的input一样） | 

### 获取值说明：
##### 通过   @getInputVerification=""   调用方法  该方法会返回用户输入的值

# 示例代码如下：

```
<template>
	<view class="content">
		<verification-code-style borderStyle="border-bottom:1px solid gray" borderCheckStyle="border:1px solid rgb(117, 202, 104);"
		 :latticeNum="6" @getInputVerification="getInputVerification"></verification-code-style>
	</view>
</template>

<script>
	import verificationCodeStyle from '@/components/verification-code-style2/verification-code-style2'
	export default {
		components: {
			verificationCodeStyle
		},
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {
			// 用户输入的值
			getInputVerification(e) {
				console.log(e);
			}
		}
	}
</script>

<style>
	.content {
		width: 500rpx;
		margin: 50rpx auto;
	}
</style>

```