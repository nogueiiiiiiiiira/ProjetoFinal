import React from 'react';
import style from './EditarBibliotecario.module.css';
import Menu from '../components/Menu';

export const EditarBibliotecarios = () => {
    return(
        <div  className={style.container}>
            <div className={style.menu}>
                <Menu />
            </div>
            <div className={style.row}>
            <div className={style.wrapBibliotecarios}>
                <div>
                    <h2>Dados Atuais</h2>
                </div>
                <input name='nomeBibliotecarioEd' id='nomeBibliotecarioEd' type="text" placeholder='Digite o nome: '/>
                <input name='sobrenomeBibliotecarioEd' id='sobrenomeBibliotecarioEd' type="text" placeholder='Digite o sobrenome: '/>
                <input name='cpfBibliotecarioEd' id='cpfBibliotecarioEd' type="text" placeholder='Digite o CPF: '/>
                <input name='emailBibliotecarioEd' id='emailBibliotecarioEd' type="text" placeholder='Digite o email:'/>
            </div>
            <br />
            <div className={style.wrapBibliotecarios}>
                <div>
                    <h2>Editar Bibliotecário</h2>
                </div>
                <input name='nomeBibliotecarioEditar' id='nomeBibliotecarioEditar' type="text" placeholder='Digite o nome: '/>
                <input name='sobrenomeBibliotecarioEditar' id='sobrenomeBibliotecarioEditar' type="text" placeholder='Digite o sobrenome: '/>
                <input name='cpfBibliotecarioEditar' id='cpfBibliotecarioEditar' type="text" placeholder='Digite o CPF: '/>
                <input name='emailBibliotecarioEditar' id='emailBibliotecarioEditar' type="text" placeholder='Digite o email:'/>
                <br />
                <div className={style.wrapButtonBibliotecarios}>
                    <button>Editar</button>
                </div>
            </div>
            </div>
        </div>
    )
}