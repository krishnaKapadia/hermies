import { ExtractJwt, Strategy } from "passport-jwt";
const User = require("../Database/Models/User.ts");

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: 'secret'
};

module.exports = passport => {
	passport.use(new Strategy(opts, (req, res) => {
		User.findById(req.id).then((user) => {
			if(user) {
				return res(null, user);
			}
			return res(null, false);
		}).catch(err => {
			console.log(err);
		});
	}));
};