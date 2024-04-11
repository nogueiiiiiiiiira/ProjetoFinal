import React, { useState } from 'react';
import style from './Login.module.css';
import Menu from '../components/Menu';
import biblio from '../assets/biblio.jpg'

export default function Login() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleLoginSubmit = (event) => {
    const username = event.target.login.value;
    const password = event.target.senha.value;
    if (username === 'a' && password === 'a') {
      setIsAuthenticated(true);
      setIsFormVisible(false);
    } else {
      alert('login ou senha inválidas. Por favor, tente novamente.');
    }
    event.preventDefault();
  };

  return (
    <div className={style.body}>
   
      {isAuthenticated && 
        <div className={style.menu}>
          <Menu />
          <h1>Limbo</h1>
        </div>}
      {isFormVisible && (
         <div className={style.container}>
          <h2>Login to Continue</h2>
          <form onSubmit={handleLoginSubmit} className={style.inputs}>
            <input name='login' id='login' type="text" placeholder="type your-email@gmail.com: " required />
            <input name='senha' id='senha' type="password" placeholder="type your password: " required />
            <div className={style.check}>
              <input type="checkbox" id="remember-me"/>
              <label htmlFor="rememberMe">Remember me</label>
              <a href="#" className={style.forgotPassword}>Forgot Password?</a>
            </div>
            <br />
            <br />
            <input className={style.button} type="submit" value="Log In" />
          </form>
          <br />
          <p><a className={style.firstAcess} href="/PrimeiroAcesso">Não tem uma conta? Cadastre-se!</a></p>
          <img src={biblio} alt="Image" className={style.image}/>
        </div>
      )}
    </div>
  );
}