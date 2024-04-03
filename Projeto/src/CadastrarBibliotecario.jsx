import style from './CadastrarBibliotecario.module.css';
import Menu from './components/Menu';

export const CadastrarBibliotecarios = () => {
    return(
        <div className={style.wrapBibliotecarios}>
            <Menu />
            <div className={style.wrapInputsBibliotecarios} >
                <input name='nomeBibliotecario' id='nomeBibliotecario' type="text" placeholder='Digite o nome do(a) bibliotecário(a): '/>
                <input name='sobrenomeBibliotecario' id='sobrenomeBibliotecario' type="text" placeholder='Digite o sobrenome do(a) bibliotecário(a): '/>
                <input name='cpfBibliotecario' id='cpfBibliotecario' type="text" placeholder='Digite o CPF do(a) bibliotecário(a): '/>
                <input name='emailBibliotecario' id='emailBibliotecario' type="text" placeholder='Digite o email do(a) bibliotecário(a): '/>
            </div>
            <div className={style.wrapButtonBibliotecarios}>
                <button>Cadastrar Novo(a) Bibliotecário(a)</button>
            </div>

        </div>
    )
}