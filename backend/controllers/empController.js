import empModel from "../models/empModel.js"

const changeAvailability = async (req,res) => {
    try {
        const {empId} = req.body
        const empData = await empModel.findById(empId)
        await empModel.findByIdAndUpdate(empId,{available: !empData.available })
        res.json({success:true,message:"Availability Changed"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export {changeAvailability}