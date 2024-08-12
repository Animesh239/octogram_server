const mysqlpool = require("../config/db");

const postAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const data = await mysqlpool.query("SELECT * FROM admin WHERE email = ? AND password = ?", [email, password]);

        if (data[0].length === 0) {
            return res.status(404).send("Invalid credentials");
        }

        res.status(200).json(data[0]);

    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
}

const addProblem = async (req, res) => {
    const { category , question, answer } = req.body;

    try {
        const data = await mysqlpool.query("INSERT INTO problems (categories, question, answer) VALUES (?, ?, ?)", [category, question, answer]);
        console.log(data)
        res.status(200).send("Problem added successfully");

    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
}

const updateProblem = async (req, res) => {
    const { category , question, answer, id } = req.body;

    try {
        const data = await mysqlpool.query("UPDATE problems SET categories = ?, question = ?, answer = ? WHERE id = ?", [category, question, answer, id]);
        console.log(data)
        res.status(200).send("Problem updated successfully");

    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
}

const deleteProblem = async (req, res) => {
    const { id } = req.body;

    try {
        const data = await mysqlpool.query("DELETE FROM problems WHERE id = ?", [id]);
        console.log(data)
        res.status(200).send("Problem deleted successfully");

    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
}


module.exports = { postAdmin, addProblem, updateProblem, deleteProblem };