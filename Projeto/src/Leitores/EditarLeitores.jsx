import React from 'react';
import Menu from '../components/Menu';
import style from './EditarLeitores.module.css';

export const EditarLeitores = () => {
    return(
        <div  className={style.container}>
            <div className={style.menu}>
                <Menu />
            </div>
            <div className={style.row}>
            <div className={style.wrapLeitores}>
                <div>
                    <h2>Dados Atuais</h2>
                </div>
                <input name='nomeLeitoresEd' id='nomeLeitoresEd' type="text" placeholder='Digite o nome: '/>
                <input name='sobrenomeLeitoresEd' id='sobrenomeLeitoresEd' type="text" placeholder='Digite o sobrenome: '/>
                <input name="telefoneLeitorEd" id="telefoneLeitorEd" type="text" placeholder='Digite o telefone: '/>
                <input name='cpfLeitoresEd' id='cpfLeitoresEd' type="text" placeholder='Digite o CPF: '/>
                <input name='emailLeitoresEd' id='emailLeitoresEd' type="text" placeholder='Digite o email:'/>
            </div>
            <br />
            <div className={style.wrapLeitores}>
                <div>
                    <h2>Editar Leitor</h2>
                </div>
                <input name='nomeLeitoresEditar' id='nomeLeitoresEditar' type="text" placeholder='Digite o nome: '/>
                <input name='sobrenomeLeitoresEditar' id='sobrenomeLeitoresEditar' type="text" placeholder='Digite o sobrenome: '/>
                <input name="telefoneLeitorEditar" id="telefoneLeitorEditar" type="text" placeholder='Digite o telefone: '/>
                <input name='cpfLeitoresEditar' id='cpfLeitoresEditar' type="text" placeholder='Digite o CPF: '/>
                <input name='emailLeitoresEditar' id='emailLeitoresEditar' type="text" placeholder='Digite o email:'/>
                <div className={style.wrapButtonLeitores}>
                    <button>Editar</button>
                </div>
            </div>
            </div>
        </div>
    )
}