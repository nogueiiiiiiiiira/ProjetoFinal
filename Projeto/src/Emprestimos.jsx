import Menu from "./components/Menu";
import style from  './Emprestimos.module.css'

export const Emprestimos = () => {
    return(
        <div className={style.wrapEmprestimos}>
            <Menu />
            <div className={style.inputsEmprestimos}>
                <input placeholder="Digite o CPF do leitor(a): " type="text" name="cpfLeitorEmprestimo" id="cpfLeitorEmprestimo"/>
                <input placeholder="Digite o ID do livro: " type="text" name="idLivroEmprestimo" id="idLivroEmprestimo" />
                <input type="date" name="dataEmprestimo" id="dataEmprestimo"/>
            </div>

        </div>
    )
}