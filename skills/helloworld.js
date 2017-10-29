
module.exports = (controller) => {
	
	controller.hears('hello', 'message_received', (bot, message) => {
		console.log('Heard hello!')

	})
}
