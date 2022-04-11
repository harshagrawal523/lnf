const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

const lnfRoutes = require("./routes/lnfRoutes");

mongoose.connect('mongodb+srv://Harsh:harsh1234@cluster0.bkld1.mongodb.net/lnf?retryWrites=true&w=majority',{useNewUrlParser:true})
.then(()=>console.log('connected to db'))
.catch((err)=>console.log(err))

app.set('view engine','ejs');

app.use("/lnf", lnfRoutes);




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
  

