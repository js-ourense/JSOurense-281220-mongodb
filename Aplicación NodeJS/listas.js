/**
 * Listas
 */
const nombres   = [ 'Alberto', 'María', 'Jose', 'Ana', 'Julián', 'Eva' ]
const pizzas    = [ 'Pepperoni', '4 quesos', 'Jamón', 'Hawaiana', 'Pollo', 
                    'Jamón y panceta', 'Napolitana', 'Huevo y tocino',
                    'Margarita', 'Salmón ahumado y queso crema' ]
const paises    = [ 'España', 'Francia', 'Italia', 'Alemania', 'UK' ]
const ciudades  = [ 'Capital', 'a', 'b', 'c', 'd' ]

/**
 * Dado el nombre de una lista, devuelve sus valores en orden aleatorio
 */
module.exports.random = (lista) => {
  if (lista === 'paises')   return paises.sort(() => Math.random() - Math.random())
  if (lista === 'ciudades') return ciudades.sort(() => Math.random() - Math.random())
  if (lista === 'pizzas')   return pizzas.sort(() => Math.random() - Math.random())
  if (lista === 'nombres')  return nombres.sort(() => Math.random() - Math.random())
}

/**
 * Exports
 */
module.exports.nombres = nombres
module.exports.pizzas = pizzas
module.exports.paises = paises
module.exports.ciudades = ciudades
