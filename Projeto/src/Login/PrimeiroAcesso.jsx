import style from './PrimeiroAcesso.module.css'
import React from 'react';
import LoadingButton from '../components/LoandingButton'; 

export const PrimeiroAcesso = () => {
    return(
        <div className={style.container}>
            <div className={style.wrapBibliotecarios}>
                <div>
                    <h2>Cadastrar-se</h2>
                </div>
                <input name='nomeBibliotecarioPA' id='nomeBibliotecarioPA' type="text" placeholder='Digite o nome: '/>
                <input name='sobrenomeBibliotecarioPA' id='sobrenomeBibliotecarioPA' type="text" placeholder='Digite o sobrenome: '/>
                <input name='cpfBibliotecarioPA' id='cpfBibliotecarioPA' type="text" placeholder='Digite o CPF: '/>
                <input name='emailBibliotecarioPA' id='emailBibliotecarioPA' type="text" placeholder='Digite o email:'/>
                <br />
                <div className={style.wrapButtonBibliotecarios}>
                    <LoadingButton />
                    <button><a href="/">Voltar</a></button>
                </div>
            </div>
        </div>
    )
}


