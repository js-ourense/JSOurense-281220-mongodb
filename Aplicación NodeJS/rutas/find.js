module.exports.get = (req, res, next) =>

  req.mongo.collection('compras')
    .find(
      { 'pizzas.puntos': { $gt: 2 } } // query
    )
    .toArray((err, result) => res.send(result))