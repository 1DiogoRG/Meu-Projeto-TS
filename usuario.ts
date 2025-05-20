/*
 * Primeira interação com TypeScript
*/

interface Pessoa {
    nome: string;
    idade: number;
    ativo: boolean;
    materia: string;
}

const usuario: Pessoa = {
    nome: "Diogo Rodrigues",
    idade: 16,
    ativo: true,
    materia: "Programação Web"
};

console.log(usuario);