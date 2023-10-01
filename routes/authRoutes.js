// rutas o endpoints para manejar el auth

const {Router, request} = require('express');

const router = Router();


router.get('/', (req = request, res = resposne) => {
    res.send('Ruta para la autenticacion');
})


module.exports = router;
