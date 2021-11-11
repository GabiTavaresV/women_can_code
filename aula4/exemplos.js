const meuObjeto = {};

const carro = {
    modelo: "gol", 
    cor: "preto",
    ano: 2015,
    ehNovo: true
};

console.log(carro.modelo);

const modeloCarro = "modelo";
console.log(carro[modeloCarro]); // carro.modelo ou carro[modelo]

carro.ano = 2018     // conseguimos alterar os valores das propriedades mesmo sendo const
console.log(carro);

delete carro.cor; //deletando uma propriedade

console.log(carro);