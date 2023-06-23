const router = require('express').Router();

const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

// set up GET and POST  /api/users
router
    .route('/')
    .get(getUsers)
    .post(createUser);


// set up GET by id, PUT, and DELETE /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .delete(deleteUser)
    .put(updateUser);

// POST and DELETE /api/users/:id/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;