/**
 * Cargar módulos
 */
const fs = require('fs'),
      app = require('express')(),
      MongoClient = require('mongodb').MongoClient

/**
 * Saludar
 */
app.get('/', (req, res) => res.send('🦄 funciona!'))

/**
 * Programa principal
 */
MongoClient.connect(process.env.MONGO_URL, { // Connectar a MongoDB
  useNewUrlParser: true
})
  .then((client) => {
    // Exponer la base de datos a las rutas de express
    app.use((req, res, next) => {req.mongo = client.db('js_ourense'); next() })
  
    // Cargar las rutas de Express de forma dinámica
    fs.readdir(`${__dirname}/rutas`, (err, files) => {
      files.map(file => {
        const controller = require(`${__dirname}/rutas/${file}`)
        const endpoint = `/${file.replace('.js', '')}`
        if (controller.get) app.get(endpoint, controller.get)
        if (controller.post) app.post(endpoint, controller.post)
      })
    })

    // Escuchar peticiones al servidor
    app.listen(process.env.PORT || 3000)
  })