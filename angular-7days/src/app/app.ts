import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = 'angular-7days';
  counter = 0;
  likes = 0;
  dislikes = 0;
  message = '';

  username = 'Breno';

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
