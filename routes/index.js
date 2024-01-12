var express = require('express');
var router = express.Router();
const userModel = require('./users')
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
router.get('/create',async function(req, res) {
 let userData = await userModel.create({
  username : "dnyaneshwar",
  description : "I am a boy of 27 ",
  nickname : "Tony",
  categories :['engineer','life']
    })
    res.send(userData)
}); 

router.get("/find",async function(req,res){
  let regex = RegExp("^Dnyanesh$","i")
  let user = await userModel.find({username : regex})
  res.send(user)
})

module.exports = router;
