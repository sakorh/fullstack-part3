const { application } = require('express')
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

app.use(cors())

morgan.token('body', (req) => {
    return JSON.stringify(req.body)
})

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))



let people = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramow",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
]

app.get('/api/people', (req, res) => {
    res.json(people)
})

app.get('/info', (req, res) => {
    const info = `Phonebook has info for ${people.length} people<br>${new Date()}`
    res.send(info)
})

app.get('/api/people/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = people.find(person => person.id === id)

    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/people/:id', (req, res) => {
    const id = Number(req.params.id)
    people = people.filter(person => person.id !== id)
  
    res.status(204).end()
})

const generateId = () => {
    const randomId = Math.floor(Math.random() * (9910) + 10)

    return randomId
  }

app.post('/api/people', (req, res) => {
    const body = req.body
    const name = req.body.name.toLowerCase()
    
    if (!body.name || !body.number) {
        return res.status(400).json({
            error: 'name or number missing'
        })
    } else if (people.find(person => person.name.toLowerCase() === name)) {
        return res.status(400).json({
            error: 'name must be unique'
        })

    }

    const person = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    people = people.concat(person)

    res.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
