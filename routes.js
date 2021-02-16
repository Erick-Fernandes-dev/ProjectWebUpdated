const express = require('express')
const teachers = require('./teacher')

const routes = express.Router()

routes.get('/', function (req, res) {
    return res.redirect("teacher")
})

routes.get('/teacher', function (req, res) {
    return res.render('teacher/teacher')
})

routes.get('/alunos', function (req, res){ 
    return res.send("Não há alunos cadastrados no momento")
})

routes.post("/teacher", teachers.post)

module.exports = routes