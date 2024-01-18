import Link from 'next/link'
import React from 'react'

const DrinksList = ({drinks}) => {
  return (
    <ul>
        {drinks.map((drink)=>{
            return (
                <li key={drink.idDrink}>
                    <Link href={`/drinks/${drink.idDrink}`} className='text-xl font-medium'>
                        {drink.strDrink}
                    </Link>
                </li>
            )
        })}
    </ul>
  )
}

export default DrinksList