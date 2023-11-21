const {
  crearUser,
  getUserById,
  loginUser,
  updateStatusUserById,
  updateUserById,
} = require('../controllers/user.controller');
const { updateOne } = require('../models/user.model');

const router = require('express').Router();

// crear un usuario
router.post('/crear', crearUser);

//hacer login
router.post('/login', loginUser);

//obtener un usuario por su id

router.get('/getbyid/:iduser', getUserById);

//actualizando estatus del usuario
router.put('/update-status/:iduser', updateStatusUserById);

//actualizando email del usuario
router.put('/update/:iduser', updateUserById);

//obtener el listado de todos los usuarios

module.exports = router;
