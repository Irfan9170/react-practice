const User = require('../models/User.js')
const jwt = require('jsonwebtoken')
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
    const token = jwt.sign({ id: user._id }, "thisismysecreatkeywithiwilhavetoken");
    console.log("token",token);
    res.json({
      token,
      user: {
        id: user._id,
        
      },
    });
   
  } catch (err) {
   res.status(404).json({
       suceess:"failed",
       error:err.message
   })
  }
};
exports.valid =async (req, res) => {
    try {
      const token = req.header("x-auth-token");
      if (!token) return res.json(false);
  
      const verified = jwt.verify(token, "thisismysecreatkeywithiwilhavetoken");
      if (!verified) return res.json(false);
  
      const user = await User.findById(verified.id);
      if (!user) return res.json(false);
  
      return res.json(true);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
exports.forgetPassword=(req,res)=>{
    res.send("Forget route")
}

exports.resetPassword=(req,res)=>{
    res.send("Rset route")
}