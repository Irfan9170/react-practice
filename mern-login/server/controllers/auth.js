const User = require('../models/User.js')

exports.register=async (req,res)=>{
    const {email,password}=req.body;
    try{
     const user = await User.create({
         email,
         password
     });

     res.status(201).json({
        suceess : true,
        user
     })
    } catch(err){
res.status(400).json({
    suceess:"failed",
    error : err.message
})
    }
}

exports.login=async (req,res)=>{
    const { email, password } = req.body;

  // Check if email and password is provided
  if (!email || !password) {
    return res.status(400).json({
        "success": "failed",
        "err" :"Please provide email and password"
    })
  }

  try {
    
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return res.status(400).json({
            "success": "failed",
            "err" :"Please provide email and password"
        })
    }

   
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
        return res.status(400).json({
            "success": "failed",
            "err" :"Invalid"
        })
    }
       res.status(200).json({
           success:true,
           token:"hkfkd"
       })
   
  } catch (err) {
   res.status(404).json({
       suceess:"failed",
       error:err.message
   })
  }
}

exports.forgetPassword=(req,res)=>{
    res.send("Forget route")
}

exports.resetPassword=(req,res)=>{
    res.send("Rset route")
}