import React, { useState } from "react"

export default () => {
    const [counter, setCounter] = useState(0)
    return (
        <>
            <p>You clicked Button Hooks {counter} times</p>
            <button onClick={() => setCounter(counter + 1)} style={{ marginRight: 10, color: '#F00' }}>Click me (+) Button Hooks</button>
            <button onClick={() => setCounter(counter - 1)}>Click me (-) Button Hooks</button>
        </>
    )
}