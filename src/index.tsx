import React from "react"
import { createRoot } from "react-dom/client"

function App() {
    return (
        <div>
            <h1>Hello world!</h1>

            <p>Welcome, Typescript!</p>
        </div>
    )
}

// @ts-ignore
const container = document.getElementById("root") as HTMLElement
const root = createRoot(container)
root.render(<App />)
