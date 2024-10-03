import express from 'express'
import { addEmp, loginAdmin } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'

const adminRouter = express.Router()

adminRouter.post('/add-emp',authAdmin, upload.single('image'), addEmp)
adminRouter.post('/login', loginAdmin)

export default adminRouter