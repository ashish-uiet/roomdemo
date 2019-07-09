# roomdemo

#create room  --
http://localhost:29342/room/createRoom;
{
	"name":"omega",
	"noOfSeat":5,
	"floorNumber":"Ground Floor",
	"whiteBoard":true,
	"roomPic":"any s3 link",
	"conference_cost_in_credit":2
}


#book room with slot wise- 
http://localhost:29342/room/bookRoom;

{
	"dateToBook":"2019-07-09",
	"roomID":"5d24a9a009fd2438dfb15c45",
	"slotNumber":1,
	"userName":"ajay"
}
