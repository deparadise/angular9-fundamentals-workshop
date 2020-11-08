import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
	selectedCourse = null;
	courses = null;

	resetSelectedCourse() {
		const emptyCouse = {
			id: null,
			title: '',
			description: '',
			percentComplete: 0,
			favorite: false,
		};

		this.selectedCourse = emptyCouse;
	}

	selectCourse(course) {
		console.log('>> WHICH COURSE?!', course);
		this.selectedCourse = course;
	}

	deleteCourse(courseId) {
		console.log('>> COURSE DELETED:', courseId);
	}

	cancelCouseUpdate() {
		this.resetSelectedCourse();
	}

	saveCourse() {
		console.log('>> SAVING COURSE!');
	}

	constructor(private coursesService: CoursesService) {}

	ngOnInit(): void {
		this.resetSelectedCourse();
		this.courses = this.coursesService.courses;
	}
}
