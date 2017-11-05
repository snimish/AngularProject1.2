import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TaskModel} from '../../model/task.model';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  private task= new TaskModel();

  constructor(private taskService: TaskService) { 
  }

  ngOnInit() {
  }

  private addTask():void{
    console.log(JSON.stringify(this.task));
    this.taskService.addTask(this.task);
    this.task = new TaskModel();
  }
}
