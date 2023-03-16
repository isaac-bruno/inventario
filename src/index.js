const app = require('./app')

app.listen(app.get('port'), () => {
  const port = app.get('port')
  console.log(`Servidor iniciado en http://localhost:${port}`)
})
