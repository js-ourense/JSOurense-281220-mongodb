const listas = require('../listas')

module.exports.post = (req, res, next) =>

  req.mongo.collection('compras')
    .insertOne({
      pais: listas.random('paises')[0],
      ciudad: listas.random('ciudades')[0],
      nombreCliente: listas.random('nombres')[0],
      pizzas: listas.random('pizzas').slice(0,3),
      precio: Math.floor(Math.random() * 100),
      fecha: new Date()
    })
    .then(result => res.send(result))