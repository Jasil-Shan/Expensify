import userModel from "../model/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { createToken } from "../utils/createToken.js"


export async function signup(req, res) {
    try {
        const { name, email, password } = req.body
        const existUser = await userModel.findOne({ email })

        if (existUser) return res.json({ status: false, message: 'OOps!...User already exists' })
        const hashPassword = bcrypt.hashSync(password, 12)

        const user = await userModel.create({ email,name, password: hashPassword })
       
        return res.status(201).json({ status: true, message: "User Created Successfully" })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ status: false, message: "Internal Server Error" });
    }
}


export async function login(req, res) {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({ email })
        if (!user) return res.json({ status: false, message: "No user found" })

        const auth = bcrypt.compareSync(password, user.password)
        if (!auth) return res.json({ status: false, message: " Invalid Email or Password " })

        const token = createToken(user._id)
        
        if(!token) return res.status(500).json({ status: false, message: "Internal Server Error" });

        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
            sameSite: "None",
            secure:true
        })
        return res.status(200).json({ status: true, message: "Login Succes" })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ status: false, message: "Internal Server Error" });
    }
}


export async function auth(req, res) {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401).json({ isAuthenticated: false, user: null });
        }
        const decoded = jwt.verify(token, process.env.TOKEN_KEY)

        const user = await userModel.findById(decoded.id)

        return res.status(200).json({ isAuthenticated: true, user })
    } catch (error) {
        console.error('Token verification failed:', error.message);
        return res.status(401).json({ isAuthenticated: false, user: null });
    }
}


export async function logout(req, res) {
    try {
        res.clearCookie('token');
        return res.json({success:true,message:'User Logged out'})
    } catch (error) {
        console.error(error.message);
    }
}