const roomController = {};
db = require('../models/index');
// create room functions
roomController.createRoom = (req,res)=>{
   const roomData =  new db.RoomDetails(req.body);
   roomData.save((err,result)=>{
        if(err){
            res.status(400).json({
                message:err  
            });
        }else{
            console.log(result);
            res.status(200).json({
                message:"Room created Successfully",
                data:result
            });
        }
   });
}

roomController.bookRoom =(req,res)=>{


    // request body
    // {                         
    //     "name":"omega",
    //     "noOfSeat":5,
    //     "floorNumber":"Ground Floor",
    //     "whiteBoard":true,
    //     "roomPic":"any s3 link",
    //     "conference_cost_in_credit":2
    // }
    const { dateToBook ,
            roomID,
            slotNumber,
            userName
        }= req.body;
    db.BookingData.findOne({ 
            $and: 
                [
                    {
                         reservations: 
                                { 
                                 $elemMatch : {
                                    slotNumber: slotNumber,
                                 }
                             }
                  },
                  {
                    dateToBook:dateToBook
                  }
                ]
        },
        (err,result)=>{
            if(err){
                res.status(400).json(err);
            }else{
                if(result){
                    res.status(200).json({
                        message:"slot has been already booked"
                    });
                }else{
                    db.BookingData.findOne(
                        {},
                        (err,data)=>{
                             if(data){  // if one booking is already there 
                                var data ={};
                                data.dateToBook=dateToBook;
                                data.roomID=roomID;
                                temp={"slotNumber":slotNumber,"userName":userName};
                                db.BookingData.update(
                                    { 
                                        // _id :bookingID
                                    },
                                    { 
                                           $push: {"reservations":temp }
                                    },
                                    (err,result)=>{
                                        if(err){
                                            res.status(400).json({message:"Not update room slot"});
                                        }
                                        if(result){
                                            res.status(200).json({
                                                message:"Slot has been booked successfully",
                                                data:result
                                            });
                                        }
                                    }
                                );
                             }else{    // if  booking has not been made
                                var data ={};
                                data.dateToBook=dateToBook;
                                data.roomID=roomID;
                                temp={"slotNumber":slotNumber,"userName":userName};
                                data.reservations=temp;
                                var tempbookingdata = new db.BookingData(data);
                                tempbookingdata.save((err,result)=>{
                                    if(err){
                                        res.status(400).json(err);
                                    }else{
                                        res.status(200).json({
                                            message:"Slot has been booked successfully",
                                            data:result
                                        });
                                    }
                                });
                             }   
                        })
                

                }
            }
        }
    );
}

module.exports = roomController;