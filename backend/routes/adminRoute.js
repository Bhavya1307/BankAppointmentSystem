import express from 'express'
import { addEmp, allEmps, appointmentsAdmin, loginAdmin } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'
import { changeAvailability } from '../controllers/empController.js'

const adminRouter = express.Router()

adminRouter.post('/add-emp',authAdmin, upload.single('image'), addEmp)
adminRouter.post('/login', loginAdmin)
adminRouter.post('/all-emps', authAdmin, allEmps)
adminRouter.post('/change-availability', authAdmin, changeAvailability)
adminRouter.get('/appointments', authAdmin, appointmentsAdmin)

export default adminRouter