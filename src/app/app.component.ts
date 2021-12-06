import {Component, OnInit} from '@angular/core';
import {Task} from './model/Task';
import {DataHandlerService} from './service/data-handler.service';
import {Category} from './model/Category';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'TodoList';
  tasks: Task[];
  categories: Category[];

  private selectedCategory: Category = null;

  constructor(
    private dataHandler: DataHandlerService,
  ) {
  }

  ngOnInit(): void {
    // this.dataHandler.getAllTasks().subscribe(tasks => this.tasks = tasks);
    this.dataHandler.getAllCategories().subscribe(category => this.categories = category);

    this.onSelectCategory(null);
  }

  // tslint:disable-next-line:typedef
  public onSelectCategory(category: Category) {
    this.selectedCategory = category;

    this.dataHandler.searchTasks(
      this.selectedCategory,
      null,
      null,
      null
    ).subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  // tslint:disable-next-line:typedef
  public onUpdateTask(task: Task) {
    console.log(task);
  }
}
