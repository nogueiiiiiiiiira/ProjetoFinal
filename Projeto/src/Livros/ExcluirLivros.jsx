import React from 'react';
import style from './ExcluirLivros.module.css';
import Menu from '../components/Menu';

export const ExcluirLivros = () => {
    return(
        <div  className={style.container}>
            <div className={style.menu}>
                <Menu />
            </div>
            <div className={style.wrapLivros}>
                <div>
                    <h2>Excluir Livro</h2>
                </div>
                <input type="text" placeholder='Digite o título do livro:' name='tituloLivro' id='tituloLivro'/>
                <input type="text" placeholder='Digite o autor do livro: ' name='autorLivro' id='autorLivro'/>
                <input type="text" placeholder='Digite a categoria: ' name='categoria' id='categoriaLivro'/>
                <br />
                <div className={style.wrapButtonLivros}>
                    <button>Editar</button>
                </div>
            </div>
        </div>
    )
}