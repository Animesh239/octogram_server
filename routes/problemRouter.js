
const express = require("express");
const { getProblems, getProblemById } = require("../controllers/problem");
const { postAdmin } = require("../controllers/admin");

const router = express.Router();

//routes

//get all problems
router.get("/problems", getProblems);
router.get("/problems/:id", getProblemById);

router.post('/admin/login', postAdmin);

module.exports = router;