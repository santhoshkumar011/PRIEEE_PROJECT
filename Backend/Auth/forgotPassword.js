async function forgotPassword(req,res) {
    try{
        
    }
    catch(err){
        console.log(err)
        res.status(200).json({
            err:"internal error..."
        })
    }
}

module.exports = {
    forgotPassword
}