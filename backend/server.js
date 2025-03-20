const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");


const app = express();
app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
    host: "localhost",
    user: "root",  // Default XAMPP user
    password: "",  // Default XAMPP password is empty
    database: "vaani_db",
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to MySQL database!");
});

app.post("/login", (req, res) => {
   
    console.log(req.body)

    const { username, password } = req.body;
    db.query("SELECT * FROM users WHERE username = ?", [username], (err, results) => {
        console.log("-----------------------------------" + password)
        
        if (err) {
            return res.status(500).json({ error: "Database error" });
        }
        if (results.length === 0) {
            return res.status(401).json({ error: "User not found" });
        }
        const user = results[0];
        console.log("-----------------------------------" + user.password)
        if (password === user.password) {  
            return res.json({ message: "Login successful", user });
        } else {
            return res.status(401).json({ error: "Invalid password" });
        }
    });
});
app.post("/register", (req, res) => {
    console.log("------------------------------------1")
    const { username, password } = req.body;
    
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(500).json({ error: "Error hashing password" });
        }
        db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashedPassword], (err, result) => {
            if (err) {
                return res.status(500).json({ error: "Database error" });
            }
            res.json({ message: "User registered successfully" });
        });
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
