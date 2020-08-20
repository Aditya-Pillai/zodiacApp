const express = require('express');

const app= express();

const port= process.env.PORT || 3000;

app.use(express.static(__dirname + '/client'));


app.listen(port,()=> {
	console.log('Server is running by nodemon on port '+port);
});
