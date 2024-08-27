import express from "express";
import cors from "cors";
import dbConnect from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";


//app config
const app = express();
const port  = 4000;

//middleware
app.use(cors())
app.use(express.json())


// DataBase Connection
dbConnect();

// Add Food
app.use("/api/food", foodRouter);


app.get("/",(req, res)=>{

    res.send("API working")
    res.status(200)

})

app.listen(port, ()=>{

    console.log(`Server started at: http://localhost:${port}`)
})
