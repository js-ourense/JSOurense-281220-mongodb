module.exports.get = (req, res, next) => {

  let map = function() {
    this.pizzas.map(p => {
      emit(`${this.pais}`, p.pizza)
      emit(`${this.pais}-${this.ciudad}`, p.pizza)
    })
  }

  let reduce = function(key, values) {
    let sumaDePizasPorSabor = {}
    values.map(k => {
      sumaDePizasPorSabor[k] ?
        sumaDePizasPorSabor[k]++ : 
        sumaDePizasPorSabor[k] = 1
    }) 
    return sumaDePizasPorSabor
  }

  let options = { out: {inline: 1} }

  req.mongo.collection('compras').mapReduce(map, reduce, options)
    .then(r => res.send(r))
}