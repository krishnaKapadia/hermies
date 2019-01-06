import { connect } from "mongoose";
// import * as UserRoutes from './Routes/User';
import * as bodyParser from "body-parser";
const passport = require("passport");
import { CONFIG } from "./Database/index.ts";
const express = require("express");

const UserRoutes = require('./Routes/User.ts');
const app = express();
const PORT = process.env.PORT || 5000;

//Middle wares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./Routes/index.ts')(passport);

connect(CONFIG.DB_PATH, { useNewUrlParser: true }).then(
		() => { console.log('Database connected'); },
		(err) => { console.log(`Error: ${err}`); }
);

// Include external route functions
app.use('/api/users', UserRoutes);

//Route functions
app.get('/api/tasks', (req, res) => {
	res.send("check");
});

// Init
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});