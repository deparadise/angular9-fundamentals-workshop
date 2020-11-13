import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-course-details',
	templateUrl: './course-details.component.html',
	styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent {
	selectedCourse = null;
	originalTitle = null;

	@Output() saved = new EventEmitter();
	@Output() canceled = new EventEmitter();

	@Input() set course(record) {
		if (record) {
			this.selectedCourse = Object.assign({}, record);
			this.originalTitle = record.title;
		}
	}
}
