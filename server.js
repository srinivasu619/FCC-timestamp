const express = require('express');
const app = express();

app.set('view engine','ejs');
app.get('/',function(req,res){
	res.render('index');
});

app.get('/:time',function(req,res){
	const timestamp = req.params.time;
	if(isNaN(Number(timestamp)))
	{
		var data = new Date(timestamp);
		if (data == 'Invalid Date') {
			var datedata = {
			unix_timestamp: "null",
			date:"null"
		} 
      return res.render('time',{data:datedata});
		}
    var datedata = {
			unix_timestamp: Date.parse(data),
			date:data.getDate()+"-"+(data.getMonth()+1)+"-"+data.getFullYear()
		}
		return res.render('time',{data:datedata});
	}
	else{
		var data = new Date(Number(timestamp));
		if (data == 'Invalid Date') {
			var datedata = {
			unix_timestamp: "null",
			date:"null"
		} 
      return res.render('time',{data:datedata});
		}
    var datedata = {
			unix_timestamp: Number(timestamp),
			date:data.getDate()+"-"+(data.getMonth()+1)+"-"+data.getFullYear()
		};
    return res.render('time',{data:datedata});
	}
})
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
