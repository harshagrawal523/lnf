const lnfDetails = require("../models/lnfModels");
const fs = require("fs");

exports.getlnfDetails = async (req, res) => {
    try {
    const details = await lnfDetails.find();
    
    return res.render("index", { details });
    } catch (error) {
      console.log(error.message);
    }
};


  exports.addlnfForm = async (req, res) => {
    try {
      return res.render("add_user");
    } catch (error) {
      console.log(error.message);
    }
  };

  exports.postlnfDetails = async (req, res) => {
    try {
      var { title, date, category, location, phonenumber, description,link} = req.body;
  
      const image = req.file ? req.file.filename : link;
     
      if (!image) {
        console.log("error", "Please attach your pdf!!");
        return res.redirect("/lnf/raise");
      }
      //console.log(path);
      const newlnfDetail = await new lnfDetails({
        title, 
        date, 
        category, 
        location, 
        phonenumber, 
        description,
        image, 
      }).save();
      if (!newlnfDetail) {
        
        res.redirect("/lnf/raise");
        
      }
     
      return res.redirect("/lnf");
    } catch (error) {
      console.log(error.message);
    }
  };