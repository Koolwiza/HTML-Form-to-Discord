const express = require('express')
const Discord = require('discord.js')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const webhook = new Discord.WebhookClient("849754785514782730", "C13AhrESdt771HroRPQ2HCM4RU2MgcvNEFW1CqkUu0XCNAkbq-mUBBWYIymG-udqhQKI")

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({
    json: true
}))

app.post('/form', (req, res) => {
    let mapped = Object.entries(req.body).map(c => {
        return {
            [c[0]]: c[1]
        }
    })
    let mappedString = mapped.map(c => `${Object.keys(c)[0]}\n> ${c[Object.keys(c)[0]]}`)
    webhook.send(mappedString.join("\n"))
    res.send("sent")
})

app.listen(3000, () => {
    console.log(`App listening on http://localhost:3000`)
}) 