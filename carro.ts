class UmCarro {
    marca: string;
    ano: number;

    constructor(marca: string, ano: number) {
        this.marca = marca;
        this.ano = ano;
    }

    exibir(): void {
        console.log(`\nMarca: ${this.marca} e o Ano: ${this.ano}`);
    }
}

const meuCarro = new UmCarro("Porsche", 2022) // não sei se existe um de 2022 (aleatorio)
meuCarro.exibir();