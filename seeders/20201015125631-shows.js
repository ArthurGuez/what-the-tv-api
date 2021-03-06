'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Shows',
			[
				{
					id: '81ebe639-dd9b-4b5d-9f9e-bd57320ae8c7',
					title: 'sherlock',
					tmdbId: 19885,
					addedBy: '93c2edcc-341b-42f0-92a2-e10e1e239bcd',
				},
				{
					id: '4ad1804a-15e1-4801-9f50-302e1e233e49',
					title: 'friends',
					tmdbId: 1668,
					addedBy: '93c2edcc-341b-42f0-92a2-e10e1e239bcd',
				},
				{
					id: '1f31e6e5-9ab3-40fb-97c1-c837fd89017b',
					title: 'breakingbad',
					tmdbId: 1396,
					addedBy: '93c2edcc-341b-42f0-92a2-e10e1e239bcd',
				},
				{
					id: 'b207a07e-b993-432b-8871-97652fdf2b91',
					title: 'lifeonmars',
					tmdbId: 2973,
					addedBy: '93c2edcc-341b-42f0-92a2-e10e1e239bcd',
				},
				{
					id: '5778aeb9-79d8-4fa6-a705-ab03f25da403',
					title: 'gameofthrones',
					tmdbId: 1399,
					addedBy: '93c2edcc-341b-42f0-92a2-e10e1e239bcd',
				},
				{
					id: 'c4f250ec-3fdb-41ff-9a0e-67cec6dd15af',
					title: 'twinpeaks',
					tmdbId: 1920,
					addedBy: '93c2edcc-341b-42f0-92a2-e10e1e239bcd',
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Shows', null, {});
	},
};
