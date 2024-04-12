import React from 'react';
import style from './CadastrarBibliotecario.module.css';
import Menu from '../components/Menu';
import LoadingButton from '../components/LoandingButton'; 

export const CadastrarBibliotecarios = () => {
    return(
        <div className={style.container}>
              <div className={style.menu}>
                <Menu />
            </div>
        <h2>Register a Librarian</h2>
        <br />
        <form className={style.inputs}>
          <input name='name' id='name' type="text" placeholder="type librarian's full name: " required />
          <input name='cpf' id='cpf' type="text" placeholder="type librarian's cpf: " required />
          <input name='email' id='email' type="text" placeholder="type librarian's email: " required />
          <input name='password' id='password' type="password" placeholder="type librarian's password: " required />
          <input name='password' id='password' type="password" placeholder="repeat librarian's password: " required />
          <br />
          <input className={style.button} type="submit" value="Register" />
        </form>
      </div>
    )
}