<template>
	<div id="app">
		<Header></Header>
		<router-view></router-view>
		<Footer v-if="!$route.meta.isHade"></Footer>
	</div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
	name: 'App',
	components: {
		Header,
		Footer,
	},
	mounted() {
		this.$store.dispatch('getCategoryList');
	},
};
</script>

<style></style>
