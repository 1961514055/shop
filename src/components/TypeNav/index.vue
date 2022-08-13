<template>
	<!-- 商品分类导航 -->
	<div class="type-nav">
		<div class="container">
			<div class="nav-left" @mouseleave="moveOut" @mouseenter="isShow = true">
				<h2 class="all">全部商品分类</h2>
				<transition name="sort">
					<div class="sort" v-show="isShow">
						<div class="all-sort-list2" @click="toSearch">
							<div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId" :class="{ item_on: categoryIndex === index }" @mouseenter="moveIn(index)">
								<h3>
									<a href="javascript:;" :data-category1id="c1.categoryId" :data-categoryname="c1.categoryName">{{ c1.categoryName }}</a>
								</h3>
								<div class="item-list clearfix">
									<div class="subitem">
										<dl class="fore" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
											<dt>
												<a href="javascript:;" :data-category2id="c2.categoryId" :data-categoryname="c2.categoryName">{{ c2.categoryName }}</a>
											</dt>
											<dd>
												<em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
													<a href="javascript:;" :data-category3id="c3.categoryId" :data-categoryname="c3.categoryName">{{ c3.categoryName }}</a>
												</em>
											</dd>
										</dl>
									</div>
								</div>
							</div>
						</div>
					</div>
				</transition>
			</div>
			<nav class="nav">
				<a href="###">服装城</a>
				<a href="###">美妆馆</a>
				<a href="###">尚品汇超市</a>
				<a href="###">全球购</a>
				<a href="###">闪购</a>
				<a href="###">团购</a>
				<a href="###">有趣</a>
				<a href="###">秒杀</a>
			</nav>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import throttle from 'lodash/throttle';

export default {
	name: 'TypeNav',
	data() {
		return {
			categoryIndex: -1,
			isShow: true,
		};
	},
	computed: {
		...mapState({
			categoryList: (state) => state.home.categoryList,
		}),
	},
	mounted() {
		if (this.$route.path != '/home') {
			this.isShow = false;
		}
	},
	methods: {
		// 节流throttle
		moveIn: throttle(
			function (index) {
				this.categoryIndex = index;
			},
			50,
			{ trailing: false }
		),
		// 鼠标移出
		moveOut() {
			this.categoryIndex = -1;
			this.isShow = false;
			if (this.$route.path == '/home') {
				this.isShow = true;
			}
		},
		toSearch(e) {
			if (e.target.nodeName != 'A') {
				return;
			}
			const { category1id, category2id, category3id, categoryname } = e.target.dataset;
			let query = {};
			category1id ? (query.category1Id = category1id) : '';
			category2id ? (query.category2Id = category2id) : '';
			category3id ? (query.category3Id = category3id) : '';
			query.categoryName = categoryname;
			let location = {
				name: 'search',
				query,
			};
			//判断是否有param参数
			if (this.$route.params) {
				location.params = this.$route.params;
			}
			//跳转
			if (this.$route.path === '/home') {
				this.$router.push(location);
			} else {
				this.$router.replace(location);
			}
		},
	},
};
</script>
<style lang="less" scoped>
.type-nav {
	border-bottom: 2px solid #e1251b;
	.container {
		width: 1200px;
		margin: 0 auto;
		display: flex;
		position: relative;

		.all {
			width: 210px;
			height: 45px;
			background-color: #e1251b;
			line-height: 45px;
			text-align: center;
			color: #fff;
			font-size: 14px;
			font-weight: bold;
		}

		.nav {
			a {
				height: 45px;
				margin: 0 22px;
				line-height: 45px;
				font-size: 16px;
				color: #333;
			}
		}

		.sort {
			position: absolute;
			left: 0;
			top: 45px;
			width: 210px;
			height: 461px;
			position: absolute;
			background: orange;
			z-index: 999;

			.all-sort-list2 {
				.item {
					h3 {
						line-height: 30px;
						font-size: 14px;
						font-weight: 400;
						overflow: hidden;
						padding: 0 20px;
						margin: 0;

						a {
							color: #333;
						}
					}

					.item-list {
						display: none;
						position: absolute;
						width: 734px;
						min-height: 460px;
						background: #f7f7f7;
						left: 210px;
						border: 1px solid #ddd;
						top: 0;
						z-index: 9999 !important;

						.subitem {
							float: left;
							width: 650px;
							padding: 0 4px 0 8px;

							dl {
								border-top: 1px solid #eee;
								padding: 6px 0;
								overflow: hidden;
								zoom: 1;

								&.fore {
									border-top: 0;
								}

								dt {
									float: left;
									width: 54px;
									line-height: 22px;
									text-align: right;
									padding: 3px 6px 0 0;
									font-weight: 700;
								}

								dd {
									float: left;
									width: 660px;
									padding: 3px 0 0;
									overflow: hidden;

									em {
										float: left;
										height: 14px;
										line-height: 14px;
										padding: 0 8px;
										margin-top: 5px;
										border-left: 1px solid #ccc;
									}
								}
							}
						}
					}

					&.item_on {
						background: skyblue;
						.item-list {
							display: block;
						}
					}
				}
			}
		}
		.sort-enter {
			height: 0;
			opacity: 0;
		}
		.sort-enter-to {
			height: 461px;
			opacity: 1;
		}
		.sort-enter-active {
			transition: all 2s;
		}
	}
}
</style>
