// app.js
// require("dotenv").config();
const express = require("express");
const app = express();
// const mysql = require("mysql2");
const path = require("path");
const bodyParser = require("body-parser");
// const bcrypt = require("bcrypt");
// const session = require("express-session");
// const flash = require("express-flash");
// MySQL Connection
// const connection = mysql.createPool({
//   connectionLimit: 10,
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
// });

// Connect to MySQL
// Use connection pool
// Test the connection pool
// connection.getConnection((err, conn) => {
//   if (err) {
//     console.error("Error connecting to database:", err);
//     return;
//   }

//   console.log("Connected to database.");

//   // Release the connection
//   conn.release();
// });
// Set EJS as the view engine
app.set("view engine", "ejs");

// Set the public directory for static files
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Set up session and flash:
// app.use(
//   session({
//     secret: process.env.SECRET_SESSION,
//     resave: false,
//     saveUninitialized: false,
//   })
// );
 

// app.use(flash());

// Define a route to render the index page
app.get("/", (req, res) => {
  res.render("index");
});

app.get('/About', (req, res) => {
  res.render('About');
});
 
app.get('/Search', (req, res) => {
  res.render('Search');
});
 
 

 

 

 

 
  // Use connection pool to query data
//   connection.getConnection((err, conn) => {
//     if (err) {
//       console.error("Error acquiring connection from pool:", err);
//       res.status(500).send("Error acquiring connection from pool");
//       return;
//     }

//     // Query to fetch data from MySQL
//     conn.query("SELECT * FROM store", (err, rows) => {
//       // Release the connection back to the pool
//       conn.release();

//       if (err) {
//         console.error("Error fetching data: " + err.stack);
//         res.status(500).send("Error fetching data");
//         return;
//       }

//       // Render the view and pass the fetched data
//       res.render("store", { store: rows });
//     });
//   });
 

 

 

//signUp Form
 
//get user from DB for login
 

// Login form


// Route to add details in feeds form


// Route for fetch from the database feeds Form





//port number setup
const PORT = process.env.PORT || 1234;
// Close the connection pool when the server is shutting down
const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Event handler for when the server is shutting down
server.on("close", () => {
  // Close the connection pool
  pool.end((err) => {
    if (err) {
      console.error("Error closing connection pool:", err);
      return;
    }
    console.log("Connection pool closed.");
  });
});
