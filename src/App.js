import React from 'react';
import './App.css';
import TimeList from './components/TimeList'
import FormList from './components/FormTime'

// import firebase from './firebase'
// firebase.firestore().collection('times').add({
//   title: 'tin dep try',
//   time_second: 69
// })

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <TimeList />
          <FormList />
      </header>
    </div>
  );
}

export default App;
