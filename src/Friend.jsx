export default function Friend({friend}){
    const {name, email} = friend;
    return (
        <div style={{
            border: "1px solid #00d8ff",
            marginTop: '10px',
            borderRadius: '10px',
            padding: '20px 0'
        }}>
            <h4>Name : {name}</h4>
            <h5>Email : {email}</h5>
        </div>
    )
}