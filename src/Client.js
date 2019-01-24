const InitializeError = require('./Errors/InitializeError')
const RestClient = require('./REST')
const GraphQLClient = require('./GraphQL')

class APIClient {
	/**
	 * Constructs a new API Client
	 * @param {object} keyData The key data the client will use
	 * @param {string} keyData.token The API key you got for the API
	 * @param {string} keyData.type The key type to use, either REST or GraphQL
	 * @author Mackan
	 */
	constructor (keyData) {

		if (!keyData) {
			throw new InitializeError('No keyData specified')
		}

		const { token, type = 'REST' } = keyData

		if (!token) {
			throw new InitializeError('No token specified')
		} else {

			this.token = token
			this.type = type
		
			if (type === 'REST') {
				this.baseURL = 'https://api.discorddungeons.me/v3'
				return new RestClient(this)
			} else if (type === 'GraphQL') {
				this.baseURL = 'https://api.discorddungeons.me/grapql'
				return new GraphQLClient(this)
			} else {
				throw new InitializeError('Invalid token type specified')
			}
		}
	}


}

module.exports = APIClient
