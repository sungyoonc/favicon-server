const path = require('path')
let express = require('express')
let app = express()
let psl = require('psl')
// let router = express.Router()
// let favicon = require('serve-favicon')

// app.use('/:faviconname', (req, res, next) => {
//   if (req.params.faviconname.indexOf('\0') !== -1) {
//     res.status(404).json({})
//   }
//   let rootDirectory = path.join(__dirname, 'svg')
//   let filename = req.params.faviconname + '.svg'
//   let filedir = path.join(rootDirectory, filename)
//   if (filedir.indexOf(rootDirectory) !== 0) {
//     res.status(404).json({})
//   }
//   favicon(filedir)
//   next()
// })

app.use(express.static(path.join(__dirname, 'favicon')))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {

  if (req.hostname.indexOf('\0') !== -1) {
    res.status(404).json({})
  }
  let parsed = psl.parse(req.hostname)
  if (parsed.subdomain === null) {
    return res.status(200).render('favicon', { filename: 'burger'})
  }
  let hostname = parsed.subdomain.split('.')
  res.status(200).render('favicon', { filename: hostname[hostname.length - 1]})
})

var port = process.env.PORT || 8080 // 사용할 포트 번호를 port 변수에 넣습니다.
app.listen(port, function () {
  console.log('INFO:: Server started at http://localhost:' + port)
})
