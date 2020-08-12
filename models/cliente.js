const clientes = [
    {
        nome: "Fernando",
        telefone: 58525494,
        endereço: "Rua João Carneiro",
        numero: 12
    },
    {
        nome: "Patrik",
        telefone: 58124038,
        endereço: "Av Tomas de Sousa",
        numero: 15

    }
]

// funcionalidades

function listarUsuarios(){
    return clientes
}

module.exports = {listarUsuarios}
