import { Component, OnInit, OnDestroy} from '@angular/core';
import { UpperCasePipe, LowerCasePipe, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from './components/header/header';
import { Carrossel } from './components/carrossel/carrossel';
import { Produtos } from './components/produtos/produtos';
import { CurrencyPipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { DatePipe } from '@angular/common';
import { LOCALE_ID } from '@angular/core';

registerLocaleData(localePt, 'pt-BR');

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    Header,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    CurrencyPipe,
    DatePipe,
    Carrossel,
    Produtos,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, OnDestroy {
  ngOnInit() {
    console.log('App component initialized');
  }

  ngOnDestroy() {
    console.log('App component destroyed');
  }

  protected readonly title = 'angular-7days';
  counter = 0;
  likes = 0;
  dislikes = 0;
  message = '';
  mostrarMensagem = false;
  nomeCompleto = 'Breno Lima';
  preco = 450000;
  dataAtual = new Date();
  // intervalo: ReturnType<typeof setInterval> | undefined;
  mostrarCarrossel = true;
  mostrarPrecos = true;
  produtoEscolhido = '';

  usuarios = [
    { nome: 'Pedro', idade: 32 },
    { nome: 'Júlia', idade: 24 },
    { nome: 'Rafael', idade: 27 },
  ];

  adicionarUsuario() {
    this.usuarios.push({
      nome: 'Lucas',
      idade: 35,
    });
  }

  removerUsuarios() {
    this.usuarios = [];
  }

  alterarMensagem() {
    this.mostrarMensagem = !this.mostrarMensagem;
  }

  mensagemMostarada = 'Angular é legal!'; // Mensagem que será mostrada no template

  mensagem = 'Olá! Seja bem-vindo ao sistema.'; // Mensagem para o header
  mensagem2 = ''; // Mensagem 2 para o header

  alterarSaudacao() {
    // Método para alterar a saudação no header
    this.mensagem = 'Você clicou no botão do Header!';
  }

  username = 'Breno';

  profession = 'Desenvolvedor';
  age = 28;

  buttonDisabled = false;

  sayHello() {
    alert('Olá, ' + this.username + '!');
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  updateMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message = input.value;
  }

  like() {
    this.likes++;
  }

  dislike() {
    this.dislikes++;
  }

  reset() {
    this.likes = 0;
    this.dislikes = 0;
  }

  mensagemLike() {
    if (this.likes === 0 && this.dislikes === 0) {
      return 'Ninguém votou ainda';
    }

    if (this.likes > 0 && this.dislikes === 0) {
      return 'Obrigado pelas curtidas!';
    }

    if (this.dislikes > 0 && this.likes === 0) {
      return 'Recebemos avaliações negativas';
    }

    return 'Obrigado por avaliar nosso sistema!';
  }
}
