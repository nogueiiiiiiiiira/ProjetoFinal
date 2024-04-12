import Menu from "../components/Menu";
import React from 'react';
import LoadingButton from '../components/LoandingButton'; 
import style from  './Emprestimos.module.css'

export const Emprestimos = () => {
    return(
        <div className={style.container}>
        <div className={style.menu}>
          <Menu />
      </div>
  <h2>Register a Loan</h2>
  <br />
  <form className={style.inputs}>
    <input name='title' id='title' type="text" placeholder="type book's full title: " required />
    <input name='cpf' id='cpf' type="text" placeholder="type reader's cpf: " required />    
    <input name='date' id='date' type="date" placeholder="type loan's date: " required />
    <br />
    <input className={style.button} type="submit" value="Loan" />
  </form>
</div>
    )
}