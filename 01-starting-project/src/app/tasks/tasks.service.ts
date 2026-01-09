import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

@Injectable({providedIn : 'root'})
export class TasksService {
  private tasks = [
      {
        id: 't1',
        userId: 'u1',
        title: 'Finish Angular Course',
        summary: 'Complete the Angular course on Udemy',
        dueDate: '2025-12-31'
      },
      {
        id: 't2',
        userId: 'u1',
        title: 'Finish Angular Course',
        summary: 'Complete the Angular course on Udemy',
        dueDate: '2025-12-31'
      },
      {
        id: 't3',
        userId: 'u1',
        title: 'Finish Angular Course',
        summary: 'Complete the Angular course on Udemy',
        dueDate: '2025-12-31'
      }
    ];

    constructor() {
      const tasks = localStorage.getItem('tasks');

      if (tasks) {
        this.tasks = JSON.parse(tasks);
      }
    }

    getUserTasks(userId: string) {
      return this.tasks.filter(task => task.userId === userId);
    }

    addTask(taskData: NewTaskData, userId: string) {
      this.tasks.unshift({
        id: new Date().getTime().toString(),
        userId: userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date,
      });
    }

    removeTask(id: string) {
      this.tasks = this.tasks.filter(task => task.id !== id);
      this.SaveTasks();
    }

    completeTask(userId: string, taskId: string) {
      this.tasks = this.tasks.filter(task => task.id !== taskId || task.userId !== userId);
    }

    private SaveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}
