const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// set up GET and POST  /api/users
router
    .route('/')
    .get(getUsers)
    .post(createUser);


// set up GET by id, PUT, and DELETE /api/users/:id
router
    .route('/:id')
    .get(getSingleUser)
    .delete(deleteUser)
    .put(updateUser);

// POST and DELETE /api/users/:id/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;