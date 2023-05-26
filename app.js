import express from 'express'
import expressEjsLayouts from 'express-ejs-layouts'
import cors from 'cors'
import blogRouter from './router/blog-router.js'
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.use(expressEjsLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use('/blog', blogRouter)

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
        layout: 'templates/body',
        active: 'home'
    })
})

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`)
})