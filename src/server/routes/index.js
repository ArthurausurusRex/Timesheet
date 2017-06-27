var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  getToken: function(req){
    return (req.headers.authorization)
}
 });
var passport = require('passport');

var ctrlLog = require('../controllers/login.controller');
var ctrlReg = require('../controllers/register.controller');
var classicControler = require('../controllers/classic.controller');
//test
router.post('/', function(req, res) {
    res.json({ message: req.body});   
});

// autentification
router.post('/authenticate', ctrlLog.login);

//users
router.post('/users',auth, ctrlReg.create);
router.get('/users',auth, classicControler.listUsers);

//userId

router.get('/users/:userId',auth,classicControler.getUser);
router.put('/users/:userId',auth,classicControler.updateUser);
router.delete('/users/:userId',auth,classicControler.deleteUser);

// users/:UserRole

router.get('/users/role/:role',auth, classicControler.listUsersByRole)



module.exports = router;