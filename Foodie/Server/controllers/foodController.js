import foodModel from "../models/foodModel.js";
import fs from "fs";


// add food item

const addFood = async(req, res)=>{

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename,

    })
    try {
        await food.save();
        res.json({success:true, message:"Food Added"})
        
    } catch (error) {

        console.log(error)
        res.json({success:false, message:"Error"})
        
    }
}

// Get all the Data

const foodList = async (req, res)=>{
try {
    const foods = await foodModel.find({});
    res.json({success:true, data:foods})

} catch (error) {
    console.log(error);
    res.json({success:false, message:"Error"});
 
}}

// Removing the food from the list

const removeFood = async (req, res) =>{
    try {
          const id = req.body.id;
          const food = await foodModel.findById(id);
          fs.unlink(`uploads/${food.image}`, ()=>{})
          await foodModel.findByIdAndDelete(id);
          res.json({success:true, message:"Food Removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
        
    }

}

export {addFood , foodList,  removeFood};