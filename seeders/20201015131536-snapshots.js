'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Snapshots',
			[
				{
					id: '74b7168f-8c94-4cd1-bc4c-3ee65ea0e84f',
					path: 'https://i.ibb.co/4tFQtHK/Twin-Peaks-Season-2-Episode-22.png',
					showId: 'c4f250ec-3fdb-41ff-9a0e-67cec6dd15af',
					seasonId: '9248bd54-b649-4b95-b035-697cf03010c1',
					episodeId: 'f727c5a9-7aff-4bf1-88a6-72aa1640d1b3',
					postedBy: '93c2edcc-341b-42f0-92a2-e10e1e239bcd',
				},
				{
					id: '34942d2f-1409-43c9-a384-c61383e97cf5',
					path: 'https://i.ibb.co/JCKH2YV/Game-Of-Thrones-Season-1-Episode-10.png',
					showId: '5778aeb9-79d8-4fa6-a705-ab03f25da403',
					seasonId: '670ae3b8-6a79-4559-a5d3-7aded5405582',
					episodeId: '74b23ec2-eab7-4fb8-b1ee-3aa4d5342925',
					postedBy: '93c2edcc-341b-42f0-92a2-e10e1e239bcd',
				},
				{
					id: 'd3a1e029-8da7-4b62-8875-ea887bebdc3a',
					path: 'https://i.ibb.co/DCXBFLZ/Sherlock-Season-2-Episode-1.jpg',
					showId: '81ebe639-dd9b-4b5d-9f9e-bd57320ae8c7',
					seasonId: '3ba9c684-f29d-400f-9992-4de91062ecd3',
					episodeId: 'cd176534-a54c-445e-a480-7c6863a92825',
					postedBy: '93c2edcc-341b-42f0-92a2-e10e1e239bcd',
				},
				{
					id: 'dcf14507-4d09-4a3e-b383-fecf140c1356',
					path: 'https://i.ibb.co/M20D0Mt/Breaking-Bad-Season-3-Episode-2.png',
					showId: '1f31e6e5-9ab3-40fb-97c1-c837fd89017b',
					seasonId: 'c2bfb727-203e-404a-b130-df9edcda685c',
					episodeId: '95364463-981e-47ba-a486-79abf2f13ab7',
					postedBy: '93c2edcc-341b-42f0-92a2-e10e1e239bcd',
				},
				{
					id: '4b67aae3-f245-4de6-91f8-a77c097819f1',
					path: 'https://i.ibb.co/MpFDDRf/Life-On-Mars-Season-1-Episode-1.jpg',
					showId: 'b207a07e-b993-432b-8871-97652fdf2b91',
					seasonId: '019650fb-3e36-43fa-bda8-11dc933b8923',
					episodeId: '3757859e-6641-434c-9682-5cd1119b2501',
					postedBy: '93c2edcc-341b-42f0-92a2-e10e1e239bcd',
				},
				{
					id: '9eed4e61-d246-4077-b59e-980d10a65f0a',
					path: 'https://i.ibb.co/H4gBk7N/Sherlock-Season-1-Episode-1.jpg',
					showId: '81ebe639-dd9b-4b5d-9f9e-bd57320ae8c7',
					seasonId: 'fe9e7c26-5333-4bf2-b328-17bd60c57939',
					episodeId: 'f5120cd6-3b93-4e73-9014-6aef57949346',
					postedBy: '93c2edcc-341b-42f0-92a2-e10e1e239bcd',
				},
				{
					id: '8fa84d6f-1a2d-402a-a15d-1cd0b9691a88',
					path: 'https://i.ibb.co/JQQ4x1p/Friends-Season-5-Episode-8.jpg',
					showId: '4ad1804a-15e1-4801-9f50-302e1e233e49',
					seasonId: 'dbe5a48b-8166-4126-a274-987aa9ee6271',
					episodeId: 'e3e6aaf8-aa4c-44e0-a6c6-150b9d7e658a',
					postedBy: '93c2edcc-341b-42f0-92a2-e10e1e239bcd',
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Snapshots', null, {});
	},
};
