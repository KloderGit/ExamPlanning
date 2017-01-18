import { Component, OnInit } from '@angular/core';

import { Test } from './shared/test.model';
import { TestService } from './shared/test.service';

@Component({
	selector: 'test',
	templateUrl: 'test.component.html',
	providers: [TestService]
})

export class TestComponent implements OnInit {
	test: Test[] = [];

	constructor(private testService: TestService) { }

	ngOnInit() {
		this.testService.getList().subscribe((res) => {
			this.test = res;
		});
	}
}