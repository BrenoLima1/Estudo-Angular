import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  imports: [],
  templateUrl: './produto-detalhe.html',
  styleUrl: './produto-detalhe.css',
})
export class ProdutoDetalhe {
  private route = inject(ActivatedRoute);

  private router = inject(Router);

  id = this.route.snapshot.paramMap.get('id');

  voltar() {
    this.router.navigate(['/produtos']);
  }
}
