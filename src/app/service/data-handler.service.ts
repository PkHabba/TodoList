import {Injectable} from '@angular/core';
import {Category} from '../model/Category';
import {TestData} from '../data/TestData';
import {Task} from '../model/Task';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  taskSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);

  constructor() {
    this.fillTasks();
  }

  // tslint:disable-next-line:typedef
  fillTasks() {
    // @ts-ignore
    this.taskSubject.next(TestData.tasks);
  }

  // tslint:disable-next-line:typedef
  fillTasksByCategory(category: Category) {
    const tasks = TestData.tasks.filter(task => task.category === category);
    // @ts-ignore
    this.taskSubject.next(tasks);
  }
}

