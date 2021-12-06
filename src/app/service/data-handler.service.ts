import {Injectable} from '@angular/core';
import {Category} from '../model/Category';
import {TestData} from '../data/TestData';
import {Task} from '../model/Task';
import {BehaviorSubject, Observable} from 'rxjs';
import {TaskDAOArray} from '../data/dao/impl/TaskDAOArray';
import {CategoryDAOArray} from '../data/dao/impl/categoryDAOArray';
import {Priority} from '../model/Priority';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  // DAO release
  private taskDaoArray = new TaskDAOArray();

  taskSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);
  private categoryDaoArray = new CategoryDAOArray();

  constructor() {
    this.fillTasks();
  }

  getAllTasks(): Observable<Task[]> {
    return this.taskDaoArray.getAll();
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

  // tslint:disable-next-line:typedef
  getAllCategories() {
    return this.categoryDaoArray.getAll();
  }

  searchTasks(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
    return this.taskDaoArray.search(category, searchText, status, priority);
  }
}

