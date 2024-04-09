import React from 'react';
import Menu from '../components/Menu';
import style from './ExcluirBibliotecarios.module.css';

export const ExcluirBibliotecarios = () => {
    return(
        <div  className={style.container}>
            <div className={style.menu}>
                <Menu />
            </div>
            <div className={style.row}>
            <div className={style.wrapBibliotecarios}>
                <div>
                    <h2>Excluir Bibliotecário</h2>
                </div>
                <input name='nomeBibliotecarioExcluir' id='nomeBibliotecarioExcluir' type="text" placeholder='Digite o nome: '/>
                <input name='sobrenomeBibliotecarioExcluir' id='sobrenomeBibliotecarioExcluir' type="text" placeholder='Digite o sobrenome: '/>
                <input name='cpfBibliotecarioExcluir' id='cpfBibliotecarioExcluir' type="text" placeholder='Digite o CPF: '/>
                <input name='emailBibliotecarioExcluir' id='emailBibliotecarioExcluir' type="text" placeholder='Digite o email:'/>
                <br />
                <div className={style.wrapButtonBibliotecarios}>
                    <button>Excluir</button>
                </div>
            </div>
            </div>
        </div>
    )
}