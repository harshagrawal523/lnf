const express = require("express");
const lnfControllers = require("../controllers/lnfControllers");
const router = express.Router();
const multer = require("multer");
const lnfDetails = require("../models/lnfModels");
const fs = require("fs");
const { render } = require("express/lib/response");

//image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      console.log("hello");
      cb(null, './uploads');
    },
    filename:(req, file, cb) =>{
      cb(null,file.originalname);
    },
  });
  const uploads = multer({
    storage: storage,
  });

router.get("/", lnfControllers.getlnfDetails);

router.get("/raise",(req,res)=>{
    res.render("add_user");
});

router.post("/raisepost",
    uploads.single('link'),
    lnfControllers.postlnfDetails
)

  module.exports = router;