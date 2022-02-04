const { request, response, query } = require("express");
var express = require("express"); 
var apiServer = express();
var fs = require ("fs");
const { get } = require("http");
const { setFlagsFromString } = require("v8");

var port = 3000;
var host = "localhost";
apiServer.listen(port, host, () => {
console.log("server running at http://%s:%d", host, port);
});

apiServer.get("/", (request, response) => {
    console.log("home/");
    response.send("<h1>WH40K</h1> "); 
  });

apiServer.post("/InvioMailUpgrade", (req,res) => {
    if(req.body.mail){
        console.log("mail:".mail);
// carico il modulo
const nodemailer = require('nodemailer');

// definisco il trasporto
var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'arrigoni.alessandro@studenti.salesianisesto.it',
    password: 'Az-66393'
  }
});

// messaggio da inviare
var mailOptions = {
  from: 'mail di trasporto',
  to: mail,
  subject: 'oba',
  html: '<b>corpo mail</b>'  // invia il corpo in html
};

// invio il messaggio
transporter.sendMail(mailOptions, function(error, info){
  if(error) {
    console.log(error);
  }else{
    console.log('Messaggio inviato: ' + info.response);
  }
});
        res.send("Done!");
    }else{
        res.send("Wrong data");
    }
    });