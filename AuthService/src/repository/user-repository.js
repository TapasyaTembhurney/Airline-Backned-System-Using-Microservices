const { User } = require("../models/index");

class UserRepository {

    async create(data) {
        try {
            const user = await user.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
        }
    }

    async destroy(userId) {
        try {
            await User.destroy({
                where: {
                   id : userId
                }
            })
            return user;
        }
        catch (error) {
            console.log("Something went wrong on repository layer");
        }
    }
}

module.exports = UserRepository;