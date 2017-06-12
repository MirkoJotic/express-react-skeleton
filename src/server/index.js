import path from 'path'
import { Server } from 'http'
import Express from 'express'
// React stuff for server side rendering

const app = new Express()
const server = new Server(app)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//static assets folder
app.use(Express.static(path.join(__dirname, '..', 'client', 'static')))

app.get('*', (req, res) => {
    return res.render('index')
})

const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'production'
server.listen(port, err => {
    if(err) {
        return console.log(err)
    }
    console.info(`Server running on http://localhost:${port} [${env}]`)
})