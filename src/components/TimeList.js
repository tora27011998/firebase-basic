import React, {useState, useEffect} from 'react'
import firebase from '../firebase'

export default () => {

    const [times, setTimes] = useState([])

    useEffect(() => {
        firebase.firestore().collection('times').onSnapshot((snapshot) => {
            // console.log(snapshot.docs[0].data()); -> {time_second: 69, title: "tin dep try"}
            const newTimes = snapshot.docs.map(item => ({
                id: item.id,
                data: item.data()
            }))
            setTimes(newTimes)
        })
    }, [])

    console.log(times);
    

    return <div>
    <h2>Time List</h2>
    <label>Sort by</label>
    <select>
        <option>Time (fastest)</option>
        <option>Time (slowest)</option>
        <option disabled>-----</option>
        <option>Title (a -> z)</option>
        <option>Title (z -> a)</option>
    </select>
    <ol>
        {times.map((time, index) => <li key={index.toString()}>
            <div>
                {time.data.title} <code>{time.data.time_second}</code>
            </div>
        </li>)}
        
    </ol>
</div>

} 