import { Component, inject } from '@angular/core';
import { ProdutosService } from '../../services/produtos';

@Component({
  selector: 'app-resumo-produtos',
  imports: [],
  templateUrl: './resumo-produtos.html',
  styleUrl: './resumo-produtos.css',
})
export class ResumoProdutos {
  private produtosService = inject(ProdutosService);

  produtos = this.produtosService.produtos;

  quantidadeProdutos = this.produtosService.quantidadeProdutos;
}
