const mysqlpool = require("../config/db");

const getProblems = async (req, res) => {
    try {
        const data = await mysqlpool.query("SELECT * FROM problems");

        if (data[0].length === 0) {
            return res.status(404).send("No problems found");
        }

        res.status(200).json(data[0]);

    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
}

const getProblemById = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await mysqlpool.query("SELECT * FROM problems WHERE id = ?", [id]);

        if (data[0].length === 0) {
            return res.status(404).send("Problem not found");
        }

        res.status(200).json(data[0]);

    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = { getProblems, getProblemById };