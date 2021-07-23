import {Component, OnInit} from '@angular/core';
import {Task} from '../../model/Task';
import {DataHandlerService} from '../../service/data-handler.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  // Поля для таблицы (что отображают данные из задачи - должны совпадать с названиями переменных класса)

  private displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category'];
  private dataSource: MatTableDataSource<Task>; // Источник данных для таблицы

  tasks: Task[];

  constructor(private dataHandler: DataHandlerService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.dataHandler.taskSubject.subscribe(tasks => this.tasks = tasks);
// датасорс обязательно нужно создавать для таблицы, в него присваивается любой источник
    this.dataSource = new MatTableDataSource();

    this.refreshTable();
  }

  // tslint:disable-next-line:typedef
  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
  }

// tslint:disable-next-line:typedef
  private getPriopityColor(task: Task) {
    if (task.completed) {
      return '#F8F9FA';
    }

    if (task.priority && task.priority.color) {
      return task.priority.color;
    }

    return '#fff';
  }

  // Показывает задачи с применением всех текущих условий
  // tslint:disable-next-line:typedef
  private refreshTable() {
    this.dataSource.data = this.tasks;
  }
}
