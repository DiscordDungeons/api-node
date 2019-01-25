const APIError = require('./APIError')

class RatelimitError extends APIError {
	constructor (message, status) {
		if (!message) {
			message = 'Too many requests, please try again later'
		}

		if (!status) {
			status = 429
		}

		super(message, status)
	}
}

module.exports = RatelimitError
