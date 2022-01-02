require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
app.use(express.static('build'))
const Person = require('./models/person')

app.use(cors())

morgan.token('body', (req) => {
    return JSON.stringify(req.body)
})

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.get('/api/people', (req, res) => {
    Person.find({}).then(people => {
        res.json(people)
    })
})

app.get('/info', (req, res, next) => {
    Person.find({}).then(people => {
        if (people) {
            info = `Phonebook has info for ${people.length} people<br>${new Date()}`
            res.send(info)
        } else {
            res.status(404).end()
        }  
      })
      .catch(error => next(error))
})

app.get('/api/people/:id', (req, res, next) => {
    Person.findById(req.params.id)
    .then(person => {
        if (person) {
            res.json(person)
        } else {
            res.status(404).end()
        }
    })
    .catch(error => next(error))
})

app.delete('/api/people/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/people', (req, res, next) => {
    const body = req.body
    const name = req.body.name.toLowerCase()
    
    if (body.name === undefined || body.number === undefined) {
        return res.status(400).json({error: 'name or number missing'})
    } 
    /*else if (Person.find({}).then(people => {
        if (people.find(person => person.name.toLowerCase() === name))
        return res.status(400).json({error: 'name must be unique'})
    
    })) {
        return res.status(400).json({error: 'name must be unique'})
    }*/
    

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save().then(savedPerson => {
        res.json(savedPerson)
    })
    .catch(error => next(error))
})

app.put('/api/people/:id', (req, res, next) => {
    const body = req.body
  
    const person = {
      name: body.name,
      number: body.number
    }
  
    Person.findByIdAndUpdate(req.params.id, person, { new: true })
      .then(updatedPerson => {
        res.json(updatedPerson)
      })
      .catch(error => next(error))
  })

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }
  
    next(error)
  }

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
