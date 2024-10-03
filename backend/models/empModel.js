import mongoose from "mongoose";

const empSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    image: {type:String, required:true},
    speciality: {type:String, required:true},
    position: {type:String, required:true},
    degree: {type:String, required:true},
    experience: {type:String, required:true},
    about: {type:String, required:true},
    available: {type:Boolean, required:true},
    address: {type:Object, required:true},
    date: {type:Number, required:true},
    slots_booked: {type:Object, default:{}},
},{minimize:false})

const empModel = mongoose.models.employee || mongoose.model('employee', empSchema)

export default empModel