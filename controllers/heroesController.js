const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

let heroesController = {
    list: (req, res) => {
        res.send(heroes);
    },
    detail: (req, res) => {
        let heroe = req.params.id;
        let encontrado = false;
        heroes.forEach(function (cadaHeroe) {
            if(cadaHeroe.id == heroe) {
                res.send('Hola, mi nombre es ' + cadaHeroe.nombre + ' y soy ' + cadaHeroe.profesion);
                encontrado = true;
            }
        })
        if (encontrado == false) {
            res.send('No se puede encontrar el heroe requerido');
        }
    },
    bio: (req, res) => {
        let encontrado = false;
        let heroe = req.params.id;
        let parametroResenia = req.params.ok;
        heroes.forEach(function (cadaHeroe) {
            if(cadaHeroe.id == heroe && parametroResenia != 'ok') {
                res.send(cadaHeroe.nombre + ' ' + 'Lamento que no desees saber mas de mi :(');
                encontrado = true;
            }else if (cadaHeroe.id == heroe && parametroResenia == 'ok') {
                res.send(cadaHeroe.nombre + ' ' + cadaHeroe.resenia);
                encontrado = true;
            }
        })
        if (encontrado ==  false) {
            res.send('No encontramos un heroe para mostrarte su biografia');
        }
    }
}

module.exports = heroesController;





    
