
module.exports = (controller) => {

	controller.hears('hi', 'message_received', (bot, message) => {
		console.log({message})
		bot.reply(message, 'Oh, Hello!')
	})
	
	controller.hears('(.*)', 'message_received', (bot, message) => {
		bot.reply(message, `Heard "${message.text}"`)
	})
	controller.on('sticker', (bot, message) => {
		bot.reply(message, 'Sticker received!')
	})

	controller.on('message_received', (bot, message)=> {
		bot.reply(message, 'Received message')
		console.log({message})
	})
}
