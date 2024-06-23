import express from 'express';
import { createConnection } from 'mysql';
import dotenv from 'dotenv';
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8080;

const connection = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

dotenv.config();
console.log(process.env.DB_HOST); // Should print the value of DB_HOST

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to database');
        return;
    }
    console.log('Connected to database');
});     


app.get('/randomSong', (req, res) => {
    connection.query('SELECT name, lyrics FROM songs s join lyrics l on l.song_id = s.id  ORDER BY RAND() LIMIT 1', (err, results) => {
        if (err) {
            console.log('Error fetching lyrics');
            res.status(500).send('Error fetching lyrics');
            return;
        }
        res.json(results);
    });
}); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })