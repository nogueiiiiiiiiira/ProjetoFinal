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
            <div className={style.wrapDevolucoes}>
                <div>
                    <h2>Efetuar Devolução</h2>
                </div>
                <input placeholder="Digite o CPF do leitor(a): " type="text" name="cpfLeitorEmprestimo" id="cpfLeitorEmprestimo"/>
                <input placeholder="Digite o ID do livro: " type="text" name="idLivroEmprestimo" id="idLivroEmprestimo" />
                <input type="date" name="dataDev" id="dataDev"/>
                <br />
                <h2>OU</h2>
                <input placeholder='Digite o número do empréstimo: ' type="text" name="numeroEmprestimoDev" id="numeroEmprestimoDev" />
                <div className={style.wrapButtonDevolucoes}>
                <LoadingButton />
            </div>
            </div>
        </div>
    )
}