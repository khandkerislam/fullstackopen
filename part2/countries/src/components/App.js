import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Results = ({input,countries}) => {
    const matches = countries.filter(country => country.name.toLowerCase().includes(input))
    if(input == ''){
        return(<p>{input}</p>)
    }
    else if(matches.length>10){
        return(
            <p>Too many matches, try again</p>
        )
    }
    else if(matches.length==1){
        const match = matches[0];
        return(
            <>
                <h1>{match.name}</h1>
                <p>Capital {match.capital}</p>
                <p>Population {match.population}</p>
                <ul>
                    {match.languages.map((language,index)=><li key={index}>{language.name}</li>)}
                </ul>
                <img src={match.flag} alt="flag" height="200" width="200"/>
            </>
        )
    }
    else if(matches.length<=10){
        return(
            <>
                <ul>
                    {matches.map(match=><li key={match.numericCode}>{match.name}</li>)}
                </ul>
            </>
        )
    }
}

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
            <Results input={input} countries={countries} />
        </div>
    )
}


export default App