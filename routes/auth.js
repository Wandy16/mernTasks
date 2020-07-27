//rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const auth = require('../middleware/auth');
const authController = require('../controllers/authController');

//autentica un usuario/ inicia sesion
//  /api/auth
router.post('/',
    [
        check('email','Agrega un email válido').isEmail(),
        check('password','El password debe ser mínimo de 6 caracteres').isLength({min: 6})
    ],
    authController.autenticarUsuario
);

//obtiene el usuario autenticado
router.get('/',
    auth,
    authController.usuarioAutenticado
);

module.exports = router;