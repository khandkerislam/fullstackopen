import React, {useState} from 'react'
import Result from './Result'

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
    const handleFilterChange = (event) => {
        console.log(newFilter);
        const input = event.target.value
        setNewFilter(input);
    }
    const handleNameChange = (event) => {
        const input = event.target.value
        setNewName(input);
    }
    const handleNumberChange = (event) => {
        const input = event.target.value
        setNewNumber(input);
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    filter with shown with:
                    <input
                        value={newFilter}
                        onChange={handleFilterChange}
                    />
                </div>
                <div>
                    name:
                    <input
                        value={newName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    number:
                    <input
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <Result input={newFilter} persons={persons} />
        </div>

    )
}

export default App