"use client";
import React from 'react'
import { useState, useEffect } from 'react'

const RandomJoke = () => {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        async function fetchJoke() {
            const res = await fetch('https://api.chucknorris.io/jokes/random');
            const data = await res.json();
            setJoke(data.value);
        }
        fetchJoke();
    }, []);
  return (
    <div>
        <h1>random joke</h1>
        <p>dgdvyv hdbdbd hbdhbduh dbub hbudbub hbduud uhbdudb uibddui ubudubsduusyyds dugud usbdu isdusd issguguigfwuigiasgbfuef suscubh hcuf shcs i di</p>
        <p>{joke}</p>
    </div>
  )
}

export default RandomJoke 