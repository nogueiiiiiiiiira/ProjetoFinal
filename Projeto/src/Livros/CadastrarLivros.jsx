import React from 'react';
import style from './CadastrarLivros.module.css';
import Menu from '../components/Menu';
import LoadingButton from '../components/LoandingButton'; 

export const CadastrarLivros = () => {
    return (
        <div className={style.container}>
        <div className={style.menu}>
          <Menu />
      </div>
  <h2>Register a Book</h2>
  <br />
  <form className={style.inputs}>
    <input name='title' id='title' type="text" placeholder="type book's full title: " required />
    <input name='author' id='author' type="text" placeholder="type book's author: " required />
    <select name="category" id="category">
        <option value="">Select the category:</option>
        <option value="ficcao">Ficção</option>
        <option value="nao-ficcao">Não Ficção</option>
        <option value="aventura">Aventura</option>
        <option value="romance">Romance</option>
    </select>
    <br />
    <input className={style.button} type="submit" value="Register" />
  </form>
</div>
    )
}