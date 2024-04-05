import React, { useState } from 'react';
import style from './Login.module.css';
import Menu from '../components/Menu';

export default function Login() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleLoginSubmit = (event) => {
    const username = event.target.login.value;
    const password = event.target.senha.value;
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      setIsFormVisible(false);
    } else {
      alert('login ou senha inválidas. Por favor, tente novamente.');
    }
    event.preventDefault();
  };

  return (
    <div className={style.container}>
      {isAuthenticated && 
        <div className={style.menu}>
          <Menu />
        </div>}
      {isFormVisible && (
        <div className={style.wrapLogin}>
            <h2>Entrar</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className={style.wrapInputsLogin} >
            <input name='login' id='login' type="text" placeholder='Login: ' />
            <input name='senha' id='senha' type="password" placeholder='Senha: ' />
            </div>
            <br />
            <div className={style.wrapButtonLogin}>
              <button type="submit">Entrar</button>
              <br />
              <p><a href="/PrimeiroAcesso">Não tem uma conta? Cadastre-se!</a></p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}