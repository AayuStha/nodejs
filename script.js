const express = require('express');
const figlet = require('figlet');

const app = express();

const user = "Sakshi Shrestha";


app.get('/', function (req, res) {
    figlet(`${user}`, function (err, data) {
        if (err) {
          console.log("Something went wrong...");
          console.dir(err);
          return;
        }
        res.send(`<pre>${data}</pre>`);
      });
})

app.listen(3000), () => {
    console.log("Server runnning at port 3000");
};