import React from 'react'
const Persons = ({input,persons}) => {

    const matches = persons.filter(person => person.name.includes(input))
        return(
            <>
                <ul>
                    {matches.map(match=><p key={match.id}>{match.name}</p>)}
                </ul>
            </>
        )
}

export default Persons;