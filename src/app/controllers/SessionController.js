const { User } = require('../models');

class SessionController {
    async store(req, res, next) {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ message: 'User not Found' });
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ message: 'Incorrect Password' });
        }

        return res.json({
            user,
            token: user.generateToken()
        });
    }
};

module.exports = new SessionController();