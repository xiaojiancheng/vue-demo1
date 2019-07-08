module.exports = app => {
    const express = require('express')
    const router = express.Router() //子路由
    const Category = require('../../models/Categories')

    router.post('/categories', async (req, res) => {
        console.log(req.body)
        const model = await Category.create(req.body)
        res.send(model)
    })
    
    app.use('admin/api', router)
}