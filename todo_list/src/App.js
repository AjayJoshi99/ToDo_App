import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo';
import './App.css';

function App() {
  const headStyle = {
    textAlign: "center",
    width: "40%",
    margin: "0 auto",
    borderRadius: "25px",
    boxShadow: "5px 8px 9px rgba(0, 0, 0, 0.2)"
  }
  const customHr ={
    width: "92%", 
    height: "3px",
    backgroundColor: "black", 
    margin: "0 auto",
    opacity:"0.9",
    borderRadius:"10px" 
}
  return (
  <div style={{
      backgroundImage: 'url("/background_todo.jpeg")',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }}>
      <br/>
      <h1 style={headStyle} className='bg-white'>Todo List</h1>
      <br/>
      <br/>
      <hr style ={customHr}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Todo/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;