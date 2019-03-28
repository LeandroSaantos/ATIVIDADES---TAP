const PRODUTOS = [
    {id: 1, nome: 'Notebook', descricao: '', preco: 2500, imagem: "https://images-americanas.b2w.io/produtos/01/00/item/133775/9/133775934_1GG.jpg"},
    {id: 2, nome: 'Fritadeira', descricao: '', preco: 240, imagem: "https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/127878/8/127878831_1GG.png"},
    {id: 3, nome: 'Fonte', descricao: '', preco: 84, imagem: "https://images-americanas.b2w.io/produtos/01/00/sku/8579/3/8579390_1GG.jpg"},
    {id: 4, nome: 'Relogio', descricao: '', preco: 158, imagem: "https://images-americanas.b2w.io/produtos/01/00/sku/41940/8/41940837_1GG.jpg"},
    {id: 5, nome: 'Micro-ondas', descricao: '', preco: 349, imagem: "https://images-americanas.b2w.io/produtos/01/00/oferta/47165/1/47165105_1GG.jpg"},
    {id: 6, nome: 'Smart TV', descricao: '', preco: 1300, imagem: "https://images-americanas.b2w.io/produtos/01/00/item/133869/3/133869367_1GG.jpg"},
    {id: 7, nome: 'Cafeteira', descricao: '', preco: 309, imagem: "https://images-americanas.b2w.io/produtos/01/00/item/130321/1/130321195_1GG.jpg"},
    {id: 8, nome: 'Bandeja', descricao: '', preco: 16, imagem: "https://images-americanas.b2w.io/produtos/01/00/oferta/16021/1/16021131_1GG.jpg"}
];

class BancoDeDados {
    static getProdutos() {
        return PRODUTOS;
    }
    static getProduto(nome) {
        return PRODUTOS.find(item => item.nome === nome);
    }
}

export default BancoDeDados;