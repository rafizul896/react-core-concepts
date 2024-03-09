import { useState } from "react"

export default function Player() {
    const [count, statePlayer] = useState(11)
    const addPlayer = () => {
        const newTotalPlayer = count + 1;
        statePlayer(newTotalPlayer)
    }
    const removePlayer = () => {
        const newTotalPlayer = count - 1;
        statePlayer(newTotalPlayer)
    }
    return (
        <div style={{
            border: '1px solid #00d8ff',
            borderRadius: '10px',
            padding: '10px'
        }}>
            <h3>Total Player : {count}</h3>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px'
            }}>
                <button onClick={addPlayer}>Add player</button>
                <button onClick={removePlayer}>Remove player</button>
            </div>
        </div>
    )
}