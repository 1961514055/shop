<template>
	<div>
		<TypeNav></TypeNav>
		<ListContainer></ListContainer>
		<TodayRecommend></TodayRecommend>
	</div>
</template>

<script>
import ListContainer from './components/ListContainer';
import TodayRecommend from './components/TodayRecommend';
export default {
	name: 'Home',
	components: {
		ListContainer,
		TodayRecommend,
	},
};
</script>
<style scoped></style>
