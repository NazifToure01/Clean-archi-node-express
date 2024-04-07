import UserModel from "../frameworks-and-drivers/db/models/UserModel.js";


async function CreateUser(userRepository, userData) {
    const user = new UserModel(userData);
    return await userRepository.add(user);
}

 export default CreateUser;