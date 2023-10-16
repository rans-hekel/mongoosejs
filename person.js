const mongoose = require("mongoose");
const { Schema, model } = mongoose;

mongoose
  .connect("mongodb://127.0.0.1:27017/your_server")
  .then(() => {
    console.log("Berhasil Connect Ke Monggo DB");
  })
  .catch((err) => {
    console.log(err);
  });
// membuat virtual property
const personShema = new Schema({
  firstName: String,
  lastName: String,
});

personShema.virtual("fullname").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

// membuat middleware dari nodejs
personShema.pre("save", async function () {
  console.log("sedang menyiapkan data");
});

const Person = new model("Person", personShema);

const person = new Person({
  firstName: "thierry",
  lastName: "henry",
});

console.log(person.fullname);
