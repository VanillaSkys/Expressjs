const passport = require('passport');
const passportJwt = require('passport-jwt');
const db = require('./database.config');
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;

passport.use(
    new StrategyJwt(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.jwt_secret,
        },
        function (jwtPayload, done) {
            try {
                return db.query(`SELECT id FROM admin WHERE id = ${jwtPayload.id}`, (err,result) => {
                    if(err) throw err;
                    else {
                        return done(null, result);
                    }
                })
            } catch (error) {
                throw error;
            }
        }
    )
);