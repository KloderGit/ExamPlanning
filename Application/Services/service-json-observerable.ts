

//  Исходники - http://plnkr.co/edit/jgDTXknPzAaqcg9XA9zq?p=preview

import { TeacherModel } from './../Models/teacher.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceFromJsonObservable {
  
  todos: Observable<TeacherModel[]> // То, что получат остальные
  private _todos: BehaviorSubject<TeacherModel[]>;  //За этим будет следить todos
  private baseUrl: string;
  private dataStore: {
    todos: TeacherModel[]
  };                        // Нужна чтоб добавлять обновденный массив в _todos

  constructor(private http: Http) {
    this.baseUrl = '/Application/MockData/teachers-mock-data.json';
    this.dataStore = { todos: [] };
    this._todos = <BehaviorSubject<TeacherModel[]>>new BehaviorSubject([]);
    this.todos = this._todos.asObservable();
  }

  loadAll() {
    this.http.get(`${this.baseUrl}`).map(response => response.json()).subscribe(data => {
      this.dataStore.todos = data;
      this._todos.next(Object.assign({}, this.dataStore).todos);
    }, error => console.log('Could not load todos.'));
  }

  load(id: number | string) {
    this.http.get(`${this.baseUrl}`).map(response => response.json()).subscribe(data => {
      let notFound = true;

      this.dataStore.todos.forEach((item, index) => {
        if (item.id === data.id) {
          this.dataStore.todos[index] = data;
          notFound = false;
        }
      });

      if (notFound) {
        this.dataStore.todos.push(data);
      }

      this._todos.next(Object.assign({}, this.dataStore).todos);
    }, error => console.log('Could not load todo.'));
  }

    create(todo: TeacherModel) {
    this.http.post(`${this.baseUrl}`, JSON.stringify(todo))
      .map(response => response.json()).subscribe(data => {
        this.dataStore.todos.push(data);
        this._todos.next(Object.assign({}, this.dataStore).todos);
      }, error => console.log('Could not create todo.'));
  }

}