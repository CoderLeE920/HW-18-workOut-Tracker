const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()

const PORT = process.env.PORT || 3000;

const app = express();