
module.exports = (controller) => {

	controller.hears('hi', 'message_received', (bot, message) => {
		console.log({message})
		bot.reply(message, 'Oh, Hello!')
	})
	controller.hears('template', 'message_received', (bot, message) => {
		bot.reply(message, {template:{
  "altText": "this is a image carousel template",
  "template": {
      "type": "image_carousel",
      "columns": [
          {
            "imageUrl": "https://placehold.it/500x500",
            "action": {
              "type": "postback",
              "label": "Buy",
              "data": "action=buy&itemid=111"
            }
          },
          {
            "imageUrl": "https://placehold.it/500x500",
            "action": {
              "type": "message",
              "label": "Yes",
              "text": "yes"
            }
          },
          {
            "imageUrl": "https://placehold.it/500x500",
            "action": {
              "type": "datetimepicker",
              "label": "Date",
              "data": "date",
				"mode": "date"
            }
          },
          {
            "imageUrl": "https://placehold.it/500x500",
            "action": {
              "type": "datetimepicker",
              "label": "Time",
              "data": "time",
				"mode": "time"
            }
          },
          {
            "imageUrl": "https://placehold.it/500x500",
            "action": {
              "type": "datetimepicker",
              "label": "DateTime",
              "data": "datetime",
				"mode": "datetime"
            }
          },
      ]
  }
} 
		})
	})

	
	controller.on('sticker', (bot, message) => {
		bot.reply(message, 'Sticker received!')
	})

	controller.on('message_received', (bot, message)=> {
		bot.reply(message, 'Received message')
		console.log({message})
	})
	controller.hears('(.*)', 'message_received, line_postback', (bot, message) => {
		bot.reply(message, `Heard "${message.text}"`)
		console.log({message})
	})
}
