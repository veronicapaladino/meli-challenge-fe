import { useState, } from 'react';
import { useNavigate } from "react-router-dom";
import React from 'react';


export const Header = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value[0] !== ' '){
      setInput(e.target.value);
    }
  }

  const goHome = () => {
    setInput('');
    navigate('/')
  }

  return (
    <div className="header-container">
      <div className="header">
        <img
          src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.16.1/mercadolibre/logo__large_plus.png"
          onClick={goHome}
          className="logo-img"
        />
        <form className="input-container">
          <input
            type="text"
            className="input-header"
            placeholder="Nunca dejes de buscar"
            onChange={e => handleInputChange(e)}
            value={input}
          />
          <button type="submit" className="search-button">
            <img
              className="search-icon"
            />
          </button>
        </form>
      </div>
    </div>
    )
}
