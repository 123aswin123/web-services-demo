var bluebird = require('bluebird');
var request = require('request');
bluebird.promisifyAll(request);


var  options = {
  url : 'https://api.elasticemail.com/v2/email/send',
  form : {
    bodyHtml : 'This email is sent from the code',
    apikey : '2e07d5c4-7ac7-458a-aded-9d105d1ea1db',
    isTransactional: false,
    subject: 'MailFrom Code',
    msgTo :'vayiravanaswin@gmail.com',
    fromName: 'API test',
    from: 'hello@pagemetric.com'
  }
};

request.postAsync(options)
.then(function (response) {

  console.log(response.body);

});
