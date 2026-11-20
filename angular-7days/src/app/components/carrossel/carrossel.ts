import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  imports: [],
  templateUrl: './carrossel.html',
  styleUrl: './carrossel.css',
})
export class Carrossel implements OnInit, OnDestroy {
  intervalo: ReturnType<typeof setInterval> | undefined;

  ngOnInit() {
    console.log('Carrossel iniciado!');

    this.intervalo = setInterval(() => {
      console.log('Trocando imagem...');
    }, 3000);
  }

  ngOnDestroy() {
    console.log('Carrossel destruído!');

    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }
}
