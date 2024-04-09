import React from 'react';
import style from './EditarLivros.module.css';
import Menu from '../components/Menu';

export const EditarLivros = () => {
    return(
        <div  className={style.container}>
            <div className={style.menu}>
                <Menu />
            </div>
            <div className={style.row}>
            <div className={style.wrapLivros}>
                <div>
                    <h2>Dados Atuais</h2>
                </div>
                <input type="text" placeholder='Digite o título do livro:' name='tituloLivro' id='tituloLivro'/>
                <input type="text" placeholder='Digite o autor do livro: ' name='autorLivro' id='autorLivro'/>
                <input type="text" placeholder='Digite a categoria: ' name='categoria' id='categoriaLivro'/>
            </div>
            <br />
            <div className={style.wrapLivros}>
                <div>
                    <h2>Editar Livro</h2>
                </div>
                <input type="text" placeholder='Digite o título do livro:' name='tituloLivro' id='tituloLivro'/>
                <input type="text" placeholder='Digite o autor do livro: ' name='autorLivro' id='autorLivro'/>
                <select name="categoriaLivro" id="categoriaLivro">
                    <option value="">Selecione a categoria:</option>
                    <option value="ficcao">Ficção</option>
                    <option value="nao-ficcao">Não Ficção</option>
                    <option value="aventura">Aventura</option>
                    <option value="romance">Romance</option>
                </select>
                <br />
                <div className={style.wrapButtonLivros}>
                    <button>Editar</button>
                </div>
            </div>
            </div>
        </div>
    )
}