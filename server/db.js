const mon = require("mongoose");

function connectToDB() {
  mon
    .connect("mongodb+srv://divyesh:divyesh@cluster0.apesh.mongodb.net/FarmerMarketing?retryWrites=true&w=majority",
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
