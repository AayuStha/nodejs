var figlet = require("figlet");

figlet("Aayush Shrestha", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});