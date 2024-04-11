import style from './PrimeiroAcesso.module.css'
import React from 'react';
import LoadingButton from '../components/LoandingButton'; 
import biblio from '../assets/biblio.jpg'

export const PrimeiroAcesso = () => {
    return(
        <div className={style.body}>
           <div className={style.container}>
            <h2>Sign up to Continue</h2>
            <form className={style.inputs}>
              <input name='nomeBibliotecarioPA' id='nomeBibliotecarioPA' type="text" placeholder='type your name: '/>
              <input name='sobrenomeBibliotecarioPA' id='sobrenomeBibliotecarioPA' type="text" placeholder='type your last name: '/>
              <input name='login' id='login' type="text" placeholder="type your-email@gmail.com: " required />
              <input name='senha' id='senha' type="password" placeholder="type your password: " required />
                
              <br />
              <br />
              <input className={style.button} type="submit" value="Sign up" />
            </form>
            <br />
            <p><a className={style.firstAcess} href="/">Go Back</a></p>
            <img src={biblio} alt="Image" className={style.image}/>
          </div>
        
      </div>
    )
}


