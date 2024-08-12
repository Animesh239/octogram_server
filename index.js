//express server
const express = require("express");
const morgan = require("morgan");
const mysqlpool = require("./config/db");
const router = require("./routes/problemRouter");
const app = express();
const port = 8000;

app.use(express.json());
app.use(morgan("dev"));

app.use('/api', router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mysqlpool.query("SELECT 1").then(()=>{
    console.log("Connected to MySQL");
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(err => console.log(err));
