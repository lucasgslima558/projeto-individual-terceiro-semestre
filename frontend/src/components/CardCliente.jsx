import styles from "../css/CardCliente.module.css";

export function CardCliente(props) {

    return (
        <div className={styles.cardCliente}>
            <h3>{props.cliente.nome}</h3>
            <p><strong>E-mail:</strong> {props.cliente.email}</p>
            <p><strong>Telefone:</strong> {props.cliente.telefone}</p>
            <p><strong>Origem:</strong> {props.cliente.cidade_origem}</p>
            <p><strong>Destino:</strong> {props.cliente.destino}</p>
            <p><strong>Tipo:</strong> {props.cliente.tipo_turismo}</p>
        </div>
    )
}