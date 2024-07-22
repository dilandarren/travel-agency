import express, { text } from 'express';

const router = express.Router();


router.get('/', (req, res) => { //req - lo que enviamos : res - lo que express nos responde
    res.render('inicio');
}); 

router.get('/nosotros', (req, res) => { //req - lo que enviamos : res - lo que express nos responde
    const viajes = 'Viaje a Alemania';

    res.render('nosotros', {
        viajes
    });
}); 


export default router;

