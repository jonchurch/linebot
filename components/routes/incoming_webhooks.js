var debug = require('debug')('botkit:incoming_webhooks');

module.exports = function(webserver, controller) {

    debug('Configured POST /line/receive url for receiving events');
    webserver.post('/line/receive', function(req, res) {

        // respond to Line that the webhook has been received.
        res.status(200);
        res.send('ok');

		// console.log('GOT A REQ!', req.body)

        var bot = controller.spawn({});

        // Now, pass the webhook into be processed
        controller.handleWebhookPayload(req, res, bot);

    });


}
