import { Injectable } from '@angular/core';
import {TaskModel} from '../model/task.model';

@Injectable()
export class TaskService {
  private taskList: TaskModel[];
  constructor() { 
  }

  public getTasks(): TaskModel[]{
    return this.taskList;
  }

  public addTask(task:TaskModel):void{
    this.taskList.push(task);
  }
}
