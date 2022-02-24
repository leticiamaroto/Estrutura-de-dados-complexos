// Crie um objeto que receba ao menos três propriedades sobre você.

// Adicione uma nova propriedade sem alterar seu objeto inicial.

// Remova uma propriedade desse objeto.

//Mostre no console todas as propriedades desse objeto.

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

// Mostre no console o nome de um amigo de cada lista.


//1

let aboutMe = {
    nome: "Letícia",
    idade: 21,
    comidaPreferida: "Batata gratinada"
}
console.log(aboutMe)

//2

aboutMe.favoriteMovie = "Pride and Prejudice"
console.log(aboutMe)

//3

delete aboutMe.comidaPreferida
console.log(aboutMe)

//4

console.log(aboutMe)

//5

let cadastro = [
    {
        nome: "Gustavo",
        idade: 26,
        telefone: 000000000,
        amigos: ["Lara", "Bruno", "Samuel", "Vera"]
    },
    {
        nome: "Laís",
        idade: 33,
        telefone: 000000000,
        amigos: ["Bárbara", "Jaqueline", "Luís", "Isabela"]
    },
    {
        nome: "Karol",
        idade: 23,
        telefone: 000000000,
        amigos: ["Jorge", "Paulo", "Carla", "Alice"]
    },
    {
        nome: "Arthur",
        idade: 45,
        telefone: 000000000,
        amigos: ["Rafaela", "André", "Pedro", "Marcella"]
    },
    {
        nome: "Lucas",
        idade: 18,
        telefone: 000000000,
        amigos: ["Marcos", "Paloma", "Marcelo", "Pâmela"]
    }
]

//6

console.log(cadastro)

console.log(cadastro[0].amigos[4])
console.log(cadastro[1].amigos[2])
console.log(cadastro[2].amigos[1])
console.log(cadastro[3].amigos[4])
console.log(cadastro[4].amigos[3])