 // using this token, we can authenticate the admin, to authenticate the admin we will create one middleware
 //we will use this middleware, for those api where we need admin permissions like adding, removing products, to display the products, etc
 import jwt from "jsonwebtoken"

 const adminAuth=async(req,res,next)=>{//next is call back function
    try {
        const {token}=req.headers//get token from req.headers, whenever we will call api from adminauth, then in headers we will call token, we are getting from admin login
        //check if token is available
        if (!token) {
            return res.json({success:false,message:"Not Authorized. Login Again"})//here we are using return because when we return this response, then this execution will stop here
        }

        //if token is available, then we will decode this token, to decode the token we will use jwt.verify method
        const token_decode=jwt.verify(token,process.env.JWT_SECRET)//pass token we are getting from user and jwt secret, using this we will get a string which will be stored in token_decode variable
        //check if decoded token is = admin email+admin password, then we will be verified and this token will be genuine
        if (token_decode!==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD) {
            return res.json({success:false,message:"Not Authorized. Login Again"})
        }

        //if token is matching in that case we will call our call back function
        next()
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }

 }

 //export this middleware, add middleware in productRoute
 export default adminAuth//what this middleware is doing, when we are sending the token, it will check the token and if token is valid, then it will continue the process of adding/deleting the product