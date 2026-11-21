import { Component, inject, OnInit, signal } from '@angular/core';
import { TarefasService } from '../../services/tarefas';
import { Tarefa } from '../../models/tarefa';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-tarefas',
  imports: [FormsModule],
  templateUrl: './lista-tarefas.html',
  styleUrl: './lista-tarefas.css',
})
export class ListaTarefas implements OnInit {
  private tarefasService = inject(TarefasService);

  tarefas = signal<Tarefa[]>([]);

  carregando = signal(true);

  tituloNovaTarefa = '';

  ngOnInit() {
    this.tarefasService.listarTarefas().subscribe({
      next: (tarefas) => {
        console.log('Antes da atualização:', this.carregando);

        this.tarefas.set(tarefas);
        this.carregando.set(false);

        console.log('Depois da atualização:', this.carregando);
      },
      error: (erro) => {
        console.error('Erro ao buscar tarefas:', erro);
        this.erro.set('Não foi possível carregar as tarefas. Tente novamente.');
        this.carregando.set(false);
      },
    });
  }

  erro = signal<string | null>(null);

  adicionarTarefa() {
    if (!this.tituloNovaTarefa.trim()) {
      return;
    }

    this.tarefasService.criarTarefa(this.tituloNovaTarefa).subscribe({
      next: (novaTarefa: Tarefa) => {
        console.log('Tarefa criada:', novaTarefa);

        this.tarefas.update((tarefas) => [
          ...tarefas,
          {
            ...novaTarefa,
            id: Math.max(0, ...tarefas.map((t) => t.id)) + 1,
          },
        ]);

        this.tituloNovaTarefa = '';
      },
      error: (erro: Error) => {
        console.error('Erro ao criar tarefa:', erro);
      },
    });
  }

  excluirTarefa(id: number) {
    this.tarefasService.excluirTarefa(id).subscribe({
      next: () => {
        this.tarefas.update((tarefas) => tarefas.filter((tarefa) => tarefa.id !== id));
      },
      error: (erro) => {
        console.error('Erro ao excluir tarefa:', erro);
      },
    });
  }

  atualizarStatus(tarefa: Tarefa) {
    const novoStatus = !tarefa.completed;

    this.tarefasService.atualizarStatus(tarefa.id, novoStatus).subscribe({
      next: () => {
        this.tarefas.update((tarefas) =>
          tarefas.map((t) => (t.id === tarefa.id ? { ...t, completed: novoStatus } : t)),
        );
      },
      error: (erro) => {
        console.error('Erro ao atualizar status da tarefa:', erro);
      },
    });
  }
}
