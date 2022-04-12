const lnfDetails = require("../models/lnfModels");
const foundDetails = require("../models/foundModels");
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

  exports.deletelnfDetail = async (req, res) => {
    const id = req.params.details_id;
    lnfDetails.findOneAndDelete(id, (err, result) => {
      if (result.link != "") {
        try {
          fs.unlinkSync("./uploads/" + result.link);
        } catch (err) {
          console.log(err);
        }
      }
      if (err) {
        res.json({ message: err.message });
      } else {
        res.redirect(`/lnf`);
      }
    });
  };



  // found details

  exports.getfoundDetails = async (req, res) => {
    try {
    const details = await foundDetails.find();
    
    return res.render("foundindex", { details });
    } catch (error) {
      console.log(error.message);
    }
  };


  exports.addfoundForm = async (req, res) => {
    try {
      return res.render("addfound");
    } catch (error) {
      console.log(error.message);
    }
  };

  exports.postfoundDetails = async (req, res) => {
    try {
      var { title, date, location,submittedat, description,link} = req.body;
  
      const image = req.file ? req.file.filename : link;
     
      if (!image) {
        console.log("error", "Please attach your pdf!!");
        return res.redirect("/lnf/found");
      }
      //console.log(path);
      const newfoundDetail = await new foundDetails({
        title, 
        date, 
        location, 
        submittedat, 
        description,
        image, 
      }).save();
      if (!newfoundDetail) {
        
        res.redirect("/lnf/found");
        
      }
     
      return res.redirect("/lnf");
    } catch (error) {
      console.log(error.message);
    }
  };


  exports.deletefoundDetail = async (req, res) => {
    const id = req.params.details_id;
    foundDetails.findOneAndDelete(id, (err, result) => {
      if (result.link != "") {
        try {
          fs.unlinkSync("./uploads/" + result.link);
        } catch (err) {
          console.log(err);
        }
      }
      if (err) {
        res.json({ message: err.message });
      } else {
        res.redirect(`/lnf`);
      }
    });
  };

