import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Result from './Result'

const App = () => {

    const [input, setInput] = useState("")
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })
    },[])

    const getInput = (event) => {
        setInput(event.target.value)
    }

    return(
        <div>
            <h2>Countries</h2>
            <form>
                <div>
                    Find Countries:
                        <input
                            type="text"
                            onChange={event=> getInput(event)}
                        />
                </div>
            </form>
            <Result input={input} countries={countries} />
        </div>
    )
}


export default App