import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarefa } from '../models/tarefa';

@Injectable({
  providedIn: 'root',
})
export class TarefasService {
  private http = inject(HttpClient);

  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  listarTarefas() {
    return this.http.get<Tarefa[]>(this.apiUrl);
  }

  criarTarefa(titulo: string) {
    const novaTarefa: Partial<Tarefa> = {
      userId: 1,
      title: titulo,
      completed: false,
    };
    return this.http.post<Tarefa>(this.apiUrl, novaTarefa);
  }

  excluirTarefa(id: number) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  atualizarStatus(id: number, completed: boolean) {
    return this.http.patch<Tarefa>(`${this.apiUrl}/${id}`, {
      completed: completed,
    });
  }
}
