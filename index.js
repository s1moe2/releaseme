const fs = require('fs')
const express = require('express')
const app = express()
const users = ['ping']

const version = fs.readFileSync('./version')
app.use('/', (req, res) => res.status(200).send(version))

app.use('/users', (req, res) => res.status(200).send(users))

app.use('/animals', (req, res) => res.status(200).send({}))
app.use('/facilities', (req, res) => res.statusStatus(204))

app.use((err, req, res, next) => res.status(500).json({ message: 'internal error' }))

app.listen(5000, () => console.log('listening'))