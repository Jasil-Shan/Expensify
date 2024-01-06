import express from 'express'
import { login, signup } from '../controller/authController.js'
import { verifyUser } from '../middleware/verifyUser.js'
import { addBudget, addExpense, deleteExpense, getExpenses } from '../controller/expenseController.js'


const router = express.Router()



router.post('/signup',signup)
router.post('/login',login)

router.use(verifyUser)
router.post('/addExpense',addExpense)
router.post('/deleteExpense/:id',deleteExpense)
router.post('/addBudget',addBudget)

router.get('/getExpense',getExpenses)


export default router
