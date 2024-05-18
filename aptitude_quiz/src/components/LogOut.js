import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const LogOut = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.prop(false);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container text-center">
     <h3>Are you sure want to Logout ?</h3>
     <br/>
      <button type="submit">Log Out</button>
    </form>
  );
};

export default LogOut;