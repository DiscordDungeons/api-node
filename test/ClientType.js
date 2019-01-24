const DDApi = require('../')
const assert = require('assert')

describe('Client constructor types', function () {
	it('Should have the constructor name be RestClient when type is REST', function () {
		const client = new DDApi({
			token: 'My Token',
			type: 'REST',
		})

		assert(client.constructor.name === 'RestClient')
	})

	it('Should have the constructor name be GraphQLClient when type is GraphQL', function() {
		const client = new DDApi({
			token: 'My Token',
			type: 'GraphQL',
		})

		assert(client.constructor.name === 'GraphQLClient')
	})
})