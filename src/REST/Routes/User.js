const fetch = require('node-fetch')

const APIError = require('../../Errors/APIError')
const RatelimitError = require('../../Errors/APIError/RatelimitError')

const UserRoute = async ({ token, params, baseURL }) => {
	const URL = `${baseURL}/user/${params.userId}`

	const result = await fetch(URL, {
		headers: {
			'Authorization': token,
		},
	})

	const data = await result.json()

	if (result.status !== 200) {
		if (result.status === 429) {
			throw new RatelimitError()
		} else {
			throw new APIError(data.message, result.status)
		}
	}

	return data
}

module.exports = UserRoute
