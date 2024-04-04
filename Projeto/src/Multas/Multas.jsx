import style from './Multas.module.css'
import Menu from './components/Menu'
import React from 'react';
import LoadingButton from './components/LoandingButton'; 

export const Multas = () => {
    return(
        <div className={style.container}>
            <div className={style.menu} >
            <Menu />
            </div>
            <div className={style.wrapMultas}>
                <h2>Pagar Multa</h2>
            <div className={style.wrapInputsMultas}>
                <input placeholder='Digite o CPF do leitor(a):' type="text" name="multasCPFLeitor" id="multasCPFLeitor" />
                <input placeholder='Digite o ID do livro:' type="text" name="multasIDLivro" id="multasIDLivro" />
                <br />
                <h2>OU</h2>
                <input placeholder='Digite o número do empréstimo: ' type="text" name="numeroEmprestimoMul" id="numeroEmprestimoMul" />
            </div>
            <br />
            <div className={style.wrapButtonsMultas}>
            <LoadingButton />
            </div>

        </div>
        </div>
    )
}