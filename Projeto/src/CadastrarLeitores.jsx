import React from 'react';
import style from './CadastrarLeitores.module.css'
import Menu from "./components/Menu";
import LoadingButton from './components/LoandingButton';


export const CadastrarLeitores = () => {
    return(
        <div className={style.container} >
            <div className={style.menu}>
                <Menu />
            </div>
            <div className={style.wrapLeitores} >
                <div>
                    <h2>Cadastrar Leitores</h2>
                </div>
                <input name="nomeLeitor" id="nomeLeitor" type="text" placeholder='Nome do(a) leitor(a): '/>
                <input name='sobrenomeLeitor' id="sobrenomeLeitor" type="text" placeholder='Sobrenome do(a) leitor(a): '/>
                <input name="telefoneLeitor" id="telefoneLeitor" type="text" placeholder='Telefone do(a) leitor(a): '/>
                <input name='cpfLeitor' id="cpfLeitor" type="text" placeholder='CPF do(a) leitor(a): '/>
                <input name="emailLeitor" id="emailLeitor" type="text" placeholder='Email do(a) leitor(a): '/>
                <br />
                <div className={style.wrapButtonLeitores} >
                    <LoadingButton />
                </div>
            </div>
        </div>
    )
}