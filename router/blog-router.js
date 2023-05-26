import express from 'express'
const blogRouter = express.Router()

blogRouter.get('/', (req, res) => {
    res.render('blog', {
        title: 'Blog Posts',
        layout: 'templates/body',
        active: 'blog'
    })
})

export default blogRouter