const { expect } = require('chai');
const sinon = require('sinon');
const bcrypt = require('bcrypt');

const usersController = require('./users');
const db = require('../models');

const { User } = db;

describe('Controllers :: UsersController :: Unit', () => {
	describe('#addUser', () => {
		it('should execute create method', async () => {
			// Given
			const data = {
				username: 'Sylvie',
				email: 'sylvie@lu.fr',
				password: 'Azerty94',
				newsletter: false,
				terms: true,
			};

			const createStub = sinon.stub(User, 'create');

			// When
			await usersController.addUser(data);

			// Then
			expect(createStub.calledOnce).to.be.true;
		});
	});
});
