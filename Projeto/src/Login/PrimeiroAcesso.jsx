import style from './PrimeiroAcesso.module.css'
import React from 'react';

export const PrimeiroAcesso = () => {
    return(
        <div className={style.body}>
           <div className={style.container}>
            <h2>Sign up to Continue</h2>
            <br />
            <form className={style.inputs}>
              <input name='nomeBibliotecarioPA' id='nomeBibliotecarioPA' type="text" placeholder='type your full name: '/>
              <input name='login' id='login' type="text" placeholder="type your-email@gmail.com: " required />
              <input name='senha' id='senha' type="password" placeholder="type your password: " required />
              <input name='senha' id='senha' type="password" placeholder="repeat your password: " required />
              <br />
              <br />
              <input className={style.button} type="submit" value="Sign up" />
            </form>
            <br />
            <p><a className={style.firstAcess} href="/">Already have an account? Sign In!</a></p>
          </div>
      </div>
    )
}


