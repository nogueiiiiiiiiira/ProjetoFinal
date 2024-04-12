import React from 'react';
import style from './CadastrarLeitores.module.css'
import Menu from "../components/Menu";
import LoadingButton from '../components/LoandingButton';


export const CadastrarLeitores = () => {
    return(
        <div className={style.container}>
              <div className={style.menu}>
                <Menu />
            </div>
        <h2>Register a Reader</h2>
        <br />
        <form className={style.inputs}>
          <input name='name' id='name' type="text" placeholder="type reader's full name: " required />
          <input name='cpf' id='cpf' type="text" placeholder="type reader's cpf: " required />
          <input name='phone' id='phone' type="text" placeholder="type reader's phone: " required />
          <input name='email' id='email' type="text" placeholder="type reader's email: " required />
          <br />
          <input className={style.button} type="submit" value="Register" />
        </form>
      </div>
    )
}