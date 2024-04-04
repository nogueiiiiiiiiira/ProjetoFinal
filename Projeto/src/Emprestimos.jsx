import Menu from "./components/Menu";
import React from 'react';
import LoadingButton from './components/LoandingButton'; 
import style from  './Emprestimos.module.css'

export const Emprestimos = () => {
    return(
        <div className={style.container}>
            <div className={style.menu}>
            <Menu />
            </div>
            <div className={style.wrapEmprestimo}>
                <div>
                    <h2>Efetuar Empréstimo</h2>
                </div>
                <input placeholder="Digite o CPF do leitor(a): " type="text" name="cpfLeitorEmprestimo" id="cpfLeitorEmprestimo"/>
                <input placeholder="Digite o ID do livro: " type="text" name="idLivroEmprestimo" id="idLivroEmprestimo" />
                <input type="date" name="dataEmprestimo" id="dataEmprestimo"/>
                <br />
                <div className={style.wrapButtonEmprestimo} >
                    <LoadingButton />
                </div>
            </div>
        </div>
    )
}