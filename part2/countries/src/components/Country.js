import React, {useState} from 'react'
import Weather from './Weather'

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
                <Weather capital={country.capital}/>
            </>
        )
    }
}

export default Country
