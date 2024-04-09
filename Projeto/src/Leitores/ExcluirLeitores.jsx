import React from 'react';
import Menu from '../components/Menu';
import style from './ExcluirLeitores.module.css';

export const ExcluirLeitores = () => {
    return(
        <div  className={style.container}>
            <div className={style.menu}>
                <Menu />
            </div>
            <div className={style.row}>
            <div className={style.wrapLeitores}>
                <div>
                    <h2>Excluir Leitor</h2>
                </div>
                <input name='nomeLeitoresExcluir' id='nomeLeitoresExcluir' type="text" placeholder='Digite o nome: '/>
                <input name='sobrenomeLeitoresExcluir' id='sobrenomeLeitoresExcluir' type="text" placeholder='Digite o sobrenome: '/>
                <input name="telefoneLeitorExcluir" id="telefoneLeitorExcluir" type="text" placeholder='Digite o telefone: '/>
                <input name='cpfLeitoresExcluir' id='cpfLeitoresExcluir' type="text" placeholder='Digite o CPF: '/>
                <input name='emailLeitoresExcluir' id='emailLeitoresExcluir' type="text" placeholder='Digite o email:'/>
                <div className={style.wrapButtonLeitores}>
                    <button>Excluir</button>
                </div>
            </div>
            </div>
        </div>
    )
}