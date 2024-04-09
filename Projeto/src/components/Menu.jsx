
import style from './Menu.module.css'

export default function Menu(){
    
    return(    
        <div className={style.wrapMenu}>
            <nav>
                <ul className={style.gap} >
                    <li className={style.dropDown}>
                        <a>BIBLIOTECÁRIOS</a>
                        <div className={style.dropdownMenu} >
                            <a href="/CadastrarBibliotecarios">Cadastrar Bibliotecários</a>
                            <a href="/EditarBibliotecarios">Editar Bibliotecários</a>
                            <a href="/ExcluirBibliotecarios">Excluir Bibliotecários</a>
                            <a href="">Visualizar Bibliotecários</a>
                            <br />
                        </div>
                    </li>
                    <li className={style.dropDown}>
                        <a>LIVROS</a>
                        <div className={style.dropdownMenu} >
                            <a href="/CadastrarLivros">Cadastrar Livros</a>
                            <a href="/EditarLivros">Editar Livros</a>
                            <a href="/ExcluirLivros">Excluir Livros</a>
                            <a href="">Visualizar Livros</a>
                            <br />
                        </div>
                    </li>
                    <li className={style.dropDown}>
                        <a>LEITORES</a>
                        <div className={style.dropdownMenu} >
                            <a href="/CadastrarLeitores">Cadastrar Leitores</a>
                            <a href="/EditarLeitores">Editar Leitores</a>
                            <a href="/ExcluirLeitores">Excluir Leitores</a>
                            <a href="">Visualizar Leitores</a>
                            <br />
                        </div>
                    </li>
                    <li className={style.dropDown}>
                        <a>EMPRÉSTIMOS</a>
                        <div className={style.dropdownMenu} >
                            <a href="/Emprestimos">Efetuar Empréstimo</a>
                            <a href="">Visualizar Empréstimos</a>
                            <br />
                        </div>
                    </li>
                    <li className={style.dropDown}>
                        <a>DEVOLUÇÕES</a>
                        <div className={style.dropdownMenu} >
                            <a href="/Devolucoes">Efetuar Devoluções</a>
                            <a href="">Visualizar Devoluções</a>
                            <br />
                        </div>
                    </li>
                    <li className={style.dropDown}>
                        <a>MULTAS</a>
                        <div className={style.dropdownMenu} >
                            <a href="/Multas">Efetuar Multas</a>
                            <a href="">Visualizar Multas</a>
                            <br />
                        </div>
                    </li>
                    <li className={style.dropDown}>
                        <a>AÇÕES</a>
                        <div className={style.dropdownMenu} >
                            <a href="/">Sair</a>
                            <br />
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
