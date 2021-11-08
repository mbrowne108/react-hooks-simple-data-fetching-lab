import React, { useState, useEffect } from "react"

function App() {
    const [randomDog, setRandomDog] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => {
                setRandomDog(data.message)
                setIsLoaded(true)
            })
    }, [])

    return (
        isLoaded ? <img alt="A Random Dog" src={randomDog}></img> : <p>Loading...</p>
    )
}

export default App;
