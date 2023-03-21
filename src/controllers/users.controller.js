const userController = {}

userController.getUsers = (req, res) => res.json({'Users': []})

userController.createUser = (req, res) => res.send('User created')

userController.getUser = (req, res) => res.send('User')

userController.updateUser = (req, res) => res.send('User updated')

userController.deleteUser = (req, res) => res.send('User deleted')

module.exports = userController