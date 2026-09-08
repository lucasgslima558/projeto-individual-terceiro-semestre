import axios from "axios"
import styles from "../css/ListaClientes.module.css"
import { CardCliente } from "./CardCliente"
import { useEffect } from "react"

export function ListaClientes(props) {

    function buscarDados() {
        axios.get("http://localhost:3060/usuarios")
        .then(resposta=>{
            props.setClientes(resposta.data)
        })
        .catch((error)=>{
            console.log("Houve um erro na requisição: ", error)
        })
    }

    useEffect(() => {
        buscarDados();
    }, [props.clientes]);

    return (
        <div className={styles.cardLista}>
            <h2 className={styles.titulo}>Clientes cadastrados</h2>

            {props.clientes.length === 0 ? (
                <p className={styles.mensagem}>Nenhum cliente cadastrado.</p>
            ) : (
                <div className={styles.listaClientes}>
                {props.clientes.map((cliente) => (
                    <CardCliente
                        key={cliente.id}
                        cliente={cliente}
                    />
                ))}
                </div>
            )}
        </div>
    )
}