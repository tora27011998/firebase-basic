import React, {useState} from 'react'
import firebase from '../firebase'

export default () => {
    const [title, setTitle] = useState('')
    const [timeSecond, setTimeSecond] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault();
        firebase.firestore().collection('times').add({
            title,
            time_second: parseInt(timeSecond)
        }).then(() => {
            setTitle('')
            setTimeSecond('')
        })

    }

    return <div>
    <form onSubmit={(e) => onSubmitHandler(e)}>
        <h3>Add time entry</h3>
        <div>
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
            <label>Time</label>
            <input type="number" value={timeSecond} onChange={(e) => setTimeSecond(e.target.value)} />
        </div>
        <button type='submit'>Add Time Entry</button>
    </form>
</div>
} 