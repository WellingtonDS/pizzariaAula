const cardapio = [
    {
        sabor: "chocolate",
        preco: 38
    },
    {
        sabor: "morango",
        preco: 32
    },
    {
        sabor: " camarão",
        preco: 52
    }
];

//função de acesso
function listarCardapio(){
    return cardapio;
}

function buscarPizza(nome){
    let resultadoBusca = cardapio.filter( (pizza) => {
        return pizza.sabor == nome
    })
    return resultadoBusca
}

module.exports = { listarCardapio, buscarPizza }