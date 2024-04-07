import express from "express";
import UserRepository from "../../../interface-adapters/repositories/UserRepository.js";
import UserController from "../../../interface-adapters/controllers/UserController.js";

const router = express.Router();
const userRepository = new UserRepository();
const userController = new UserController(userRepository);

router.post('/', userController.createUser.bind(userController));
router.get('/', userController.getAllUsers.bind(userController));
router.get('/:id', userController.getUserById.bind(userController));
router.put('/:id', userController.updateUser.bind(userController));
router.delete('/:id', userController.deleteUser.bind(userController));

export default router;