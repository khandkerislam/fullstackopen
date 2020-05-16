import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Country = ({country,toggle}) => {
    const [show, setShow] = useState(toggle);

    const handleClick = (show) => {
        setShow(!show)
    }

    if(!show){
        return(
            <>
                <h1>{country.name}</h1>
                <button onClick={()=>handleClick(show)}>Show Country</button>
            </>
        )
    }
    else if(show){
        return(
            <>
                <h1>{country.name}</h1>
                <button onClick={()=>handleClick(show)}>Hide Country</button>
                <p>Capital {country.capital}</p>
                <p>Population {country.population}</p>
                <ul>
                    {country.languages.map((language,index)=><li key={index}>{language.name}</li>)}
                </ul>
                <img src={country.flag} alt="flag" height="200" width="200"/>
            </>
        )
    }
}

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
        const match = countries[0];
        return(
            <Country country={match} toggle={1} />
        )
    }
    else if(matches.length<=10){
        return(
            <>
                <ul>
                    {matches.map(match=><li key={match.numericCode}><Country country={match} toggle={0}/></li>)}
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