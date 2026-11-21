import { Injectable, signal, computed, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  constructor() {
    effect(() => {
      console.log('Quantidade de produtos:', this.quantidadeProdutos());
    });
  }

  produtos = signal([
    { id: 1, nome: 'Mouse', preco: 100 },
    { id: 2, nome: 'Teclado', preco: 200 },
    { id: 3, nome: 'Monitor', preco: 300 },
  ]);

  private proximoId = 4;

  quantidadeProdutos = computed(() => this.produtos().length);

  adicionarProduto(nome: string, preco: number) {
    this.produtos.update((produtos) => [
      ...produtos,
      {
        id: this.proximoId++,
        nome: nome,
        preco: preco,
      },
    ]);
  }

  removerProduto(id: number) {
    this.produtos.update((produtos) => produtos.filter((produto) => produto.id !== id));
  }
}
