import { Component, input, output, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-produtos',
  imports: [CurrencyPipe],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos implements OnInit {
  mostrarPrecos = input<boolean>(true);

  produtoSelecionado = output<string>();

  produtos = [
    { id: 1, nome: 'Mouse', preco: 100 },
    { id: 2, nome: 'Teclado', preco: 200 },
    { id: 3, nome: 'Monitor', preco: 300 },
  ];

  ngOnInit() {
    console.log('Componente Produtos inicializado!');
  }
}
