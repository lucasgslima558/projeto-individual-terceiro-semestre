import { useState } from "react"
import styles from "../css/CampoFormulario.module.css"

export function CampoFormulario(props) {

    const [erro, setErro] = useState("");

    function validarCampo(evento) {
        props.onChange(evento);

        if(props.validar) {
            const campoValido = props.validar(evento.target);

            if(!campoValido) {
                setErro(props.mensagemErro);
            } else {
                setErro("");
            }
        }
    }

    return (
        <div className={styles.campo}>
            <input type={props.type}
                id={props.name}
                name={props.name}
                value={props.value}
                onChange={validarCampo} 
                maxLength={props.length}
                required/>

            <label htmlFor={props.name}>{props.label}</label>
            <div className={styles.inputErro}>{erro}</div>
        </div>
    )
}

export function SelectFormulario(props) {

    return (
        <div className={styles.campo}>
            <select id={props.id}
            name={props.name}
            onChange={props.onChange}
            required
            className={styles.selectTurismo}
            >
                <option value="">Selecione uma opção</option>

                {props.options.map((option) => (
                    <option 
                    key={option.value}
                    value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            <label htmlFor={props.name}>{props.label}</label>
            <div className={styles.inputErro} id={props.idErro}></div>
        </div>
    )
}