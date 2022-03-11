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
        },
        time:{
          type:String
        }
      }
  ]
  },
  {
    timestamps: true,
  }
);

userSchema.methods.addMessage = async function(message){
  try {
    const updatedNotes=[...this.notes];
    updatedNotes.push({
      note:message,
      time:new Date().getTime()
    })
    this.notes=updatedNotes;
    return this.save()
  } catch (e) {
    console.log(e.message)
  }
}

module.exports = mongoose.model("User", userSchema);
