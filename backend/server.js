import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "compiler",
});

app.post("/submit", (req, res) => {
  const { username, language, stdin, code } = req.body;
  console.log(username, language, stdin, code);
  const query = "INSERT INTO snippet (username, language, stdin, code) VALUES (?, ?, ?, ?)";
  const values = [username, language, stdin, code];
  
  db.query(query, values, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })

});

// Endpoint to fetch rows from the snippet table
app.get("/snippets", (req, res) => {
  const query = "SELECT * FROM snippet";

  db.query(query, (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.json(data);
  });
});

app.listen(port, () => {
  console.log("listening on 5000");
});
