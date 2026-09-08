import styles from "../css/Cabecalho.module.css"

export function Cabecalho() {

    return (
        <div className={styles.header}>
            <h2 className={styles.titulo}>Tourly</h2>
            <h3 className={styles.subtitulo}>Cadastro de clientes e destinos turísticos</h3>
        </div>
    )
}