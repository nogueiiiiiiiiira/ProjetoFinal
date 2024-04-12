import Menu from "../components/Menu";
import style from  './Devolucoes.module.css'
import React from 'react';
import LoadingButton from '../components/LoandingButton'; 

export const Devolucoes = () => {
    return(
        <div className={style.container}>
        <div className={style.menu}>
          <Menu />
      </div>
  <h2>Make a Return</h2>
  <br />
  <form className={style.inputs}>
    <input name='title' id='title' type="text" placeholder="type book's full title: " required />
    <input name='cpf' id='cpf' type="text" placeholder="type reader's cpf: " required />
    <h3>OR</h3>
    <input name='id' id='id' type="text" placeholder="type loan's id: " required />
    <br />
    <input className={style.button} type="submit" value="Return" />
  </form>
</div>
    )
}