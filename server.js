const express = require('express');
const app = express();

app.set('view engine','ejs');
app.get('/',function(req,res){
	res.render('index');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
