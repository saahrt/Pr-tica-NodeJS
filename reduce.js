const produtos = [
    {nome: "Iphone",preco: 8000, taxa: 30},
    {nome: "Tv 41",preco: 4200, taxa: 30},
    {nome: "Xbox",preco: 2500, taxa: 30},
];

const totalCarrinho = produtos.reduce((total,produto) => {
    return total + produto.preco + produto.taxa
},0);

console.log(totalCarrinho);