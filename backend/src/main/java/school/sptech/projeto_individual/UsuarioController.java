package school.sptech.projeto_individual;

import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.*;

import java.sql.PreparedStatement;
import java.util.List;
import java.util.Objects;

// pra resolver o bendito do erro do CORS
@CrossOrigin(origins = "http://localhost:3070")
@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private final JdbcTemplate template;

    public UsuarioController(JdbcTemplate template) {
        this.template = template;
    }

    @GetMapping
    public ResponseEntity<List<Usuario>> listar() {
        String sql = "SELECT * FROM usuario";

        List<Usuario> resultado = template.query(sql,
                new BeanPropertyRowMapper<>(Usuario.class));

        if(resultado.isEmpty()) {
            return ResponseEntity.status(204).build();
        }

        return ResponseEntity.status(200).body(resultado);
    }

    // não utilizo esse GET no site, mas fiz ele de exemplo para demonstrar o status 404
    @GetMapping("/{id}")
    public ResponseEntity<Usuario> buscarId(
            @PathVariable int id
    ) {
        String sql = "SELECT * FROM usuario WHERE id = ?";

        try{
            Usuario usuario = template.queryForObject(sql,
                    new BeanPropertyRowMapper<>(Usuario.class), id);
            return ResponseEntity.status(200).body(usuario);
        }
        return ResponseEntity.status(404).build();
    }

    @PostMapping
    public ResponseEntity<Usuario> cadastrar(
            @RequestBody Usuario usuario
    ) {
        String sql = "INSERT INTO usuario (nome, email, telefone, cidade_origem, destino, tipo_turismo) VALUES (?, ?, ?, ?, ?, ?)";

        KeyHolder holder = new GeneratedKeyHolder();

        template.update(con -> {
            PreparedStatement statement = con.prepareStatement(
                    sql,
                    PreparedStatement.RETURN_GENERATED_KEYS
            );

            statement.setString(1, usuario.getNome());
            statement.setString(2, usuario.getEmail());
            statement.setString(3, usuario.getTelefone());
            statement.setString(4, usuario.getCidade_origem());
            statement.setString(5, usuario.getDestino());
            statement.setString(6, usuario.getTipo_turismo());

            return statement;
        }, holder);

        // Objects.requireNonNull para evitar NullPointerException
        int idGerado = Objects.requireNonNull(holder.getKey()).intValue();

        usuario.setId(idGerado);

        return ResponseEntity.status(201).body(usuario);
    }

}
