import express from 'express';

//En el archivo de rutas creo una variable encargada de definir todos los endpoints de mi API

//Por cada servicio que ofrece mi API debo tener un endpoint o ruta.

export let rutas = express.Router();

//Defino las rutas para cada servicio de mi API

//Registro de una habitación
rutas.post('/api/hotel/habitaciones', function (req, res) {
    res.send('Estamos registrando una habitación');
})

//Buscar las habitaciones que tengo registradas
rutas.get('/api/hotel/habitaciones', function (req, res) {
    res.send('Estamos buscando habitaciones');
})

//Buscar por ID una habitación
rutas.get('/api/hotel/habitaciones/:id', function (req, res) {
    res.send('Estamos buscando una habitación por id');
})

//Editar los datos de una habitación
rutas.put('/api/hotel/habitaciones/:id', function (req, res) {
    res.send('Estamos editando una habitación');
})