const UserRoute = require('./Routes/User')

class RestClient {
	constructor ({ token, type, baseURL }) {
		this.token = token
		this.type = type
		this.baseURL = baseURL
	}

	/**
	 * Gets the data of a user
	 * @param {string} userId Discord ID of the user to get
	 * @function
	 * @returns {Promise} data The data returned by the API
	 * @author Mackan
	 */
	async getUser (userId) {
		return await UserRoute({
			...this,
			params: {
				userId,
			},
		})
	}
}

module.exports = RestClient
