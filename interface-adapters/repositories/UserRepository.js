import UserModel from "../../frameworks-and-drivers/db/models/UserModel.js";


class UserRepository {
    async add(user) {
        return user.save();
    }

    async findAll() {
        return UserModel.find();
    }

    async findById(userId) {
        return UserModel.findById(userId);
    }

    async update(userId, updateData) {
        return UserModel.findByIdAndUpdate(userId, updateData, {new: true});
    }

    async delete(userId) {
        return UserModel.findByIdAndDelete(userId);
    }
}

export default UserRepository
