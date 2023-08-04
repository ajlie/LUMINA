const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const port = 5000; 


const app = express();

app.use(cors());
app.use(bodyParser.json());

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

// Endpoint to save data to the database
app.post('/save', (req, res) => {
  console.log('Received data:', req.body);
  res.json({ message: 'Data saved successfully' });
});


app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:5000`);
});
