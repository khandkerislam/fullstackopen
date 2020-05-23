import React from 'react'
import Country from './Country'

const Result = ({input,countries}) => {

    const matches = countries.filter(country => country.name.toLowerCase().includes(input))

    if(input === ''){
        return(<p>{input}</p>)
    }
    else if(matches.length>10){
        return(
            <p>Too many matches, try again</p>
        )
    }
    else if(matches.length === 1){
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

export default Result