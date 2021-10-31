// tslint:disable-next-line:no-empty-interface
import {Observable} from 'rxjs';

export interface CommonDAO<T> {
  // CRUD
  // Добавить знач
  add(T): Observable<T>;

// получить одно знач по id
  get(id: number): Observable<T>;

// Удалить знач
  delete(id: number): Observable<T>;

// Обновить значения
  update(T): Observable<T>;

// получить все значения
  getAll(): Observable<T[]>;
}
