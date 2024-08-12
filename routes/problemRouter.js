
const express = require("express");
const { getProblems, getProblemById } = require("../controllers/problem");

const router = express.Router();

//routes

//get all problems
router.get("/problems", getProblems);
router.get("/problems/:id", getProblemById);

module.exports = router;