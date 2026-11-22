import { Component, inject, OnInit, signal } from '@angular/core';
import { TarefasService } from '../../services/tarefas';
import { Tarefa } from '../../models/tarefa';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-lista-tarefas',
  imports: [ReactiveFormsModule],
  templateUrl: './lista-tarefas.html',
  styleUrl: './lista-tarefas.css',
})
export class ListaTarefas implements OnInit {
  private tarefasService = inject(TarefasService);

  private fb = inject(FormBuilder);

  tarefas = signal<Tarefa[]>([]);
  carregando = signal(true);
  erro = signal<string | null>(null);

  formulario = this.fb.nonNullable.group({
    titulo: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/.*\S.*/),
    ]],
    descricao: [''],
    prioridade: ['Normal'],
  });

  ngOnInit() {
    this.tarefasService.listarTarefas().subscribe({
      next: (tarefas) => {
        this.tarefas.set(tarefas);
        this.carregando.set(false);
      },
      error: (erro) => {
        console.error('Erro ao buscar tarefas:', erro);
        this.erro.set('Não foi possível carregar as tarefas. Tente novamente.');
        this.carregando.set(false);
      },
    });
  }

  adicionarTarefa() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const titulo = this.formulario.controls.titulo.value;

    this.tarefasService.criarTarefa(titulo).subscribe({
      next: (novaTarefa: Tarefa) => {
        this.tarefas.update((tarefas) => [
          ...tarefas,
          {
            ...novaTarefa,
            id: Math.max(0, ...tarefas.map((t) => t.id)) + 1,
          },
        ]);

        this.formulario.reset({
          titulo: '',
          descricao: '',
          prioridade: 'Normal',
        });
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
