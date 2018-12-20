module.exports.get = (req, res, next) =>

  req.mongo.collection('compras')
    .find({
      pizzas: {
        $elemMatch: { pizza: 'Napolitana', puntos: { $gte: 5 } }
      }
    })
    .toArray((err, result) => res.send(result))