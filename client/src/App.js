import React, { Component } from 'react';
// import Login from './pages/LogIn';
import ManagerPortal from './pages/Manager'
import './App.css';

const styles = {
  mp: {
    marginTop: '100%', 
    background: 'black'
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Login/> */}
        <ManagerPortal style={styles.mp}/>
      </div>
    );
  }
}

export default App;
