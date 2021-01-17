import {Injectable} from '@angular/core';
import {Category} from '../model/Category';
import {TestData} from '../data/TestData';
import {Task} from '../model/Task';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  taskSubject = new Subject<Task>();

  constructor() {
  }

  getCategories(): Category[] {
    return TestData.categories;
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

