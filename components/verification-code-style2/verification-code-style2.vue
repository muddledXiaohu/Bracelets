<template>
	<view class="verification_code" >
		<view class="verification_code_continor">
			<text
				v-for="(item, index) in latticeNum"
				:key="index"
				:style="inputValues.length === index || (inputValues.length === latticeNum && index === latticeNum - 1) ? borderCheckStyle : borderStyle"
			>
				<block v-if="inputValues[index]">{{ inputValues[index] }}</block>
			</text>
		</view>
		<input :type="inputType" focus :maxlength="latticeNum" class="input_info" @input="inputVal" />
	</view>
</template>

<script>
export default {
	props: {
		// 输入框框框的个数
		latticeNum: {
			type: Number,
			default: 4
		},
		// 未选中样式
		borderStyle: {
			type: String,
			default: 'border-bottom:1px solid #008c8c;'
		},
		// 选中的样式
		borderCheckStyle: {
			type: String,
			default: 'border-bottom:1px solid #ccc;'
		},
		// input类型
		inputType:{
			type:String,
			default:"number"
		}
	},
	data() {
		return {
			inputValues: [], //输入的值
		};
	},
	methods: {
		inputVal(e) {
			this.inputValues = e.detail.value;
			this.$emit('getInputVerification', this.inputValues);
		}
	}
};
</script>

<style lang="less">
.verification_code {
	width: 100%;
	// margin: 20rpx auto;
	position: relative;
	overflow: hidden;
	text-align: center;
	.verification_code_continor {
		display: flex;
		text-align: center;
		text {
			width: 100rpx;
			height: 100rpx;
			font-size: 30px;
			color: #fff;
		}
		text:not(:first-child) {
			margin-left: 10rpx;
		}
	}
	.input_info {
		width: 1200rpx;
		height: 60rpx;
		// font-size: 0px;
		border: 1px solid red;
		position: absolute;
		opacity: 0;
		top: 0;
		left: -700rpx;
	}
}
</style>
