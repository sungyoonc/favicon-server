const path = require('path')
let express = require('express')
let app = express()
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

app.use(express.static(path.join(__dirname, 'svg')))
app.set('view engine', 'ejs')

app.get('/favicon/:filename', (req, res) => {
  if (req.params.filename.indexOf('\0') !== -1) {
    res.status(404).json({})
  }
  res.status(200).render('favicon', { filename: req.params.filename })
})

var port = 4328 // 사용할 포트 번호를 port 변수에 넣습니다.
app.listen(port, function () {
  console.log('INFO:: Server started at http://localhost:' + port)
})
