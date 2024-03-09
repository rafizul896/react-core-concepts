import Friend from "./Friend"
import { useEffect, useState } from "react"
export default function Friends(){
    const [friends, setFriends] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return (
        <div style={{
            border: '2px solid #00d8ff',
            padding: '10px 30px',
            borderRadius: '10px'
        }}>
            <h3>Friends : {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}