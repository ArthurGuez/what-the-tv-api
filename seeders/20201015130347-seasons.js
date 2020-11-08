'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Seasons',
			[
				{
					id: 'fe9e7c26-5333-4bf2-b328-17bd60c57939',
					showId: '81ebe639-dd9b-4b5d-9f9e-bd57320ae8c7',
					number: 1,
				},
				{
					id: '3ba9c684-f29d-400f-9992-4de91062ecd3',
					showId: '81ebe639-dd9b-4b5d-9f9e-bd57320ae8c7',
					number: 2,
				},
				{
					id: 'dbe5a48b-8166-4126-a274-987aa9ee6271',
					showId: '4ad1804a-15e1-4801-9f50-302e1e233e49',
					number: 5,
				},
				{
					id: 'c2bfb727-203e-404a-b130-df9edcda685c',
					showId: '1f31e6e5-9ab3-40fb-97c1-c837fd89017b',
					number: 3,
				},
				{
					id: '019650fb-3e36-43fa-bda8-11dc933b8923',
					showId: 'b207a07e-b993-432b-8871-97652fdf2b91',
					number: 1,
				},
				{
					id: '670ae3b8-6a79-4559-a5d3-7aded5405582',
					showId: '5778aeb9-79d8-4fa6-a705-ab03f25da403',
					number: 1,
				},
				{
					id: '9248bd54-b649-4b95-b035-697cf03010c1',
					showId: 'c4f250ec-3fdb-41ff-9a0e-67cec6dd15af',
					number: 2,
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Seasons', null, {});
	},
};
