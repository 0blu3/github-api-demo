const express = require('express')
const app = express()
const requestProxy = require('express-request-proxy') //request expres proxy
const PORT = process.env.PORT || 4000

app.use(express.static('./public')) //do this

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.get('/github/*', proxyGithub); //do this

function proxyGithub(req, res) => {
  console.log('Routing a Github request for', req.params[0]);
  (requestProxy({
    url: `https://api.github.com/${req.params[0]}`
    headers:{ Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(req, res);
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
