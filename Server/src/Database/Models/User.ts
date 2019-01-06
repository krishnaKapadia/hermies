const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Model/Schema for Client Document in mongo
 */

// Create schema that data will require as a minimum
const UserSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	fullName: String,
	email: {
		type: String,
		required: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	password: {
		type: String,
		required: true
	}
});

// Mongoose methods
UserSchema.pre("save", function (next) {
	const fullName = `${this.firstName.trim()} ${this.lastName.trim()}`;
	this.fullName = fullName;

	next();
});

// Create a model based off the schema
const User = mongoose.model('user', UserSchema);
module.exports = User;