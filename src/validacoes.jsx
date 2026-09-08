function validarNome(input) {
    const valor = input.value.trim();

    if (valor.length < 3) {
        return false;
    }

    for (let i = 0; i < valor.length; i++) {
        const codigoAscii = valor.charCodeAt(i);

        if (codigoAscii >= 48 && codigoAscii <= 57) {
            return false;
        }
    }

    return true;
}

function validarEmail(input) {
    const valor = input.value.trim();

    let indiceArroba = -1;

    for (let i = 0; i < valor.length; i++) {
        if (valor.charCodeAt(i) === "@".charCodeAt(0)) {
            indiceArroba = i;
            break;
        }
    }

    if (indiceArroba <= 0) return false;

    for (let i = indiceArroba + 1; i < valor.length; i++) {
        if (valor.charCodeAt(i) === ".".charCodeAt(0) && i != valor.length - 1) {
            return true;
        }
    }

    return false;
}

function validarTelefone(input) {
    const valor = input.value.trim();



    for (let i = 0; i < valor.length; i++) {
        const codigoAscii = valor.charCodeAt(i);

        if (codigoAscii < 48 || codigoAscii > 57) {
            return false;
        }
    }

    return true;
}

function validarOrigem(input) {
    const valor = input.value.trim();

    if (valor.length < 3) {
        return false;
    }

    for (let i = 0; i < valor.length; i++) {
        const codigoAscii = valor.charCodeAt(i);

        if (codigoAscii >= 48 && codigoAscii <= 57) {
            return false;
        }
    }

    return true;
}

function validarDestino(input) {
    const valor = input.value.trim();

    if (valor.length < 3) {
        return false;
    }

    for (let i = 0; i < valor.length; i++) {
        const codigoAscii = valor.charCodeAt(i);

        if (codigoAscii >= 48 && codigoAscii <= 57) {
            return false;
        }
    }

    return true;
}

function validarTipoTurismo(input) {
    const valor = input.value.trim();

    if (valor === "")
        return false;

    return true;
}

const validacoes = {
    validarNome,
    validarEmail,
    validarTelefone,
    validarOrigem,
    validarDestino,
    validarTipoTurismo
};

export default validacoes;