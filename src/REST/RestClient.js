class RestClient {
	constructor ({ token, type, baseURL }) {
		this._token = token
		this._type = type
		this._baseURL = baseURL
	}
}

module.exports = RestClient
