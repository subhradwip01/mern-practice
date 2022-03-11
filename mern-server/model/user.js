const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    address:{
      type:String,
      require:true
    },
    notes:[
      {
        note:{
          type:String
        }
      }
  ]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
