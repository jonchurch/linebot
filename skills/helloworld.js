
module.exports = (controller) => {

	controller.on('message_received', (bot, message) => {
		console.log({message})
		bot.reply(message, 'Oh, and image')
	})
	
	controller.hears('(.*)', 'message_received', (bot, message) => {
		bot.reply(message, 'Heard hello!')


	})
}
