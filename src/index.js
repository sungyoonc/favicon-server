const path = require('path')
let express = require('express')
let app = express()

let logger = (req, res, next) => {
  res.on('finish', () => {
    console.info(
      `${new Date().toISOString()}: method=${req.method} path="${
        req.path
      }" host=${req.hostname} fwd=${req.ips} protocol=${req.protocol}`
    )
  })
  next()
}

app.use(express.static(path.join(__dirname, 'favicon')))
app.set('view engine', 'ejs')
app.use(logger)

app.get('/', (req, res) => {
  if (req.hostname.indexOf('\0') !== -1) {
    return res.status(418)
  }
  if (req.subdomains.length === 0) {
    return res.status(200).send(`Use &lt;favicon name&gt;.${req.hostname}`)
  }
  res.status(200).render('favicon', { filename: req.subdomains[0] })
})

app.get('/ping', (req, res) => {
  res.status(204)
})

var port = process.env.PORT || 8080
app.listen(port, function () {
  console.info('Listening at http://localhost:' + port)
})
