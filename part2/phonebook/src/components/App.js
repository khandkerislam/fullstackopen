import React, {useState} from 'react'
import Persons from './Persons'
import Filter from './Filter'
import PersonForm from './PersonForm'

const App = () => {

    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-12345', id:1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id:2 },
        { name: 'Dan Abramov', number: '12-43-234345', id:3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122',id:4 }
    ])

    const [newName, setNewName ] = useState('')
    const [newNumber, setNewNumber ] = useState('')
    const [newFilter, setNewFilter ] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }

        persons.some(person => person.name === personObject.name) ? alert(`${personObject.name} already exists in the phonebook`):setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
        setNewFilter('')
    }

    const handleNameChange = (event) => {
        const input = event.target.value
        setNewName(input);
    }
    const handleNumberChange = (event) => {
        const input = event.target.value
        setNewNumber(input);
    }
    const handleFilterChange = (event) => {
        console.log(newFilter);
        const input = event.target.value
        setNewFilter(input);
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter value={newFilter} onChange={handleFilterChange} />
            <h3>Add a new</h3>
            <PersonForm name={newName} handleNameChange={handleNameChange} number={newNumber} handleNumberChange={handleNumberChange} addPerson={addPerson}/>
            <h3>Numbers</h3>
            <Persons input={newFilter} persons={persons} />
        </div>
    )
}

export default App;
