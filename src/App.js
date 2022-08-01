import React, { Component } from 'react'
import Home from './compenent/Home';
import { Routes,Route} from 'react-router-dom';
import './App.css'







class App extends Component {
  render() {                                                                     
    return (                                                             
                                                                          
      //Creat link with the page                                          //         AddUsers  Update
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      
        
      
    )
  }
}

export default App;

