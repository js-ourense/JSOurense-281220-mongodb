module.exports.get = (req, res, next) =>
    
    req.mongo.collection('compras').aggregate([
       {
        $group: {
          _id: '$pais', // $pais
          total: { $sum: '$precio' },
          media_precio: { $avg: '$precio' },
          precio_minimo: { $min: '$precio' },
          precio_maximo: { $max: '$precio' }
        }
      },
      // $match
      {
        $project: {
          _id: 1,
          total: 1
        }
      }
    ])
    .toArray((error, resultado) => res.send(resultado))