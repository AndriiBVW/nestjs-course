import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  private tasks = [
    {
      id: 1,
      title: 'Task 1',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Task 2',
      isComplete: true,
    },
  ];

  findAll() {
    return this.tasks;
  }

  findById(id: number) {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }

  create(dto: CreateTaskDto) {
    const { title } = dto;
    const newTask = {
      id: this.tasks.length + 1,
      title,
      isComplete: false,
    };
    this.tasks.push(newTask);
    return this.tasks;
  }
}
