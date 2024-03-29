import expenseModel from "../model/expenseModel.js";
import userModel from "../model/userModel.js";

export async function addExpense(req, res) {
    try {
      const { amount, category, date } = req.body;
  
      const _id = req.userId;
  
      const user = await expenseModel.create({
        amount,
        category,
        date,
        user: _id,
      });
  
      return res
        .status(201)
        .json({ status: true, message: "Expense added Successfully" });
    } catch (error) {
      console.error(error);
    }
  }
  
  export async function getExpenses(req, res) {
    try {
      const expenses = await expenseModel.find({ user: req.userId }).populate('user')
      return res.status(200).json({ status: true, expenses });
    } catch (error) {
      console.error(error);
    }
  }
  
  export async function addBudget(req, res) {
    try {
      const _id = req.userId;
      const { budget } = req.body;
      const result = await userModel.findByIdAndUpdate(_id, {
        $set: { monthlyBudget: budget },
      });
      return res.status(200).json({ status: true, message:'Budget added' ,result});
    } catch (error) {
      console.error(error);
    }
  }
  
  export async function deleteExpense(req, res) {
    try {
      const { id } = req.params;
      await expenseModel.findByIdAndDelete(id);
      res.status(200).json({ status: true, message: "Expense Deleted" });
    } catch (error) {
      console.error(error);
    }
  }