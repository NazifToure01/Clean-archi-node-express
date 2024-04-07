async function GetAllUsers(userRepository) {
    return await userRepository.findAll();
}

export default GetAllUsers;