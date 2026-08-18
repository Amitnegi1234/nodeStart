const express=require('express')
const cartController=require('../controllers/cartController')
const router=express.Router();

router.get('/:id',cartController.getCart)
router.post('/:id',cartController.addCart)

module.exports=router