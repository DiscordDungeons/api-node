//const assert = require('assert')
const DDApi = require('../')

describe('Initializing client', function () {
	describe('No data set', function (){
		it('Should throw an error if no keyData is set', function (done) {
			try {
				const ApiClient = new DDApi()
			} catch (e) {
				//throw e
				done()
			}
		})
		it('Should throw an error if no token is set', function(done) {
			try {
				const ApiClient = new DDApi({})
			} catch (e) {
				done()
			}
		})

		it('Should throw an error if an invalid key type is set', function(done) {
			try {
				const ApiClient = new DDApi({
					token: 'My Token',
					type: 'Invalid Type',
				})
			} catch (e) {
				done()
			}
		})

		it('Should initialize if everything is set correctly', function() {
			const APIClient = new DDApi({
				token: 'My Token',
				type: 'REST',
			})
		})
	})
})