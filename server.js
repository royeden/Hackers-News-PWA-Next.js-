const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/:mode', (req, res) => {
    const actualPage = '/'

    const queryParams = {
      mode: req.params.mode
    }


    app.render(req, res, actualPage, queryParams)
  })

  server.get('/:mode/:page', (req, res) => {
    const actualPage = '/'

    const queryParams = {
      mode: req.params.mode,
      page: req.params.mode
    }


    app.render(req, res, actualPage, queryParams)
  })

  server.get('/about/:mode', (req, res) => {
    const actualPage = '/about'

    const queryParams = {
      mode: req.params.mode,
    }


    app.render(req, res, actualPage, queryParams)
  })

  server.get('/reference/:mode', (req, res) => {
    const actualPage = '/reference'

    const queryParams = {
      mode: req.params.mode,
    }


    app.render(req, res, actualPage, queryParams)
  })

  server.get('/:page/:mode/:id', (req, res) => {
    const actualPage = `/${req.params.page}`

    const queryParams = {
      mode: req.params.mode,
      id: req.params.id
    }


    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
