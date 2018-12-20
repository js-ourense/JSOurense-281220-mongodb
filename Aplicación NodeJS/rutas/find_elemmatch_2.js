module.exports.get = (req, res, next) =>

  req.mongo.collection('compras')
    .find({},
      {
        pizzas: {
          $elemMatch: { pizza: 'Napolitana' }
        }
      })
    .toArray((err, result) => res.send(result))