const listas = require('../listas')

module.exports.post = (req, res, next) =>

  req.mongo.collection('compras')
    .insertMany(listas.nombres.map(nombreCliente => {
      return {
        pais: listas.random('paises')[0],
        ciudad: listas.random('ciudades')[0],
        nombreCliente,
        pizzas: listas.random('pizzas').slice(0,3).map(pizza => {
          return { pizza, puntos: Math.floor(Math.random() * 10) }
        }),
        precio: Math.floor(Math.random() * 100),
        fecha: new Date()
      }
    }))
    .then(result => res.send(result))