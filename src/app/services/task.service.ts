import { Injectable } from '@angular/core';
import {TaskModel} from '../model/task.model';

@Injectable()
export class TaskService {
  private taskList: TaskModel[];
  constructor() { 
    this.taskList = new Array();
  }

  public getTasks(): TaskModel[]{
    return this.taskList;
  }

  public addTask(task:TaskModel):void{
    this.taskList.push(task);
  }

  public hasTasks():boolean{
    return (this.taskList.length>0?true:false);
  }
}
