package school.sptech.projeto_individual;

public class Usuario {

    private Integer id;
    private String nome;
    private String email;
    private String telefone;
    private String cidade_origem;
    private String destino;
    private String tipo_turismo;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getCidade_origem() {
        return cidade_origem;
    }

    public void setCidade_origem(String cidade_origem) {
        this.cidade_origem = cidade_origem;
    }

    public String getDestino() {
        return destino;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }

    public String getTipo_turismo() {
        return tipo_turismo;
    }

    public void setTipo_turismo(String tipo_turismo) {
        this.tipo_turismo = tipo_turismo;
    }
}
