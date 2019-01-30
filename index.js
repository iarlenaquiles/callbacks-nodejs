/*
0 - obter um usuario
1 - obter o numero de telefone de um usuario a partir do seu id
2 - obter o endereco do usuario pelo id
*/

function obterUsuario() {
    return new Promise(function resolvePromisse(resolve, reject) {
        setTimeout(function () {
            return resolve({
                id: 1,
                nome: 'Shrek',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolvePromisse(resolve, reject) {
        setTimeout(function () {
            return resolve({
                telefone: '11111111',
                ddd: '34'
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario) {
    return new Promise(function resolvePromisse(resolve, reject) {
        setTimeout(function () {
            return resolve({
                rua: 'teste',
                bairro: 'centro'
            })
        }, 2000)
    })
}

const usuario = obterUsuario()
usuario.then(function (res) {
    return obterTelefone(res.id).then(function resolveTelefone(result) {
        return {
            usuario: res,
            telefone: result
        }
    })
}).then(function (res) {
    console.log('resultado', res)
}).catch(function (error) {
    console.error('Deu ruim no user', error)
})
// obterUsuario(function resolverUsuario(error, usuario) {
//     if (error) {
//         console.error("Deu ruim em usuario", error)
//         return;
//     }

//     console.log(usuario);

//     obterTelefone(usuario.id, function resolverTelefone(errorTel, telefone) {
//         if (errorTel) {
//             console.error("Deu ruim em telefone", errorTel)
//             return;
//         }

//         console.log(telefone);

//         obterEndereco(usuario.id, function resolverEndereco(erroEnd, endereco) {
//             if (erroEnd) {
//                 console.error("Deu ruim em telefone", errorTel)
//                 return;
//             }
//             console.log(endereco);
//         })
//     })
// })

//const telefone = obterTelefone(usuario.id)
//console.log('telefone', telefone)