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
                    <h2>Cadastrar Bibliotecário</h2>
                </div>
                <input name='nomeBibliotecario' id='nomeBibliotecario' type="text" placeholder='Digite o nome: '/>
                <input name='sobrenomeBibliotecario' id='sobrenomeBibliotecario' type="text" placeholder='Digite o sobrenome: '/>
                <input name='cpfBibliotecario' id='cpfBibliotecario' type="text" placeholder='Digite o CPF: '/>
                <input name='emailBibliotecario' id='emailBibliotecario' type="text" placeholder='Digite o email:'/>
                <br />
                <div className={style.wrapButtonBibliotecarios}>
                    <LoadingButton />
                </div>
            </div>
        </div>
    )
}