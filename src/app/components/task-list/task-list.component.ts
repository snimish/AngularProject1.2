import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { TaskService } from 'app/services/task.service';
import { TaskModel } from 'app/model/task.model';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  private tasks: TaskModel[];
  constructor(private taskService: TaskService) { 
    this.tasks = this.taskService.getTasks();
  }

  ngOnInit() {
  }

  getTasks():TaskModel[]{
    return this.taskService.getTasks();
  }
}
