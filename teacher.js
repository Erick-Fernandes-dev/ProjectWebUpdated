const fs = require('fs')
const data = require('./data.json')

exports.post = function(req, res) {

    const keys = Object.keys(req.body)

    for (let key of keys) {
        if (req.body[key] == "") {
            return res.send("Please, fil in all fields")
        }
    }

    let {avatar_url, nome, data_de_nascimento, grau_de_escolaridade, tipo_de_aula, tipo_de_atuação} = req.body

    const id = Number(data.teacher.length + 1)
    const dataInicio = Date.now()
    data_de_nascimento = Date.now(data_de_nascimento)


    data.teacher.push({
        id,
        avatar_url,
        nome,
        data_de_nascimento,
        grau_de_escolaridade,
        tipo_de_aula,
        tipo_de_atuação,
        dataInicio
    })


    fs.writeFileSync("data.json", JSON.stringify(data, null, 4), function(err) {
        if (err) return res.send("Error in create file")

        return res.redirect("/teacher")
    })

    // return res.send(req.body)

}