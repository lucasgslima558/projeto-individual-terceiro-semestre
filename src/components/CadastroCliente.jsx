import { useState } from "react"
import { CampoFormulario } from "./CampoFormulario";
import { SelectFormulario } from "./CampoFormulario";
import validacoes from "../validacoes";
import axios from "axios";
import styles from "../css/CadastroCliente.module.css"

export function CadastroCliente() {

    const [valorDigitado, setValorDigitado] = useState(
        {
            nome: "",
            email: "",
            telefone: "",
            cidade_origem: "",
            destino: "",
            tipo_turismo: ""
        }
    )

    const tiposTurismo = [
        { value: "aventura", label: "Aventura" },
        { value: "cultural", label: "Cultural" },
        { value: "consumo", label: "Consumos" },
        { value: "eventos", label: "Eventos" },
        { value: "cientifico", label: "Científico" },
        { value: "gastronomico", label: "Gastronômico" },
        { value: "estudos", label: "Estudos" },
        { value: "esportivo", label: "Esportivo" }
    ]

    function salvarValorDigitado(evento, propriedade) {
        const copiaValorDigitado = {
            ...valorDigitado
        }

        copiaValorDigitado[propriedade] = evento.target.value;

        setValorDigitado(copiaValorDigitado);
    }

    function validarFormulario() {
        const nomeValido = validacoes.validarNome({
            value: valorDigitado.nome
        });

        const emailValido = validacoes.validarEmail({
            value: valorDigitado.email
        });

        const telefoneValido = validacoes.validarTelefone({
            value: valorDigitado.telefone
        });

        const origemValida = validacoes.validarOrigem({
            value: valorDigitado.cidade_origem
        });

        const destinoValido = validacoes.validarDestino({
            value: valorDigitado.destino
        });

        const tipoValido = validacoes.validarTipoTurismo({
            value: valorDigitado.tipo_turismo
        });

        return (
            nomeValido &&
            emailValido &&
            telefoneValido &&
            origemValida &&
            destinoValido &&
            tipoValido
        )
    }

    function cadastrarCliente() {

        if(!validarFormulario()) {
            alert("Algum campo está errado, verifique o formulário e tente novamente");
            return;
        }

        axios.post("http://localhost:3060/usuarios",
            {
                nome: valorDigitado.nome,
                email: valorDigitado.email,
                telefone: valorDigitado.telefone,
                cidade_origem: valorDigitado.cidade_origem,
                destino: valorDigitado.destino,
                tipo_turismo: valorDigitado.tipo_turismo
            }
        )
            .then(() => console.log("Usuário cadastrado com sucesso"))
            .catch((error) => {
                console.log("Houve um erro na requisição: ", error)
            })

    }

    return (
        <div className={styles.cardCadastro}>
            <h3 className={styles.titulo}>Formulário de Cadastro</h3>

            <div className={styles.grupoCampos}>
                <CampoFormulario
                    label="Nome"
                    name="nome"
                    value={valorDigitado.nome}
                    length={30}
                    onChange={(evento) => salvarValorDigitado(evento, "nome")}
                    validar={validacoes.validarNome}
                    mensagemErro="Nome inválido: deve conter no mínimo 3 caracteres e apenas letras"
                />

                <CampoFormulario
                    label="E-mail"
                    name="email"
                    type="email"
                    length={30}
                    value={valorDigitado.email}
                    idErro={"emailInvalido"}
                    onChange={(evento) => salvarValorDigitado(evento, "email")}
                    validar={validacoes.validarEmail}
                    mensagemErro="E-mail inválido: deve estar no seguinte modelo: 'exemplo@email.com'"
                />

                <CampoFormulario
                    label="Telefone"
                    name="telefone"
                    value={valorDigitado.telefone}
                    length={11}
                    idErro={"telefoneInvalido"}
                    onChange={(evento) => salvarValorDigitado(evento, "telefone")}
                    validar={validacoes.validarTelefone}
                    mensagemErro="Telefone inválido: deve conter apenas números"
                />

                <CampoFormulario
                    label="Cidade de origem"
                    name="cidade_origem"
                    length={30}
                    value={valorDigitado.cidade_origem}
                    idErro={"cidadeOrigemInvalida"}
                    onChange={(evento) => salvarValorDigitado(evento, "cidade_origem")}
                    validar={validacoes.validarOrigem}
                    mensagemErro="Origem inválida: deve conter no mínimo 3 caracteres e apenas letras"
                />

                <CampoFormulario
                    label="Destino"
                    name="destino"
                    length={30}
                    value={valorDigitado.destino}
                    idErro={"destinoInvalido"}
                    onChange={(evento) => salvarValorDigitado(evento, "destino")}
                    validar={validacoes.validarDestino}
                    mensagemErro="Destino inválido: deve conter no mínimo 3 caracteres e apenas letras"
                />

                <SelectFormulario
                    id="sel_turismo"
                    name="tipo_turismo"
                    label="Tipo de turismo"
                    options={tiposTurismo}
                    value={valorDigitado.tipo_turismo}
                    idErro={"tipoInvalido"}
                    onChange={(evento) => salvarValorDigitado(evento, "tipo_turismo")}
                />

            </div>

            <button onClick={cadastrarCliente} className={styles.btnCadastro}>Cadastrar</button>
        </div>
    )
}