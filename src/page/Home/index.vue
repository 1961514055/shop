<template>
	<div>
		<TypeNav></TypeNav>
		<ListContainer></ListContainer>
		<TodayRecommend></TodayRecommend>
		<Rank></Rank>
		<Like></Like>
		<Floor></Floor>
		<Floor></Floor>
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
};
</script>
<style scoped></style>
