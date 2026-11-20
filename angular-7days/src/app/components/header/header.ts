import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = 'Meu sistema Angular';
  subtitle = 'Aprendendo componentes';

  username = input<string>();

  saudacaoClicada = output<void>();
  saudacao2 = output<string>();
}
