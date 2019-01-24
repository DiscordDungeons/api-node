const WrapperError = require('./WrapperError')

class InitializeError extends WrapperError {
	constructor (message) {
		super(message)
	}
}

module.exports = InitializeError
