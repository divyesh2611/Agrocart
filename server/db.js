const mon = require("mongoose");
const dotenv = require("dotenv");


function connectToDB() {
  dotenv.config()
  mon
    .connect(process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.warn("DB is now connected");
    })
    .catch((req) => {
      console.warn("Error " + req);
    });
}

module.exports = connectToDB;
