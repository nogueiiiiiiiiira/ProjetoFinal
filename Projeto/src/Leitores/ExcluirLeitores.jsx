import React from 'react';
import Menu from '../components/Menu';
import style from './ExcluirLeitores.module.css';

export const ExcluirLeitores = () => {
    return(
        <div className={style.container}>
        <div className={style.menu}>
          <Menu />
      </div>
  <h2>Delete a Reader</h2>
  <br />
  <form className={style.inputs}>
    <input name='cpf' id='cpf' type="text" placeholder="type reader's cpf: " required />
    <h3>OR</h3>
    <input name='email' id='email' type="text" placeholder="type reader's email: " required />
    <h3>OR</h3>
    <input name='phone' id='phone' type="text" placeholder="type reader's phone: " required />
    <br />
    <input className={style.button} type="submit" value="Delete" />
  </form>
</div>
    )
}