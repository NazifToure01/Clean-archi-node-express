async function UpdateUser(userRepository, userId, updateData) {
    return await userRepository.update(userId, updateData);
}

export default UpdateUser;