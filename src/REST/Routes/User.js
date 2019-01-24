const fetch = require('node-fetch')

const UserRoute = async ({ token, params, baseURL }) => {
	const URL = `${baseURL}/user/${params.userId}`

	const result = await fetch(URL, {
		headers: {
			'Authorization': token,
		},
	})

	const data = await result.json()

	if (result.status !== 200) {
		// throw new Error(status)
	}

	return data
}

module.exports = UserRoute
