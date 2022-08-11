<template>
	<!--banner轮播-->
	<div class="swiper-container" id="mySwiper" :ref="refName">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="banner in list" :key="banner.id">
				<img :src="banner.imgUrl" />
			</div>
		</div>
		<!-- 如果需要分页器 -->
		<div class="swiper-pagination"></div>

		<!-- 如果需要导航按钮 -->
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
	</div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min.js';
import 'swiper/swiper-bundle.min.css';
export default {
	name: 'SwiperList',
	props: {
		list: {
			type: Array,
			required: true,
		},
		refName: {
			type: String,
			default: 'mySwiper',
		},
		options: {
			type: Object,
			default: () => ({
				autoplay: {
					delay: 1000,
					pauseOnMouseEnter: true,
					disableOnInteraction: false,
				},
				loop: true,
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
				},
				// 如果需要前进后退按钮
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				// 如果需要滚动条
				scrollbar: {
					el: '.swiper-scrollbar',
				},
			}),
		},
	},
	data() {
		return {
			swiperIns: null, //存储实例化
		};
	},
	watch: {
		list: {
			handler(nval, oval) {
				if (nval && nval.length) {
					this.$nextTick(() => {
						this.initSwiper();
					});
				}
			},
			immediate: true,
		},
	},
	methods: {
		initSwiper() {
			this.swiperIns = new Swiper(this.$refs[this.refName], this.options);
		},
	},
};
</script>
<style scoped></style>
