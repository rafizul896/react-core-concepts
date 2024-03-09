import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleRemove = () => {
        const newCount = count - 1;
        setCount(newCount)
    }
    return (
        <div style={{
            border: '1px solid #00d8ff',
            padding: '10px 0',
            marginBottom: '10px',
            borderRadius: '10px'
        }}>
            <h2>Count : {count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remo</button>
        </div>
    )
}