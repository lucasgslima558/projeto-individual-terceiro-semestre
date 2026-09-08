import './App.css'
import { Cabecalho } from "../src/components/Cabecalho"
import { CadastroCliente } from "../src/components/CadastroCliente"
import { ListaClientes } from "../src/components/ListaClientes"
import styles from "./style.module.css"

import { useState } from 'react'

function App() {
  const [clientes, setClientes] = useState([
    {
      nome: "",
      email: "",
      telefone: "",
      cidade_origem: "",
      destino: "",
      tipo_turismo: ""
    }
  ])

  return (
    <main>
      <div className={styles.cardBody}>
        <Cabecalho />

        <div className={styles.container}>
          <CadastroCliente setClientes={setClientes} />

          <ListaClientes clientes={clientes} setClientes={setClientes} />
        </div>
      </div>
    </main>
  )
}

export default App
