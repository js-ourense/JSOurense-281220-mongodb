module.exports.get = (req, res, next) =>

  req.mongo.collection('compras')
    .updateOne(
      { ciudad: "Capital" },
      { ciudad: "Ourense" }
    )
    .toArray((err, result) => res.send(result))