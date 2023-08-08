//setup
const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const port = 19000; 
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

app.use(express.json());
app.use(cors());

//for hashing passwords
const saltRounds = 2;

//connect to mysql workbench
const connection = mysql.createConnection({
    host: '34.27.144.22',
    user: 'root',
    password: '%%56Hu3#PB:zdy%D',
    database: 'ti_workshop_andrea',
    port: 3306
});

//connect to database
connection.connect((error) => {
    if(error){
        console.log('Failed to Connect to Database', error);
    } else {
        console.log('Connected to the Database')
    }
});

// post request for registration
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {

        //generates userID 
        const userID = uuidv4();

        // hashes the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // adds new user into the database
        const query = 'INSERT INTO users (userID, username, password) VALUES (?, ?, ?)';
        const values = [userID, username, hashedPassword]
        connection.query(query, values, (error, results) => {
            if (error) {
                console.log('Error during registration:', error);
                return res.status(500).json({ error: 'An error occurred while registering the user.' });
            }

            console.log('User registered successfully:', results);
            res.status(201).json({ message: 'User registered successfully.' });
        });
    } catch (error) {
        console.log('Error during password hashing:', error);
        res.status(500).json({ error: 'An error occurred while registering the user.' });
    }
});


//post request for a login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM users WHERE username = ?';
    connection.query(query, [username], async (error, results) => {
        if (error) {
            console.log('Error during login:', error);
            return res.status(500).json({ error: 'An error occurred while attempting to log in.' });
        }

        if (results.length === 0) {
            return res.status(401).json({ error: 'User not found.' });
        }

        // compares password from database to password typed
        const user = results[0];
        try {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                res.json({ message: 'Login successful.' });
            } else {
                res.status(401).json({ error: 'Invalid password.' });
            }
        } catch (error) {
            console.log('Error during password comparison:', error);
            res.status(500).json({ error: 'An error occurred while attempting to log in.' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
