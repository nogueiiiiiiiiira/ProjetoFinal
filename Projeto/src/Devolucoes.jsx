import Menu from "./components/Menu";
import style from  './Devolucoes.module.css'
import React from 'react';
import LoadingButton from './components/LoandingButton'; 

export const Devolucoes = () => {
    return(
        <div className={style.container}>
            <div className={style.menu}>
            <Menu />
            </div>
            <div className={style.wrapDevolucoes}>
                <div>
                    <h2>Efetuar Devolução</h2>
                </div>
                <input placeholder="CPF do leitor(a): " type="text" name="cpfLeitorEmprestimo" id="cpfLeitorEmprestimo"/>
                <input placeholder="ID do livro: " type="text" name="idLivroEmprestimo" id="idLivroEmprestimo" />
                <input type="date" name="dataEmprestimo" id="dataEmprestimo"/>
                <br />
            <div className={style.wrapButtonDevolucoes}>
                <LoadingButton />
            </div>
            </div>
        </div>
    )
}