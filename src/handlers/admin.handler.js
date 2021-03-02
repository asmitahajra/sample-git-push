const adminHandler= (req, res)=> {
  const {user}= req;
  if(user&& user.role== 'admin') {
      res.status(200).json({message: 'Success!'});
  }
  else
  {
      res.status(403).json({message: "Not authorized"});
  }
};

module.exports={adminHandler};