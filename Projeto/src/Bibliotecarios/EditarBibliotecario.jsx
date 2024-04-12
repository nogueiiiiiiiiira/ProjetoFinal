import React from 'react';
import style from './EditarBibliotecario.module.css';
import Menu from '../components/Menu';

export const EditarBibliotecarios = () => {
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
                <input name='password' id='password' type="text" disabled/>
                 </form>
            </div>
            <br />
            <div className={style.container}>
                <h2>Edit a Librarian</h2>
                <form className={style.inputs}>
                <input name='nameEditar' id='nameEditar' type="text" placeholder="edit librarian's full name': " required/>
                <input name='cpfEditar' id='cpfEditar' type="text" placeholder="edit librarian's cpf" required/>
                <input name='emailEditar' id='emailEditar' type="text" placeholder="edit librarian's email:" required/>
                <input name='passwordEditar' id='passwordEditar' type="password" placeholder="edit librarian's password:" required/>
                <input name='passwordEditar' id='passwordEditar' type="password" placeholder="repeat librarian's password:" required/>
                <br />
                <input className={style.button} type="submit" value="Edit" />
                </form>
                </div>
            </div>
            </div>
    )
}