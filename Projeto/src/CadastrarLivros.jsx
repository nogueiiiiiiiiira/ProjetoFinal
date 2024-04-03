import style from './CadastrarLivros.module.css'
import Menu from './components/Menu'

export const CadastrarLivros = () => {
    return(
        <div className={style.wrapCadastrarLivros}>
            <Menu />
            <div className={style.wrapInputsLivros}>
                <input type="text" placeholder='Digite o título do livro:' name='tituloLivro' id='tituloLivro'/>
                <input type="text" placeholder='Digite o autor do livro: ' name='autorLivro' id='autorLivro'/>
                <input type="text" placeholder='Selecione a categoria do livro: ' name='categoriaLivro' id='categoriaLivro'/>
            </div>
            <div className={style.wrapButtonLivros}>
                <button>Cadastrar Novo Livro</button>
            </div>
        </div>
    )
}