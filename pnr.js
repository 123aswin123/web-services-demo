var express = require('express');
var app = express();


app.get('/:p/:n/:r',function (req,res) {
  res.json({'urlSent':req.params});

});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
