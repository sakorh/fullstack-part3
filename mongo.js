const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://salla:${password}@cluster0.20mwm.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, uniqueCaseInsensitive: true },
  number: { type: String, required: true }
})

personSchema.plugin(uniqueValidator)

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 5) {

    const person = new Person({
        name: `${process.argv[3]}`,
        number: `${process.argv[4]}`
    })

    person.save().then(result => {
        console.log(`added ${person.name} number ${person.number} to phonebook`)
        mongoose.connection.close()
      })
} else {
    console.log('phonebook:')
    Person
        .find({})
        .then(people => {
            people.forEach(person => {
                console.log(person.name, person.number)
            })
        mongoose.connection.close()
  })


}
