const express = require("express");
const morgan = require("morgan");
const mysqlpool = require("./config/db");
const router = require("./routes/problemRouter");
const cors = require("cors");

const app = express();
const port = 8000;

// Use CORS middleware before defining routes
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST'], 
  credentials: true, 
}));

app.use(express.json());
app.use(morgan("dev"));

app.use('/api', router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mysqlpool.query("SELECT 1")
  .then(() => {
    console.log("Connected to MySQL");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => console.log(err));
