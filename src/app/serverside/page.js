import React from 'react'

const page = async () => {
    //fetch data from an API
    const res = await fetch('https://api.chucknorris.io/jokes/random', {
        cache: 'no-store' // This ensures that the data is always fresh and not cached
    })
    //convert the response to JSON
    const joke = await res.json()
  return (
    <div>
    <h1>Random Joke</h1>
    <p>Heres a random joke for you:</p>
    <div className='text-5xl text-red-500'>{joke.value}</div>
    </div>
  )
}

export default page