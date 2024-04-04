import React from 'react';
import style from './CadastrarBibliotecario.module.css';
import Menu from './components/Menu';
import LoadingButton from './components/LoandingButton'; 

export const CadastrarBibliotecarios = () => {
    return(
        <div className={style.container}>
            <div className={style.menu}>
                <Menu />
            </div>
            <div className={style.wrapBibliotecarios}>
                <div>
                    <h2>Cadastrar Bibliotecários</h2>
                </div>
                <input name='nomeBibliotecario' id='nomeBibliotecario' type="text" placeholder='Nome do(a) Bibliotecário(a): '/>
                <input name='sobrenomeBibliotecario' id='sobrenomeBibliotecario' type="text" placeholder='Sobrenome do(a) Bibliotecário(a): '/>
                <input name='cpfBibliotecario' id='cpfBibliotecario' type="text" placeholder='CPF do(a) Bibliotecário(a): '/>
                <input name='emailBibliotecario' id='emailBibliotecario' type="text" placeholder='Email do(a) Bibliotecário(a): '/>
                <br />
                <div className={style.wrapButtonBibliotecarios}>
                    <LoadingButton />
                </div>
            </div>
        </div>
    )
}