import style from './Menu.module.css'

export default function Menu(){
    
    return(
    
    <div className={style.wrapMenu}>
        <div className={style.navLinks}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Multas">Multas</a></li>
                <li><a href="/CadastrarLivros">Livros</a></li>
                <li><a href="/CadastrarLeitores">Leitores</a></li>
                <li><a href="/CadastrarBibliotecarios">Bibliotecários</a></li>
                <li><a href="/Emprestimos">Empréstimos</a></li>
                <li><a href="/devolucoes">Devoluções</a></li>
            </ul>
        </div>
    </div>

    )
}