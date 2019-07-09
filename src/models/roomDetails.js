const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const room = new Schema(
  {
    name:{
      type:String,
      require:true
    },
    noOfSeat:{
      type:Number,
      require:true
    },  
    floorNumber:{
      type:String,
      require:true
    },
    whiteBoard:{
      type:Boolean,
      require:true
    },
    roomPic:{
      type:String,
      require:true
    },
    conference_cost_in_credit:{
      type:Number,
      require:true
    }
  },    
  {
    timestamps: true
  }
);

module.exports = mongoose.model("RoomDetails", room,"RoomDetails");


