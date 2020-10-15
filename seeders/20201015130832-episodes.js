'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Episodes',
			[
				{
					id: 'f5120cd6-3b93-4e73-9014-6aef57949346',
					seasonId: 'fe9e7c26-5333-4bf2-b328-17bd60c57939',
					title: 'A Study in Pink',
					number: 1,
				},
				{
					id: 'cd176534-a54c-445e-a480-7c6863a92825',
					seasonId: '3ba9c684-f29d-400f-9992-4de91062ecd3',
					title: 'A Scandal in Belgravia',
					number: 1,
				},
				{
					id: 'e3e6aaf8-aa4c-44e0-a6c6-150b9d7e658a',
					seasonId: 'dbe5a48b-8166-4126-a274-987aa9ee6271',
					title: 'The One with All the Thanksgivings',
					number: 8,
				},
				{
					id: '95364463-981e-47ba-a486-79abf2f13ab7',
					seasonId: 'c2bfb727-203e-404a-b130-df9edcda685c',
					title: 'Caballo sin Nombre',
					number: 2,
				},
				{
					id: '3757859e-6641-434c-9682-5cd1119b2501',
					seasonId: '019650fb-3e36-43fa-bda8-11dc933b8923',
					title: 'The Crash',
					number: 1,
				},
				{
					id: '74b23ec2-eab7-4fb8-b1ee-3aa4d5342925',
					seasonId: '670ae3b8-6a79-4559-a5d3-7aded5405582',
					title: 'Fire and Blood',
					number: 10,
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Episodes', null, {});
	},
};
