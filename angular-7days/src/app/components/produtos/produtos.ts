import { Component, input, output, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ProdutosService } from '../../services/produtos';

@Component({
  selector: 'app-produtos',
  imports: [CurrencyPipe],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos implements OnInit {
  private produtosService = inject(ProdutosService);

  private router = inject(Router);

  irParaDetalhes(id: number) {
    this.router.navigate(['/produtos', id]);
  }

  mostrarPrecos = input<boolean>(true);

  quantidadeProdutos = this.produtosService.quantidadeProdutos;

  produtoSelecionado = output<string>();

  produtos = this.produtosService.produtos;

  ngOnInit() {
    console.log('Componente Produtos inicializado!');
  }

  adicionar() {
    this.produtosService.adicionarProduto('Headset', 250);
  }

  remover(id: number) {
    this.produtosService.removerProduto(id);
  }
}
