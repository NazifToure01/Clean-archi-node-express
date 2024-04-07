async function DeleteUser(userRepository, userId) {
    return await userRepository.delete(userId);
}

export default DeleteUser;
