import React from 'react';
import Menu from '../components/Menu';
import style from './EditarLeitores.module.css';

export const EditarLeitores = () => {
    return(
        <div  className={style.body}>
            <div className={style.menu}>
                <Menu />
            </div>
            <div className={style.row}>
            <div className={style.container}>
                 <h2>Current Data</h2>
                 <br />
                 <form className={style.inputs}>
                <input name='name' id='name' type="text" disabled/>
                <input name='cpf' id='cpf' type="text" disabled/>
                <input name='email' id='email' type="text" disabled/>
                <input name='phone' id='phone' type="text" disabled/>
                 </form>
            </div>
            <br />
            <div className={style.container}>
                <h2>Edit a Reader</h2>
                <br />
                <form className={style.inputs}>
                <input name='nameEditar' id='nameEditar' type="text" placeholder="edit reader's full name': " required/>
                <input name='cpfEditar' id='cpfEditar' type="text" placeholder="edit reader's cpf" required/>
                <input name='emailEditar' id='emailEditar' type="text" placeholder="edit reader's email:" required/>
                <input name='phoneEditar' id='phoneEditar' type="text" placeholder="edit reader's phone:" required/>
                <br />
                <input className={style.button} type="submit" value="Edit" />
                </form>
                </div>
            </div>
            </div>
    )
}