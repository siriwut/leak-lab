const express = require('express')
const app = express()

app.use(express.static('./public', { extensions: ['html'] }))

app.get('/', (req, res) => {
  res.render('index.html')
})

app.listen(5000, () => {
  console.log('server connected at 5000')
})
