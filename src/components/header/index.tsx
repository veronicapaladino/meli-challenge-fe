import React from 'react';
import { useState, } from 'react';
import { useNavigate } from "react-router-dom";
import fetchGetItems from '../../api/search-item';

 const Header = (): JSX.Element => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value[0] !== ' '){
      setInput(e.target.value);
    }
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput(input.trim());

    if(input.length >= 1){
        fetchGetItems(input).then((res) => {
        navigate(`/items?search=${input}`)
      }).catch((error) => {
        console.log(error);
      })
    }
  }

  const goHome = () => {
    setInput('');
    navigate('/')
  }

  return (
    <div className="header">
      <div className="header__container">
        <img
          src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.16.1/mercadolibre/logo__large_plus.png"
          onClick={goHome}
          className="logo-img"
        />
        <form className="header__input-container" onSubmit={handleSearch} >
          <input
            type="text"
            className="header__input-header"
            placeholder="Nunca dejes de buscar"
            onChange={e => handleInputChange(e)}
            value={input}
          />
          <button type="submit" className="search-button">
            <img
              className="search-icon"
              src="https://icongr.am/feather/search.svg?size=20&color=#666"
            />
          </button>
        </form>
      </div>
    </div>
    )
}

export default Header;
