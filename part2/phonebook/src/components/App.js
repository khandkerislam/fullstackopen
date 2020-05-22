import React, {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas',id:1 }
    ])
    const [newName, setNewName ] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            id: persons.length + 1
        }

        persons.some(person => person.name === personObject.name) ? alert(`${personObject.name} already exists in the phonebook`):setPersons(persons.concat(personObject))
        setNewName('')
    }

    const handleNameChange = (event) => {
        const input = event.target.value
        setNewName(input);
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name:
                    <input
                        value={newName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person) =>
                <p key={person.id}>{person.name}</p>
            )}
        </div>
    )
}

export default App