<template>
	<div>
		<TypeNav></TypeNav>
		<ListContainer></ListContainer>
		<TodayRecommend></TodayRecommend>
		<Rank></Rank>
		<Like></Like>
		<Floor v-for="floor in floorList" :key="floor.id" :floor="floor"></Floor>
		<Brand></Brand>
	</div>
</template>

<script>
import ListContainer from './components/ListContainer';
import TodayRecommend from './components/TodayRecommend';
import Like from './components/Like';
import Rank from './components/Rank';
import Floor from './components/Floor';
import Brand from './components/Brand';
export default {
	name: 'Home',
	components: {
		ListContainer,
		TodayRecommend,
		Rank,
		Like,
		Floor,
		Brand,
	},
	computed: {
		floorList() {
			return this.$store.state.home.floorList;
		},
	},
	mounted() {
		this.$store.dispatch('getFloorList');
	},
};
</script>
<style scoped></style>
