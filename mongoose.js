const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Temp");

const tempSchema = new mongoose.Schema({
  name: String,
  class: String,
  father: String,
});

// CRUD operations using mongoose goes in separate functions
//Create................................................................
let createData = async () => {
    const tempModel = mongoose.model('temp1',tempSchema);
    let data = new tempModel(
        {
            name: "nanda",
            class: "Kala beta",
            father: "anirudh"
        }
    );
    const result = await data.save();
    console.log(result);
};
//Read..................................................................
let readData = async () => {
    const tempModel = mongoose.model('temp1',tempSchema);
    let data = await tempModel.find();
    console.log(data);
}
//Update................................................................
let updateData = async () => {
    const tempModel = mongoose.model('temp1',tempSchema);
    let data = await tempModel.updateOne({
        name:"anirudh"
    },
    {
        $set: {
            name:"aman"
        }
    })
};
//Delete................................................................
let deleteData = async () => {
    const tempModel = mongoose.model('temp1',tempSchema);
    let data = await tempModel.deleteMany({
        father: "anirudh"
    });
    console.log(data.acknowledged);
};





// createData();
// readData();
// updateData();
// deleteData();