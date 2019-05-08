const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true},
  wage: { type: Number, required: true }
});

const Employee = mongoose.model("Employee", bookSchema);

module.exports = Employee;
