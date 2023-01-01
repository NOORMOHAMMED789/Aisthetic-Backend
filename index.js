const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const connection = require("./database/db.js");
const product_list = require("./product_list.js");
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//!Below API is used for post the data and store data in the MongoDB Altas(Day and Persons)
app.use("/api/v1/user", require("./routes/userRouter"));

//!Below API is used to get the data for the Items array list from the backend(Sambar, Coffee...)
app.use("/api/v1/items", require("./routes/productRouter"));

//!Below API is used for the CRUD operations on the data(GET,POST,PUT,DELETE) through RestAPI.
app.use("/api/v1/order", require("./routes/orderRouter"));

//!This is for the Database Connection.
connection();

//!This for the listening to the server at the port.
app.listen(PORT, () => console.log("server is running on port", PORT));

product_list();
