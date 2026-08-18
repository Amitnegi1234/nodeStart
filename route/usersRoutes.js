const express=require('express')
const cartController=require('../controllers/cartController')
const router=express.Router();

router.get('/',cartController.getUsers)
router.post('/',cartController.addUser)
router.get('/:id',cartController.getUserById)

module.exports=router