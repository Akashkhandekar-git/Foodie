import mongoose from "mongoose";

const dbConnect =async()=>{ await mongoose.connect("mongodb://localhost:27017/Foodie").then(()=>{
    console.log("DB Connected");
})
}

export default dbConnect;