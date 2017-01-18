import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Test } from './test.model';

@Injectable()
export class TestService {

	constructor(private http: Http) { }

	getList(): Observable<Test[]> {
		return this.http.get('/api/list').map(res => res.json() as Test[]);
	}
}