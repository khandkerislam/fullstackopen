import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas' }
    ])
    const [newName, setNewname ] = useState('')

    useEffect(() => {
        console.log('effect');
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                console.log(response)
            })
    },[])

    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <div>
                    name: <input />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
        </div>
    )
}

export default App