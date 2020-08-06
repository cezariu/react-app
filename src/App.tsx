import React from 'react';
import './App.css';
import Header from "./components/header-component/header-component.component"
import Body from './components/body-component/body-component.component';


function App() {
  
  let myData: number = 0;

  return (
    <div className="App">
      <Header data={myData}></Header>
      <h1>Hello react app</h1>
      <Body data={myData}></Body>
    </div>
  );
}

export default App;
