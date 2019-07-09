const app = require("./src/app");
const mongoose = require("mongoose");

const port = 29342;
const MongoUrl ="mongodb://localhost:27017/test";
mongoose.connect(
      MongoUrl, 
      { useNewUrlParser: true });

mongoose.connection.on("connected", function() {
  console.log("Mongoose db connected ");
});

app.listen(port, () => {
  console.log(" Runnning port number ", port);
});