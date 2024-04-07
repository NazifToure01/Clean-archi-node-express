
import GetAllUsers  from '../../use-cases/GetAllUsers.js'
import GetUserById  from '../../use-cases/GetUserById.js'
import UpdateUser  from '../../use-cases/UpdateUser.js'
import DeleteUser from '../../use-cases/DeleteUser.js'
import CreateUser from "../../use-cases/CreateUser.js";

class UserController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async createUser(req, res) {
        try {
            const user = await CreateUser(this.userRepository, req.body);
            res.status(201).send(user);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await GetAllUsers(this.userRepository);
            res.send(users);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    async getUserById(req, res) {
        try {
            const user = await GetUserById(this.userRepository, req.params.id);
            if (!user) {
                return res.status(404).send({ message: 'User not found' });
            }
            res.send(user);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    async updateUser(req, res) {
        try {
            const updatedUser = await UpdateUser(this.userRepository, req.params.id, req.body);
            if (!updatedUser) {
                return res.status(404).send({ message: 'User not found' });
            }
            res.send(updatedUser);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    async deleteUser(req, res) {
        try {
            const result = await DeleteUser(this.userRepository, req.params.id);
            if (!result) {
                return res.status(404).send({ message: 'User not found' });
            }
            res.status(204).send(); // No content to send back
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
}

export default UserController;
