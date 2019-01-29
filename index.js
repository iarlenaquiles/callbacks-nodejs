/*
0 - obter um usuario
1 - obter o numero de telefone de um usuario a partir do seu id
2 - obter o endereco do usuario pelo id
*/

function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Shrek',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(function () {
        return callback(null, {
            telefone: '11111111',
            ddd: '34'
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback) {
    setTimeout(function () {
        return callback(null, {
            rua: 'teste',
            bairro: 'centro'
        })
    }, 2000)
}

obterUsuario(function resolverUsuario(error, usuario) {
    if (error) {
        console.error("Deu ruim em usuario", error)
        return;
    }

    console.log(usuario);

    obterTelefone(usuario.id, function resolverTelefone(errorTel, telefone) {
        if (errorTel) {
            console.error("Deu ruim em telefone", errorTel)
            return;
        }

        console.log(telefone);

        obterEndereco(usuario.id, function resolverEndereco(erroEnd, endereco) {
            if (erroEnd) {
                console.error("Deu ruim em telefone", errorTel)
                return;
            }
            console.log(endereco);
        })
    })
})

//const telefone = obterTelefone(usuario.id)
//console.log('telefone', telefone)