import React from 'react'

const FunFactPage = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/random', {
       next: { revalidate: 10 } // This will revalidate the data every 10 seconds
    })

    const fact = await res.json();
  return (
    <div>
        <h1>fun fact</h1>
        <p>loree njf  nfjfnuhini fif</p>
        <p className='text-4xl text-yellow-700'>{fact.value}</p>
    </div>
  )
}

export default FunFactPage