import React from 'react';
import Menu from '../components/Menu';
import style from './ExcluirBibliotecarios.module.css';

export const ExcluirBibliotecarios = () => {
    return(
        <div className={style.container}>
        <div className={style.menu}>
          <Menu />
      </div>
  <h2>Delete a Librarian</h2>
  <br />
  <form className={style.inputs}>
    <input name='cpf' id='cpf' type="text" placeholder="type librarian's cpf: " required />
    <h3>OR</h3>
    <input name='email' id='email' type="text" placeholder="type librarian's email: " required />
    <br />
    <input className={style.button} type="submit" value="Delete" />
  </form>
</div>
    )
}