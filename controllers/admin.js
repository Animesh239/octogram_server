const mysqlpool = require("../config/db");

const postAdmin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const data = await mysqlpool.query("SELECT * FROM admin WHERE username = ? AND password = ?", [username, password]);

        if (data[0].length === 0) {
            return res.status(404).send("Invalid credentials");
        }

        res.status(200).json(data[0]);

    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
}