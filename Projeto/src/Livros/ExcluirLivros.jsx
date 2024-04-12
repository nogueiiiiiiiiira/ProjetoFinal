import React from 'react';
import style from './ExcluirLivros.module.css';
import Menu from '../components/Menu';

export const ExcluirLivros = () => {
    return(
        <div className={style.container}>
        <div className={style.menu}>
          <Menu />
      </div>
  <h2>Delete a Book</h2>
  <br />
  <form className={style.inputs}>
    <input name='title' id='title' type="text" placeholder="type book's title: " required />
    <h3>AND</h3>
    <input name='author' id='author' type="text" placeholder="type book's author: " required />
    <h3>AND</h3>
    <input name='category' id='category' type="text" placeholder="type book's category: " required />
    <br />
    <input className={style.button} type="submit" value="Delete" />
  </form>
</div>
    )
}