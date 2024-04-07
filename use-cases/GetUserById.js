async function GetUserById(userRepository, userId) {
    return await userRepository.findById(userId);
}

export default GetUserById;