import Mock from 'mockjs';
import banner from './banner.json';
import floor from './floor.json';

// 轮播图数据
Mock.mock('/mock/bannerList', function () {
	return {
		code: 200,
		data: banner,
		message: 'success',
	};
});

// 楼层数据
Mock.mock('/mock/floorList', function () {
	return {
		code: 200,
		data: floor,
		message: 'success',
	};
});
