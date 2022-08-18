<template>
	<div class="pagination">
		<button :disabled="pageNo == 1" @click="$emit('pageChange', pageNo - 1)">上一页</button>
		<button v-if="startEnd.start > 1" @click="$emit('pageChange', 1)">1</button>
		<button v-if="startEnd.start > 2">···</button>

		<template v-for="page in startEnd.end">
			<button :key="page" v-if="page >= startEnd.start" :class="{ active: page === pageNo }" @click="$emit('pageChange', page)">{{ page }}</button>
		</template>

		<button v-if="startEnd.end < pageTotal - 1">···</button>
		<button v-if="startEnd.end < pageTotal" @click="$emit('pageChange', pageTotal)">{{ pageTotal }}</button>
		<button :disabled="pageNo == pageTotal" @click="$emit('pageChange', pageNo + 1)">下一页</button>

		<button style="margin-left: 30px">共 {{ pageTotal }} 条</button>
	</div>
</template>

<script>
export default {
	name: 'Pagination',
	props: {
		pageNo: {
			// 当前页
			type: Number,
			required: true,
		},
		pageSize: {
			// 每页条数
			type: Number,
			required: true,
		},
		total: {
			// 总条数
			type: Number,
			required: true,
		},
		pageCount: {
			// 连续数
			type: Number,
			required: true,
		},
	},
	computed: {
		// 总页数 = 总条数/每页条数  向上取整
		pageTotal() {
			return Math.ceil(this.total / this.pageSize);
		},
		//计算页码的起始位置和结束位置
		startEnd() {
			let { pageNo, pageSize, total, pageCount, pageTotal } = this;
			let start = 0,
				end = 0; //  起始页 结束页

			if (pageTotal < pageCount) {
				// 当总页数小于连续数
				start = 1;
				end = pageTotal;
			} else {
				// 起始页 = 当前页 - 向下取整(连续数/2 )
				// 结束页 = 当前页 + 向下取整(连续数/2 )
				start = pageNo - Math.floor(pageCount / 2);
				end = pageNo + Math.floor(pageCount / 2);

				if (start < 1) {
					//当起始页超出边界小于1 则定义起始页为1
					start = 1;
					end = pageCount;
				}
				if (end > pageTotal) {
					//当结束页超出边界 则定义结束页为总页数
					end = pageTotal;
					start = pageTotal - pageCount + 1;
				}
			}

			return { start, end };
		},
	},
};
</script>

<style lang="less" scoped>
.pagination {
	button {
		margin: 0 5px;
		background-color: #f4f4f5;
		color: #606266;
		outline: none;
		border-radius: 2px;
		padding: 0 4px;
		vertical-align: top;
		display: inline-block;
		font-size: 13px;
		min-width: 35.5px;
		height: 28px;
		line-height: 28px;
		cursor: pointer;
		box-sizing: border-box;
		text-align: center;
		border: 0;

		&[disabled] {
			color: #c0c4cc;
			cursor: not-allowed;
		}

		&.active {
			cursor: not-allowed;
			background-color: #409eff;
			color: #fff;
		}
	}
}
</style>
