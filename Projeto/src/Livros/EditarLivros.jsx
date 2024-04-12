import React from 'react';
import style from './EditarLivros.module.css';
import Menu from '../components/Menu';

export const EditarLivros = () => {
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
            <input name='title' id='title' type="text" disabled/>
            <input name='author' id='author' type="text" disabled/>
            <input name='category' id='category' type="text" disabled/>
             </form>
        </div>
        <br />
        <div className={style.container}>
            <h2>Edit a Book</h2>
            <br />
            <form className={style.inputs}>
            <input name='title' id='title' type="text" placeholder="type book's full title: " required />
    <input name='author' id='author' type="text" placeholder="type book's author: " required />
    <select name="category" id="category">
        <option value="">Select the category:</option>
        <option value="ficcao">Ficção</option>
        <option value="nao-ficcao">Não Ficção</option>
        <option value="aventura">Aventura</option>
        <option value="romance">Romance</option>
    </select>
            <br />
            <input className={style.button} type="submit" value="Edit" />
            </form>
            </div>
        </div>
        </div>
    )
}