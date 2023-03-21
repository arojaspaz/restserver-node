
//desestructurar función propia de express
const { Router } = require("express");
const router = Router();

//funciones exportadas desde el controlador
const {usuariosGet, usuarioPost, userDelete, userPut} = require('../controllers/usuariosController');

router.get('/', usuariosGet);
router.post('/', usuarioPost);
router.put('/:id', userPut)
router.delete('/', userDelete);

module.exports= router;