import './App.css';
import React, {Component} from 'react';
import StudentDB from './Components/Login';
import './bootstrap.css';

class App extends Component{
  render(){
  return (
    <div className="App">
        <StudentDB></StudentDB>
    </div> 
  );
}
}

export default App;
