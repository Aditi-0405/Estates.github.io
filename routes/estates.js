
const Estates = require('../models/estate')
const multer = require('multer');
const mongoose = require('mongoose');
const path= require("path")
const auth= require('../middlewares/authentication')


const storage= multer.diskStorage({
    destination: function( req, file, cb){
        // return cb(null, './public')
        return cb(null, './public/images')
    },
    filename: function(req, file, cb){
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload= multer({storage: storage})








const express= require('express')

const router= express.Router()
const {getAllEstates, createEstate, getVariousEstates, getSingleEstate,addToList, createdBy,findUserProfile, RemoveFromList, deleteEstate }= require('../controllers/estates')

// router.route('/buy').get(getAllEstates)
router.route('/uploads').post(  auth, upload.single('photo'),createEstate)
router.route('/display').get(getVariousEstates)
router.route('/:id').get(getSingleEstate )
router.route('/addToList/:id').post(addToList )
router.route('/createdBy/:id').post(createdBy )
router.route('/findUserProfile/:id').get(findUserProfile)
router.route('/RemoveFromList/:id').post(RemoveFromList)
router.route('/deleteEstate/:id').post(deleteEstate)







module.exports= router


